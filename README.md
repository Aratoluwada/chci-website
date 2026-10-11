# CHCI Website (City Harvest Church International, Abeokuta)

Astro static site. Phase 1: header, animated hero, info strip, footer, and stub pages.

## Run
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Where things live
- `src/data/site.ts`: church details, CTA wording, hero copy and image. `null` = not yet supplied.
- `src/components/`: Header, Hero, InfoStrip, Marquee, Footer, PageHeader.
- `src/styles/global.css`: colour/type/spacing tokens, buttons, reveal and reduced-motion rules.
- `src/scripts/motion.ts`: scroll reveals, menu, header scroll state, magnetic buttons.
- `public/brand/`: logo files. `chci-logo-original.png` is the untouched supplied file. Other sizes are
  downscaled copies with blank white margins trimmed. The artwork itself is not altered.

## Draft chips
While `draftMode` is `true` in `src/data/site.ts`, small dashed "Draft" chips mark placeholder copy
(home sections, ministries list). Set it to `false` at launch, after the church approves the wording.
Home content lives in: `src/data/ministries.ts`, `src/data/events.ts` (empty = friendly empty state),
and the section components in `src/components/`.

## Before launch
Search the repo for `TODO`. Open items: address, service times, contact details, CTA wording, hero copy and
photo, approved content for About/Leadership/Events/Music, domain (canonical, sitemap), social image.
Excluded by design: Prayer Requests, Testimonies, Sermons, Give.
