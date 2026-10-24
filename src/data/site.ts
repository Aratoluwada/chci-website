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
  // Google Maps: the church's own link (opens the app or site) and the embedded map for the Visit Us page.
  mapLink: 'https://maps.app.goo.gl/xjAxmCw4TM96L3Li8',
  mapEmbed: 'https://www.google.com/maps?q=City+Harvest+Church+International,+Transformation+Centre,+Shomorin+Street,+Abeokuta,+Ogun+State&output=embed',
  // Contact form: paste the form link from a form service such as Formspree (https://formspree.io), which sends each
  // message to the church's inbox. Leave null until then: the form shows but tells visitors it cannot send yet.
  contactFormUrl: null as string | null,
  // Sabilytics analytics. Copy the three values from your Sabilytics dashboard (Install). While `src` or `siteId` is empty, nothing is loaded.
  analytics: { src: 'https://www.sabilytics.com/script.js' as string | null, siteId: '8dcje5rpm3x5' as string | null, domain: 'cityharvestchurchabk.vercel.app' as string | null },
  serviceTimes: [
    { day: 'Sunday', name: 'Sunday Service', time: '9:00 AM – 11:30 AM' },
    { day: 'Wednesday', name: 'Building Capacity Service', time: '5:30 PM – 7:00 PM' },
  ] as { day: string; name: string; time: string }[] | null,
  // TODO: CONFIRM public phone / WhatsApp / email / socials
  phone: null as string | null,
  whatsapp: '+2347033059736' as string | null,
  email: null as string | null,
  social: { instagram: null, facebook: 'https://www.facebook.com/Cityharvesthouse', youtube: 'https://youtube.com/@peacetoluwade8321' } as Record<string, string | null>,

  // The church's slogan. Used in the footer, the search description and the About page.
  slogan: 'Adding flavour to your world',

  // TODO: owner to choose final primary CTA wording
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
