/**
 * Single source of truth for church details.
 * Anything `null` is UNKNOWN and must be supplied/approved by the church.
 * Never fill these with guesses. Search for "TODO" before launch.
 */
export const site = {
  /** TRUE while copy is placeholder: shows small dashed "Draft" chips next to unapproved text. Set to false at launch. */
  draftMode: true,

  name: 'City Harvest Church International',
  short: 'CHCI',
  city: 'Abeokuta',
  country: 'Nigeria',

  // TODO: CONFIRM street address + verified map pin
  address: null as string | null,
  // TODO: CONFIRM regular service days and times
  serviceTimes: null as string | null,
  // TODO: CONFIRM public phone / WhatsApp / email / socials
  phone: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,
  social: { instagram: null, facebook: null, youtube: null } as Record<string, string | null>,

  // TODO: owner to choose final primary CTA wording ("Plan Your Visit" is a placeholder)
  primaryCta: { label: 'Plan Your Visit', href: '/visit' },
  secondaryCta: { label: 'Service Times', href: '/visit#times' },

  // TODO: owner to approve hero copy. Concept wording from the brief, not a confirmed slogan.
  hero: {
    eyebrow: 'Welcome to City Harvest',
    lines: ['Come as', 'you are.', 'Grow in God.'],
    // TODO: supply an approved CHCI photo, e.g. '/images/hero.jpg'. null = graphic-only hero.
    image: null as string | null,
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Services & Events', href: '/events' },
  { label: 'Music', href: '/music' },
  { label: 'Visit Us', href: '/visit' },
];
