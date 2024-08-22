import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/food.png" alt="Next Blog" width={50} height={50} />
          <h1 className={styles.logoText}>Nextblog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          accusamus dicta adipisci reiciendis dolorem quae magni obcaecati sint
          nobis dignissimos vitae harum quam, culpa iure rerum quaerat enim
          deleniti animi!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homapage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com" target="_blank">
            Facebook
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            Instagram
          </Link>
          <Link href="https://www.tiktok.com" target="_blank">
            Tiktok
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
