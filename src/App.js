import React, { useState, useEffect } from "react";
import "./App.css";
import { AiFillHome } from "react-icons/ai";
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
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="searchinput"
            type="text"
            placeholder="&#61442;Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>

        <div className="home">
          <a href="/" className="logo" style={{ textDecoration: "none" }}>
            <AiFillHome className="icon" size={35} />
          </a>
        </div>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
