import { Link } from 'react-router-dom';
import { MovieName, CardWrapper } from '../components/MoviesTrending.styled';

export const FindedMovies = ({ findedMovies }) => {
  return (
    <ul>
      <h2>Finded movies</h2>
      {findedMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <CardWrapper>
              <MovieName>{movie.original_title}</MovieName>
            </CardWrapper>
          </Link>
        </li>
      ))}
    </ul>
  );
};
