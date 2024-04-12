import React, { useState } from "react";
import { Skeleton, Stack, Button } from "@mui/material";

const LessonSkeleton = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Stack alignItems="center">
        {loading ? (
          <Skeleton width={250} height={144} animation="wave" />
        ) : (
          <img
            src="https://source.unsplash.com/random/256*144"
            alt="skelton"
            width={250}
            height={145}
          />
        )}
        <Button
          variant="contained"
          color="info"
          onClick={() => setLoading(!loading)}
          sx={{ marginTop: "3rem" }}
        >
          {loading ? "loading" : "loaded"}
        </Button>
      </Stack>
    </div>
  );
};

export default LessonSkeleton;
