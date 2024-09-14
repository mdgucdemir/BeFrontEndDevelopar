"use client";

import styles from "./mediaSwiper.module.css";
import { useEffect, useState } from "react";
import { apiImage, fetchEndPoint } from "@/api/connect";
import Slider from "react-slick";
import Link from "next/link";

const MediaSwiper = ({ title, mediaType, type }) => {
  const [movieItems, setMovieItems] = useState([]);

  const getData = async () => {
    const data = await fetchEndPoint(mediaType).then((data) => {
      setMovieItems(data?.results);
    });

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.slider}>
        <Slider {...settings}>
          {movieItems.map((item, i) => (
            <div className={styles.imageWrapper} key={i}>
              <Link href={`${type}/${item.id}`}>
                <img
                  src={apiImage.w500Image(item.poster_path)}
                  alt={item.original_title}
                  className={styles.image}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaSwiper;
