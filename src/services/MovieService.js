import axios from 'axios';
const URL = import.meta.env.VITE_API_BASE_URL;

const getPopular = (page = 1) => {
    return axios.get(`${URL}/popular?page=${page}`); // Matches backend route
};

const getUpcoming = (page = 1) => {
    return axios.get(`${URL}/upcoming?page=${page}`); // Matches backend route
};

const getSearch = (queryTerm = "") => {
    return axios.get(`${URL}/search?query=${queryTerm}`); // Matches backend route
};

const getMovie = (id) => {
    return axios.get(`${URL}/movie/${id}`); // Matches backend route
};

const getCredits = (id) => {
    return axios.get(`${URL}/movie/${id}/credits`); // Matches backend route
};

export default {
    getPopular,
    getUpcoming,
    getSearch,
    getMovie,
    getCredits
}