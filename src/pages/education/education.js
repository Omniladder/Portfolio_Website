import React from "react";
import "./education.css";
import WebHeader from "../../components/header/header.js";

import salisbury from "../../pics/salisburyBuilding.jpg";

function projects() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <WebHeader
            title={"Education"}
            quote={
              "Education is not the means of showing people how to get what they want. Education is an exercise by means of which enough men, it is hoped, will learn to want what is worth having."
            }
          />
        </div>
      </header>
      <body className="">
        <div className="infoSection">
          <div className="infoCard">
            <div className="sectionDiv">
              <div className="sectionHead">School:</div>
              <div className="sectionContent">Salisbury University</div>
            </div>
            <div className="sectionDiv">
              <div className="sectionHead">Degree:</div>
              <div className="sectionContent">Bachelor of Science</div>
            </div>
            <div className="sectionDiv">
              <div className="sectionHead">Major:</div>
              <div className="sectionContent">
                Computer Science & Data Science
              </div>
            </div>
            <div className="sectionDiv">
              <div className="sectionHead">Concentrations:</div>
              <div className="sectionContent">
                Software Engineering & Foundations, Algorithms and Artificial
                Intelligence
              </div>
            </div>
            <div className="sectionDiv">
              <div className="sectionHead">GPA:</div>
              <div className="sectionContent">3.589</div>
            </div>
            <div className="sectionDiv">
              <div className="sectionHead">Minor:</div>
              <div className="sectionContent">Mathematics</div>
            </div>
          </div>
          <img className="salisburyPhoto" src={salisbury}></img>
        </div>
        <hr className="horizonBar" style={{ marginBottom: "0vw" }} />
        <div className="transcriptRegion">
          <div className="marginBox"></div>
          <div className="transcriptTitle">Transcript:</div>

          <div className="semesterTranscript">
            <div className="semesterName">Fall 2021:</div>
            <div className="semesterClasses"></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default projects;
