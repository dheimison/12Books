export type BookObject = {
  id: number | undefined;
  title: string;
  author: string;
  synopsisParagraphs: { id: number; text: string }[];
  bookCover: string;
};
