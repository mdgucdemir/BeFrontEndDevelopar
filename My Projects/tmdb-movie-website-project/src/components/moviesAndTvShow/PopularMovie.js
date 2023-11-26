import React, { useEffect, useState } from "react";
import { fetchApi } from "../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../movieCard/MovieCard";
import "./style.scss";

const PopularMovie = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetchApi("movie", "popular").then((data) => setMovies(data));
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
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
