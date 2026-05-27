import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BodySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  country: z.string().trim().max(80).optional().nullable(),
  source: z.string().trim().max(80).optional().nullable(),
});

const NOTIFY_TO = "info@mypagopay.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const data = parsed.data;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: insertError } = await supabase.from("signup_leads").insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      country: data.country ?? null,
      source: data.source ?? null,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(JSON.stringify({ error: "Failed to save signup" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Try to send notification email via Lovable email infra if available.
    // Will gracefully no-op if the email infra has not been set up yet.
    try {
      const subject = `New PagoPay signup: ${data.full_name}`;
      const html = `
        <h2>New PagoPay waitlist signup</h2>
        <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(data.full_name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
          <tr><td><strong>Country</strong></td><td>${escapeHtml(data.country ?? "—")}</td></tr>
          <tr><td><strong>Source</strong></td><td>${escapeHtml(data.source ?? "—")}</td></tr>
          <tr><td><strong>Submitted</strong></td><td>${new Date().toISOString()}</td></tr>
        </table>
      `;
      const text = `New PagoPay waitlist signup\n\nName: ${data.full_name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCountry: ${data.country ?? "—"}\nSource: ${data.source ?? "—"}\n`;

      const { error: emailError } = await supabase.rpc("enqueue_email", {
        to_email: NOTIFY_TO,
        subject,
        html_body: html,
        text_body: text,
      });
      if (emailError) {
        console.warn("Email enqueue skipped/failed:", emailError.message);
      }
    } catch (e) {
      console.warn("Email notification skipped:", e);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-lead error:", e);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
