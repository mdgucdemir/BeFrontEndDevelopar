import React from "react";
import { Grid } from "@mui/material";

const LessonGrid = () => {
  return (
    <Grid container>
      <Grid container>
        <Grid xs={12} md={12}>
          12 birim
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={8}>
          8 birim
        </Grid>
        <Grid xs={12} md={4}>
          4 birm
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={8}>
          8 birim
        </Grid>
        <Grid xs={12} md={4}>
          4 birm
        </Grid>
        <Grid xs={12} md={8}>
          8 birim alta gecer
        </Grid>
        <Grid xs={12} md={4}>
          4 birm alta gecer
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LessonGrid;
