import Home from 'page/home/Home';
import Movies from 'page/movies/Movies';
import Reviews from './review/Reviews';
import Cast from './cast/Cast';
import SharedLayout from './sharedLayout/SharedLayout';
import MoviesDetails from 'page/moviesdetails/MoviesDetails';
import { Route, Routes } from 'react-router-dom';

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
