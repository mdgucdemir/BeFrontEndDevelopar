import React from "react";
import apiConfig from "../api/apiConfig";
import { useNavigate } from "react-router-dom";

import "./movieCard.scss";

const MovieCard = (props) => {
  const item = props.item;
  const mediaType = props.mediaType;
  const navigate = useNavigate();
  const profile = apiConfig.w500Image(item.profile_path);
  const bg = apiConfig.w500Image(
    item.poster_path || item.backdrop_path || profile
  );

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/${mediaType}/${item.id}`)}
    >
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
