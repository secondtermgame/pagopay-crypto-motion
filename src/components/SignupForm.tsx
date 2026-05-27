import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

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
  const { t } = useTranslation();
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
        window.dataLayer.push({ event: "pagopay_signup_submitted", form: "Get PagoPay Card" });
      }
      setSubmitted(true);
      toast.success("Thanks! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      // Reset after close animation
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
            {submitted ? "You're on the list!" : t("signup.title")}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "Thanks for signing up. We'll email you as soon as PagoPay launches."
              : t("signup.description")}
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
                placeholder="+1 555 123 4567"
                autoComplete="tel"
                required
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="country">Country <span className="text-destructive">*</span></Label>
              <Input
                id="country"
                value={values.country}
                onChange={(e) => set("country", e.target.value)}
                placeholder="Canada"
                autoComplete="country-name"
                required
              />
              {errors.country && <p className="text-xs text-destructive">{errors.country}</p>}
            </div>

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
                "Get my free account"
              )}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              By submitting, you agree to be contacted by PagoPay about our launch.
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
