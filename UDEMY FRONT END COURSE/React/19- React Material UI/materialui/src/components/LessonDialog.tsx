import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const LessonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <div>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </Button>
      </div>
      <div>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Which Cpu do you want</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body1" component="div">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita repellat obcaecati, iusto tempore voluptatem quibusdam.
              </Typography>
            </DialogContentText>
            <DialogActions sx={{ justifyContent: "center" }}>
              <Button onClick={() => setDialogOpen(false)}>
                Intel I7 14700k
              </Button>
              <Button onClick={() => setDialogOpen(false)}>
                Intel I7 13700k
              </Button>
              <Button onClick={() => setDialogOpen(false)}>
                Intel I9 13900k
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LessonDialog;
