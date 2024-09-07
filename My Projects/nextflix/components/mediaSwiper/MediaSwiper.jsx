import styles from "./mediaSwiper.module.css";
import { useEffect, useState } from "react";
import { apiImage, fetchEndPoint } from "@/api/connect";
import Image from "next/image";
import Slider from "react-slick";

const MediaSwiper = ({ title, mediaType }) => {
  const [movieItems, setMovieItems] = useState([]);

  const getData = async () => {
    const data = await fetchEndPoint(mediaType).then((data) => {
      setMovieItems(data?.results);
    });

    return data;
  };

  useEffect(() => {
    getData();
    console.log(movieItems);
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
        breakpoint: 1388,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
              <Image
                src={apiImage.w500Image(item.poster_path)}
                alt={item.title}
                width={200}
                height={300}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaSwiper;
