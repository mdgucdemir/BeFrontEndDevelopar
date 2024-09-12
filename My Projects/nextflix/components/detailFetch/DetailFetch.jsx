"use client";

import { fetchEndPoint } from "@/api/connect";
import Details from "@/components/details/Details";
import Loading from "@/components/loading/Loading";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const DetailFetch = ({ seriesId, mediaType }) => {
  const [details, setDetails] = useState(null);
  const [casts, setCasts] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [videos, setVideos] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      const details = await fetchEndPoint(`${mediaType}/${seriesId}`);
      setDetails(details);
    } catch (error) {
      console.error("Failed fetch to details");
    }
  };

  const fetchCasts = async () => {
    try {
      const casts = await fetchEndPoint(`${mediaType}/${seriesId}/credits`);
      setCasts(casts.cast);
    } catch (error) {
      console.error("Failed fetch to casts");
    }
  };

  const fetchRecommend = async () => {
    try {
      const recommend = await fetchEndPoint(
        `${mediaType}/${seriesId}/recommendations`
      );
      setRecommend(recommend.results);
    } catch (error) {
      console.error("Failed fetch to recommend");
    }
  };

  const fetchSimilar = async () => {
    try {
      const similar = await fetchEndPoint(`${mediaType}/${seriesId}/similar`);
      setSimilar(similar.results);
    } catch (error) {
      console.error("Failed fetch to similar");
    }
  };

  const fetchVideos = async () => {
    try {
      const videos = await fetchEndPoint(`${mediaType}/${seriesId}/videos`);
      setVideos(videos.results);
    } catch (error) {
      console.error("Failed fetch to videos");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchDetails(),
        fetchCasts(),
        fetchRecommend(),
        fetchSimilar(),
        fetchVideos(),
      ]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {details && casts && recommend && similar && videos ? (
        <Details
          details={details}
          casts={casts}
          recommend={recommend}
          similar={similar}
          videos={videos}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailFetch;
