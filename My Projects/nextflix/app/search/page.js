"use client";

import styles from "./page.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

const page = () => {
  const [mediaData, setMediaData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  // const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const movieSearchUrl = `/search/movie?query=${query}&page=${pageNum}`;

  const loadMore = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const mediaFetch = async () => {
    const data = await fetchEndPoint(movieSearchUrl);
    console.log(data);
    setMediaData((prevData) =>
      pageNum === 1 ? data?.results : [...prevData, ...data?.results]
    );
  };

  useEffect(() => {
    setMediaData([]); // Yeni arama yapıldığında eski veriyi sıfırla
    setPageNum(1); // Sayfa numarasını sıfırla
  }, [query]);

  useEffect(() => {
    if (query) {
      mediaFetch();
    }
  }, [query, pageNum]);

  return (
    <div className={styles.container}>
      {mediaData.length > 0 ? (
        <>
          <div className={styles.title}>
            <h1>{query}</h1>
          </div>
          <div className={styles.mediaContainer}>
            {mediaData.map((item, i) => (
              <div className={styles.mediaItem} key={i}>
                <Link href={`movie/${item.id}`}>
                  <img
                    src={apiImage.w500Image(item.backdrop_path)}
                    alt={item.title}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.loadMore}>
            <button onClick={loadMore} className={styles.loadMoreButton}>
              Load Moare
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noData}>
          <h1>No movie {query} just like that</h1>
        </div>
      )}
    </div>
  );
};

export default page;
