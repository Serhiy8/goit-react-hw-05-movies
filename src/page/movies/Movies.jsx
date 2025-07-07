import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFromTMDbAPI } from 'API';
import MoviesLayout from 'components/moviesLayout/MoviesLayout';
import { toast } from 'react-toastify';

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

  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.warning('Please enter you value.')
      return;
    }
    if(inputValue.trim() !== ''){
      setSearchParams({ query: inputValue });
      searchMovies(inputValue);
    }
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
    <div className='container'>
      <MoviesLayout
        inputValue={inputValue}
        movies={dataMovies}
        notFound={notFound}
        onChange={handleInputChange}
        onSubmit={handleSearchClick}
      />
    </div>
  );
};

export default Movies;
