import React from "react";
import { Paper, Box } from "@mui/material";

const LessonPaper = () => {
  return (
    <Box display="flex" gap="20px">
      <Paper sx={{ width: 100, height: 100 }} />
      <Paper sx={{ width: 100, height: 100 }} elevation={0} />
      <Paper sx={{ width: 100, height: 100 }} elevation={1} />
      <Paper sx={{ width: 100, height: 100 }} elevation={2} />
      <Paper sx={{ width: 100, height: 100 }} elevation={3} />
      <Paper sx={{ width: 100, height: 100 }} elevation={14} />
      <Paper sx={{ width: 100, height: 100 }} variant="outlined" />
      <Paper sx={{ width: 100, height: 100 }} variant="outlined" square />
    </Box>
  );
};

export default LessonPaper;
