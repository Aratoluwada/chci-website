/**
 * Upcoming events. An empty list renders a friendly empty state on Home and Events.
 * Never add fake events: every entry below came from the church's own flyer.
 */
export interface EventItem {
  title: string;
  date: string;       // ISO start date, e.g. '2026-11-08'
  endDate?: string;   // ISO end date for multi-day events
  theme?: string;
  sessions?: { label: string; time: string }[];
  time?: string;      // e.g. '9:00 AM'
  location?: string;  // venue name
  address?: string;
  hosts?: string[];
  guest?: string;
  description?: string;
  link?: string;      // only tested/approved links
  linkLabel?: string; // button text for the link
}

export const events: EventItem[] = [
  {
    // Source: owner's "Homecoming & Campmeeting 2026" flyer (Wed 21st to Sun 25th Oct)
    title: 'Homecoming & Campmeeting 2026',
    date: '2026-10-21',
    endDate: '2026-10-25',
    theme: 'The Wonderful God',
    sessions: [
      { label: 'Morning sessions', time: '6:00 AM' },
      { label: 'Evening sessions', time: '5:00 PM' },
    ],
    location: 'Transformation Center',
    address: '1, Somorin-Kemta Road, Somorin, Obantoko, Abeokuta',
    hosts: ['Rev. Peace Toluwade', 'Pastor Joy Toluwade'],
    guest: 'Rev. Tunde Amosun',
    link: 'https://campmeeting-2026-gamma.vercel.app', // owner-supplied event site (checked live)
    linkLabel: "See more details",
  },
];
