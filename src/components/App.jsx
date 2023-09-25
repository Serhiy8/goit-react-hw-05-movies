import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../page/home/Home'));
const Movies = lazy(() => import('../page/movies/Movies'));
const Reviews = lazy(() => import('./review/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));
const SharedLayout = lazy(() => import('./sharedLayout/SharedLayout'));
const MoviesDetails = lazy(() => import('page/moviesDetails/MoviesDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
