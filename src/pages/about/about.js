import "./about.css";
import React from "react";
import WebHeader from "../../components/header/header.js";
import ContactForm from "../../components/ContactForm/ContactForm.js"

import dustin from "../../pics/Dustin2.jpg";

import typescriptLogo from "../../pics/typescriptLogo.png";
import neovimLogo from "../../pics/neovimLogo.png";
import awsLogo from "../../pics/awsLogo.png";
import archLogo from "../../pics/archLogo.png";
import postgresLogo from "../../pics/postgresLogo.png"
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
        Hello, my name is Dustin O&apos;Brien, and I am a junior Cloud Engineer 
        at Strategic Business Services (SBS) where I work on the COSMOS system.
        Outside of work I like code and have interests in learning more about
        Kernels, Operating Systems, Graphics, Hardware and Artificial Intelligence.
        I also am fond of non computational topics such as Economics, Chess, Puzzles, 
        History, and Mathematics. As of now I have a Bachelor Degree from Salisbury
        University with a Dual-major in Computer Science and Data Science with focuses
        in Software Engineering and Artificial Intelligence. Some of my previous positions
        include Math and Computer Science tutoring, Paid AI research investigating effects
        of rising salinity levels, and basic System Adminstration work with my university.
        My skillset is across stack including Software Engineering including Frontend, Backend,
        Databases, DevOps and Infrastructure.
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
        <img src={archLogo} className="skillDiv"></img>
        <img src={neovimLogo} className="skillDiv"></img>
        <img src={typescriptLogo} className="skillDiv"></img>
        <img src={reactLogo} className="skillDiv"></img>
        <img src={postgresLogo} className="skillDiv"></img>
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

        <div className="personalDiv">
        <div className="linkDivHead">Contact:</div>
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
        <div className="linkHead">Phone Number: </div>
        <div className="linkArea">
        <div className="contactText">(240)-678-3366</div>
       </div>
        </div>
        <div className="linkContainer">
        <div className="linkHead">Address: </div>
        <div className="linkArea">
        <div className="contactText">Derwood, MD 20855</div>
       </div>
        </div>
 
       </div>
        <center style={{marginTop: '20vw'}}>
        <ContactForm></ContactForm>
        </center>
        <div style={{height: "2vw"}}></div>
        </body>
        </div>
    );
}
