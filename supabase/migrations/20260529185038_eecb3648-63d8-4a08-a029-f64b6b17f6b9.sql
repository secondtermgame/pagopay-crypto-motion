CREATE TABLE public.faq_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  question TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.faq_questions TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.faq_questions TO authenticated;
GRANT ALL ON public.faq_questions TO service_role;

ALTER TABLE public.faq_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit questions with valid data"
ON public.faq_questions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(question)) BETWEEN 5 AND 2000
);

CREATE POLICY "Admins can view faq questions"
ON public.faq_questions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update faq questions"
ON public.faq_questions
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete faq questions"
ON public.faq_questions
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));