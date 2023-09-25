import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect, Suspense } from 'react';
import BackLink from 'components/backLink/BackLink';
import {
  Container,
  ThumbStats,
  SpanStyled,
  ListDetails,
  LinkStyled,
  ListStats,
} from './Test.styled';

const URL = 'https://api.themoviedb.org/3/movie/';

const Test = () => {
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
    <main>
      <BackLink to={backLinkHref} onClick={handleBackClick}>
        Back to movies
      </BackLink>
      <div>
        {dataMovie && (
          <div>
            <Container>
              <img
                src={`https://image.tmdb.org/t/p/w200/${dataMovie.poster_path}`}
                alt=""
              />
              <ThumbStats>
                <h2>{dataMovie.title}</h2>
                <ListStats>
                  <li>
                    <p>
                      User score: {`${Math.ceil(dataMovie.vote_average * 10)}%`}
                    </p>
                  </li>
                  <li>
                    <p>
                      <SpanStyled>Overview:</SpanStyled>
                      <br />
                      {dataMovie.overview}
                    </p>
                  </li>
                  <li>
                    <p>
                      <SpanStyled>Genres:</SpanStyled>
                      <br />
                      {dataMovie.genres.map(el => el.name).join(' ')}
                    </p>
                  </li>
                </ListStats>
              </ThumbStats>
            </Container>
            <ListDetails>
              <li>
                <LinkStyled to="cast" state={location.state}>
                  Cast
                </LinkStyled>
              </li>
              <li>
                <LinkStyled to="reviews" state={location.state}>
                  Reviews
                </LinkStyled>
              </li>
            </ListDetails>

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
    </main>
  );
};

export default Test;
