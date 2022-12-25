import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 3000);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src="https://t4.ftcdn.net/jpg/00/07/88/43/360_F_7884307_RoHrYRl7DCnwfHX4tucmPuQ6eLtUB3kS.jpg"
        alt="Sad cat"
        width="400"
      />
      <p style={{ fontWeight: 500, fontSize: 18 }}>
        Sorry, we couldn't find anything from your link...
      </p>
    </div>
  );
};
