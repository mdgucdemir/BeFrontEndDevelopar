"use client";

import styles from "./page.module.css";
import { apiImage, fetchEndPoint } from "@/api/connect";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import Loading from "@/components/loading/Loading";

const page = () => {
  const [mediaData, setMediaData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const movieSearchUrl = `/search/movie?query=${query}&page=${pageNum}`;

  const loadMore = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const mediaFetch = async () => {
    setLoading(true);
    const data = await fetchEndPoint(movieSearchUrl);
    // console.log(data);
    setMediaData((prevData) =>
      pageNum === 1 ? data?.results : [...prevData, ...data?.results]
    );
    setTotalPages(data.total_pages);
    setLoading(false);
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
            <button
              onClick={loadMore}
              className={styles.loadMoreButton}
              disabled={pageNum >= totalPages}
              style={{
                cursor: pageNum >= totalPages ? "not-allowed" : "pointer",
              }}
            >
              Load More
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noData}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <h1>No movie {query} just like that</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
