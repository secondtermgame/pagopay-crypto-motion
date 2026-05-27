CREATE TABLE public.signup_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.signup_leads TO anon, authenticated;
GRANT ALL ON public.signup_leads TO service_role;

ALTER TABLE public.signup_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
ON public.signup_leads FOR INSERT TO anon, authenticated
WITH CHECK (true);
