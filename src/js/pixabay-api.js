import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49355528-35596c2c6a34b438a74657cc9';

export function fetchImages(query) {
  return axios
    .get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then((response) => response.data.hits) 
    .catch((error) => {
      console.error('Error fetching images:', error);
      throw new Error('Failed to fetch images'); 
    });
}