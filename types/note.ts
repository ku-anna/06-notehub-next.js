export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt?: string;
}

export interface FormValues {
  title: string;
  content: string;
  tag: NoteTag;
}

type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
