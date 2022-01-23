import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '71ef5f23399ff2197dee2be4b20aa1e3';

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
const fetchTrandingMovies = () => {
    return axios
        .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&include_adult=false`)
        .then(response => response.data.results)
        .catch(error => error);
};

// поиск кинофильма по ключевому слову на странице фильмов.
const fetchQueryMovies = (query) => {
    return axios
        .get(
            `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`,
        )
        .then(response => response.data.results)
        .catch(error => error);
};

//страница с детальной информацией о кинофильме.
const fetchMovieById = id => {
    return axios
        .get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US&include_adult=false`)
        .then(response => response.data)
        .catch(error => error);
};

//информация о актерском составе. 
const fetchCastById = id => {
    return axios
        .get(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&include_adult=false`)
        .then(response => response.data)
        .catch(error => error);
};

//информация об обзорах.
const fetchReviewsById = id => {
    return axios
        .get(
            `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
        )
        .then(response => response.data)
        .catch(error => error);
};

export { fetchTrandingMovies, fetchQueryMovies, fetchMovieById, fetchCastById, fetchReviewsById };

