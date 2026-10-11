/**
 * Upcoming events. Leave empty until the church supplies verified entries (see brief, Appendix E).
 * An empty list renders a friendly empty state on Home and Events. Never add fake events.
 */
export interface EventItem {
  title: string;
  date: string;      // ISO date, e.g. '2026-11-08'
  time?: string;     // e.g. '9:00 AM'
  location?: string;
  description?: string;
  link?: string;     // only tested/approved links
}

// TODO: SUPPLY VERIFIED EVENTS
export const events: EventItem[] = [];
