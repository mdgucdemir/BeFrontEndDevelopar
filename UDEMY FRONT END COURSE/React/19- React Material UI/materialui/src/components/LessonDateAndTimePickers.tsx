import React from "react";
import { Stack, Tooltip } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const LessonDateAndTimePickers = () => {
  return (
    <Stack spacing={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Date Picker" />
        <TimePicker label="Time Picker" />
      </LocalizationProvider>
    </Stack>
  );
};

export default LessonDateAndTimePickers;
