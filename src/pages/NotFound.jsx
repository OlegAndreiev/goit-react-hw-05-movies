import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Suspense fallback={null}>
        <img
          src="https://t4.ftcdn.net/jpg/00/07/88/43/360_F_7884307_RoHrYRl7DCnwfHX4tucmPuQ6eLtUB3kS.jpg"
          alt="Sad cat"
          width="400"
        />
        <p style={{ fontWeight: 500, fontSize: 18 }}>
          Sorry, we couldn't find anything from your link...
        </p>
      </Suspense>
    </div>
  );
};

export default NotFound;
