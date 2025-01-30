import "./projects.css";
import React from "react";

//These are the internally created components created for this program
import WebHeader from "../../components/header/header.js";
import { ProjectSlider } from "../../components/projectSlider/projectSlider.js";

//Swiper components
import { register } from "swiper/element/bundle";

//Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SmallCard } from "../../components/smallCard/smallCard.js";

/**
 * Image Imports
 *    Section 1:
 *      Card Pictures
 *
 *      Section 2:
 *        Technology Logos
 */

// These are the imports for images used in large project sliders
import haskell from "../../pics/haskell.jpeg";
import cellular from "../../pics/cells.png";
import wants from "../../pics/clientWants.png";
import testifAi from "../../pics/TestifAi.png";
import summarizer from "../../pics/documentSummarizer.png";
import portfolio from "../../pics/portfolio.png";
import pakistan from "../../pics/pakistan.png";
import taylor from "../../pics/taylorSeries.png";
import fifteen from "../../pics/fifteen.png";
import graphics from "../../pics/graphics.png";
import Resumai from "../../pics/resumai.png";

//Logo Imports
import haskellLogo from "../../pics/haskellLogo.png";
import pythonLogo from "../../pics/pythonLogo.png";
import fastAPILogo from "../../pics/fastapiLogo.svg";
import SQLLogo from "../../pics/sqlLogo.png";
import restLogo from "../../pics/restLogo.png";
import HTMLLogo from "../../pics/HTMLLogo.png";
import CSSLogo from "../../pics/CSSLogo.png";
import JSLogo from "../../pics/JSLogo.png";
import agileLogo from "../../pics/agileLogo.png";
import langchainLogo from "../../pics/langchainLogo.png";
import pydanticLogo from "../../pics/pydanticLogo.svg";
import dockerLogo from "../../pics/dockerLogo.png";
import GPTLogo from "../../pics/GPTLogo.png";
import jinjaLogo from "../../pics/jinjaLogo.png";
import vanillaLogo from "../../pics/vanillaLogo.png";
import jupyterLogo from "../../pics/jupyterLogo.png";
import markdownLogo from "../../pics/markdownLogo.png";
import reactLogo from "../../pics/reactLogo.png";
import muiLogo from "../../pics/muiLogo.png";
import motionLogo from "../../pics/motionLogo.svg";
import sciKitLogo from "../../pics/scikitLogo.png";
import pandasLogo from "../../pics/pandasLogo.png";
import manimLogo from "../../pics/manimLogo.png";
import sympyLogo from "../../pics/sympyLogo.png";
import pyqtLogo from "../../pics/pyqtLogo.jpeg";
import cppLogo from "../../pics/C++Logo.png";
import cLogo from "../../pics/cLogo.png";
import spotifyLogo from "../../pics/spotifyLogo.png";
import nextjsLogo from "../../pics/nextjsLogo.png";
import openGLLogo from "../../pics/opeglLogo.png";
import spotifyImage from "../../pics/SpotifyImage.png";

