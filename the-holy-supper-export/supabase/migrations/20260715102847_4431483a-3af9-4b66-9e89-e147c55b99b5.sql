
CREATE TABLE public.pricing_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  church_name TEXT NOT NULL,
  country TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  congregation_size TEXT,
  communion_attendance TEXT,
  expected_quantity TEXT,
  preferred_product TEXT,
  message TEXT,
  notify_when_ordering_opens BOOLEAN NOT NULL DEFAULT false,
  language TEXT NOT NULL DEFAULT 'en',
  status TEXT NOT NULL DEFAULT 'New',
  user_agent TEXT,
  referer TEXT
);

GRANT INSERT ON public.pricing_requests TO anon, authenticated;
GRANT ALL ON public.pricing_requests TO service_role;

ALTER TABLE public.pricing_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a pricing request"
  ON public.pricing_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(email) <= 255
    AND char_length(church_name) BETWEEN 1 AND 200
    AND char_length(first_name) BETWEEN 1 AND 100
    AND char_length(last_name) BETWEEN 1 AND 100
    AND char_length(country) BETWEEN 1 AND 100
    AND char_length(COALESCE(message, '')) <= 2000
    AND language = ANY (ARRAY['en','it','es','pt','fr','de'])
  );

CREATE INDEX idx_pricing_requests_created_at ON public.pricing_requests (created_at DESC);
CREATE INDEX idx_pricing_requests_status ON public.pricing_requests (status);
CREATE INDEX idx_pricing_requests_email ON public.pricing_requests (email);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_pricing_requests_updated_at
  BEFORE UPDATE ON public.pricing_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
