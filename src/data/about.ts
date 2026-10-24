/**
 * Content for the About page. Source: the church's School of Wisdom foundation classes (SOW 117 to SOW 119).
 * Edit the wording here; the page layout is in `src/pages/about.astro`.
 */
export const missionStatement =
  'Building a people of godly character with victory mentality, who influence their society and bring others to the same experience.';

// A true sequence, so it is shown as a timeline. The first service date comes from the class notes (see note below).
// NOTE FOR THE CHURCH: the notes give both "October 26, 2005" and "Sunday 26th October, 2003" for the first service.
// 26 October 2003 was a Sunday, so 2003 is used here. Please confirm.
export const story = [
  { when: 'Late 1990s', text: 'God began revealing to Peace Toluwade that he would pioneer a church in the early 2000s. He told his pastor about it.' },
  { when: 'Early 2003', text: 'He was told it was time to begin, and he let his pastor know he would be stepping out that year to plant a church.' },
  { when: '26 October 2003', text: 'Two weeks after being sent out by his pastor and the whole congregation, the first service of The Harvest House was held. A handful of people came, mostly friends, some from outside the town.' },
  { when: 'The next Sunday', text: 'Seven people were there, including the pastor and his wife. They became the foundational members of the church.' },
  { when: 'The early years', text: 'With strict instructions from God to “start with students”, the focus was on undergraduates, mainly at the Federal University of Agriculture, Abeokuta and the Federal College of Education, Osiele, and some other institutions.' },
  { when: 'After eight years', text: 'The church registered with the Corporate Affairs Commission as a recognised religious organisation. The name City Harvest Church International was adopted and registered with the Federal Government.' },
  { when: 'Today', text: 'Many members have moved to other parts of Nigeria and to other nations after graduating. The church now has the mandate to multiply, planting churches as far as the Lord leads.' },
];

export const tools = [
  { name: 'The Word of God', ref: 'Acts 19:20; 20:32', text: 'We put emphasis on teaching God’s Word because it can transform lives, and because that is the example our Lord Jesus laid down. We believe the Word of God is the final authority in all things.', image: 'joy.jpg', alt: 'A pastor teaching from the podium' },
  { name: 'Worship', ref: 'Acts 16:25-26; Psalm 67:3-7', text: 'We do not take congregational singing of praise and worship for granted. We believe, and have seen, that God transforms lives and gives victory in the midst of it.', image: 'img.jpg', alt: 'A minister with a hand raised in worship' },
  { name: 'Prayer', ref: 'Acts 4:20-31; 1 John 5:14', text: 'We believe in a God who answers prayer. We pray in tongues and with understanding, in our closets and in the congregation, for the government and for the saints.', image: 'rev4.jpg', alt: 'A pastor standing on the platform during a service' },
];

export const leadership =
  'We believe Jesus Christ is the head of the church and the Head Pastor of every true local assembly. Each assembly also has one main under-shepherd who reports directly to Jesus and leads the church. At City Harvest Church International that is our lead pastor, who is also the visionary and founding pastor, Rev. Peace Toluwade. His wife and associate founding pastor, Rev. (Mrs.) Joy Toluwade, is also the Deputy Lead Pastor. We have other pastors, equally called and anointed by the Holy Spirit, who stand in various offices such as Assembly Pastor, Outreach Pastor and Administrative Pastor. Other ministers to the body of Christ are members of the church.';

export const joinSteps = [
  { t: 'Be born again', d: 'Membership begins when a person has truly been born again and become part of the universal church.' },
  { t: 'Attend regularly', d: 'Begin to attend City Harvest Church regularly.' },
  { t: 'Enrol in School of Wisdom', d: 'Join the foundation classes called the School of Wisdom (S.O.W.).' },
  { t: 'Serve in a ministry unit', d: 'After the foundation classes, begin to serve in any of the ministry units in church.' },
];

// School of Wisdom: the foundation classes. Code, title and purpose are from the class notes.
export const sow = [
  { code: 'SOW 101', title: 'A New Creation I', purpose: 'To understand the new birth and realize your new identity in Christ.' },
  { code: 'SOW 102', title: 'A New Creation II', purpose: 'To understand your new status as well as what is expected of you as a Christian.' },
  { code: 'SOW 103', title: 'The Holy Spirit I', purpose: 'To know who the Holy Spirit is as well as His purpose in the life of Christians.' },
  { code: 'SOW 104', title: 'The Holy Spirit II', purpose: 'To understand the baptism of the Holy Spirit and how to receive it.' },
  { code: 'SOW 105', title: 'The Word of God I', purpose: 'To understand what the Bible is and why the Word of God should dwell in us richly.' },
  { code: 'SOW 106', title: 'The Word of God II', purpose: 'To learn how the Word of God can dwell in us richly.' },
  { code: 'SOW 107', title: 'Effective Prayer I', purpose: 'To learn how to effectively communicate with God.' },
  { code: 'SOW 108', title: 'Effective Prayer II', purpose: 'To learn about the types of prayer that exist in the Bible.' },
  { code: 'SOW 109', title: 'Spirit, Soul and Body I', purpose: 'To learn about the tripartite nature of man.' },
  { code: 'SOW 110', title: 'Spirit, Soul and Body II', purpose: 'To learn how a Christian can effectively manage the spirit, soul and body.' },
  { code: 'SOW 111', title: 'Basics of Christianity I', purpose: 'To learn about the basics of our Christian faith as stated in Hebrews 6:1-2.' },
  { code: 'SOW 112', title: 'Basics of Christianity II', purpose: 'To learn about the basics of our Christian faith as stated in Hebrews 6:1-2.' },
  { code: 'SOW 113', title: 'Effective Soul Winning', purpose: 'To learn about effective soul winning and discipleship.' },
  { code: 'SOW 114', title: 'Stewardship I', purpose: 'To learn about principles of biblical stewardship.' },
  { code: 'SOW 115', title: 'Stewardship II', purpose: 'To learn about areas of stewardship and what the Word of God teaches about them.' },
  { code: 'SOW 116', title: 'Understanding the Church I', purpose: 'To learn about the first local assembly.' },
  { code: 'SOW 117', title: 'Understanding the Church II', purpose: 'To learn about belonging to a local assembly.' },
  { code: 'SOW 118', title: 'Understanding City Harvest Church International I', purpose: 'To learn about the history and mission of the church.' },
  { code: 'SOW 119', title: 'Understanding City Harvest Church International II', purpose: 'To learn about the mission achievement tools, leadership and membership of the church.' },
];

// Core values: FLAVOUR, from Matthew 5:13 ("You are the salt of the earth"). The words match the scrolling band on the Home page.
// PHOTOS: each value has its own background photo. To change one, put the picture in `src/assets/photos/`
// and set its file name in `image` below. These are stand-ins taken from the photo library.
export const flavour = [
  { letter: 'F', word: 'Faith', image: 'joy1.jpg', alt: 'A pastor speaking at the podium' },
  { letter: 'L', word: 'Love', image: 'tola.jpg', alt: 'A member listening attentively' },
  { letter: 'A', word: 'Abilities', image: 'music-keys.jpg', alt: 'A keyboardist playing during worship' },
  { letter: 'V', word: 'Virtue', image: 'leadership-five.jpg', alt: 'Five church members standing together' },
  { letter: 'O', word: 'Optimism', image: 'choir.jpg', alt: 'A singer leading worship on stage' },
  { letter: 'U', word: 'Unity', image: 'akin.jpg', alt: 'A minister lifting a hand while speaking' },
  { letter: 'R', word: 'Righteousness', image: 'rev3.jpg', alt: 'A pastor ministering during a service' },
];
