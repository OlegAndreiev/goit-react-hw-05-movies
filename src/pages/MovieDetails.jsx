import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { GoBack, MovieInfo, Poster, Section } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '00f2cafab9ed8b61ede4a54c54838e2c';
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error('Something has gone wrong!'));
      })
      .catch(error => setError({ error }))
      .then(data => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Suspense fallback={null}>
        <Section>
          <GoBack>
            <Link
              to={backLinkHref}
              style={{
                display: 'flex',
                gap: '5px',
                color: 'black',
                textDecoration: 'none',
                width: '100px',
                backgroundColor: 'lavender',
                border: '1px solid black',
              }}
            >
              <TiArrowBack />
              Go back
            </Link>
          </GoBack>
          <MovieInfo>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <div style={{ maxWidth: 500 }}>
              <h2>{movie.title}</h2>
              <p>Popularity: {movie.popularity}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres.map(movie => (
                <p key={movie.name}>{movie.name}</p>
              ))}
            </div>
          </MovieInfo>
        </Section>
        <Section>
          Additional information
          <ul>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Section>
      </Suspense>
    </>
  );
};

export default MovieDetails;
