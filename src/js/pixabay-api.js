import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49355528-35596c2c6a34b438a74657cc9';

export async function fetchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,       
                per_page: perPage, 
            },
        });

        if (response.data.hits.length === 0) {
            return [];
        }

        return response.data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}