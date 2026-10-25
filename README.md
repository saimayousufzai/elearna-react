# Elearna — React recreation (10 pages)

Redesigned **React + Vite** frontend based on the public visual reference https://elearna.webflow.io/. Includes the first **two** options in each of the five main navbar groups, with functioning dropdowns on hover and on tap, reference-based artwork, unique hero treatments and scroll-entry animations.

## Pages / URL routes

| Navbar group | First page | Second page |
| --- | --- | --- |
| Home | `/home-one` | `/home-two` |
| Courses | `/course-one` | `/course-two` |
| Pages | `/about-one` | `/about-two` |
| Blog | `/blog-one` | `/blog-two` |
| Contact | `/contact-one` | `/contact-two` |

The root `/` displays **Home One**. No Home Three, Course Three, Blog Three or Contact Three are included. All 10 URLs load separate React page layouts, and browser Back/Forward navigation is supported.

## Run locally

Requires **Node.js 20.19+** and npm. In the extracted `elearna-react` folder:

```bash
npm install
npm run dev
```

Open the Vite address shown in the terminal, typically http://localhost:5173.

To compile:

```bash
npm run build
npm run preview
```

### Quick browser preview

You can open `preview/index.html` directly (with an active internet connection): this preview loads React/ReactDOM from the jsDelivr CDN and uses online photos. Use the dropdown links to navigate all ten pages. For actual development, use `npm run dev` instead.

## What's interactive?

- Desktop **hover** menus and mobile **tap** menus for Home, Courses, Pages, Blog, Contact; exactly **2 subpages in every dropdown**.
- A responsive layout for desktop, tablet and phone, with page transitions through browser History.
- Distinct photo-based About / Courses / Blog / Contact hero treatments, matching page-specific reference headings and content.
- Motion: staggered entrance, scroll reveal, floating badges, subtle background parallax/zoom, moving contact marquee, button/card hover and animated dropdowns. Respects reduced-motion settings.
- Course filters, pagination, article preview modal, blog search, frequently asked question accordion, and contact form validation.
- Demo shopping cart with add/remove items, course details overlay, and login/register interface.
- Images are sourced by HTTPS URLs (primarily the Elearna public CDN plus Unsplash). Assets are not bundled as local image files.

## Files

- `src/App.jsx` — header, home pages, site chrome, routing, cart and modals.
- `src/InnerPages.jsx` — eight other page designs, content and interactions.
- `src/data.js` — course data and photo URLs.
- `src/styles.css` — shared / home-page CSS.
- `src/inner-pages.css` — inner page styles and mobile responsiveness.
- `preview/` — browser-openable CDN preview of the full project.
- `tools/build-preview.cjs` — regenerates the standalone CDN preview after edits (`npm run preview:offline-build`).

## Scope / accuracy note

This is a fresh React implementation that closely follows the **structure and appearance** of the referenced publicly visible template; it is **not** an exact Webflow source export or an assurance of pixel-perfect fidelity. It doesn't include a real backend, Webflow CMS, user database, account login, learning platform, payment processing, or email submission service. Forms and cart are explicitly demo-only. Some visual assets use hosted substitute photos where the exact original source image URL wasn't available. Online resources require an internet connection, and rights to use images/branding in commercial work should be verified.
