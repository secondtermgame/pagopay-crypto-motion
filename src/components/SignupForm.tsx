import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { COUNTRIES } from "@/lib/countries";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().trim().optional(),
  cardType: z.enum(["Virtual", "Physical", "Either"]).optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface SignupFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignupForm({ open, onOpenChange }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedCountry = watch("country");
  const selectedCardType = watch("cardType");
  const gdprConsent = watch("gdprConsent");

  const captureUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      page_url: window.location.href,
      page_title: document.title,
    };
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const utmData = captureUTMParams();

      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        country: data.country,
        phone: data.phone || "",
        cardType: data.cardType || "",
        leadSource: "Website LP",
        formName: "Get PagoPay Card",
        ...utmData,
      };

      console.log("Submitting to HubSpot:", payload);

      const { data: responseData, error } = await supabase.functions.invoke("submit-hubspot-lead", {
        body: payload,
      });

      if (error) {
        console.error("Error submitting to HubSpot:", error);
        toast({
          title: "Submission Error",
          description: "We could not save your information. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Push dataLayer event for analytics
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_submit",
          form: "Get PagoPay Card",
        });
      }

      // Show success message
      setShowSuccess(true);
      reset();

      // Optionally redirect to thank-you page after 2 seconds
      setTimeout(() => {
        // window.location.href = "/thank-you";
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);

      toast({
        title: "Success!",
        description: "Check your email to continue your PagoPay application.",
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 text-5xl">✓</div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Check your email to continue your PagoPay application.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get PagoPay Card</DialogTitle>
          <DialogDescription>
            Fill out the form below to start your application. We'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Required Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="John"
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Doe"
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">
              Country of Residence <span className="text-destructive">*</span>
            </Label>
            <Select value={selectedCountry} onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger id="country" aria-invalid={!!errors.country}>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
          </div>

          {/* Optional Fields */}
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+1234567890"
            />
            <p className="text-xs text-muted-foreground">Format: +[country code][number]</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardType">Preferred Card Type (Optional)</Label>
            <Select
              value={selectedCardType}
              onValueChange={(value) => setValue("cardType", value as FormData["cardType"])}
            >
              <SelectTrigger id="cardType">
                <SelectValue placeholder="Select card type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Virtual">Virtual Card</SelectItem>
                <SelectItem value="Physical">Physical Card</SelectItem>
                <SelectItem value="Either">Either (No Preference)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* GDPR Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="gdprConsent"
              checked={gdprConsent}
              onCheckedChange={(checked) => setValue("gdprConsent", checked as boolean)}
              aria-invalid={!!errors.gdprConsent}
            />
            <div className="space-y-1">
              <Label
                htmlFor="gdprConsent"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  Privacy Policy
                </a>{" "}
                <span className="text-destructive">*</span>
              </Label>
              {errors.gdprConsent && (
                <p className="text-sm text-destructive">{errors.gdprConsent.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you consent to receive communications from PagoPay.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
