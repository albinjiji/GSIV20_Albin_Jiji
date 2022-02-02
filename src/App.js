import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=099513b85069606d79af91395105b21e&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=099513b85069606d79af91395105b21e&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
