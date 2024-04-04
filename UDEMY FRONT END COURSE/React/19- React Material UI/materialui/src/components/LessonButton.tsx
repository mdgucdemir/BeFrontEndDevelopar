import React from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Fingerprint from "@mui/icons-material/Fingerprint";

const LessonButton = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        <Button variant="text" color="primary">
          text button
        </Button>
        <Button variant="text" color="secondary">
          text button
        </Button>
        <Button variant="text" color="success">
          text button
        </Button>
        <Button variant="text" color="info">
          text button
        </Button>
        <Button variant="text" color="warning">
          text button
        </Button>
        <Button variant="text" color="error">
          text button
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        <Button variant="outlined" color="primary">
          outlined button
        </Button>
        <Button variant="outlined" color="secondary">
          outlined button
        </Button>
        <Button variant="outlined" color="success">
          outlined button
        </Button>
        <Button variant="outlined" color="info">
          outlined button
        </Button>
        <Button variant="outlined" color="warning">
          outlined button
        </Button>
        <Button variant="outlined" color="error">
          outlined button
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        <Button variant="contained" color="primary">
          contained button
        </Button>
        <Button variant="contained" color="secondary">
          contained button
        </Button>
        <Button variant="contained" color="success">
          contained button
        </Button>
        <Button variant="contained" color="info">
          contained button
        </Button>
        <Button variant="contained" color="warning">
          contained button
        </Button>
        <Button variant="contained" color="error">
          contained button
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        <IconButton color="secondary">
          <AccessAlarmsIcon />
        </IconButton>
        <IconButton color="info">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
        <Button endIcon={<ThumbUpIcon />} variant="contained">
          Like
        </Button>
        <Button endIcon={<ThumbDownIcon />} variant="contained">
          dislike
        </Button>
      </Stack>
    </Stack>
  );
};

export default LessonButton;
