import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard/MovieCard";
import "../style.scss";
import { useNavigate } from "react-router-dom";

const OnTheAir = () => {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi("tv", "on_the_air").then((data) => setTvShows(data));
  }, []);
  return (
    <div className="movie-list">
      <div className="movie-list-top">
        <div className="movie-list-top-header">On The Air Tv Shows</div>
        <div
          className="movie-list-top-more"
          onClick={() => navigate("discover/tv/on_the_air")}
        >
          View More
        </div>
      </div>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {tvShows.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} mediaType={"tv"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OnTheAir;
