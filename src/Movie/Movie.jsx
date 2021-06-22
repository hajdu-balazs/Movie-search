import React from "react";
import "./Movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  title,
  poster_path,
  overview,
  release_date,
  vote_average
}) => (
  <div className="movie flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
          }
          alt={title}
        />
      </div>
      <div className="flip-box-back">
        <span className="vote_average">{vote_average}</span>
        <h2>Overview:</h2>
        <p className="overview-p">{overview}</p>
        <span className="release_date">Release date: {release_date}</span>
      </div>
    </div>
  </div>
);

export default Movie;
