import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LessonLoadingButton = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <Stack spacing={4} direction="row" justifyContent="center">
        <LoadingButton variant="contained" loading={true}>
          Save
        </LoadingButton>
        <LoadingButton
          variant="contained"
          loading={value}
          onClick={() => setValue(true)}
        >
          Copy
        </LoadingButton>
      </Stack>
    </div>
  );
};

export default LessonLoadingButton;
