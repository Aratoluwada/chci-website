/**
 * Other photo slots on the site. Files live in `src/assets/photos/`.
 * Unused photos are kept in `src/assets/library/` (see INDEX.md there). Move a file out of the library
 * into a slot's folder and set its name here to use it.
 * TODO: confirm the church has permission to publish each photo before launch.
 */
export const musicPhoto: { image: string | null; alt: string } = {
  image: 'choir.jpg',
  alt: 'A singer leading worship on stage',
};

// Leadership page. Names and roles are NOT filled in: the owner must supply them.
export const leadershipPhoto: { image: string | null; alt: string } = {
  image: 'leadership-five.jpg',
  alt: 'Five church members standing together on the platform at an ordination service',
};

// Visit Us page.
export const visitPhoto: { image: string | null; alt: string } = {
  image: 'building.jpg',
  alt: 'The Transformation Centre building in Abeokuta',
};

// Services & Events page: header photo and one background per regular service (Sunday first, then Wednesday).
export const eventsHeaderPhoto: { image: string | null; alt: string } = {
  image: 'events-header.jpg',
  alt: 'Young people gathered around a worship leader during a service',
};
export const servicesPhotos: { image: string | null; alt: string }[] = [
  { image: 'services-sunday.jpg', alt: 'Worshippers standing in prayer during a service' },
  { image: 'services-wednesday.jpg', alt: 'A minister praying into a microphone' },
];

// Visit Us page header: the church building. This is a PLACEHOLDER picture.
// To replace it: put your photo in `src/assets/photos/` (landscape, at least 1600 px wide) and set the file name here,
// or simply overwrite `src/assets/photos/visit-building.jpg` with your photo using the same name.
export const visitHeaderPhoto: { image: string | null; alt: string } = {
  image: 'visit-building.jpg',
  alt: 'The church building, Transformation Center, Abeokuta',
};

// Leadership page header. `position` is where the photo is centred inside the wide header band (x% y%).
export const leadershipHeaderPhoto: { image: string | null; alt: string; position: string } = {
  image: 'rev3.jpg',
  alt: 'A pastor ministering during a service',
  position: '50% 15%',
};
