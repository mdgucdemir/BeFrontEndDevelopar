import React, { useEffect, useState } from "react";
import "./banner.scss";
import apiCongig from "../api/apiConfig";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { fetchApi } from "../api/fetchApi";

const Banner = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    fetchApi("movie", "upcoming").then((data) => setMovieItems(data));
  }, []);

  return (
    <div className="banner-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems?.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;
  const background = apiCongig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className="hero-slide-item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide-item-content">
        <div className="hero-slide-item-content-info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
        </div>
        <div className="hero-slide-item-content-poster">
          <img src={apiCongig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
