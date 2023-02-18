// categories: popular, top_rated, upcoming, now_playing, latest

import axios from "axios";

let data = null;
const getMovies = async (category) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=8dcdea275c0a468097e488e155319ca3&language=en-US&page=1`);
    data = response.data;
    return data;
}

export const getMovie = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8dcdea275c0a468097e488e155319ca3&language=en-US`);
    data = response.data;
    return data;
}

export default getMovies

