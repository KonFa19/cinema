import {Navigate, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";

import './App.css';
import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";


const ThemeContext=createContext(null)

const App = () =>  {
    const [theme, setTheme] = useState('light');

    const toggle=()=>{
        setTheme((curr)=>curr==='light'?'dark':'light')
    }

    return (
        <ThemeContext.Provider value={{theme,toggle}}>
            <div className="App" data-theme={theme}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'/movies'}/>}/>
                        <Route path={'/movies'} element={<MoviesPage/>}/>
                        <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </ThemeContext.Provider>

    );
}

export {
    App,
    ThemeContext};
