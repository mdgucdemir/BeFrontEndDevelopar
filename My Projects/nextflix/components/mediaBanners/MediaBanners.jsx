import Banner from "../banner/Banner";
import MediaSwiper from "../mediaSwiper/MediaSwiper";
import styles from "./mediaBanner.module.css";

const MediaBanners = () => {
  return (
    <>
      <div className={styles.container}>
        <MediaSwiper title="now playing movies" mediaType="movie/now_playing" />
        <MediaSwiper title="popular movies" mediaType="movie/popular" />
        <MediaSwiper title="top rated movies" mediaType="movie/top_rated" />
        <MediaSwiper title="upcoming movies" mediaType="movie/upcoming" />
      </div>
      <div>
        <h2 className={styles.title}>trend tv shows</h2>
        <div className={styles.banner}>
          <Banner mediaType="trending/tv/day?" type="media" />
        </div>
      </div>
      <div className={styles.tv}>
        <MediaSwiper
          title="airing today tv series"
          mediaType="tv/airing_today"
        />
        <MediaSwiper title="on the air tv series" mediaType="tv/on_the_air" />
        <MediaSwiper title="popular tv series" mediaType="tv/popular" />
        <MediaSwiper title="top rated tv series" mediaType="tv/top_rated" />
      </div>
    </>
  );
};

export default MediaBanners;
