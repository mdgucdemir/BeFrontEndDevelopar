import React, { useState } from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const LessonDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="left">
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Left Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default LessonDrawer;
