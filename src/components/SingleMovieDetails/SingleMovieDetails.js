import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";

import css from './SingleMovieDetails.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../App";


function SingleMovieDetails({currentMovie, trailerInfo}) {
    const {
        title,
        original_language,
        original_title,
        overview,
        release_date,
        poster_path,
        id,
        vote_average
    } = currentMovie;
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const trailerKey = trailerInfo.find(trailerInfo => trailerInfo.type === "Trailer");
    const linkTrailer = (trailerKey?.key) ? `https://www.youtube.com/watch?v=${trailerKey.key}` : ""


    return (
        <div className={css.container} data-theme={theme}>
            <div className={css.poster}>
                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.info}>
                <div className={css.data}>
                    <span>Language: {original_language}</span>
                    <span>Name: {original_title}</span>
                    <span>About: {overview}</span>
                    <span>Release: {release_date}</span>
                    <span>Rating: {vote_average}</span>

                    <div className={css.trailer}>
                        <Button className={css.trailerBtn} disabled={!linkTrailer} variant="contained"
                                href={linkTrailer}>Watch trailer</Button>
                    </div>

                </div>

                <div className={css.btn}>
                    <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
                </div>


            </div>


        </div>
    );
}

export {SingleMovieDetails};