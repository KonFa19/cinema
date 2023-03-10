import {Pagination} from "@mui/material";

import css from "./MoviesPage.module.css"
import {Genres, MovieList} from "../../components";
import {usePagination} from "../../hooks";

const MoviesPage = () => {
    const [handeCurrentPage, totalPage] = usePagination();

    return (
        <div className={css.container}>
            <Genres/>
            <MovieList/>

            <div className={css.pagination}>
                <Pagination color={"primary"} count={totalPage} shape="rounded" onChange={(e, page) => handeCurrentPage(page)}/>
            </div>

        </div>
    );
}

export {MoviesPage};