"use client";

import { useEffect, useState } from "react";
import styles from "./media.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";
import Link from "next/link";

// tv ilk eleman id = 10759
// movie ilk eleman id = 28

// discover/movie&with_genres=28

const Media = ({ media }) => {
  const [genre, setGenre] = useState([]);
  const [genreNum, setGenreNum] = useState(0);
  const [mediaData, setMediaData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  if (media === "tv" && genreNum === 0) {
    setGenreNum(10759);
    // console.log(genreNum);
  }
  if (media === "movie" && genreNum === 0) {
    setGenreNum(28);
    // console.log(genreNum);
  }

  const genreType = `genre/${media}/list`;
  const mediaType = `discover/${media}?with_genres=${genreNum}&page=${pageNum}`;

  const mediaGenre = async () => {
    await fetchEndPoint(genreType).then((data) => {
      setGenre(data?.genres);
      //   console.log(data.genres);
    });
  };

  const genreChange = (event) => {
    const selectedValue = event.target.value;
    // console.log("selected value : ", event.target.value);
    setGenreNum(selectedValue);
    setMediaData([]);
    setPageNum(1);
    return genreNum;
  };

  const mediaFetch = async () => {
    const data = await fetchEndPoint(mediaType);
    // console.log(data);
    setMediaData((prevData) => [...prevData, ...data?.results]);
  };

  const loadMore = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    mediaGenre();
    mediaFetch();
  }, [genreNum, pageNum]);

  return (
    <div className={styles.container}>
      <div className={styles.genre}>
        <select
          name="genre"
          id="genre"
          onChange={genreChange}
          className={styles.genreLists}
        >
          <option value="">
            Select {media === "movie" ? "Movie" : "Tv Series"} Category
          </option>
          {genre.map((item, i) => (
            <option value={item.id} key={i}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.mediaContainer}>
        {mediaData.map((item, i) => (
          <Link href={media === "movie" ? `movie/${item.id}` : `tv/${item.id}`}>
            <div className={styles.mediaItem} key={i}>
              <img
                src={apiImage.w500Image(item.backdrop_path)}
                alt={item.title}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.loadMore}>
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load Moare
        </button>
      </div>
    </div>
  );
};

export default Media;
