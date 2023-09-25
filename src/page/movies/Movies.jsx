import React, { useState, useEffect } from 'react';
import MoviesList from 'components/moviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchFromTMDbAPI } from 'API';
import { ThumbForm, FormSearch, FormInput, FormButton } from './Movies.styled';

const URL = 'https://api.themoviedb.org/3/search/movie';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataMovies, setDataMovies] = useState([]);
  const [notFound, setNotFounf] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setInputValue(query);
      searchMovies(query);
      setInputValue('');
    }
  }, [query]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
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
      const res = await fetchFromTMDbAPI(URL, { query });
      if (res.total_results === 0) {
        setNotFounf(true);
        return;
      }
      setDataMovies(res.results);
      setNotFounf(false);
    } catch (error) {
      console.error('An error occurred while searching for movies:', error);
    }
  };

  return (
    <ThumbForm>
      <FormSearch onSubmit={handleSearchClick}>
        <FormInput
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormButton type="submit">Search</FormButton>
      </FormSearch>
      {notFound ? (
        <div>Nothing was found for your request.</div>
      ) : (
        <MoviesList dataMovies={dataMovies} />
      )}
    </ThumbForm>
  );
};

export default Movies;
