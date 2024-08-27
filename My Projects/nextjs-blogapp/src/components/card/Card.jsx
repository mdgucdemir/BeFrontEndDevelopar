import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>08.21.2024 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet libero,
          cum, ab rem impedit neque magni dolores sapiente porro facere rerum
          consectetur unde corporis veritatis debitis, placeat aperiam deserunt
          quia.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
