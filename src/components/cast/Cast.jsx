import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbImage, CastThumb, ListOfActors, ListOfActorsItems, ActorsName } from './castStyle.styled';

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
    <CastThumb>
      {!cast ? (
        <div>Loading...</div>
      ) : (
        <ListOfActors>
          {cast.slice(0, 7).map(el => {
            return (
              <ListOfActorsItems key={el.id}>
                {el.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                    alt=""
                    width="150px"
                  />
                ) : (
                  <ThumbImage>No photos of {el.name}</ThumbImage>
                )}
                <ActorsName>{el.name} as {el.character}</ActorsName>
              </ListOfActorsItems>
            );
          })}
        </ListOfActors>
      )}
    </CastThumb>
  );
};

export default Cast;
