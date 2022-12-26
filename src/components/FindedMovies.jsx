import { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MovieName, CardWrapper } from '../components/MoviesTrending.styled';

export const FindedMovies = ({ findedMovies }) => {
  // const [moviesList, setMoviesList] = useState(findedMovies);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const location = useLocation();

  console.log(search);
  console.log(searchParams);

  // const visibleMovies = useMemo(() => {
  //   return moviesList;
  // }, [moviesList]);

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
