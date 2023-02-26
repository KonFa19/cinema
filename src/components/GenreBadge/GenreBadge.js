import React from 'react';
import {Chip} from "@mui/material";

const GenreBadge = ({genre}) => {
    return (
        <div>
            <Chip style={{backgroundColor: 'orange', padding: 10, margin: 2}} size={"small"} label={genre.name}/>

        </div>

    );
};

export {
    GenreBadge
};