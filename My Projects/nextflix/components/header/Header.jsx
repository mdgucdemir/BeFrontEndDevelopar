"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">nextWatch</Link>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Movies
            </Link>
            <Link href="/" className={styles.link}>
              Tv Shows
            </Link>
            <Link href="/" className={styles.link}>
              Trends
            </Link>
          </div>
          <div className={styles.icons}>
            <FaSearch className={styles.icon} onClick={open} />
            <FaBars className={styles.barIcon} />
            <FaUserCircle className={styles.icon} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <VscChromeClose className={styles.closeIcon} onClick={open} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
