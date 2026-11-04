/*
# Create leads table for landing page lead capture

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, required, max 120 chars)
  - `phone` (text, required, max 30 chars)
  - `company` (text, optional, max 120 chars)
  - `monthly_budget` (text, optional, max 60 chars)
  - `message` (text, optional, max 1000 chars)
  - `source` (text, optional, max 60 chars) - where the lead came from on the page
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `leads`.
- Grant INSERT only to `anon` and `authenticated`. Visitors can submit the form but cannot read other leads.
- Single INSERT policy restricted by length checks so oversized or empty submissions are rejected at the database.

3. Important Notes
- No SELECT grant is given to the public roles, so lead data is only readable from the Supabase dashboard or privileged server code.
- Re-running this migration is safe: the table, indexes, and policy are created only if missing.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 2 AND 120),
  phone text NOT NULL CHECK (char_length(trim(phone)) BETWEEN 6 AND 30),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  monthly_budget text CHECK (monthly_budget IS NULL OR char_length(monthly_budget) <= 60),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  source text CHECK (source IS NULL OR char_length(source) <= 60),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON leads TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 2 AND 120
  AND char_length(trim(phone)) BETWEEN 6 AND 30
);
