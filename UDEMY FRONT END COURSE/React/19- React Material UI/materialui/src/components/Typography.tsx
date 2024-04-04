import React from "react";
import { Typography } from "@mui/material";

const TypographyLesson = () => {
  return (
    <div>
      <Typography variant="body1">
        Body 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        vero?
      </Typography>
      <Typography variant="body2">
        Body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti, culpa.
      </Typography>
      <Typography variant="h1">H1 Variant</Typography>
      <Typography variant="h2">H2 Variant</Typography>
      <Typography variant="h3">H3 Variant</Typography>
      <Typography variant="h4">H4 Variant</Typography>
      <Typography variant="h5">H5 Variant</Typography>
      <Typography variant="h6">H6 Variant</Typography>
      <Typography variant="h1" component="h4">
        H1 gorunumlu H4
      </Typography>
      <Typography variant="h1" align="left">
        H1 Variant align Left
      </Typography>
      <Typography variant="h1" align="right">
        H1 Variant align Right
      </Typography>
      <Typography variant="subtitle1">Subtitle 1 </Typography>
      <Typography variant="subtitle2">Subtitle 2 </Typography>
    </div>
  );
};

export default TypographyLesson;
