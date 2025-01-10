import "./test.css";

import React from "react";

import { ClassDrop } from "../../components/classDropdown/classDropdown";

function Test() {
  return (
    <div className="App">
      <center>
        <ClassDrop
          grade="A"
          courseID="COSC-350"
          courseName="Systems Software"
        ></ClassDrop>
      </center>
    </div>
  );
}

export default Test;
