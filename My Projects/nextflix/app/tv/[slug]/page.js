import DetailFetch from "@/components/detailFetch/DetailFetch";
import React from "react";

const detailPage = ({ params }) => {
  const seriesId = params.slug;
  const mediaType = "tv";

  return (
    <div>
      <DetailFetch seriesId={seriesId} mediaType={mediaType} />
    </div>
  );
};

export default detailPage;
