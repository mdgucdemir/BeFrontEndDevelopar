import Banner from "../banner/Banner";
import MediaSwiper from "../mediaSwiper/MediaSwiper";
import styles from "./mediaBanner.module.css";

const MediaBanners = () => {
  return (
    <>
      <div className={styles.container}>
        <MediaSwiper
          title="now playing movies"
          mediaType="movie/now_playing"
          type="movie"
        />
        <MediaSwiper
          title="popular movies"
          mediaType="movie/popular"
          type="movie"
        />
        <MediaSwiper
          title="top rated movies"
          mediaType="movie/top_rated"
          type="movie"
        />
        <MediaSwiper
          title="upcoming movies"
          mediaType="movie/upcoming"
          type="movie"
        />
      </div>
      <div>
        <h2 className={styles.title}>trending tv shows</h2>
        <div className={styles.banner}>
          <Banner mediaType="trending/tv/day?" type="media" />
        </div>
      </div>
      <div className={styles.tv}>
        <MediaSwiper
          title="airing today tv series"
          mediaType="tv/airing_today"
          type="tv"
        />
        <MediaSwiper
          title="on the air tv series"
          mediaType="tv/on_the_air"
          type="tv"
        />
        <MediaSwiper
          title="popular tv series"
          mediaType="tv/popular"
          type="tv"
        />
        <MediaSwiper
          title="top rated tv series"
          mediaType="tv/top_rated"
          type="tv"
        />
      </div>
    </>
  );
};

export default MediaBanners;
