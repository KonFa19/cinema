const baseURL = 'https://api.themoviedb.org/3';
let posterURL = 'https://image.tmdb.org/t/p/w500';

let urls = {

    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/movie?query=',

}


export {
    baseURL,
    urls,
    posterURL
}