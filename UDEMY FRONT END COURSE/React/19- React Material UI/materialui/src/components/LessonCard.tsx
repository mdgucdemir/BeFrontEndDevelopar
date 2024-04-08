import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const LessonCard = () => {
  return (
    <div>
      <Card sx={{ width: 350 }}>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          height="150px"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            cumque.
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="error">Clear</Button>
          <Button>Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LessonCard;
