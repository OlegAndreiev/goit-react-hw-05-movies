import { Link, useLocation } from 'react-router-dom';
import { MovieName, CardWrapper } from '../components/MoviesTrending.styled';

export const FindedMovies = ({ findedMovies }) => {
  const location = useLocation();

  return (
    <ul>
      <h2>Finded movies</h2>
      {findedMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <CardWrapper>
              <MovieName>{movie.original_title}</MovieName>
            </CardWrapper>
          </Link>
        </li>
      ))}
    </ul>
  );
};
