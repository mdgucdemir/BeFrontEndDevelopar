import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchFetchApi } from "../../components/api/fetchApi";
import MovieCard from "../../components/movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./searchResult.scss";

const SearchResult = () => {
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const notHave = " Not Found";

  const fetchInitialData = () => {
    // setLoading(true);
    searchFetchApi(query, pageNum).then((res) => {
      setData(res);
      console.log(res);
      setPageNum((prev) => prev + 1);
      // setLoading(false);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      <div className="content-wrapper">
        {data?.results.length > 0 ? (
          <>
            <div className="page-title">{query}</div>
            <InfiniteScroll
              className="content"
              dataLength={data?.results?.length || []}
              next={fetchInitialData}
              hasMore={pageNum <= data?.total_pages}
            >
              {data?.results.map((item, i) => (
                <MovieCard key={i} item={item} mediaType={item.media_type} />
              ))}
            </InfiniteScroll>
          </>
        ) : (
          <span className="no-result">
            {query}
            {notHave}
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
