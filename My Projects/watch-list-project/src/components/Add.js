import React, { useState } from "react";
import ResultCard from "./ResultCard";


const Add = () => { 
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value); // yazilan degerleri state te tutma

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((err) => console.error(err));
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt="projectImage"
          />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>
              Millions of Movies And TV Shows, Series, Actors and Actress.
            </h2>
            <h2>Discover Now</h2>            
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search Movie, Series, Actors and Actress"
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
