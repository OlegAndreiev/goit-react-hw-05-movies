import { MoviesTrending } from 'components/MoviesTrending';
import { useEffect, useState } from 'react';

export const Home = () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '00f2cafab9ed8b61ede4a54c54838e2c';
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error('Something has gone wrong!'));
      })
      .catch(error => setError({ error }))
      .then(data => setTrandingMovies(data.results));
    //    .finally(() => setLoading(false));
  }, []);

  if (error) {
    console.log(error);
  }

  return (
    <main>
      <MoviesTrending trandingMovies={trandingMovies} />
    </main>
  );
};
