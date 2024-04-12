import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material/";
import { deepOrange, deepPurple } from "@mui/material/colors";

const LessonAvatar = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={4}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>MD</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>MG</Avatar>
      </Stack>
      <Stack direction="row">
        <AvatarGroup>
          <Avatar src="https://randomuser.me/api/portraits/women/56.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Avatar
          variant="square"
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://randomuser.me/api/portraits/men/56.jpg"
        />
      </Stack>
      <Stack direction="row">
        <AvatarGroup max={6}>
          <Avatar src="https://randomuser.me/api/portraits/women/56.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/46.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/66.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/36.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/26.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/16.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/26.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/36.jpg" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default LessonAvatar;
