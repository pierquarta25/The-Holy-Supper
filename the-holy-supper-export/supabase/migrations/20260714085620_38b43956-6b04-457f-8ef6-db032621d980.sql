
CREATE TYPE public.lead_kind AS ENUM ('pricing', 'waiting_list');

CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  kind public.lead_kind NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  church TEXT,
  country TEXT,
  first_name TEXT,
  last_name TEXT,
  full_name TEXT,
  role TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  congregation TEXT,
  attendance TEXT,
  quantity TEXT,
  product TEXT,
  message TEXT,
  notify_launch BOOLEAN NOT NULL DEFAULT false,
  consent BOOLEAN NOT NULL DEFAULT false,
  user_agent TEXT,
  referer TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_kind_idx ON public.leads (kind);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (public forms) may INSERT a lead. No SELECT/UPDATE/DELETE for anon or authenticated:
-- only service_role (used by admin/export tools) can read submissions.
CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
