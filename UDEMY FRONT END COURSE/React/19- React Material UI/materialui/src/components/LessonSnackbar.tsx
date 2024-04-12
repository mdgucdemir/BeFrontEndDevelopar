import React, { useState } from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const SnackbarAction = (
    <React.Fragment>
      <Button color="warning" size="small" onClick={handleClose}>
        Undo
      </Button>
      <IconButton onClick={handleClose}>
        <CloseIcon color="error" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
          open={openSnackbar}
          message="Snackbar Opened"
          action={SnackbarAction}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </div>
    </div>
  );
};

export default LessonSnackbar;
