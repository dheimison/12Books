import React from 'react';
import { useDispatch } from 'react-redux';

import history from 'services/history';

import { setSelectedBook } from 'pages/BookDetail/actions';

import { BookObject } from 'types';

import { BookListContainer, BookItem } from './styles';

type BookListProps = {
  bookData: BookObject[];
  selectedPage: number;
};

const BookList: React.FC<BookListProps> = ({ bookData, selectedPage }) => {
  const dispatch = useDispatch();
  const numberOfItensPerPage = 6;

  const handleClick = (book: BookObject) => {
    dispatch(setSelectedBook(book));
    history.push('/Book');
  };

  return (
    <BookListContainer>
      {bookData.map(
        (book, index) =>
          index >= numberOfItensPerPage * (selectedPage - 1) &&
          index < selectedPage * numberOfItensPerPage && (
            <BookItem key={book.id} onClick={() => handleClick(book)}>
              <img src={book.bookCover} alt={book.title} />
              <span>{book.author}</span>
              <p>{book.title}</p>
            </BookItem>
          )
      )}
    </BookListContainer>
  );
};

export default BookList;
