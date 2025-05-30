import "./about.css";
import React from "react";
import WebHeader from "../../components/header/header.js";

import dustin from "../../pics/Dustin2.jpg";

import ubuntuLogo from "../../pics/ubuntuLogo.png";
import pythonLogo from "../../pics/pythonLogo.png";
import neovimLogo from "../../pics/neovimLogo.png";
import awsLogo from "../../pics/awsLogo.png";
import gitLogo from "../../pics/gitLogo.png";
import reactLogo from "../../pics/reactLogo.png";

export function About() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <WebHeader
            title={"About Me"}
            quote={
              "Whatever crushes individuality is despotism, by whatever name it may be called"
            }
          />
        </div>
      </header>
      <body className="">
        <div className="topBio">
          <div className="bioDiv">
            <div className="bioHead">Biography:</div>
            <p className="biographySection">
              Hello, my name is Dustin O&apos;Brien, and I am a senior at
              Salisbury University majoring in Computer Science and Data
              Science. I have a deep passion for exploring and analyzing
              subjects like mathematics, economics, chess, and history. In my
              free time, I enjoy programming and diving into these interests.
              Some of my pursuits include deriving the closed formula for the
              Fibonacci sequence, reading about abstract algebra and real
              analysis, and delving into historical topics such as U.S.
              Presidents and the concept of critical elections and realignments
              through books and articles. I also thrive on puzzles and
              problem-solving, regularly challenging myself with Leetcode to
              sharpen my skills. Additionally, I am committed to expanding my
              technical expertise by experimenting with new technologies and
              working on innovative projects, which you can explore in my
              projects section.
            </p>
          </div>
          <div className="picture-link-div">
            <img src={dustin} className="mathPhoto"></img>
                     </div>
        </div>
        <div className="middleSection">

          <div className="skillDiv">
            <div className="skillHead">Tech Stack:</div>
            <div className="skillGrid">
              <img src={ubuntuLogo} className="skillDiv"></img>
              <img src={neovimLogo} className="skillDiv"></img>
              <img src={pythonLogo} className="skillDiv"></img>
              <img src={reactLogo} className="skillDiv"></img>
              <img src={gitLogo} className="skillDiv"></img>
              <img src={awsLogo} className="skillDiv"></img>
            </div>
          </div>
        </div>
<div className="personalDiv">
              <div className="linkDivHead">Links:</div>
              <div className="linkContainer">
                <div className="linkHead">Github: </div>
                <div className="linkArea">
                  <a href="https://github.com/Omniladder" className="hyperlink">
                    Click for Link
                  </a>
                </div>
              </div>
              <div className="linkContainer">
                <div className="linkHead">LinkedIn: </div>
                <div className="linkArea">
                  <a
                    href="https://www.linkedin.com/in/dustin-o-brien-7174a4267/"
                    className="hyperlink"
                  >
                    Click for Link
                  </a>
                </div>
              </div>
              <div className="linkContainer">
                <div className="linkHead">Email: </div>
                <div className="linkArea">
                  <a
                    href="mailto:dustintobrien@gmail.com"
                    className="hyperlink"
                  >
                    dustintobrien@gmail.com
                  </a>
                </div>
              </div>
              <div className="linkContainer">
                <div className="linkHead">Resume: </div>
                <div className="linkArea">
                  <a
                    className="hyperlink"
                    href="./downloads/resume.pdf"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="linkContainer">
                <div className="linkHead">Transcript: </div>
                <div className="linkArea">
                  <a
                    className="hyperlink"
                    href="./downloads/Transcript.pdf"
                    download
                  >
                    Download Transcript
                  </a>
                </div>
              </div>
            </div>
 
      </body>
    </div>
  );
}
