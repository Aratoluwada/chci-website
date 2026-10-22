/**
 * Placeholder cards for the Home sections. Photos live in `src/assets/cards/`.
 * Every name, role and song title here is a PLACEHOLDER: replace with approved content.
 * TODO: confirm the church has permission to publish each photo before launch.
 */
export interface PhotoCard { image: string; alt: string; title: string; note: string; href?: string }

// Leadership: names and roles supplied by the church. Photos should be confirmed.
export const leaderCards: PhotoCard[] = [
  { image: 'leader-2.jpg', alt: 'Rev Peace Toluwade, Senior Pastor', title: 'Rev Peace Toluwade', note: 'Senior Pastor' },
  { image: 'leader-1.jpg', alt: 'Pastor Joy Toluwade, Associate Pastor', title: 'Pastor Joy Toluwade', note: 'Associate Pastor' },
];

// Music: song titles supplied by the church. Lyrics to be added. Photos are stand-ins.
export const songCards: PhotoCard[] = [
  { image: 'song-1.jpg', alt: 'Women singing in matching purple prints', title: 'Gbani Gbani', note: 'See lyrics', href: '/music#gbani-gbani' },
  { image: 'song-2.jpg', alt: 'A keyboardist playing during a service', title: "I'm Born Again", note: 'See lyrics', href: '/music#im-born-again' },
];
