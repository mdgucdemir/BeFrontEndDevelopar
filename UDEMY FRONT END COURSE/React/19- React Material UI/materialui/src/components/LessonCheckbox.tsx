import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Checkbox,
} from "@mui/material";

const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [multiSelect, setMultiSelect] = useState<String[]>([]);

  const handleMultiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = multiSelect.indexOf(event.target.value);
    if (index === -1) {
      setMultiSelect([...multiSelect, event.target.value]);
    } else {
      setMultiSelect(multiSelect.filter((item) => item !== event.target.value));
    }
  };

  // console.log(isAccept);
  console.log(multiSelect);
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Education</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox disabled />} label="College" />
            <FormControlLabel control={<Checkbox />} label="High School" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bachelor Degree"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Checked Example</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="For Example"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Multiple Check Example</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={multiSelect.includes("react")}
                  onChange={handleMultiChange}
                />
              }
              label="React JS"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={multiSelect.includes("angular")}
                  onChange={handleMultiChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={multiSelect.includes("vue")}
                  onChange={handleMultiChange}
                />
              }
              label="Vue JS"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckbox;
