"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-dark ${styles.navColor} fixed-top`}
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.logo}`} href="/">
            nextWatch
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.link}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.link}`}
                  aria-current="page"
                  href="/movie"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="/tv">
                  Tv Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.link}`} href="/trends">
                  Trends
                </Link>
              </li>
              {isMobile ? (
                <div className={`py-2 ${styles.link}`} onClick={openNclose}>
                  Search
                </div>
              ) : (
                <div className={styles.icons}>
                  <FaSearch className={styles.icon} onClick={openNclose} />
                </div>
              )}
            </ul>
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
              <VscChromeClose
                className={styles.closeIcon}
                onClick={openNclose}
              />
            </div>
          </div>
        )}
      </nav>

      {/* <div className={styles.navColor}>
        <div className={styles.navbarContainer}>
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
              <VscChromeClose
                className={styles.closeIcon}
                onClick={openNclose}
              />
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Header;
