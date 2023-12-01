import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";

import "../style.scss";
import { useNavigate } from "react-router-dom";

const TopRated = () => {
  const [movie, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi("movie", "top_rated").then((data) => setMovies(data));
  }, []);
  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">Top Rated Movies</div>
        <div
          className="movie-list-top-more"
          onClick={() => navigate("discover/movie/top_rated")}
        >
          View More
        </div>
      </div>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {movie.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} mediaType={"movie"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRated;
