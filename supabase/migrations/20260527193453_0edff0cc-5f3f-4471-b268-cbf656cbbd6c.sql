CREATE TABLE public.newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    created_at timestamptz DEFAULT now() NOT NULL
);

GRANT SELECT, INSERT ON public.newsletter_subscribers TO anon;
GRANT SELECT, INSERT ON public.newsletter_subscribers TO authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated inserts" ON public.newsletter_subscribers FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow service role all" ON public.newsletter_subscribers FOR ALL TO service_role USING (true) WITH CHECK (true);
