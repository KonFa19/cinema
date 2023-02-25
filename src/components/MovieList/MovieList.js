import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

import {ThemeContext} from "../../App";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'


const MovieList = () => {

    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);

    const {movies, currentPage,loading} = useSelector(state => state.movieReducer);
    const {genre} = useSelector(state => state.genreReducer);


    useEffect(() => {
        dispatch(movieActions.getAllByPage({currentPage, genre}))

    }, [currentPage,genre]);

    return (
        <div className={css.container}>
            {loading&&<h1>Loading... <HourglassBottomIcon/></h1>}
            <div className={css.wrap} data-theme={theme}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}

            </div>
        </div>

    )
}

export {MovieList};
