import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../components/api/fetchApi";
import MovieCard from "../../components/movieCard/MovieCard";
import "./discover.scss";

const Discover = () => {
  const { media, mediaType } = useParams();
  const [movie, setMovie] = useState([]);

  const header = media === "movie" ? "Movies" : "Tv Shows";
  let header_type = "";

  if (mediaType === "popular") {
    header_type = "Popular";
  } else if (mediaType === "top_rated") {
    header_type = "Top Rated";
  } else if (mediaType === "upcoming") {
    header_type = "Up Coming";
  } else if (mediaType === "airing_today") {
    header_type = "Airing Today";
  } else {
    header_type = "On The Air";
  }

  useEffect(() => {
    fetchApi(media, mediaType).then((data) => setMovie(data));
  }, [media, mediaType]);

  console.log(movie);

  return (
    <div className="discover">
      <div className="dicover-wrapper">
        <div className="discover-header">{header_type + " " + header}</div>
        <div className="grid-container">
          {movie.map((item, i) => (
            <div className="grid-item">
              <MovieCard key={i} item={item} mediaType={media} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
