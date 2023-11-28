import React from "react";
import apiConfig from "../api/apiConfig";

// import "./movieCard.scss";

const MovieCard = (props) => {
  const item = props.item;
  const profile = apiConfig.w500Image(item.profile_path);
  const bg = apiConfig.w500Image(
    item.poster_path || item.backdrop_path || profile
  );

  return (
    <div className="movie-card">
      <div className="poster-block">
        <img src={bg} alt="img" className="poster-img" />
      </div>
      <div className="text-block">
        <h2 className="title">{item.title || item.original_name}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
