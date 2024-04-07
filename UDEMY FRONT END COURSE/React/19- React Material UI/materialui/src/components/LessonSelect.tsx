import React, { useState } from "react";
import { Box, TextField, MenuItem, SelectChangeEvent } from "@mui/material";

const LessonSelect = () => {
  const [country, setCountry] = useState("");
  const [multiSelect, setMultiSelect] = useState<String[]>([]);

  return (
    <Box display="flex" justifyContent="center" gap={5}>
      <Box width="250px">
        <TextField
          select
          label="Single Select Example"
          fullWidth
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          color="secondary"
        >
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="can">Canada</MenuItem>
          <MenuItem value="brz">Brazil</MenuItem>
          <MenuItem value="ger">Germany</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          select
          SelectProps={{
            multiple: true,
          }}
          label="Multiple Select Example"
          fullWidth
          value={multiSelect}
          onChange={(e) =>
            setMultiSelect(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
          color="success"
        >
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="can">Canada</MenuItem>
          <MenuItem value="brz">Brazil</MenuItem>
          <MenuItem value="ger">Germany</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};

export default LessonSelect;
