import React from "react";
import "./experience.css";
import WebHeader from "../../components/header/header.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Images for Timeline
import SchoolIcon from "../../pics/education.png";
import WorkIcon from "../../pics/briefcase.png";
import hackLogo from "../../pics/system.png";
import endIcon from "../../pics/star.png";

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
        <VerticalTimeline lineColor="rgb(86, 88, 112)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="June 4th 2021"
            iconStyle={{ background: "#a61c3c", color: "#fff" }}
            icon=<img
              src={SchoolIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              Graduated Highschool
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ijamsville, MD
            </h4>
            <p>
              Engaged in Club Robotics and took various Computer Science classes
              such as the basics of Computer Science, and 2 AP Computer Science
              courses, which confirmed my interest in problem-solving and
              technology setting the stage for my future academic and career
              pursuits.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="September 26th 2021"
            iconStyle={{ background: "#a61c3c", color: "#fff" }}
            icon=<img
              src={SchoolIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">Begun College</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salisbury, MD
            </h4>
            <p>
              Began my college journey with an immediate and keen understanding
              of Computer Science, while also developing interests in
              Mathematics and Economics. University life quickly became a
              natural home, fostering both personal and academic growth.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="January 2024 - Present"
            iconStyle={{ background: "#208aae", color: "#208aae" }}
            icon=<img
              src={WorkIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              Math & Computer Science Tutor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salisbury, MD
            </h4>
            <p>
              With a great interest in Mathematics & Computer Science and a love
              of explaining fascinating and abstract topics I went to inqury
              about becoming a tutor as the schools tutoring center and fell in
              love with the position
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="May 2nd-3rd 2024"
            iconStyle={{ background: "#4b4e70", color: "#208aae" }}
            icon=<img
              src={hackLogo}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              HenHacks Hackathon 2024
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Newark, DE</h4>
            <p>
              Prompted by local Salisbury Students I attended University of
              Delawares HenHacks Hackathon where in a 24 hour period we were
              tasked with creating a program of our choosing. Our program was
              aimed at accomplishing Bank of America&apos;s Finacial Hack which
              we created Lambda check a CLI security detection. This program
              managed to win the category and awarded us with XBOXes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="May 2024 - August 2024"
            iconStyle={{ background: "#208aae", color: "#fff" }}
            icon=<img
              src={WorkIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              Student Summer Researcher
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salisbury, MD
            </h4>
            <p>
              Impressed by my ability to deliver substantial code efficiently
              during my Software Engineering class, my professor approached me
              with an opportunity to work under her on a summer research
              project. The focus was on the effects of water salinity and how
              large language models (LLMs) can be utilized to explain and
              address the issue.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="May 2024 - August 2024"
            iconStyle={{ background: "#208aae", color: "#fff" }}
            icon=<img
              src={WorkIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              System Adminstration Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salisbury, MD
            </h4>
            <p>
              Working underneath the Chair of the Computer Science department
              along with our System Adminstrator I was tasked with the movement
              of multiple Computer labs making sure that they were accesible to
              unviersity students and servers ready for the usage by new
              students. Alongside this I had to create a program finetuning
              models for small LLM models and test them on Salisbury&apos;s High
              Performance computer lab to test there usability in newly created
              Large language Model course.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="August 2024 - Present"
            iconStyle={{ background: "#208aae", color: "#208aae" }}
            icon=<img
              src={WorkIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              Math & Computer Science Tutor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salisbury, MD
            </h4>
            <p>
              Taken in by the Computer Science department I was given a job as a
              specialized tutoring that included upper level Computer Science
              classes not covered by my other tutoring positions for this job I
              tutored classes that included Operating Systems, Data Structures
              and Algorithms, Data Visualization and much more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#a61c3c", color: "#d8d78f" }}
            contentArrowStyle={{ borderRight: "7px solid  #a61c3c" }}
            date="September 28th-29th 2024"
            iconStyle={{ background: "#4b4e70", color: "#208aae" }}
            icon=<img
              src={hackLogo}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          >
            <h3 className="vertical-timeline-element-title">
              HackUMBC Hackathon 2024
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Baltimore, MD
            </h4>
            <p>
              Given enjoyment of UD's Henhacks I teamed up with another group of
              Salisbury Students to attend UMBC&apos;s HackUMBC for this
              hackathon we worked on a project oriented towards the
              University&apos;s Education Hack and ML/AI Hack and created
              Testif.AI a test creation API built using modern LLM technology.
              The project won both Best Education Hack as well as Second Best
              Overall Hack being the only team too win two major Categories.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(75, 201, 60)", color: "#208aae" }}
            icon=<img
              src={endIcon}
              style={{ width: "45px", marginTop: "3px" }}
              alt="School Icon"
            />
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </body>
    </div>
  );
}
