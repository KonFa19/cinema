import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWQ0Nzc3ZmYxOWIyZTQ1OWJiNjMxNDYwYjc2MDcyZiIsInN1YiI6IjYzZjAyNGZkNTI0OTc4MDA4ZWZjOWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-qxANdz4w8JjmaZ6qoyiiQF0kH6wTcCIP3R8VX-B1I'

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    axiosService
}