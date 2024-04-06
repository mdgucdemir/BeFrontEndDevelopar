import React from "react";
import { ButtonGroup, Button, Stack } from "@mui/material";

const LessonButtonGroup = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Stack>
        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="success">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default LessonButtonGroup;
