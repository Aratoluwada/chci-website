/**
 * Single source of truth for church details.
 * Anything `null` is UNKNOWN and must be supplied/approved by the church.
 * Never fill these with guesses. Search for "TODO" before launch.
 */
export const site = {
  /** TRUE while copy is placeholder: shows small dashed "Draft" chips next to unapproved text. Set to false at launch. */
  draftMode: false,

  name: 'City Harvest Church International',
  short: 'CHCI',
  city: 'Abeokuta',
  country: 'Nigeria',

  // Confirmed by the owner (Oct 2026). TODO: verified map pin
  venue: 'Transformation Center',
  address: '1, Somorin-Kemta Road, Somorin, Obantoko, Abeokuta, Nigeria' as string | null,
  // Confirmed by the owner (Oct 2026)
  serviceTimes: [
    { day: 'Sunday', time: '9:00 AM – 11:30 AM' },
    { day: 'Wednesday', time: '5:30 PM – 7:00 PM' },
  ] as { day: string; time: string }[] | null,
  // TODO: CONFIRM public phone / WhatsApp / email / socials
  phone: null as string | null,
  whatsapp: '+2347033059736' as string | null,
  email: null as string | null,
  social: { instagram: null, facebook: 'https://www.facebook.com/Cityharvesthouse', youtube: 'https://youtube.com/@peacetoluwade8321' } as Record<string, string | null>,

  // TODO: owner to choose final primary CTA wording ("Plan Your Visit" is a placeholder)
  primaryCta: { label: 'Visit Us', href: '/visit' },
  secondaryCta: { label: 'Service Times', href: '/visit#times' },

  // TODO: owner to approve hero copy. Concept wording from the brief, not a confirmed slogan.
  hero: {
    eyebrow: 'Welcome to City Harvest Church',
    lines: ['Building a', 'people of', 'godly character.'],
    // File name inside src/assets/hero/. null = graphic-only hero.
    image: 'hero.jpg' as string | null,
    imageAlt: '',
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
