import React, { useState, useEffect } from 'react';
import MoviesList from 'components/moviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchFromTMDbAPI } from 'API';
import { ThumbForm, FormSearch, FormInput, FormButton } from './Movies.styled';

const URL = 'https://api.themoviedb.org/3/search/movie';

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
      const res = await fetchFromTMDbAPI(URL, { query });
      if (res) {
        setDataMovies(res.results);
      }
    } catch (error) {
      console.error('An error occurred while searching for movies:', error);
    }
  };

  return (
    <ThumbForm>
      <FormSearch>
        <FormInput
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormButton type="button" onClick={handleSearchClick}>
          Search
        </FormButton>
      </FormSearch>
      <MoviesList dataMovies={dataMovies} />
    </ThumbForm>
  );
};

export default Movies;
