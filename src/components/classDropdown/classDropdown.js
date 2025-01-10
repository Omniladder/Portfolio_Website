import "./classDropdown.css";

import React from "react";

import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ClassDrop({ grade, courseName, courseID }) {
  return (
    <Accordion
      sx={{
        backgroundColor: "#191b2e",
        border: "6px solid #4b4e70;",
        borderRadius: "20px !important",
        width: "50vw",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#d8d78f" }} />}
      >
        <div className="courseDiv">
          <div className="gradeDiv">{grade}</div>
          <div className="courseName">{courseName}</div>
        </div>
      </AccordionSummary>
      <AccordionDetails>Content</AccordionDetails>
    </Accordion>
  );
}

ClassDrop.propTypes = {
  grade: PropTypes.string,
  courseName: PropTypes.string,
  courseID: PropTypes.string,
};
