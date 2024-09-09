"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";

const page = () => {
  const [selectedMediaType, setSelectedMediaType] = useState("movie");
  const [selectedMediaTime, setSelectedMediaTime] = useState("week");
  const [mediaData, setMediaData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  let mediaType = `trending/${selectedMediaType}/${selectedMediaTime}?page=${pageNum}`;

  const mediaChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMediaType(selectedValue);
    setMediaData([]);
    setPageNum(1);
  };

  const timeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMediaTime(selectedValue);
    setMediaData([]);
    setPageNum(1);
  };

  const mediaFetch = async () => {
    const data = await fetchEndPoint(mediaType);
    console.log(data);
    setMediaData((prevData) => [...prevData, ...data?.results]);
  };

  const loadMore = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    mediaFetch();
  }, [selectedMediaType, selectedMediaTime, pageNum]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Trend Movies and Tv Shows</h1>
      </div>
      <div className={styles.selector}>
        <select
          name="media"
          id="media"
          className={styles.mediaSelect}
          onChange={mediaChange}
        >
          <option value="">Select Media Type</option>
          <option value="movie">Movies</option>
          <option value="tv">Tv Shows</option>
        </select>

        <select
          name="time"
          id="time"
          className={styles.mediaSelect}
          onChange={timeChange}
        >
          <option value="">Select Media Time</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      </div>

      <div className={styles.mediaContainer}>
        {mediaData.map((item, i) => (
          <div className={styles.mediaItem} key={i}>
            <img
              src={apiImage.w500Image(item.backdrop_path)}
              alt={item.title}
            />
          </div>
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

export default page;
