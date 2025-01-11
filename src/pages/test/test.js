import "./test.css";

import React from "react";

import { ClassDrop } from "../../components/classDropdown/classDropdown";

function Test() {
  return (
    <div className="App">
      <center>
        <ClassDrop
          grade="A"
          courseName="Systems Software"
          courseDescription="Study of programming at the systems level, mostly in a UNIX environment. Topics include processes, threads, sockets, basic I/O operations, interprocess communication and use of Shell and Perl scripts."
          courseID="COSC-350"
          professor="Dr. Sang-Eon Park"
          numCredits={4}
        ></ClassDrop>
      </center>
    </div>
  );
}

export default Test;
