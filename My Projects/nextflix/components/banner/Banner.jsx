// "use client";

import { useEffect, useState } from "react";
import styles from "./banner.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";

import Slider from "react-slick";

import Image from "next/image";

const Banner = () => {
  const [movieItems, setMovieItems] = useState([]);

  const getData = async () => {
    const data = await fetchEndPoint("movie/upcoming").then((data) => {
      setMovieItems(data?.results);
    });

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <div className={styles.bennerSlide}>
      <Slider {...settings}>
        {movieItems.map((item, i) => (
          <div className={styles.item} key={i}>
            <Image
              src={apiImage.originalImage(
                item.backdrop_path ? item.backdrop_path : item.poster_path
              )}
              alt={item.title}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
