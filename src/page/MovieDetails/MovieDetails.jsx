import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import MovieDetailsLayout from 'components/movieDetailsLayout/MovieDetailsLayout';


const URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetchFromTMDbAPI(`${URL}${id}`);
        if (res) {
          setDataMovie(res);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleBackClick = () => {
    navigate(backLinkHref);
  };

  return (
    <div className='container'>
      <MovieDetailsLayout backLinkHref={backLinkHref} handleBackClick={handleBackClick} dataMovie={dataMovie} location={location}/>
    </div>
  );
};

export default MovieDetails;
