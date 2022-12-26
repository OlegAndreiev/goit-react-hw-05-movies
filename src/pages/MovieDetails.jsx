import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

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

  console.log(location);

  return (
    <>
      <Suspense fallback={null}>
        <section>
          <Link to={backLinkHref}>
            <TiArrowBack />
            Go back
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="100"
          />
          <h2>{movie.title}</h2>
          <p>Popularity: {movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres.map(movie => (
            <p key={movie.name}>{movie.name}</p>
          ))}
        </section>
        <section>
          Additional information
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </section>
      </Suspense>
    </>
  );
};

export default MovieDetails;
