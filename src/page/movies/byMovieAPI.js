// API key 41a9bd102e179fa30264e53fd1d70534
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '41a9bd102e179fa30264e53fd1d70534';

const fetchByMovieIPA = async inputValue => {
  try {
    const response = await axios.get(URL, {
      params: {
        api_key: API_KEY,
        query: inputValue,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Invalid response from the API');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default fetchByMovieIPA;
