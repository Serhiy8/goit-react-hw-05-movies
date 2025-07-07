import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TrendyToday from 'components/trendyToday/TrendyToday';

const URL = 'https://api.themoviedb.org/3/trending/movie/day';

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
    <div className='container'>
      <TrendyToday loading={loading} data={data} location={location}/>      
    </div>
  );
};

export default Home;
