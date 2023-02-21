import {axiosService} from "./axiosService";


let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWQ0Nzc3ZmYxOWIyZTQ1OWJiNjMxNDYwYjc2MDcyZiIsInN1YiI6IjYzZjAyNGZkNTI0OTc4MDA4ZWZjOWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-qxANdz4w8JjmaZ6qoyiiQF0kH6wTcCIP3R8VX-B1I';

const serv = axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = token;

    return config
});



