import fetchCastIPA from './castAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbImage } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await fetchCastIPA(id);
      setCast(res.cast);
    };

    if (id) {
      fetchCast();
    }
  }, [id]);

  return (
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
  );
};

export default Cast;
