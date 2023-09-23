import fetchTrendyIPA from 'page/home/trendyAPI';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendy = async () => {
      const res = await fetchTrendyIPA();
      setData(res.results);
    };
    fetchTrendy();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {data ? (
        <ul>
          {data.map(el => (
            <li key={el.id}>
              <NavLink to={`movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
