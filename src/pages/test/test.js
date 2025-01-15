import "./test.css";

import React from "react";

import { TimelineCard } from "../../components/timelineCard/timelineCard";

import oakdale from "../../pics/oakdaleBuilding.jpg";

export function Test() {
  return (
    <div className="App">
      <center>
        <TimelineCard
          title="Graduated High School"
          image={oakdale}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></TimelineCard>
      </center>
    </div>
  );
}
