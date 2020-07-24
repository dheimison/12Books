import React from 'react';

import SnowCrash from 'assets/images/Snow-Crash.jpg';
import { Header, Container, BookList, BookItem } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <h1>12 Books You Should Read</h1>
      </Header>

      <Container>
        <BookList>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
          <BookItem>
            <img src={SnowCrash} alt="Capa do livro snow crash" />
            <span>Neal Stephenson</span>
            <p>Snow Crash</p>
          </BookItem>
        </BookList>
      </Container>
    </>
  );
};

export default Home;
