import React from "react";
import "./education.css";
import WebHeader from "../../components/header/header.js";

import salisbury from "../../pics/salisburyBuilding.jpg";

import { ClassDrop } from "../../components/classDropdown/classDropdown";

export function Education() {
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
                Computer Science, Data Science
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
              <div className="sectionContent"> 3.614 Major | 3.608 Cumulative</div>
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
            <div className="semesterDiv">
              <div className="semesterName">Spring 2025:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Theory of Computation"
                  courseDescription="Applications of discrete mathematics to computer science and introduction to the theory of computation. Topics include automata and formal languages, computability by Turing machines and recursive functions, undecidability and computational complexity."
                  courseID="COSC-362"
                  professor="Dr. Junyi Tu"
                  numCredits={4}
                ></ClassDrop>
               <ClassDrop
                  grade="A"
                  courseName="Special Topics - Large Language Models"
                  courseDescription="Seminar course with content that varies semester to semester (e.g., artificial intelligence, compiler construction or other topics suggested by faculty or students)."
                  courseID="COSC-490"
                  professor="Dr. Junyi Tu"
                  numCredits={3}
                ></ClassDrop>
               <ClassDrop
                  grade="A"
                  courseName="Capstone Project"
                  courseDescription="Capstone project in one of the areas of data science chosen, designed and carried out with the advice and approval of a faculty member. Actual work may be carried out at off-campus sites. Written report and seminar presentation are required."
                  courseID="DSCI-490"
                  professor="Dr. Kyle Teller"
                  numCredits={3}
                ></ClassDrop>
               <ClassDrop
                  grade="B"
                  courseName="Object Oriented Design Patterns"
                  courseDescription="Covers three related topics: event-driven programming, graphical user interface (GUI) and object-oriented (OO) design using design patterns. The event-driven model is examined throughout the course. OO design is introduced through the analysis of design patterns. "
                  courseID="COSC-330"
                  professor="Dr. Xiaohong Wang"
                  numCredits={3}
                ></ClassDrop>
                 <ClassDrop
                  grade="P"
                  courseName="Undergradate Research - Tree of Thought"
                  courseDescription="Offers study of some area of computer science in more depth than is possible in the usual classroom setting. Students work on projects under the direction of faculty members."
                  courseID="COSC-390"
                  professor="Dr. Junyi Tu"
                  numCredits={3}
                ></ClassDrop>
 
              </div>
            </div>

            <div className="semesterDiv">
              <div className="semesterName">Fall 2024:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Hi-Performance Computing"
                  courseDescription="Principles and practice of parallel and distributed computing. Topics include modern computing architectures, concurrency principles and algorithm design, and applications and programming."
                  courseID="COSC-420"
                  professor="Dr. Yaping Jing"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Software Engineering II"
                  courseDescription="Covers software engineering principles, including interface design, requirements analysis, prototyping, system models, project management, testing, maintenance, quality assurance, and professional ethics."
                  courseID="COSC-426"
                  professor="Dr. Sang-Eon Park"
                  numCredits={3}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Artificial Intelligence"
                  courseDescription="Survey foundational topics in artificial intelligence. Study both exact and probabilistic learning and decision-making frameworks, deterministic and non-deterministic. Consider both historical and state-of-the-art techniques using the Python languages. "
                  courseID="COSC-411"
                  professor="Dr. Shuangquan Wang"
                  numCredits={3}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Numerical Methods"
                  courseDescription="Interpolation, functional approximation, numerical differentiation and integration, nonlinear equations, numerical solutions of differential equations, analysis of error."
                  courseID="MATH-471"
                  professor="Dr. Ryan Shifler"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Research Methods in Data Science"
                  courseDescription="Preparation for professional research and problem solving in data science and DSCI 490 projects."
                  courseID="DSCI-470"
                  professor="Dr. Kyle Teller"
                  numCredits={3}
                ></ClassDrop>
              </div>
            </div>

            <div className="semesterDiv">
              <div className="semesterName">Spring 2024:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Software Engineering I"
                  courseDescription="Covers software engineering principles, including interface design, requirements analysis, prototyping, system models, project management, testing, maintenance, quality assurance, and professional ethics."
                  courseID="COSC-425"
                  professor="Dr. Xiaohong Wang"
                  numCredits={3}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Satire"
                  courseDescription="The nature of satire and its historical forms."
                  courseID="ENGL-254"
                  professor="Dr. Christopher Vilmar"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Operating Systems"
                  courseDescription="Analysis of the operating system, the program which supervises the activity of the computer. Study of processes, interprocess communication, scheduling, I/O systems, deadlock, file systems, memory management, security/protection mechanisms and resource allocation."
                  courseID="COSC-450"
                  professor="Dr. Sang-Eon Park"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Data Visualization & Interpretation"
                  courseDescription="Provides a foundation in data science, focusing on data curation, statistical analysis, machine learning, and visualization. Covers data standards, organization, and tools for analysis and decision-making, with discussions on data-related technologies, policies, and societal impacts."
                  courseID="COSC-311"
                  professor="Dr. Shuangquan Wang"
                  numCredits={3}
                ></ClassDrop>
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Fall 2023:</div>
              <div className="semesterClasses">
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
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Summer 2023:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Principles of Macro-Economics"
                  courseDescription="Examines the forces behind purchases, capital spending, and the balance of payments, and their impact on unemployment, inflation, and the dollar's value. Also covers the effects of government spending, taxation, and monetary policy on the economy."
                  courseID="ECON-212"
                  professor="Dr. Dustin Chambers"
                  numCredits={3}
                ></ClassDrop>
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Spring 2023:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Micro-Computer Organization"
                  courseDescription="Organization and internal behavior of microcomputer hardware: digital logic, Boolean algebra, switching networks, design of memories and ALUs, controllers, microprocessor architecture, introduction to machine code and assembly language. "
                  courseID="COSC-250"
                  professor="Dr. Giulia Franchi"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="A"
                  courseName="Principles of Micro-Economics"
                  courseDescription="This course introduces the tools economists use to analyze human behavior under resource constraints, including supply and demand, elasticities, and competition models. Topics covered include consumer and producer decisions, taxation, environmental quality, and health care."
                  courseID="ECON-211"
                  professor="Dr. Brian Hill"
                  numCredits={3}
                ></ClassDrop>

                <ClassDrop
                  grade="A"
                  courseName="Introduction to Astronomy"
                  courseDescription="Survey of modern astronomy for non-science majors. Basic physics concepts are utilized to study the night sky, light, optics and telescopes, planets, the moon and sun, stars nebulae, galaxies and the universe. "
                  courseID="PHYS-108"
                  professor="Dr. Nicholas Troup"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Adv. Data Structures"
                  courseDescription="Continuation of the study of the design, implementation and testing of programs. Further study of object-oriented programming. Introduction of graph algorithms. Emphasis is on analysis of algorithms and abstraction."
                  courseID="COSC-320"
                  professor="Dr. Enyue Lu"
                  numCredits={4}
                ></ClassDrop>
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Fall 2022:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Elementary German I"
                  courseDescription="Beginning spoken and written German with emphasis on the sound system and the basic structures of the language."
                  courseID="GERM-101"
                  professor="Mr. Charles Overholt"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Computer Science II"
                  courseDescription="Object-oriented approach to design and implementation of medium to large software projects. Abstract data types including lists, stack and queues. Emphasizes design trade-offs based on analysis of run time and storage requirements."
                  courseID="COSC-220"
                  professor="Dr. Junyi Tu"
                  numCredits={4}
                ></ClassDrop>

                <ClassDrop
                  grade="B"
                  courseName="Calculus II"
                  courseDescription="Introduction to integrals, infinite series, applications and techniques of integration."
                  courseID="MATH-202"
                  professor="Dr. Melissa Stoner"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Discrete Mathematics"
                  courseDescription="Introduction to basic techniques and modes of reasoning for discrete problem solving. Set theory, recurrence relations, counting, graphs and lattice number theory."
                  courseID="MATH-210"
                  professor="Dr. Kathleen Shannon"
                  numCredits={4}
                ></ClassDrop>
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Spring 2022:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Calculus I"
                  courseDescription="Introduction to analytic geometry, limits, continuity, derivatives of elementary functions and applications of the derivative."
                  courseID="MATH-201"
                  professor="Mr. Kyle Teller"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Computer Science I"
                  courseDescription="Step-by-step approach to problem solving, modular structured design, and structured programming in C++. Emphasizes production of readable, well-documented, efficient, tested and correct programs."
                  courseID="COSC-120"
                  professor="Mr. Andrew Thompson"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Lifelong Fitness & Wellness"
                  courseDescription="Covers topics including the components of fitness, nutrition, weight management, cancer, cardiovascular disease and stress management within the framework of the six dimensions of wellness."
                  courseID="FTWL-106"
                  professor="Dr. Susannah Brown"
                  numCredits={3}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="World Civilizations II"
                  courseDescription="Examination of global progress in major civilizations from prehistoric times to the present emphasizing the economic, social, cultural, intellectual and political trends motivating human beings."
                  courseID="HIST-102"
                  professor="Dr. Emin Lelic"
                  numCredits={4}
                ></ClassDrop>
              </div>
            </div>
            <div className="semesterDiv">
              <div className="semesterName">Fall 2021:</div>
              <div className="semesterClasses">
                <ClassDrop
                  grade="A"
                  courseName="Programming Fundamentals"
                  courseDescription="This introductory course covers problem-solving through algorithm design, implementation, and testing. Students will develop reliable, well-documented programs using object-oriented languages, focusing on fundamental instructions, events, methods, and functions."
                  courseID="COSC-117"
                  professor="Mr. Andrew Thompson"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="College Algebra & Trig."
                  courseDescription="Applications-oriented college algebra and trigonometry course for students planning to study science or additional mathematics. Emphasizes computational, qualitative, visual and symbolic approaches. "
                  courseID="MATH-140"
                  professor="Ms. Erika Betterton"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="Composition and Research"
                  courseDescription="A course in college-level academic writing. Focus on argument, critical reading and writing, and information literacy."
                  courseID="ENGL-103"
                  professor="Ms. Morgan McGlone"
                  numCredits={4}
                ></ClassDrop>
                <ClassDrop
                  grade="B"
                  courseName="World Civilizations I"
                  courseDescription="Examination of global progress in major civilizations from prehistoric times to the present emphasizing the economic, social, cultural, intellectual and political trends motivating human beings."
                  courseID="HIST-101"
                  professor="Dr. Kevin Birch"
                  numCredits={4}
                ></ClassDrop>
              </div>
            </div>
          </div>
        </div>
        <div className="nothingDiv">_</div>
      </body>
    </div>
  );
}
