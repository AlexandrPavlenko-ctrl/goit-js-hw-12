import axios from 'axios';

const API_KEY = '55695918-3f0edaddc3daf06a90200e5d1';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  
  return axios.get(BASE_URL, { params })
    .then(response => {
      return response.data;
    });
}