import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Switch} from "@mui/material";

import {ThemeContext} from "../../App";
import css from './Header.module.css';
import {movieActions} from "../../redux";


const Header = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState();
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();
    const {toggle, theme} = useContext(ThemeContext);

    const search = () => {
        dispatch(movieActions.getBySearch({query}));
        reset();
    }

    return (

        <div className={css.main} data-theme={theme}>

            <div className={css.search}>
                <form onSubmit={handleSubmit(search)}>
                    <input type={"text"} placeholder={'search movie'} {...register('search movie')}
                           onChange={(e) => setQuery(e.target.value)}/>
                </form>
            </div>


            <div className={css.name}>
                <h2 onClick={() => navigate('/movies')}>Cinema</h2>
            </div>


            <div className={css.info}>

                <div className={css.themeSwitcher}>

                    <span>{theme === 'light' ? 'theme' : 'theme'}</span>
                    <Switch height={20} checked={theme === 'dark'} onChange={toggle}/>

                </div>


                <div className={css.user}>
                    <AccountCircleIcon fontSize={"large"}/>
                    <h4>User</h4>
                </div>
            </div>


        </div>
    );
}

export {Header};
