import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '00f2cafab9ed8b61ede4a54c54838e2c';

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    )
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error('Something has gone wrong!'));
      })
      .catch(error => setError({ error }))
      .then(data => setReviews(data.results));
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <Suspense fallback={null}>
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map(review => (
              <div key={review.id}>
                <li style={{ fontSize: 16, fontWeight: 700 }}>
                  Author: {review.author}
                </li>
                <p>{review.content}</p>
              </div>
            ))}
          </ul>
        ) : (
          'We don`t have any reviews for this movie'
        )}
      </Suspense>
    </div>
  );
};

export default Reviews;
