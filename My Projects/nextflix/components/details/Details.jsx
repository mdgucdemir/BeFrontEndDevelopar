import styles from "./details.module.css";
import { apiImage } from "@/api/connect";

const Details = ({ details, casts, recommend, similar, videos }) => {
  // console.log(similar);
  return (
    <div className={styles.container}>
      {/* information */}
      <div className={styles.info}>
        {details.poster_path && (
          <div className={styles.image}>
            <img
              src={apiImage.w500Image(details.poster_path)}
              alt={details.original_name}
            />
          </div>
        )}
        <div className={styles.desc}>
          <div className={styles.title}>
            <h1>{details.title || details.original_name}</h1>
          </div>

          <div className={styles.genres}>
            {details.genres.map((item, i) => (
              <div className={styles.genre} key={i}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.overview}>
            <p>{details.overview}</p>
          </div>

          <div className={`${styles.genres} ${styles.company}`}>
            {details.production_companies.map((item, i) => (
              <div className={styles.genre} key={i}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          {details.created_by && (
            <div className={styles.createdBy}>
              <p>Created By</p>
              {details.created_by.map((item, i) => (
                <p key={i} className={styles.created}>
                  {item.original_name}
                </p>
              ))}
              <p>
                TMDB{" "}
                <span className={styles.created}>{details.vote_average}</span>
              </p>
              <p>
                Total Episodes{" "}
                <span className={styles.created}>
                  {details.number_of_episodes}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      {/* casts */}
      <div className={styles.casts}>
        {casts.slice(0, 10).map((item, i) => (
          <div className={styles.cast} key={i}>
            <img
              src={apiImage.w500Image(item.profile_path)}
              alt={item.original_name}
            />
            <p className={styles.personName}>
              {item.original_name.length > 13
                ? item.original_name.slice(0, 13) + "..."
                : item.original_name}
            </p>
            <p className={styles.personChar}>
              {item.character.length > 12
                ? item.character.slice(0, 12) + "..."
                : item.character}
            </p>
          </div>
        ))}
      </div>
      {/* recommend */}
      {recommend && (
        <div className={styles.recommendWrap}>
          <h2>Recommends</h2>
          <div className={styles.recommends}>
            {recommend.slice(0, 7).map((item, i) => (
              <div className={styles.recommend} key={i}>
                <img
                  src={apiImage.w500Image(item.poster_path)}
                  alt={item.original_title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* similar */}
      {similar && (
        <div className={styles.recommendWrap}>
          <h2>similar</h2>
          <div className={styles.recommends}>
            {similar.slice(0, 7).map((item, i) => (
              <div className={styles.recommend} key={i}>
                <img
                  src={apiImage.w500Image(item.poster_path)}
                  alt={item.original_title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
