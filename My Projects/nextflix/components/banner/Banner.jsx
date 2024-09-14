// "use client";

import { useEffect, useState } from "react";
import styles from "./banner.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";

import Slider from "react-slick";

import Image from "next/image";
import Loading from "../loading/Loading";

const Banner = ({ mediaType, type }) => {
  const [movieItems, setMovieItems] = useState([]);

  const getData = async () => {
    const data = await fetchEndPoint(mediaType).then((data) => {
      setMovieItems(data?.results);
      // console.log(data?.results);
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
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <>
      {movieItems.length > 0 ? (
        <div
          className={`${type === "banner" ? styles.bennerSlide : ""} ${
            type === "media" ? styles.banner : ""
          }`}
        >
          <Slider {...settings}>
            {movieItems.map((item, i) => (
              <div className={styles.item} key={i}>
                <Image
                  src={apiImage.originalImage(
                    item.backdrop_path ? item.backdrop_path : item.poster_path
                  )}
                  alt={item.original_name}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Banner;
