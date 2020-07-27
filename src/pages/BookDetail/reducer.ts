import produce from 'immer';

import { BookObject } from 'types';

const INITIAL_STATE: BookObject = {
  id: undefined,
  title: '',
  author: '',
  synopsisParagraphs: [],
  bookCover: '',
};

type SetBook = {
  type: 'book/SET_BOOK';
  payload: BookObject;
};

type RemoveBook = {
  type: 'book/REMOVE_BOOK';
};

type SelectedBookAction = SetBook | RemoveBook;

export default function selectedBook(
  state = INITIAL_STATE,
  action: SelectedBookAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'book/SET_BOOK': {
        draft.id = action.payload.id;
        draft.title = action.payload.title;
        draft.author = action.payload.author;
        draft.synopsisParagraphs = action.payload.synopsisParagraphs;
        draft.bookCover = action.payload.bookCover;
        break;
      }
      case 'book/REMOVE_BOOK': {
        draft.id = undefined;
        draft.title = '';
        draft.author = '';
        draft.synopsisParagraphs = [];
        draft.bookCover = '';
        break;
      }
      default:
    }
  });
}
