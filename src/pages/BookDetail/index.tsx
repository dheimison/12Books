import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowBack } from 'react-icons/md';

import history from 'services/history';

import { RootState } from 'store/rootReducer';
import { removeSelectedBook } from './actions';

import { Container, BookData } from './styles';

const BookDetail: React.FC = () => {
  const selectedBook = useSelector((store: RootState) => store.selectedBook);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedBook.id) {
      history.push('/');
    }
    window.scrollTo({ top: 0 });
  }, [selectedBook.id]);

  const handleClick = () => {
    dispatch(removeSelectedBook());
    history.goBack();
  };

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        <MdArrowBack size={50} color="#FCFCCA" />
      </button>

      <div>
        <img src={selectedBook.bookCover} alt={selectedBook.title} />

        <BookData>
          <span>{selectedBook.author}</span>
          <h1>{selectedBook.title}</h1>
        </BookData>

        {selectedBook.synopsisParagraphs.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </div>
    </Container>
  );
};

export default BookDetail;
