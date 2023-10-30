import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);
  const storedMovieWatched = watched.find((moviee) => moviee.id === movie.id);
  const storedMovie = watchlist.find((moviee) => moviee.id === movie.id)
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
        />
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "no year information"}
          </h4>
          <h4 className="">
            TMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => {
              addMovieToWatchlist(movie);
            }}
            disabled={storedMovie}
          >
            Add To Watchlist
          </button>
          <button
            className="btn"
            onClick={() => {
              addMovieToWatched(movie);
            }}
            disabled={storedMovieWatched}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
