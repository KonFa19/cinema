import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import css from './MovieListCard.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../App";


const MovieListCard = ({movie}) => {
    const {title, poster_path,vote_average} = movie;

    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const setMovie = () => {
        navigate(`${movie.id}`)

    }


    return (
        <div className={css.Card} onClick={setMovie} data-theme={theme}>

            <div className={css.CardInfo}>

                <img className={css.photo} src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:`https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`} alt={title}/>

                <div className={css.info}>

                    <div className={css.name}>
                        <h3 >{title}</h3>
                    </div>
                    <div className={css.infoRating}>

                        <span >Rating: {vote_average}</span>

                        <StarRatings className={css.rating}
                                     rating={vote_average}
                                     starRatedColor="orange"
                                     numberOfStars={10}
                                     name="rating"
                                     starDimension="15px"
                                     starSpacing="0px"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export {MovieListCard};

