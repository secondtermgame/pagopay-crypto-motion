import { useState } from "react";
import { z } from "zod";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";

const Schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5, "Message is too short").max(4000),
});

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    const { name, email, subject, message } = parsed.data;
    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, subject: subject || null, message }]);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }
    toast.success("Thanks! We'll get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageShell>
      <Seo
        title="Contact PagoPay — Support, compliance & partnerships"
        description="Reach the PagoPay team for support, compliance questions, or partnership inquiries. Send a message or email info@mypagopay.com and we'll get back to you."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact us"
        title="Get in touch"
        subtitle="Have a question, partnership idea, or feedback? Send us a message and our team will respond by email."
        align="left"
        variant="dark"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-1">General</h2>
              <a href="mailto:info@mypagopay.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                info@mypagopay.com
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Support</h2>
              <a href="mailto:support@mypagopay.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                support@mypagopay.com
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Compliance</h2>
              <a href="mailto:compliance@mypagopay.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                compliance@mypagopay.com
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
              Send us a message
            </h2>
            <p className="text-muted-foreground mb-6">We typically reply within 1–2 business days.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={120}
                  required
                  className="w-full px-5 py-3 rounded-full bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  required
                  className="w-full px-5 py-3 rounded-full bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                maxLength={200}
                className="w-full px-5 py-3 rounded-full bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all"
              />
              <textarea
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={4000}
                required
                rows={6}
                className="w-full px-5 py-3 rounded-2xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-lime px-6 py-3 text-sm disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
