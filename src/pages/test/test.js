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
        <ClassDrop
          grade="A"
          courseName="Linear Algebra"
          courseDescription="Basic concepts of linear algebra: linear equations and matrices, vector spaces and subspaces, similar matrices, basis and dimension, linear transformations, eigenvalues, determinants, orthogonality, coordinate systems, and applications to geometry."
          courseID="MATH-306"
          professor="Dr. Benjamin Goodberry"
          numCredits={4}
        ></ClassDrop>
        <ClassDrop
          grade="A"
          courseName="Statistical Thinking"
          courseDescription="Descriptive and inferential analysis of data, emphasizing appropriate assumptions, computer use and interpretation. Parametric and non-parametric methods are compared and contrasted."
          courseID="MATH-216"
          professor="Dr. Jiacheng Cai"
          numCredits={4}
        ></ClassDrop>
        <ClassDrop
          grade="A"
          courseName="Physical Geology"
          courseDescription="Introduction to the nature and character of the Earth’s crust and the geological processes that generate and shape landform features. Topics include minerals, rocks, earth structure and plate tectonics, geological processes and associated landforms."
          courseID="GEOL-103"
          professor="Dr. Mara Chen"
          numCredits={4}
        ></ClassDrop>
      </center>
    </div>
  );
}

export default Test;
