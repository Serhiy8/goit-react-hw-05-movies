// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// API key 41a9bd102e179fa30264e53fd1d70534
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '41a9bd102e179fa30264e53fd1d70534';

const fetchReviewsIPA = async movie_id => {
  try {
    const response = await axios.get(`${URL}${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
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

export default fetchReviewsIPA;
