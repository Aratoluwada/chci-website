/**
 * The three cards in the Home "Welcome" section.
 *
 * TO ADD A PHOTO: put the file in `src/assets/welcome/` and put its file name in `image` below,
 * e.g. image: 'worship.jpg'. Astro resizes it and serves a light WebP automatically.
 * Best: portrait 4:5 (about 1200 x 1500 px), subject near the centre, a real CHCI photo with permission.
 * `image: null` shows a branded placeholder panel instead (no fake photos).
 *
 * TODO: owner to approve titles, text and links. The wording below is generic placeholder copy.
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
  { title: 'Worship with us', body: 'Come together to sing, pray and be encouraged.', href: '/events', cta: 'Services & events', image: 'worship.jpg', alt: 'A worship leader singing on stage with white flowers and a choir behind' },
  { title: 'Grow in faith', body: 'Learn who we are and what we hold dear.', href: '/about', cta: 'About us', image: 'grow.jpg', alt: 'A woman smiling as she speaks from a podium during a service' },
  { title: 'Belong to a family', body: 'You do not have to walk this road alone.', href: '/visit', cta: 'Plan your visit', image: 'belong.jpg', alt: 'A smiling woman in a sparkling dress at a celebration service, with members smiling behind her' },
];
