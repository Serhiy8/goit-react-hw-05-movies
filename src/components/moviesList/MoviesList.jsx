import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ dataMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {dataMovies.map(data => (
        <li key={data.id}>
          <NavLink to={`${data.id}`} state={{ from: location }}>
            {data.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
