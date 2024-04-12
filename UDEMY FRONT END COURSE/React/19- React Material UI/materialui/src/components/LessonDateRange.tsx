import React from "react";
import { Stack, Tooltip } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const LessonDateRange = () => {
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker />
      </LocalizationProvider>
    </Stack>
  );
};

export default LessonDateRange;
