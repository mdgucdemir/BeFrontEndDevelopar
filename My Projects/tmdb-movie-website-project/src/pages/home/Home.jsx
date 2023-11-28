import React from "react";
import Banner from "../../components/banner/Banner";
import PopularMovie from "../../components/moviesAndTvShow/movies/PopularMovie";
import TopRated from "../../components/moviesAndTvShow/movies/TopRated";
import UpComing from "../../components/moviesAndTvShow/movies/UpComing";
import AiringTodayTv from "../../components/moviesAndTvShow/tvShows/AiringTodayTv";
import Popular from "../../components/moviesAndTvShow/tvShows/Popular";
import TopRatedTv from "../../components/moviesAndTvShow/tvShows/TopRated";
import OnTheAir from "../../components/moviesAndTvShow/tvShows/OnTheAir";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularMovie />
      <TopRated />
      <UpComing />
      <AiringTodayTv />
      <Popular />
      <TopRatedTv />
      <OnTheAir />
    </div>
  );
};

export default Home;
