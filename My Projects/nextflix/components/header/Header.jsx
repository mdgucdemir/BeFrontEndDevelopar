"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const openNclose = () => {
    setIsOpen(!isOpen);
  };

  const HandleChange = (event) => {
    setQuery(event.target.value);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      router.push(`search/?query=${query}`);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">nextWatch</Link>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.links}>
            <Link href="/movie" className={styles.link}>
              Movies
            </Link>
            <Link href="/tv" className={styles.link}>
              Tv Shows
            </Link>
            <Link href="/trends" className={styles.link}>
              Trends
            </Link>
          </div>
          <div className={styles.icons}>
            <FaSearch className={styles.icon} onClick={openNclose} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search Movies"
              className={styles.searchInput}
              value={query}
              onChange={HandleChange}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose className={styles.closeIcon} onClick={openNclose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
