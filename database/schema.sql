-- Al Fajr Industry — Supabase schema
-- Run this in Supabase SQL Editor

create extension if not exists "pgcrypto";

-- Products shown in the "Our Products" section
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  category text,               -- e.g. 'Manhole Covers', 'Helmet Shells', 'Plastic Pellets'
  is_published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Messages from "Get in touch" / "Start Your Project"
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  source text default 'website', -- which button/section it came from
  created_at timestamptz not null default now()
);

-- Row Level Security: lock the tables down; only the backend (service_role key)
-- can read/write. The frontend never talks to Supabase directly.
alter table products enable row level security;
alter table contact_messages enable row level security;

-- Optional: allow anonymous public read of published products directly from
-- the frontend if you ever want to skip the backend for this one call.
-- (Not required — the backend already exposes GET /api/products.)
create policy "Public can read published products"
  on products for select
  using (is_published = true);

-- Seed a few sample products matching the site's copy (edit/remove freely)
insert into products (name, slug, description, category, sort_order) values
  ('Plastic Manhole Covers', 'plastic-manhole-covers', 'Durable, corrosion-resistant manhole covers for municipal and industrial use.', 'Manhole Covers', 1),
  ('Industrial Helmet Shells', 'industrial-helmet-shells', 'Impact-resistant helmet shells manufactured to safety specifications.', 'Helmet Shells', 2),
  ('Recycled Plastic Pellets', 'recycled-plastic-pellets', 'Processed plastic pellets for downstream manufacturing applications.', 'Plastic Pellets', 3)
on conflict (slug) do nothing;
