import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  //   console.log(value);

  return (
    <FormControl>
      <FormLabel>Salary Expectation</FormLabel>
      <RadioGroup
        row
        name="salary-expectation"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          label="2000$"
          labelPlacement="end"
          value="2000"
          control={<Radio />}
        />
        <FormControlLabel
          label="3000$"
          labelPlacement="end"
          value="3000"
          control={<Radio />}
        />
        <FormControlLabel
          label="5000$"
          labelPlacement="end"
          value="5000"
          control={<Radio />}
        />
      </RadioGroup>
      <FormHelperText>
        Your Choose is <b>{value}</b>
      </FormHelperText>
    </FormControl>
  );
};

export default LessonRadioGroup;
