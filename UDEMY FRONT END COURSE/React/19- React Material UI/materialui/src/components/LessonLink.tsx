import React from "react";
import { Box, Link } from "@mui/material/";

const LessonLink = () => {
  return (
    <Box display="flex" gap={2} justifyContent="center">
      <Link href="www.facebook.com">facebook</Link>
      <Link href="www.facebook.com" variant="body2">
        facebook
      </Link>
      <Link href="www.instagram.com" color="primary.light" underline="none">
        instagram
      </Link>
      <Link href="www.google.com" underline="hover">
        google
      </Link>

      <Link
        href="#"
        underline="none"
        onClick={() => {
          console.log("asdf");
        }}
      >
        asdf
      </Link>
    </Box>
  );
};

export default LessonLink;
