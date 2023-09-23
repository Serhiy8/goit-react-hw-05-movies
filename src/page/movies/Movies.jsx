import React, { useState, useEffect } from 'react';
import MoviesList from 'components/moviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import fetchByMovieIPA from './byMovieAPI';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataMovies, setDataMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setInputValue(query);
      searchMovies(query);
    }
  }, [query]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (!inputValue) {
      setSearchParams({});
      setDataMovies([]);
      return;
    }
    setSearchParams({ query: inputValue });
    searchMovies(inputValue);
  };

  const searchMovies = async query => {
    try {
      const res = await fetchByMovieIPA(query);
      setDataMovies(res.results);
    } catch (error) {
      console.error('Помилка під час пошуку фільмів:', error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
      </form>
      <MoviesList dataMovies={dataMovies} />
    </div>
  );
};

export default Movies;
