import React from "react";
import "./Movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-list">
        <h5 className="head">{title}</h5>
        <span className="rating">
          ⭐<b>{vote_average}</b>
        </span>
      </div>
      <div>
        <span class="d-inline-block text-truncate" style={{ maxWidth: "100%" }}>
          {overview}
        </span>
      </div>
    </div>
  );
};
export default Movie;
