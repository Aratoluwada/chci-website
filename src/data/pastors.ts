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
  { name: 'Rev Peace Toluwade', role: 'Senior Pastor', image: 'peace-toluwade.webp', alt: 'Rev Peace Toluwade', bio: [
    'Rev. Peace Toluwade is the Senior Pastor of City Harvest Church International, Abeokuta. He has been in ministry for over 27 years.',
    'He has a passion for reaching out to young people and guiding them. He has been married to Pastor Joy Toluwade for 24 years, and they have three children.',
  ] },
  { name: 'Pastor Joy Toluwade', role: 'Associate Pastor', image: 'joy-toluwade.webp', alt: 'Pastor Joy Toluwade', bio: [
    'Pastor Joy Toluwade is an Associate Pastor at City Harvest Church International, Abeokuta, and has served since the inception of the church in 2003.',
    'She worked in the financial sector for over 15 years before voluntarily retiring to go into ministry full-time. She has been married to Rev. Peace Toluwade for 24 years, and they have three children.',
  ] },
  { name: 'Pastor Adeyinka Akinsanya', role: 'Associate Pastor', image: 'adeyinka-akinsanya.webp', alt: 'Pastor Adeyinka Akinsanya (placeholder photo)', bio: [
    'Pastor Adeyinka Akinsanya is an Associate Pastor at City Harvest Church International, Abeokuta. He is a minister of the gospel and also a businessman.',
    'He has served as a minister in the church for several years and is also a drama minister. He was ordained into the office of Pastor in 2025.',
  ] },
  { name: 'Pastor Adepeju Sijuwade', role: 'Associate Pastor', image: 'adepeju-sijuwade.webp', alt: 'Pastor Adepeju Sijuwade (placeholder photo)', bio: [
    'Pastor Adepeju Sijuwade is an Associate Pastor at City Harvest Church International, Abeokuta. She is a worship leader, music director, songwriter, instrumentalist and trainer who has coached and discipled many people over the years.',
    'She believes worship is a lifestyle, and she is passionate about leading others into it. She is a graduate of Rhema Bible School, convener of the yearly worship encounter “The Stirring of the Waters”, and she conducts trainings, seminars and retreats for choir and worker groups.',
  ] },
  { name: 'Pastor Omotola Arawomo', role: 'Associate Pastor', image: 'omotola-arawomo.webp', alt: 'Pastor Omotola Arawomo (placeholder photo)', bio: [
    'Pastor Omotola Arawomo is a legal professional with a career of nearly two decades in both the Nigerian Judiciary and private legal practice.',
    'He is an ordained Associate Pastor of City Harvest Church International, Abeokuta. He is married with children, and he loves reading, writing, self-development, quality relationships, healthy synergy and strategic networking.',
  ] },
];
