import React from "react";
import {
  Typography,
  Stack,
  CircularProgress,
  LinearProgress,
} from "@mui/material";

const LessonSpinner = () => {
  return (
    <div>
      <Stack>
        <Typography variant="h3">Lesson Progress Spinner</Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center" mt={38} spacing={4}>
        <CircularProgress />
      </Stack>
      <Stack>
        <LinearProgress />
      </Stack>
    </div>
  );
};

export default LessonSpinner;
