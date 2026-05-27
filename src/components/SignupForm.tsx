import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, CheckCircle2, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);
const COUNTRY_LIST = Object.entries(countries.getNames("en", { select: "official" }))
  .map(([code, name]) => ({ code, name }))
  .sort((a, b) => a.name.localeCompare(b.name));

interface SignupFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const schema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Phone number is required").max(40),
  country: z.string().trim().min(1, "Country is required").max(80),
});

type FormState = z.infer<typeof schema>;


export function SignupForm({ open, onOpenChange, source }: SignupFormProps) {
  const [values, setValues] = useState<FormState>({ full_name: "", email: "", phone: "", country: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const [k, v] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (v && v.length) fieldErrors[k as keyof FormState] = v[0];
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: { ...parsed.data, source: source ?? "website" },
      });
      if (error) throw error;

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({ event: "pagopay_signup_submitted", form: "PagoPay Waitlist" });
      }
      setSubmitted(true);
      toast.success("You're on the list!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setTimeout(() => {
        setValues({ full_name: "", email: "", phone: "", country: "" });
        setErrors({});
        setSubmitted(false);
      }, 200);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {submitted ? "You're on the list!" : "Join the PagoPay waitlist"}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "Thanks for signing up. We'll send you an email as soon as PagoPay is available in your region. Keep an eye on your inbox."
              : "Be the first to know when PagoPay launches in your region. Fill out the form below and we'll be in touch."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <Button onClick={() => handleOpenChange(false)} className="w-full">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="full_name">Full name <span className="text-destructive">*</span></Label>
              <Input
                id="full_name"
                value={values.full_name}
                onChange={(e) => set("full_name", e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
              {errors.full_name && <p className="text-xs text-destructive">{errors.full_name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone number <span className="text-destructive">*</span></Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="Include country code (e.g. +1 555 123 4567)"
                autoComplete="tel"
                required
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <CountryCombobox
              value={values.country}
              onChange={(v) => set("country", v)}
              error={errors.country}
            />

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join the waitlist"
              )}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              By submitting, you consent to receive launch updates from PagoPay by email and you confirm you've read our{" "}
              <Link to="/privacy" className="text-primary underline hover:no-underline">
                Privacy Policy
              </Link>
              . You can unsubscribe at any time.
            </p>

          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

declare global {
  interface Window {
    dataLayer?: any[];
  }
}
