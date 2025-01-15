import React from "react";
import "./experience.css";
import WebHeader from "../../components/header/header.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
        <VerticalTimeline>
          <VerticalTimelineElement></VerticalTimelineElement>
        </VerticalTimeline>
      </body>
    </div>
  );
}
