import { Link } from 'react-router-dom';
import {
  MovieName,
  CardWrapper,
  TrendingGallery,
  Poster,
} from './MoviesTrending.styled';

export const MoviesTrending = ({ trandingMovies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <TrendingGallery>
        {trandingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <CardWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="100"
                />
                <MovieName>{movie.original_title}</MovieName>
              </CardWrapper>
            </Link>
          </li>
        ))}
      </TrendingGallery>
    </>
  );
};
