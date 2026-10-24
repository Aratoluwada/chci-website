/**
 * The pastors shown on the Leadership page.
 *
 * TO CHANGE A PHOTO: put the new picture in `src/assets/pastors/` and set its file name in `image` below.
 *   (Or overwrite the existing file there with a new picture of the same name.)
 *   Best: a cut-out portrait with a transparent background, saved as .webp or .png. It sits on a green box, centred, automatically.
 *   Any size works, but keep the file under about 300 KB (try squoosh.app) so the site stays fast.
 * TO CHANGE A BIO: edit the `bio` lines below. Each line in the list is one paragraph (two paragraphs per pastor).
 * TO ADD A PASTOR: copy one block, change the details. They appear in this order.
 *
 * The three photos with "PLACEHOLDER PHOTO" written on them and all the bios are placeholders.
 */
export interface Pastor { name: string; role: string; image: string; alt: string; bio: string[] }

const bioPlaceholder = ['A short biography will be added here.', 'A second paragraph about their calling and ministry will follow.'];

export const pastors: Pastor[] = [
  { name: 'Rev Peace Toluwade', role: 'Senior Pastor', image: 'peace-toluwade.webp', alt: 'Rev Peace Toluwade', bio: bioPlaceholder },
  { name: 'Pastor Joy Toluwade', role: 'Associate Pastor', image: 'joy-toluwade.webp', alt: 'Pastor Joy Toluwade', bio: bioPlaceholder },
  { name: 'Pastor Adeyinka Akinsanya', role: 'Associate Pastor', image: 'adeyinka-akinsanya.webp', alt: 'Pastor Adeyinka Akinsanya (placeholder photo)', bio: bioPlaceholder },
  { name: 'Pastor Adepeju Sijuwade', role: 'Pastor', image: 'adepeju-sijuwade.webp', alt: 'Pastor Adepeju Sijuwade (placeholder photo)', bio: bioPlaceholder },
  { name: 'Pastor Omotola Arawomo', role: 'Pastor', image: 'omotola-arawomo.webp', alt: 'Pastor Omotola Arawomo (placeholder photo)', bio: bioPlaceholder },
];
