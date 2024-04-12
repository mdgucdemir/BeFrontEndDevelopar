import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LessonBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <BottomNavigation
        value={value}
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<RestoreIcon />} label="Restore" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorite" />
        <BottomNavigationAction icon={<LocationOnIcon />} label="Location" />
      </BottomNavigation>
    </Box>
  );
};

export default LessonBottomNavigation;
