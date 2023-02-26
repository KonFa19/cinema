import {Button} from "@mui/material";
import {useContext} from "react";

import css from './SingleMovieDetails.module.css';
import {ThemeContext} from "../../App";

const SingleMovieDetails = ({currentMovie, trailerInfo}) => {

    const {
        title,
        original_language,
        overview,
        release_date,
        poster_path,
        vote_average
    } = currentMovie;

    const {theme} = useContext(ThemeContext);

    const trailerKey = trailerInfo.find(trailerInfo => trailerInfo.type === "Trailer");
    const linkTrailer = (trailerKey?.key) ? `https://www.youtube.com/watch?v=${trailerKey.key}` : ""


    return (
        <div className={css.container} data-theme={theme}>
            <div className={css.poster}>
                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.info}>
                <h2>{title}</h2>
                <div className={css.data}>
                    <br/>
                    <span>Language: {original_language}</span>
                    <br/>
                    <span>About: {overview}</span>
                    <br/>
                    <span>Release: {release_date}</span>
                    <br/>
                    <span>Rating: {vote_average}</span>

                    <div className={css.trailer}>
                        <Button disabled={!linkTrailer} variant="contained"
                                href={linkTrailer}>Watch trailer</Button>
                    </div>

                </div>

            </div>


        </div>
    );
}

export {SingleMovieDetails};