import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={444} color="primary">
        <MailIcon color="action" />
      </Badge>
      <Badge
        badgeContent={4}
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MailIcon color="info" />
      </Badge>
    </Stack>
  );
};

export default LessonBadge;
