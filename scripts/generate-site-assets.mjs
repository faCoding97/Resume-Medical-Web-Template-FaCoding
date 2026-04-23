import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import siteConfig from "../src/content/site.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const indexPath = path.join(rootDir, "index.html");

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
ensureDir(publicDir);

const { site, person } = siteConfig;
const sameAs = [person.linkedIn, person.github, ...(person.sameAs || [])].filter(Boolean);
const siteUrl = site.siteUrl.replace(/\/$/, "");
const profileImageUrl = new URL(site.profileImagePath, `${siteUrl}/`).toString();
const ogImageUrl = new URL(site.ogImagePath, `${siteUrl}/`).toString();
const resumeUrl = new URL(site.resumePdfPath, `${siteUrl}/`).toString();
const updatedAt = new Date().toISOString();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.siteName,
      inLanguage: site.locale,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: site.defaultTitle,
      description: site.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: profileImageUrl,
      },
      dateModified: updatedAt,
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#person`,
      name: person.name,
      honorificPrefix: person.honorificPrefix,
      jobTitle: person.headline,
      description: person.summary,
      image: profileImageUrl,
      email: `mailto:${person.email}`,
      telephone: person.phoneIntl,
      url: `${siteUrl}/`,
      sameAs,
      knowsLanguage: (siteConfig.sections.languages || []).map((item) => item.name),
      medicalSpecialty: person.specialties,
      address: {
        "@type": "PostalAddress",
        addressCountry: "ZA",
        addressLocality: person.location,
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of the Free State",
        },
      ],
    },
  ],
};

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapUrls = [
  `${siteUrl}/`,
  resumeUrl,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${updatedAt}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const manifest = {
  name: site.siteName,
  short_name: site.siteName,
  start_url: "/",
  display: "standalone",
  background_color: site.themeColor,
  theme_color: site.themeColor,
  lang: site.language,
  icons: [
    {
      src: site.logoPath,
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};

const seoHead = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="${site.themeColor}" />
    <meta name="robots" content="${site.indexable ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" : "noindex,nofollow"}" />
    <meta name="description" content="${site.description}" />
    <meta name="author" content="${person.name}" />
    <meta name="google-site-verification" content="${site.googleSiteVerification || ""}" />
    <link rel="canonical" href="${siteUrl}/" />
    <link rel="alternate" href="${siteUrl}/" hrefLang="en-za" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="icon" href="${site.logoPath}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <title>${site.defaultTitle}</title>
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${site.locale}" />
    <meta property="og:site_name" content="${site.siteName}" />
    <meta property="og:title" content="${site.defaultTitle}" />
    <meta property="og:description" content="${site.description}" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:alt" content="${site.siteName} official medical resume cover" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${site.defaultTitle}" />
    <meta name="twitter:description" content="${site.description}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;

const html = `<!doctype html>
<html lang="${site.language}">
  <head>
${seoHead}
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "site.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");
fs.writeFileSync(indexPath, html, "utf8");
