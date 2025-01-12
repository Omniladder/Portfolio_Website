import React from "react";
import "./experience.css";
import WebHeader from "../../components/header/header.js";

//Timeline Imports
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
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
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "#208aae",
                    borderWidth: ".6vw",
                    height: ".8vw",
                    aspectRatio: 1 / 1,
                  }}
                />
                <TimelineConnector sx={{ height: "20vh" }} />
              </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "#208aae",
                    borderWidth: ".6vw",
                    height: ".8vw",
                    aspectRatio: 1 / 1,
                  }}
                />
                <TimelineConnector sx={{ height: "20vh" }} />
              </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "#208aae",
                    borderWidth: ".6vw",
                    height: ".8vw",
                    aspectRatio: 1 / 1,
                  }}
                />
                <TimelineConnector sx={{ height: "20vh" }} />
              </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "#208aae",
                    borderWidth: ".6vw",
                    height: ".8vw",
                    aspectRatio: 1 / 1,
                  }}
                />
              </TimelineSeparator>
            </TimelineItem>
          </Timeline>
        </center>
      </body>
    </div>
  );
}
