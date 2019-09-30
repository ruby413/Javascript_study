import React from 'react';
import './Movie.css';

function Movie() {
  return (
    <div>
        <MoviePoster></MoviePoster>
        <h1>hello this is Movie</h1>
    </div>
  );
}

function MoviePoster() {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src = "https://img.hankyung.com/photo/201908/2019073106502917421-540x770.jpg"/>
    )
}

export default Movie;
