import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack alignItems="center">
      <Typography variant="h4" component="div" mb={3}>
        Basic Accordion
      </Typography>
      <Stack>
        <Accordion sx={{ width: 550 }}>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              aspernatur aliquid totam at modi optio.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: 550 }}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              eligendi repellendus eius ea quo est ipsum vel quam incidunt
              debitis!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Typography variant="h4" component="div" mt={6}>
        Biri acilirken digeri kapanan Accordion
      </Typography>
      <Stack mt={6}>
        <Accordion
          sx={{ width: 550 }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt repellat repudiandae quisquam minima qui numquam atque
              soluta, nostrum repellendus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ width: 550 }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt repellat repudiandae quisquam minima qui numquam atque
              soluta, nostrum repellendus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ width: 550 }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt repellat repudiandae quisquam minima qui numquam atque
              soluta, nostrum repellendus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ width: 550 }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Accordion 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt repellat repudiandae quisquam minima qui numquam atque
              soluta, nostrum repellendus.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default LessonAccordion;
