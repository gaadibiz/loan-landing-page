/* Single source of truth for anything the metadata in `app/layout.tsx` and the
   per-page `metadata` exports need to agree on. Nothing here is a secret — it
   all ends up in the HTML anyway. */

/* The canonical origin. Set `NEXT_PUBLIC_SITE_URL` on each host; the fallback
   is only so local dev and CI don't throw when `new URL()` gets a bare string.
   Get this right in production or every og:url and canonical on the site
   points at the wrong place. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://loaninneed.in";

/* Search indexing is opt-out rather than opt-in, because this site is already
   live and already indexable — defaulting to `false` here would quietly
   deindex it on the next deploy.

   That said: for a pure Google Ads landing page you usually want this OFF.
   Ads traffic doesn't need organic indexing, and the per-city variants of this
   page (lucknow, chandigarh, …) are near-identical copy, which is exactly the
   duplicate-content shape Search treats badly. Set
   `NEXT_PUBLIC_SITE_INDEXABLE=false` on the campaign hosts to turn it off. */
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "false";

/* There was no share image at all before this — every WhatsApp, Twitter and
   Facebook share of the site rendered a blank card. `logo.png` is 200x96 and
   `bg.jpg` is 1920x1280, and neither is a shape a social crawler will use, so
   this is bg.jpg cropped to the 1.91:1 that Open Graph actually wants.
   It's a plain photo crop with no branding on it — worth replacing with a
   designed card carrying the logo and the offer. */
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
} as const;

export const SITE_NAME = "LoanInNeed";
export const LEGAL_ENTITY = "Naveen Finance";
export const SUPPORT_PHONE = "+918796633465";
