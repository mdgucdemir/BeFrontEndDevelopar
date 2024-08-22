import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.commnet}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>08.22.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque,
            inventore eos maiores numquam perferendis.
          </p>
        </div>
        <div className={styles.commnet}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>08.22.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            porro aut. Modi laudantium nemo consequuntur velit at? Voluptates,
            id beatae.
          </p>
        </div>
        <div className={styles.commnet}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>08.22.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repudiandae saepe repellendus sint ducimus asperiores facere iusto
            doloremque praesentium incidunt, provident distinctio deleniti
            eveniet atque similique pariatur ex.
          </p>
        </div>
        <div className={styles.commnet}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>08.22.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellat exercitationem sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
