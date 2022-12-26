import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '00f2cafab9ed8b61ede4a54c54838e2c';

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error('Something has gone wrong!'));
      })
      .catch(error => setError({ error }))
      .then(data => setCast(data));
  }, [movieId]);

  if (!cast) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <Suspense fallback={null}>
        {cast.length !== 0 ? (
          <ul>
            {cast.cast.map(cast => (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                  width="100"
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          ' We don`t have any casts for this movie'
        )}
      </Suspense>
    </div>
  );
};

export default Cast;
