import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const LessonTextField = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Stack direction="row" spacing={4} justifyContent="center">
        <TextField variant="filled" label="name" error size="small" />
        <TextField
          variant="outlined"
          label="last name"
          size="medium"
          helperText="last name"
        />
        <TextField variant="standard" label="good name" type="password" />
        <TextField
          variant="standard"
          label="good name"
          type="text"
          placeholder="aklsdfj"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <TextField
          label="Money"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">TL</InputAdornment>,
          }}
        />
        <TextField
          label="password"
          type="password"
          helperText={!value ? "Please enter your password" : "Keep goin'"}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </>
  );
};

export default LessonTextField;
