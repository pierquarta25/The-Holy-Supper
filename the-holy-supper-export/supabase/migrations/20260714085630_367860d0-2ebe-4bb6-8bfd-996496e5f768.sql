
DROP POLICY "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Public forms may submit validated leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(email) <= 255
    AND char_length(coalesce(message, '')) <= 2000
    AND char_length(coalesce(church, '')) <= 200
    AND locale = ANY (ARRAY['en','it','es','pt','fr','de'])
  );
