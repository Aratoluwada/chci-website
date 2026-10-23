/**
 * The three cards in the Home "Welcome" section.
 *
 * TO ADD A PHOTO: put the file in `src/assets/welcome/` and put its file name in `image` below,
 * e.g. image: 'worship.jpg'. Astro resizes it and serves a light WebP automatically.
 * Best: portrait 4:5 (about 1200 x 1500 px), subject near the centre, a real CHCI photo with permission.
 * `image: null` shows a branded placeholder panel instead (no fake photos).
 *
 * The card text below is based on the church's own foundation class notes (see src/data/about.ts).
 */
export interface WelcomeCard {
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string | null;
  alt: string; // describe the real photo once added (empty string if purely decorative)
}

export const welcomeCards: WelcomeCard[] = [
  { title: 'Worship with us', body: 'We believe God transforms lives and gives victory in the midst of praise and worship.', href: '/events', cta: 'Services & events', image: 'choir.jpg', alt: 'A worship leader singing on stage with white flowers and a choir behind' },
  { title: 'Grow in faith', body: 'We put the Word of God first. New members begin with our foundation classes, the School of Wisdom.', href: '/about#school-of-wisdom', cta: 'School of Wisdom', image: 'grow.jpg', alt: 'A woman smiling as she speaks from a podium during a service' },
  { title: 'Belong to a family', body: 'Every believer belongs in a local assembly. Find your place and begin to serve.', href: '/visit', cta: 'Visit us', image: 'belong.jpg', alt: 'A smiling woman in a sparkling dress at a celebration service, with members smiling behind her' },
];
