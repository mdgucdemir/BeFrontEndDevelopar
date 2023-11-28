import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";

import "../style.scss";

const PopularMovie = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetchApi("movie", "popular").then((data) => setMovies(data));
  }, []);
  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">Popular Movies</div>
        <div className="movie-list-top-more">View More</div>
      </div>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {movie.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMovie;
