import React from "react";
import { Breadcrumbs, Link } from "@mui/material/";

const LessonBreadCrumbs = () => {
  return (
    <Breadcrumbs separator="-" maxItems={2}>
      <Link href="/" underline="none">
        Home
      </Link>
      <Link href="/" underline="none">
        Blog
      </Link>
      <Link href="/" underline="none">
        Bla
      </Link>
      <Link href="/" underline="none">
        Bla
      </Link>
      <Link href="/" underline="none">
        Bla
      </Link>
      <Link href="/" underline="none">
        Bla
      </Link>
      <Link href="/" underline="none">
        About Us
      </Link>
    </Breadcrumbs>
  );
};

export default LessonBreadCrumbs;
