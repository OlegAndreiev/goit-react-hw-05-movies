import { Link } from 'react-router-dom';
import { MovieName, CardWrapper } from './MoviesTrending.styled';

export const MoviesTrending = ({ trandingMovies }) => {
  return (
    <ul>
      <h2>Trending today</h2>
      {trandingMovies.map(movie => (
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
