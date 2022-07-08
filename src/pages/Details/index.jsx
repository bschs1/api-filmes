import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIKey } from '../../config/APIKey';
import { Container } from './styles';
import { Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const img_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US1`
    ).then((response) => {
      response.json().then((data) => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          img: `${img_path}${data.poster_path}`,
          releaseDate: data.release_date,
        };

        setMovie(movie);

      });
    });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.img} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>{movie.sinopse}</span>
          <span className="release-date">
            Release Date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
