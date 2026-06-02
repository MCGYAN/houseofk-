# Customization Checklist

Complete these steps to make this project fully yours.

## Identity

- [ ] Edit `lib/site-brand.ts` — replace all `YOUR_*` placeholders
- [ ] Replace `yourdomain.com` in `.env.local` and deployment env
- [ ] Update `package.json` name, author, homepage, repository URL

## Assets (see `/public/ASSETS_GUIDE.md`)

- [ ] Add `/public/favicon.ico`
- [ ] Add `/public/apple-touch-icon.png`
- [ ] Add `/public/icon-192.png` and `/public/icon-512.png`
- [ ] Replace `/public/logo.svg` with your brand logo
- [ ] Add `/public/og-image.png` (1200×630px)
- [ ] Add `/public/hero.jpg` and wire hero slides in `app/(store)/page.tsx`
- [ ] Update `components/Logo.tsx` if using a custom logo component

## Configuration

- [ ] Fill in all values in `.env.local` (copy from `.env.example`)
- [ ] Update `public/manifest.json` with your app name and theme colors
- [ ] Create a Supabase project; set `NEXT_PUBLIC_SUPABASE_*` and `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Configure Moolre payment keys (`MOOLRE_*`)
- [ ] Configure Resend (`RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_EMAIL`)
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production URL
- [ ] Optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, reCAPTCHA keys

## Legal & content

- [ ] Replace `/LICENSE` with your chosen license
- [ ] Review `app/(store)/terms/page.tsx` and `privacy/page.tsx`
- [ ] Update CMS settings in Supabase or via admin when live

## SEO

- [ ] Update `public/robots.txt` sitemap URL
- [ ] Confirm metadata in `app/layout.tsx` and `lib/seo.ts`

## Deployment

- [ ] Set env vars on Vercel/Netlify
- [ ] Connect your Git repo (`YOUR_USERNAME/YOUR_REPO_NAME`)
- [ ] Configure custom domain

## Git remote (optional)

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
