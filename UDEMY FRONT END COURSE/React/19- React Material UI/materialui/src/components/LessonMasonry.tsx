import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";

const heights = [150, 30, 90, 70, 90, 100, 30, 50, 80];

const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion sx={{ minHeight: height }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion {index + 1}
            </AccordionSummary>
            <AccordionDetails>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              culpa ex architecto, molestiae iste debitis!
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};

export default LessonMasonry;
