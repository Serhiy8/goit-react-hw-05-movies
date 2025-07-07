import { Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import { Container, ThumbStats, SpanStyled, ListDetails, LinkStyled, ListStats, } from "./movieDetailsLayout.styled"
import BackLink from 'components/backLink/BackLink';

const MovieDetailsLayout = ({backLinkHref, handleBackClick, dataMovie, location}) => {
    return(
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
                      Vote average: {`${dataMovie.vote_average}`}
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
    )
}

export default MovieDetailsLayout;