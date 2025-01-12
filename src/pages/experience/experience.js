import React from "react";
import "./experience.css";
import WebHeader from "../../components/header/header.js";

//Timeline Imports
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

export function Experience() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <WebHeader
            title={"Experience"}
            quote={
              "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome"
            }
          />
        </div>
      </header>
      <body className="">
        <center>
          <Timeline>
            <TimelineDot variant="outlined" sx={{ borderColor: "#208aae" }} />
            <TimelineDot variant="outlined" sx={{ borderColor: "#208aae" }} />
            <TimelineDot variant="outlined" sx={{ borderColor: "#208aae" }} />
            <TimelineDot variant="outlined" sx={{ borderColor: "#208aae" }} />
          </Timeline>
        </center>
      </body>
    </div>
  );
}
