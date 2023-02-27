import {Button} from "@mui/material";
import {useContext} from "react";

import css from './SingleMovieDetails.module.css';
import {ThemeContext} from "../../App";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const SingleMovieDetails = ({currentMovie, trailerInfo}) => {

    const {
        title,
        original_language,
        overview,
        release_date,
        genres,
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

                    <div className={css.badge}>
                        {
                            genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                        }
                    </div>

                    <br/>
                    <span>Language: {original_language}</span>
                    <br/>
                    <span>About: {overview}</span>
                    <br/>
                    <span>Release: {release_date}</span>
                    <br/>
                    <span>Rating: {vote_average}</span>

                    <div className={css.trailer}>

                        <iframe

                            width="410"
                            height="215"
                            src={`https://www.youtube.com/embed/${trailerKey.key}?autoplay=1&origin=https://example.com`}
                            />

                    </div>

                </div>






            </div>


        </div>
    );
}

export {SingleMovieDetails};