export interface Guest {
  id?: string;
  name: string;
  isComing: boolean;
  extraGuests: number;
  note?: string;
  timestamp: any; // Firestore timestamp
  adminReply?: string; // Response from the organizer
}

export interface FormData {
  name: string;
  isComing: string; // "yes" or "no" from radio buttons
  extraGuests: number;
  note: string;
}