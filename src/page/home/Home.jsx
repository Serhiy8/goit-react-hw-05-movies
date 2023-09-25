import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const URL = 'https://api.themoviedb.org/3/trending/movie/week';

const Home = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendy = async () => {
      try {
        const res = await fetchFromTMDbAPI(URL, {});
        if (res) {
          setData(res.results);
        }

        setLoading(true);
      } catch (error) {
        setLoading(true);
        console.error(error);
      }
    };
    fetchTrendy();
  }, []);

  return (
    <>
      {loading ? (
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
            <div>Something went wrong. Try to reload.</div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
