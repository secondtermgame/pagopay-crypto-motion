import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface SignupFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ====================================
// CONFIGURATION - Update these values
// ====================================
const HUBSPOT_CONFIG = {
  region: "YOUR_REGION",        // e.g., "na1", "eu1"
  portalId: "YOUR_PORTAL_ID",   // Your HubSpot Portal ID
  formId: "YOUR_FORM_ID",       // The form ID from HubSpot
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
    dataLayer?: any[];
  }
}

export function SignupForm({ open, onOpenChange }: SignupFormProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load HubSpot script only once
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (open && formContainerRef.current) {
      // Analytics: Track when modal opens
      console.log("PagoPay form modal opened");
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "pagopay_form_open",
          form: "Get PagoPay Card",
        });
      }

      // Wait for HubSpot script to load, then create the form
      const initForm = () => {
        if (window.hbspt?.forms) {
          window.hbspt.forms.create({
            region: HUBSPOT_CONFIG.region,
            portalId: HUBSPOT_CONFIG.portalId,
            formId: HUBSPOT_CONFIG.formId,
            target: "#pagopay-hubspot-form",
          });
        } else {
          // Script not loaded yet, try again in 100ms
          setTimeout(initForm, 100);
        }
      };

      // Small delay to ensure DOM is ready
      setTimeout(initForm, 50);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
        aria-describedby="hubspot-form-description"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get your PagoPay card</DialogTitle>
          <DialogDescription id="hubspot-form-description">
            Fill out the form below to start your application. We'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {/* HubSpot Form Container */}
        <div 
          id="pagopay-hubspot-form" 
          ref={formContainerRef}
          className="mt-4"
        />

        {/* Close button for better UX */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
