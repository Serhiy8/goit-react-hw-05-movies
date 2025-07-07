import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbImage } from './cast.styled';

const URL = 'https://api.themoviedb.org/3/movie/';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await fetchFromTMDbAPI(`${URL}${id}/credits`, {});
      setCast(res.cast);
    };

    if (id) {
      fetchCast();
    }
  }, [id]);

  return (
    <div>
      {!cast ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {cast.slice(0, 7).map(el => {
            return (
              <li key={el.id}>
                {el.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                    alt=""
                    width="150px"
                  />
                ) : (
                  <ThumbImage>No photos of {el.name}</ThumbImage>
                )}
                <p>{el.name}</p>
                <p>{el.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
