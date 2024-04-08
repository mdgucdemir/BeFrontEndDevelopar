import React from "react";
import { Stack, Divider } from "@mui/material";

const LessonStack = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}
      justifyContent="center"
      alignItems="center"
    >
      <div>xs: mobile phone, tablet, laptop and desktop</div>
      <div>sm: table</div>
      <div>md: laptop,</div>
    </Stack>
  );
};

export default LessonStack;
