# Dr. Anre Anvari — Medical Website

A clean React + Vite personal website and digital resume for **Dr. Anre Anvari**.

## Quick start

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## How to update the content

Edit this file:

- `src/content/site.config.js`

This is the single source of truth for:

- site title and description
- personal details
- contact links
- navigation labels
- experience
- education
- achievements
- languages
- references
- structured data inputs

## How to change the profile photo

Replace this file with your own image:

- `public/profile-photo.jpg`

Recommended:

- square image
- at least 800 × 800
- clear portrait

If `profile-photo.jpg` is missing, the site automatically falls back to `public/profile-placeholder.svg`.

## How to change the resume PDF

Replace this file:

- `public/resume.pdf`

## SEO files that are auto-generated

These files are generated from `src/content/site.config.js` whenever you run `npm run dev` or `npm run build`:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`

## Notes

- The website is English-only.
- The visual style and animated medical background are preserved.
- The project no longer ships a stale `dist/` folder.
- Router and QR code dependencies were removed to reduce unnecessary client-side weight.
