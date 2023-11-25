import React, { useEffect, useState } from "react";
import "./banner.scss";
import apiCongig from "../api/apiConfig";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from "swiper/modules";



const Banner = () => {
  const [movieItems, setMovieItems] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    // .then(data => console.log(data.results))
    .then(data => setMovieItems(data.results))
    .catch(err => console.error(err));

  // console.log(setMovieItems)

  return (
    <div className="banner-slide">
      <Swiper 
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}>
          {movieItems.map((item, i) =>(
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
  const background = apiCongig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

  return (
    <div className="hero-slide-item"
     style={{backgroundImage: `url(${background})`}}>
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
  )
}

export default Banner;
