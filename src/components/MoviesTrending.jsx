import { Link } from 'react-router-dom';
import { MovieName, CardWrapper } from './MoviesTrending.styled';

export const MoviesTrending = ({ trandingMovies }) => {
  return (
    <ul>
      <h2>Trending today</h2>
      {trandingMovies.map(movie => (
        <CardWrapper key={movie.id}>
          <img
            src="https://api.themoviedb.org/3/trending/movie/tQ91wWQJ2WRNDXwxuO7GCXX5VPC.jpg?api_key=00f2cafab9ed8b61ede4a54c54838e2c"
            alt={movie.title}
          />
          <MovieName>{movie.original_title}</MovieName>
        </CardWrapper>
      ))}
    </ul>
  );
};
