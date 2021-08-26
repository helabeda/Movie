import React from 'react';
import MoviesCard from './MoviesCard';
import { Link } from "react-router-dom";

const MovieList = ({movie}) => {
    return (
        <div className="list">
            {movie.map((e) => 
                <MoviesCard film={e}/>
            )}

        </div>
    )
}

export default MovieList
