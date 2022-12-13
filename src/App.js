import { useEffect, useState } from "react";
import "./assets/style/App.css";
import MovieCard from "./components/MovieCard";

import SearchIcon from "./assets/img/search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=50436b93";

const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

const App = () => {
  const [movies, setMovies] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input type="search" placeholder="Search for movies" value="Superman" onChange={() => {}}/>
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        {
          movies?.length > 0
          ? (
            <MovieCard movie1={movies[0]} />
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
