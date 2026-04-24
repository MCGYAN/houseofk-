# Storefront

A production-ready ecommerce storefront built with Next.js, Supabase, and Tailwind CSS.

## Features

- Storefront browsing with category and product pages
- Cart, checkout, and order tracking flows
- Admin dashboard for products, orders, and operations
- SEO metadata, sitemap, robots rules, and structured data
- Notifications via email and SMS integrations

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Supabase (database, auth, storage)
- Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Common Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run lint` - run lint checks
- `npm run db:migrate` - run local migration helper

## Deployment

Set all required environment variables in your hosting provider, then run:

```bash
npm run build
```

## Notes

- Keep environment variable names unchanged when customizing deployments.
- Replace placeholder contact and domain values through CMS settings or environment config as needed.
