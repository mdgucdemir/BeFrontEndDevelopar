import React from "react";
import { Box } from "@mui/material";

const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "200px",
        height: "200px",
        color: "white",
        padding: "20px",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
    >
      LessonBox
    </Box>
  );
};

export default LessonBox;
