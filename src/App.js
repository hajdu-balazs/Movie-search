import React, { useState } from "react";

import "./App.css";
import Movie from "./Movie/Movie";

const api_key = "8dfdfd76c21d4d0227af54af4f2a59b7";

const API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API + search)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-h1">Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search.."
            onChange={handleChange}
            value={search}
            required
          />
          <input className="submit" type="submit" value="Search" />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </>
  );
}

export default App;
