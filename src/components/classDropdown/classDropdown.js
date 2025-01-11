import "./classDropdown.css";

import React from "react";

import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ClassDrop({
  grade,
  courseName,
  courseID,
  courseDescription,
  professor,
  numCredits,
}) {
  return (
    <Accordion
      sx={{
        backgroundColor: "#191b2e",
        border: "3.5px solid #4b4e70;",

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
      <AccordionDetails>
        <div className="courseDescription">
          <div className="courseTitle">Course Description:</div>
          <div className="courseContent">{courseDescription}</div>
        </div>

        <div className="courseDetails">
          <div className="courseFact">
            <div className="factTitle">Course ID:</div>
            <div className="factInfo">{courseID}</div>
          </div>
          <div className="courseFact">
            <div className="factTitle">Professor:</div>
            <div className="factInfo">{professor}</div>
          </div>

          <div className="courseFact">
            <div className="factTitle"># of Credits:</div>
            <div className="factInfo">{numCredits}</div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

ClassDrop.propTypes = {
  grade: PropTypes.string,
  courseName: PropTypes.string,
  courseID: PropTypes.string,
  courseDescription: PropTypes.string,
  professor: PropTypes.string,
  numCredits: PropTypes.number,
};
