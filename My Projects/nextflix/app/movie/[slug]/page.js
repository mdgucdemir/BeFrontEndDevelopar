import DetailFetch from "@/components/detailFetch/DetailFetch";
import React from "react";

const detailPage = ({ params }) => {
  const movieId = params.slug;
  const mediaType = "movie";

  return (
    <div>
      <DetailFetch seriesId={movieId} mediaType={mediaType} />
    </div>
  );
};

export default detailPage;
