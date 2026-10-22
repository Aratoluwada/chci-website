/**
 * Placeholder cards for the Home sections. Photos live in `src/assets/cards/`.
 * Every name, role and song title here is a PLACEHOLDER: replace with approved content.
 * TODO: confirm the church has permission to publish each photo before launch.
 */
export interface PhotoCard { image: string; alt: string; title: string; note: string }

// Leadership: names/roles are NOT known. Photos are stand-ins.
export const leaderCards: PhotoCard[] = [
  { image: 'leader-1.jpg', alt: 'A woman in a red jacket speaking at a podium', title: 'Name to be added', note: 'Role' },
  { image: 'leader-2.jpg', alt: 'A man in a grey outfit with a headset microphone, fist raised', title: 'Name to be added', note: 'Role' },
  { image: 'leader-3.jpg', alt: 'A woman in a white shirt and patterned skirt speaking into a microphone', title: 'Name to be added', note: 'Role' },
];

// Music: song titles are NOT known. Photos are stand-ins.
export const songCards: PhotoCard[] = [
  { image: 'song-1.jpg', alt: 'Women singing in matching purple prints', title: 'Song title', note: 'Lyrics coming soon' },
  { image: 'song-2.jpg', alt: 'A keyboardist playing during a service', title: 'Song title', note: 'Lyrics coming soon' },
];
