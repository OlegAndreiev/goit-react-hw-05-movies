import { CastGallery } from 'pages/MovieDetails.styled';
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
          <CastGallery>
            {cast.cast.map(cast => (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : `https://t4.ftcdn.net/jpg/00/07/88/43/360_F_7884307_RoHrYRl7DCnwfHX4tucmPuQ6eLtUB3kS.jpg`
                  }
                  alt={cast.name}
                  width="100"
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </CastGallery>
        ) : (
          ' We don`t have any casts for this movie'
        )}
      </Suspense>
    </div>
  );
};

export default Cast;
