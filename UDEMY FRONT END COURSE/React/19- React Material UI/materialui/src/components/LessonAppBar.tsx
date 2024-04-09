import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

const LessonAppBar = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Example
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }}>About Us</Button>
          <Button sx={{ color: "white" }}>Products</Button>
          <Button sx={{ color: "white" }}>Prices</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Happy Hour
          </Button>
        </Stack>
        <Menu anchorEl={anchorElement} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Video Games</MenuItem>
          <MenuItem onClick={handleClose}>Pc Components</MenuItem>
          <MenuItem onClick={handleClose}>Guns</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppBar;
