import React from "react";
import { Alert, AlertTitle, Stack } from "@mui/material";

const LessonAlert = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle sx={{ textAlign: "left" }}>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
      <Alert sx={{ textAlign: "left" }} severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert with an informative title.
      </Alert>
      <Alert sx={{ textAlign: "left" }} severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning Alert with a cautious title.
      </Alert>
      <Alert sx={{ textAlign: "left" }} severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>
    </Stack>
  );
};

export default LessonAlert;
