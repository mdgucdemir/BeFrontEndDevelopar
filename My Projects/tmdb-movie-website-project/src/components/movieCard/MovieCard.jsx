import React from "react";
import apiCongig from "../api/apiConfig";
import dayjs from "dayjs";

const MovieCard = (props) => {
  const item = props.item;
  console.log(item);
  const bg = apiCongig.w500Image(item.poster_path || item.backdrop_path);
  //   console.log(bg);
  return (
    <div className="movie-card">
      <div className="poster-block">
        <img src={bg} alt="img" className="poster-img" />
      </div>
      <div className="text-block">
        <h2 className="title">{item.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
