import React from "react";
import { Tooltip, IconButton, Box } from "@mui/material/";

import DeleteIcon from "@mui/icons-material/Delete";

const LessonTooltip = () => {
  return (
    <Box sx={{ paddingTop: "5rem" }}>
      <Tooltip title="Delete" placement="top">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LessonTooltip;