export function Projects() {
  register();

  return (
    <div className="App">
      <header>
        <div>
          <WebHeader
            title={"Projects"}
            quote={
              "The purpose of life is not to be happy but to be productive, to be an achiever, and to achieve your own happiness through your own efforts."
            }
          />
        </div>
      </header>
      <div className="projects-body">
        <div className="BoxShadow">_</div>
        <div className="sections">Featured Projects</div>

        <ProjectSlider></ProjectSlider>

        <div className="sections">Project Catalog</div>

        <center>
          <div className="projectGrid">
            <SmallCard
              title="Lambda Check"
              quote="A Haskell Vulnerability Detector"
              image={haskell}
              background="Lambda Check is a Haskell security detection software featuring a CLI program and a database-oriented backend, designed to aggregate and manage security data from various large, popular databases into a unified backend. The CLI can parse Haskell configuration files to identify packages with known vulnerabilities stored in the database. Additionally, it analyzes Haskell code for common security issues, such as thread-unsafe interactions, race conditions, and other vulnerabilities. Developed in 24 hours for the University of Delaware’s HenHacks Hackathon in 2024, Lambda Check won Bank of America’s Best Financial Hack category."
              github="https://github.com/jamesmontebell/lambda-check"
              webLink="https://devpost.com/software/lambda-check"
              tech1={haskellLogo}
              tech2={pythonLogo}
              tech3={fastAPILogo}
              tech4={SQLLogo}
              tech5={restLogo}
            ></SmallCard>

            <SmallCard
              title="Testif.Ai"
              quote="A LLM Based Test Generator"
              image={testifAi}
              background="Created for HackUMBC 2024 Testif.Ai is a test generation program built on the back of ChatGPT. The site works by setting up an API backend which sends users a form in regards to test structure and the content to generate the test off of. This information is parsed in the backend and data is sent to OpenAI to create questions and answers off of this information is then inputted into a Jinja template which sends its information back to the user in the form of a test. These tests are easily modifiable and downloadable with the answer key. This project won both UMBC’s Best Educational Hack Category alongside Second best Overall Hack."
              github="https://github.com/SpencerPresley/UMBC-2024-Hackathon"
              webLink="https://devpost.com/software/testifai"
              tech1={pythonLogo}
              tech2={langchainLogo}
              tech3={vanillaLogo}
              tech4={jinjaLogo}
              tech5={fastAPILogo}
              tech6={pydanticLogo}
            ></SmallCard>

            <SmallCard
              title="Saltcast Chatbot"
              quote="A Salinity Oriented RAG Chatbot"
              image={wants}
              background="During my contract as a Summer Research Student, I collaborated with a partner on developing a chatbot for the Saltcast project at Salisbury University. The chatbot aimed to assist stakeholders affected by rising salt levels in the Chesapeake Bay by interpreting transcripts and providing clear, accessible responses. The project's scope expanded to include a front-facing tool for the Saltcast website, enabling users to explore the site and access technical research papers through interactive dialogue. I had the opportunity to present our research achievements at MIT's Undergraduate Research Conference, showcasing the impact of our work."
              github="https://github.com/SpencerPresley/saltcast-ai-headless"
              webLink="https://www.saltcast.io"
              downloadFile="./downloads/MITResearch.pdf"
              tech1={pythonLogo}
              tech2={langchainLogo}
              tech3={dockerLogo}
              tech4={fastAPILogo}
              tech5={pydanticLogo}
              tech6={GPTLogo}
            ></SmallCard>

            <SmallCard
              title="Celite"
              quote="A Cellular Automata Simulator"
              image={cellular}
              background="Celite is a website developed over 12 months, designed to provide a user-friendly experience for mathematicians and enthusiasts to explore elementary cellular automata. It has been used to create visuals for new textbooks and courses, supporting undergraduate research projects. Built by a team of three, including myself, during two advanced computer science courses, the project was guided by university professors. Celite is set to be presented at Salisbury University's SUSRC Research Conference, showcasing its impact on education and research."
              github="https://github.com/ktranfaglia1/Celite"
              webLink="https://celite.org/"
              tech1={JSLogo}
              tech2={HTMLLogo}
              tech3={CSSLogo}
              tech4={agileLogo}
            ></SmallCard>

            <SmallCard
              title="Salinity Summaries"
              quote="A LLM Based Document Generator"
              image={summarizer}
              background="During my time as a summer student researcher, one of our main objectives was to generate concise, summarized documents to provide quick and easy insights for university staff working in the field of water salinity. These documents outlined the expectations and requirements of various organizations regarding salinity-based products. For this project, I was provided with a set of transcripts, and using the LangChain library, I created markdown files detailing each client's needs. Due to the confidential nature of these documents, I am unable to share the repository."
              webLink="https://www.saltcast.io"
              downloadFile="./downloads/MITResearch.pdf"
              tech1={pythonLogo}
              tech2={langchainLogo}
              tech3={jupyterLogo}
              tech4={markdownLogo}
              tech5={GPTLogo}
            ></SmallCard>

            <SmallCard
              title="Portfolio Website"
              quote="A React Based Website"
              image={portfolio}
              background="Created as a way to learn React and serve as an introduction to my work for employers and friends, this website was a personal project aimed at overcoming some of my biggest insecurities, including learning new technologies, lack of framework knowledge, and limited experience in front-end development. This project took roughly six months to complete and stands as one of my proudest personal achievements."
              github="https://github.com/Omniladder/Portfolio_Website"
              webLink="https://dustintobrien.com/"
              tech1={reactLogo}
              tech2={vanillaLogo}
              tech3={muiLogo}
              tech4={motionLogo}
            ></SmallCard>

            <SmallCard
              title="Resumai"
              quote="A NextJS Resume Platform"
              image={Resumai}
              background="Resumai was create for Georgetown HoyaHacks Hackathon 2025. With a Frontend built in Next.JS and a backend in python Resumeai includes many features relating to resumes built using Large Language Models and Generative AI Technology. This includes a Resume builder which takes your current resume and a job description passes it GPT to generate and then puts them into a Latex Resume Template which then compiles and is sent back to the user. It also contains an Application submission and Resume Querying software which takes a resume, breaks down the information inside of it and puts it into a series of vector databases which can then be queried based on a given prompt and return best candidates for the position."
              github="https://github.com/SpencerPresley/HoyaHacks2025"
              webLink="https://devpost.com/software/resume-hut"
              tech1={pythonLogo}
              tech2={nextjsLogo}
              tech3={langchainLogo}
              tech4={fastAPILogo}
              tech5={GPTLogo}
              tech6={pydanticLogo}
            ></SmallCard>

            <SmallCard
              title="Pakistan Analysis"
              quote="A Data-Driven Election Analysis"
              image={pakistan}
              background="As part of my Data Science major, I took a class focused on the fundamentals of the data science process and conducting research. For my project, I chose to explore the impact of Pakistani women on elections, driven by their growing voter base and my interest in elections and foreign politics. My research analyzed outlier data points, statistical distributions, variable correlations, and the geographical relevance of women voters. Additionally, I created visually appealing data visualizations to provide a baseline understanding of the findings."
              github="https://github.com/Omniladder/Pakistan_Elections/"
              downloadFile="./downloads/PakistanWomen.pdf"
              tech1={pythonLogo}
              tech2={jupyterLogo}
              tech3={sciKitLogo}
              tech4={pandasLogo}
            ></SmallCard>

            <SmallCard
              title="Taylor Series Vis."
              quote="A Manim Visualization"
              image={taylor}
              background="Having a constant interest in the coding of graphics and visuals alongside a love of math and geometric logic, a library like Manim has always been a keen interest. Therefore while taking my Numerical Methods class, one whose prime concept and tool is the Taylor series I wanted to try testing my understanding of the subject while learning a library I have found deeply interesting. This program simulates a taylor approximation on any function you give at it and uses maximization and minimizations to also calculate error with the Taylor’s Theorem remainder section. This visual was then created in a short weekend and gives a smooth demonstration of how taylors series works from a geometric standpoint."
              github="https://github.com/Omniladder/TaylorSeriesVisualization/"
              downloadFile="./downloads/SinTaylor.mp4"
              tech1={pythonLogo}
              tech2={manimLogo}
              tech3={sympyLogo}
            ></SmallCard>

            <SmallCard
              title="Graphics Library"
              quote="A Low Level Graphics Framework"
              image={graphics}
              background="Starting in my freshman year of college, I embarked on developing an extensive graphics library from the ground up in C++. This project was inspired by the graphical programming I had done in high school using tools like Processing. To accomplish this, I had to relearn concepts such as trigonometry, basic linear algebra, and low-level programming concepts like buffers, VAOs, and VBOs, which were quite new to me at the time. The library includes complex geometric algorithms, such as ear clipping, and supports class objects like polygons and features like textures. Earlier versions also supported 3D graphics, though several iterations were required as I updated the library to replace deprecated functions."
              github="https://github.com/Omniladder/Graphical_Project/"
              tech1={cppLogo}
              tech2={openGLLogo}
            ></SmallCard>

            <SmallCard
              title="Spotify Album Gen"
              quote="A Spotipy Album Image Generator"
              image={spotifyImage}
              background="Wanting to rank every song in my Spotify playlist into a tier list, I realized I needed unique images for each track. To automate this, I used the Spotipy library to retrieve my playlist and extract each song’s album cover URL. Using the requests library, I fetched the images and programmatically overlaid the song titles, creating visually distinct images for my tier list. This project streamlined the process, combining API integration and image processing to make the tier list both functional and visually engaging."
              github="https://github.com/Omniladder/songImageGen"
              tech1={spotifyLogo}
              tech2={pythonLogo}
              tech3={restLogo}
            ></SmallCard>

            <SmallCard
              title="Fifteen Puzzle"
              quote="An AI Backed Puzzle Game"
              image={fifteen}
              background="Built for my Artificial Intelligence course, the fifteen puzzle is a sorting puzzle where pieces to left, above, right, and bottom can all be moved into the empty square and the objective is to get them sorted 1,2,3 … with the empty square in bottom right. This program combines the usage of a graphical library pyqt with theoretical Artificial intelligence concepts such as the creation of heuristics and usage of gametrees to find and take optimal path to beating the game."
              github="https://github.com/Omniladder/fifteenPuzzle"
              tech1={pythonLogo}
              tech2={pyqtLogo}
            ></SmallCard>
          </div>
        </center>
      </div>
    </div>
  );
}
