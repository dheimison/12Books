import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import mockData from 'utils/mockData';

import BookList from 'components/BookList';

import { Header, Container, NavigationContainer, StyledButton } from './styles';

const Home: React.FC = () => {
  const [numberOfPages, setNumberOfPages] = useState<number[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (numberOfPages.length === 0) {
      const calcPages = Math.floor(mockData.length / 6);
      const pages = [];

      if (calcPages === 0) {
        pages.push(1);
      } else {
        for (let index = 1; index <= calcPages; index += 1) {
          pages.push(index);
        }
      }
      setNumberOfPages(pages);
    }
  }, [numberOfPages.length]);

  return (
    <>
      <Header>
        <h1>12 Books You Should Read</h1>
      </Header>

      <Container>
        <BookList bookData={mockData} selectedPage={selectedPage} />

        <NavigationContainer>
          {selectedPage !== numberOfPages[0] && (
            <StyledButton
              type="button"
              onClick={() => {
                setSelectedPage(selectedPage - 1);
                scrollToTop();
              }}
            >
              <MdChevronLeft size={24} />
            </StyledButton>
          )}
          {numberOfPages.map((page) => (
            <StyledButton
              type="button"
              key={page}
              onClick={() => {
                setSelectedPage(page);
                scrollToTop();
              }}
              disabled={selectedPage === page}
            >
              {page}
            </StyledButton>
          ))}
          {selectedPage !== numberOfPages[numberOfPages.length - 1] && (
            <StyledButton
              type="button"
              onClick={() => {
                setSelectedPage(selectedPage + 1);
                scrollToTop();
              }}
            >
              <MdChevronRight size={24} />
            </StyledButton>
          )}
        </NavigationContainer>
      </Container>
    </>
  );
};

export default Home;
