import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import "swiper/css"; // bu olmaz ise resimler alt alta gozukuyor

// import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import Button, { OutlineButton } from "../button/Button";
import Modal, { ModalContent } from "../modal/Modal";

import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";

const HeroSlide = () => {

  const [movieItems, setMovieItems] = useState([]);  

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 19));
        
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}      
    </div>
  );
};

const HeroSlideItem = (props) => {
  let navigate = useNavigate();

  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal_content > iframe")
        .setAttribute('src', videoSrc);
    } else {
      modal.querySelector("modal_content_close");      
    }
    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide_item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide_item_content container">
        <div className="hero-slide_item_content_info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              onClick={setModalActive}            
            >
              Watch Trailer
            </Button>
            <OutlineButton onClick={() => navigate(`/movie/${item.id}`)}>
              Get Info Movie             
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide_item_content_poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"          
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
