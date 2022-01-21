import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '71ef5f23399ff2197dee2be4b20aa1e3';


const fetchTrandingMovies = () => {
    return axios
        .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
        .then(response => response.data.results)
        .catch(error => error);
};

export { fetchTrandingMovies };
