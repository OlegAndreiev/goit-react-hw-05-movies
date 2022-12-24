import { useSearchParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('id'));

  return <div>Movie Details</div>;
};
