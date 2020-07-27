import { BookObject } from 'types';

export function setSelectedBook(book: BookObject) {
  return {
    type: 'book/SET_BOOK',
    payload: book,
  };
}

export function removeSelectedBook() {
  return {
    type: 'book/REMOVE_BOOK',
  };
}
