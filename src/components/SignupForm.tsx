import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

interface SignupFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const AVAILABLE_COUNTRIES = COUNTRIES;

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  country: string;
};

export function SignupForm({ open, onOpenChange, source }: SignupFormProps) {
  const { t } = useTranslation();
  const [values, setValues] = useState<FormState>({ full_name: "", email: "", phone: "", country: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    full_name: z.string().trim().min(1, t("signup.errors.fullName")).max(120),
    email: z.string().trim().email(t("signup.errors.email")).max(255),
    phone: z.string().trim().min(5, t("signup.errors.phone")).max(40),
    country: z.string().trim().min(1, t("signup.errors.country")).max(80),
  });

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
      toast.success(t("signup.successToast"));
    } catch (err) {
      console.error(err);
      toast.error(t("signup.errorToast"));
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
            {submitted ? t("signup.successTitle") : t("signup.title")}
          </DialogTitle>
          <DialogDescription>
            {submitted ? t("signup.successDescription") : t("signup.description")}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <Button onClick={() => handleOpenChange(false)} className="w-full">{t("signup.close")}</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="full_name">{t("signup.fullName")} <span className="text-destructive">*</span></Label>
              <Input
                id="full_name"
                value={values.full_name}
                onChange={(e) => set("full_name", e.target.value)}
                placeholder={t("signup.fullNamePlaceholder")}
                autoComplete="name"
                required
              />
              {errors.full_name && <p className="text-xs text-destructive">{errors.full_name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">{t("signup.email")} <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder={t("signup.emailPlaceholder")}
                autoComplete="email"
                required
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">{t("signup.phone")} <span className="text-destructive">*</span></Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder={t("signup.phonePlaceholder")}
                autoComplete="tel"
                required
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="country">{t("signup.country")} <span className="text-destructive">*</span></Label>
              <Select value={values.country} onValueChange={(v) => set("country", v)}>
                <SelectTrigger id="country">
                  <SelectValue placeholder={t("signup.countryPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_COUNTRIES.map((c) => (
                    <SelectItem key={c.name} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  {t("signup.submitting")}
                </>
              ) : (
                t("signup.submit")
              )}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              {t("signup.consent")}{" "}
              <Link to="/privacy" className="text-primary underline hover:no-underline">
                {t("signup.privacyPolicy")}
              </Link>
              {t("signup.consentSuffix")}
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
