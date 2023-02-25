import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {SingleMovieDetails} from "../SingleMovieDetails/SingleMovieDetails";
import css from './SingleMovie.module.css';
import {Button} from "@mui/material";


function SingleMovie() {
    const dispatch = useDispatch();


    const {currentMovie, loading, trailer} = useSelector(state => state.movieReducer);
    console.log(trailer);
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getById({id}))

    },[id])

    useEffect(() => {
        dispatch(movieActions.getTrailerById({id}))
    },[id])


    const navigate = useNavigate();

    return (
        <div className={css.moviePage}>
            <div className={css.currentMovie}>
                {loading && <h1>Loading.....</h1>}
                {currentMovie &&
                    <SingleMovieDetails key={currentMovie.id} currentMovie={currentMovie} trailerInfo={trailer}/>}

            </div>

            <div className={css.btn}>
                <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
            </div>

        </div>
    )
}

export {SingleMovie};