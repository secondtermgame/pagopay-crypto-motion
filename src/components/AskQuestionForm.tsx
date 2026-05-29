import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send } from "lucide-react";

const Schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  question: z.string().trim().min(5, "Question is too short").max(2000),
});

const AskQuestionForm = () => {
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("faq_questions").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit your question. Please try again.");
      return;
    }
    toast.success("Thanks! We'll get back to you shortly.");
    setForm({ name: "", email: "", question: "" });
  };

  return (
    <div className="mt-16 rounded-3xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Didn't find your answer?
        </h3>
        <p className="text-muted-foreground mt-2">
          Send us your question and our team will respond by email.
        </p>
      </div>
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
        <textarea
          placeholder="Type your question…"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          maxLength={2000}
          required
          rows={5}
          className="w-full px-5 py-3 rounded-2xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="btn-lime px-6 py-3 text-sm disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Submit question"}
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionForm;
