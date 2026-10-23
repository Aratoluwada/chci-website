/**
 * The pastors shown on the Leadership page.
 *
 * TO CHANGE A PHOTO: put the new picture in `src/assets/pastors/` and set its file name in `image` below.
 *   (Or overwrite the existing file there with a new picture of the same name.)
 *   Best: portrait, 4:5 (for example 800 x 1000 px), face near the top-centre.
 * TO CHANGE A BIO: edit the `bio` text below. Keep it short, two or three sentences.
 * TO ADD A PASTOR: copy one block, change the details. They appear in this order.
 *
 * The three photos with "PLACEHOLDER PHOTO" written on them and all the bios are placeholders.
 * `featured: true` shows a pastor larger, in the first row.
 */
export interface Pastor { name: string; role: string; image: string; alt: string; bio: string; featured?: boolean }

const bioPlaceholder = 'A short biography will be added here.';

export const pastors: Pastor[] = [
  { name: 'Rev Peace Toluwade', role: 'Senior Pastor', image: 'peace-toluwade.jpg', alt: 'Rev Peace Toluwade', bio: bioPlaceholder, featured: true },
  { name: 'Pastor Joy Toluwade', role: 'Associate Pastor', image: 'joy-toluwade.jpg', alt: 'Pastor Joy Toluwade', bio: bioPlaceholder, featured: true },
  { name: 'Pastor Adeyinka Akinsanya', role: 'Associate Pastor', image: 'adeyinka-akinsanya.jpg', alt: 'Pastor Adeyinka Akinsanya (placeholder photo)', bio: bioPlaceholder },
  { name: 'Pastor Adepeju Sijuwade', role: 'Pastor', image: 'adepeju-sijuwade.jpg', alt: 'Pastor Adepeju Sijuwade (placeholder photo)', bio: bioPlaceholder },
  { name: 'Pastor Omotola Arawomo', role: 'Pastor', image: 'omotola-arawomo.jpg', alt: 'Pastor Omotola Arawomo (placeholder photo)', bio: bioPlaceholder },
];
