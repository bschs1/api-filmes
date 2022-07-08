import { Container, MovieList, Movie } from './styles';
import { APIKey } from '../../config/APIKey';
import { useState } from 'react';

function Home() {
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="https://www.google.com/">
                <img src={movie.img_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;


