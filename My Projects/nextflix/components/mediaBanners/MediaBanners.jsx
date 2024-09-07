import MediaSwiper from "../mediaSwiper/MediaSwiper";
import styles from "./mediaBanner.module.css";

const MediaBanners = () => {
  return (
    <div className={styles.container}>
      <MediaSwiper title="now playing movies" mediaType="movie/now_playing" />
    </div>
  );
};

export default MediaBanners;
