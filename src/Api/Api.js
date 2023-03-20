import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "e617ff1e84bbb8eb2bb7d4cad926b1c5";

const endpoints = {
    orignals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}