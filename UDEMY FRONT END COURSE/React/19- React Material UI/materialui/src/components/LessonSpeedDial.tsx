import React from "react";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const LessonSpeedDial = () => {
  return (
    <div>
      <SpeedDial
        ariaLabel="example"
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>
    </div>
  );
};

export default LessonSpeedDial;
