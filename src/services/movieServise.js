import {axiosService} from "./axiosService";

const movieServise = {
    getAllMovies: ()=> axiosService(),
    getMovie: ()=> axiosService(),
    searchMovie: ()=> axiosService(),
}