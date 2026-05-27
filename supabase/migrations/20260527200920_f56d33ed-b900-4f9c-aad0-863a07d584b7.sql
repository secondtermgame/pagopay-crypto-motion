
-- Role infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Restrict reads on signup_leads to admins only
CREATE POLICY "Admins can view signup leads"
ON public.signup_leads FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update signup leads"
ON public.signup_leads FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete signup leads"
ON public.signup_leads FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Tighten signup_leads INSERT with basic validation instead of WITH CHECK (true)
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.signup_leads;
CREATE POLICY "Public can submit leads with valid data"
ON public.signup_leads FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(full_name)) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(phone)) BETWEEN 5 AND 40
);

-- Restrict reads on newsletter_subscribers to admins only
CREATE POLICY "Admins can view newsletter subscribers"
ON public.newsletter_subscribers FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update newsletter subscribers"
ON public.newsletter_subscribers FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete newsletter subscribers"
ON public.newsletter_subscribers FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Tighten newsletter inserts with basic email validation
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow authenticated inserts" ON public.newsletter_subscribers;
CREATE POLICY "Public can subscribe with valid email"
ON public.newsletter_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);
