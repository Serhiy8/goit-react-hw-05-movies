import axios from 'axios';

const API_KEY = '41a9bd102e179fa30264e53fd1d70534';

export const fetchFromTMDbAPI = async (endpoint, queryParams) => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        api_key: API_KEY,
        ...queryParams,
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
