import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

const RadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "mehmet") {
      setHelperText("No. I don`t think so, keep trying");
      setError(false);
    } else if (value === "deniz") {
      setHelperText("No. I don`t think so, keep trying");
      setError(false);
    } else if (value === "mehmet-deniz") {
      setHelperText("No. I don`t think so, keep trying");
      setError(false);
    } else if (value === "mehmet-deniz-gucdemir") {
      setHelperText("Yes. You too smart ;)");
      setError(false);
    } else {
      setHelperText("Please choose one");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Who is the most famous person ?</FormLabel>
        <RadioGroup onChange={handleChange}>
          <FormControlLabel value="mehmet" label="Mehmet" control={<Radio />} />
          <FormControlLabel value="deniz" label="Deniz" control={<Radio />} />
          <FormControlLabel
            value="mehmet-deniz"
            label="Mehmet Deniz"
            control={<Radio />}
          />
          <FormControlLabel
            value="mehmet-deniz-gucdemir"
            label="Mehmet Deniz Gucdemir"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default RadioExample;
