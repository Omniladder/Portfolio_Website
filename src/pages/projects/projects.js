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
import cosmos from "../../pics/cosmos.png";
import chapp from "../../pics/chapp.png";
import cellular from "../../pics/cells.png";
import wants from "../../pics/clientWants.png";
import testifAi from "../../pics/TestifAi.png";
import summarizer from "../../pics/documentSummarizer.png";
import portfolio from "../../pics/portfolio.png";
import pakistan from "../../pics/pakistan.png";
import taylor from "../../pics/taylorSeries.png";
import chessbot from "../../pics/chess_bot.png"
import flashcardFactory from "../../pics/FlashcardFactory.jpg"
import resumai from "../../pics/resumai.png";
import sports from "../../pics/SportsClassfying.png";
import reasoning from "../../pics/reasoning.jpg";
import nixos from "../../pics/nixos.png"
import arch from "../../pics/arch.png"
import monolithIDE from "../../pics/monolithIDE.png"

//Logo Imports
import archLogo from "../../pics/archLogo.png";
import linuxLogo from "../../pics/linuxLogo.svg";
import kittyLogo from "../../pics/kittyLogo.png";
import neovimLogo from "../../pics/neovimLogo.png";
import gitLogo from "../../pics/gitLogo.png";
import niriLogo from "../../pics/niriLogo.svg";
import nixosLogo from "../../pics/nixosLogo.png";
import tmuxLogo from "../../pics/tmuxLogo.png";
import sqliteLogo from "../../pics/sqliteLogo.png";
import dynamoDBLogo from "../../pics/DynamoDBLogo.png"
import gitlabLogo from "../../pics/gitlabLogo.png"
import hyprlandLogo from "../../pics/hyprlandLogo.png"
import wizLogo from "../../pics/wizLogo.png"
import haskellLogo from "../../pics/haskellLogo.png";
import angularLogo from "../../pics/angularLogo.png";
import typescriptLogo from "../../pics/typescriptLogo.png";
import postgresLogo from "../../pics/postgresLogo.png";
import k8sLogo from "../../pics/kubernetes.png"
import pythonLogo from "../../pics/pythonLogo.png";
import fastAPILogo from "../../pics/fastapiLogo.svg";
import htmlLogo from "../../pics/HTMLLogo.png";
import cssLogo from "../../pics/CSSLogo.png";
import jsLogo from "../../pics/JSLogo.png";
import awsLogo from "../../pics/awsLogo.png"
import langchainLogo from "../../pics/langchainLogo.png";
import pydanticLogo from "../../pics/pydanticLogo.svg";
import dockerLogo from "../../pics/dockerLogo.png";
import gptLogo from "../../pics/GPTLogo.png";
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
import pyqtLogo from "../../pics/pyqtLogo.png";
import nextjsLogo from "../../pics/nextjsLogo.png";
import ollamaLogo from "../../pics/ollamaLogo.png"
import huggingfaceLogo from "../../pics/huggingFaceLogo.svg"
import rLogo from "../../pics/RLogo.png"
import pytorchLogo from "../../pics/pytorchLogo.png"
import jenkinsLogo from "../../pics/jenkinsLogo.png"
import redisLogo from "../../pics/redisLogo.png"

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
        title="COSMOS"
        quote="An Automated ATO Cloud Environment"
        image={cosmos}
        background="COSMOS enables Navy and DoD developers to rapidly provision secure AWS GovCloud environments and achieve automated ATO, reducing months of compliance work into minutes. As part of an 8-person team, I work on ARR (Automated Readiness Review), aggregating security signals from GitLab, Wiz, and RegScale. I architected the DynamoDB integration, manage all cloud infrastructure through AWS CDK for true Infrastructure as Code, remediate security vulnerabilities, and contribute to GitLab CI/CD pipelines and the evaluation engine for mission-critical applications."
        webLink="https://www.cosmos.navy.mil/"
        tech1={awsLogo}
        tech2={typescriptLogo}
        tech3={reactLogo}
        tech4={dynamoDBLogo}
        tech5={gitlabLogo}
        tech6={wizLogo}
        ></SmallCard>

        <SmallCard
        title="Chapp."
        quote="A Gamified Text Chat Website"
        image={chapp}
        background="A gamified text chat Chapp is a full stack web application with a multitude of various technologies. Designed to be a flagship application Chapp is built in Typescript using Express.JS as its backend and Angular as its frontend. PostgreSQL is used as the Database Engine and is used to store users, conversations, relationships, and friends. I architected a Kubernetes deployment strategy to enable horizontal scaling and high availability, with Redis integration for session management and caching. The application leverages Docker containerization and K8s orchestration for production-grade deployment, designed to scale across multiple nodes to handle increased user load efficiently."
        github="https://github.com/Omniladder/Chapp"
        webLink="https://chapp.dustintobrien.com"
        tech1={angularLogo}
        tech2={typescriptLogo}
        tech3={postgresLogo}
        tech4={dockerLogo}
        tech5={k8sLogo}
        tech6={redisLogo}
        ></SmallCard>



        <SmallCard
        title="Lambda Check"
        quote="A Haskell Vulnerability Detector"
        image={haskell}
        background="Lambda Check is a Haskell security detection software featuring a CLI program and database backend that aggregates security data from multiple vulnerability databases. It parses Haskell configuration files to identify packages with known vulnerabilities and analyzes code for security issues like thread-unsafe interactions and race conditions. The project includes CI/CD pipelines using both Jenkins and GitHub Actions. Developed in 24 hours for the University of Delaware's HenHacks Hackathon in 2024, Lambda Check won Bank of America's Best Financial Hack category."
        github="https://github.com/jamesmontebell/lambda-check"
        webLink="https://devpost.com/software/lambda-check"
        tech1={haskellLogo}
        tech2={pythonLogo}
        tech3={fastAPILogo}
        tech4={sqliteLogo}
        tech5={jenkinsLogo}
        tech6={dockerLogo}
        ></SmallCard>

        <SmallCard
        title="Testif.Ai"
        quote="A LLM Based Test Generator"
        image={testifAi}
        background="Created for HackUMBC 2024 Testif.Ai is a test generation program built on the back of ChatGPT. The site works by setting up an API backend which sends users a form in regards to test structure and the content to generate the test off of. This information is parsed in the backend and data is sent to OpenAI to create questions and answers off of this information is then inputted into a Jinja template which sends its information back to the user in the form of a test. These tests are easily modifiable and downloadable with the answer key. This project won both UMBC's Best Educational Hack Category alongside Second best Overall Hack."
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
        title="Arch Linux Setup"
        quote="A Hyprland-Based Workflow"
        image={arch}
        background="My custom Arch Linux configuration featuring Hyprland as the primary Wayland compositor, creating a tiling window manager experience with smooth animations and modern aesthetics. This setup showcases a highly customized Linux desktop environment built from the ground up, featuring a complete development workflow with Neovim as the primary editor and Kitty as the terminal emulator. The configuration demonstrates proficiency in Linux system administration, Wayland protocols, and creating an efficient developer-focused workspace optimized for productivity and visual appeal."
        tech1={archLogo}
        tech2={hyprlandLogo}
        tech3={gitLogo}
        tech4={linuxLogo}
        tech5={neovimLogo}
        tech6={kittyLogo}
        ></SmallCard>

        <SmallCard
        title="Monolith IDE"
        quote="A Self-Hosted Web IDE Platform"
        image={monolithIDE}
        background="Built for BitCamp 2026, Monolith IDE is an open-source, browser-based development environment designed to fill the gap left by Replit's shift to paid services. The platform provides students with isolated Docker containers running VS Code in the browser, eliminating local setup requirements. Featuring Google OAuth authentication, multi-language support for Python, Java, and C++, and automatic resource management through WebSocket heartbeat monitoring, Monolith IDE enables educational institutions to self-host a complete coding environment on their own infrastructure."
        github="https://github.com/Omniladder/Monolith_IDE"
        webLink="https://monolithide.study/"
        tech1={pythonLogo}
        tech2={dockerLogo}
        tech3={jsLogo}
        tech4={fastAPILogo}
        tech5={sqliteLogo}
        tech6={jinjaLogo}
        ></SmallCard>

        <SmallCard
        title="Celite"
        quote="A Cellular Automata Simulator"
        image={cellular}
        background="Celite is a website developed over 12 months, designed to provide a user-friendly experience for mathematicians and enthusiasts to explore elementary cellular automata. It has been used to create visuals for new textbooks and courses, supporting undergraduate research projects. Built by a team of three, including myself, during two advanced computer science courses, the project was guided by university professors. Celite is set to be presented at Salisbury University's SUSRC Research Conference, showcasing its impact on education and research."
        github="https://github.com/ktranfaglia1/Celite"
        webLink="https://celite.org/"
        tech1={jsLogo}
        tech2={htmlLogo}
        tech3={cssLogo}
        tech4={awsLogo}
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
        tech6={gptLogo}
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
        tech5={gptLogo}
        ></SmallCard>

        <SmallCard
        title="Flashcard Factory"
        quote="A LLM-Based Flashcard Maker"
        image={flashcardFactory}
        background="Created for HenHacks 2025 Flashcard Factory is the finale demonstrating the skill and speed at which me and my partners are capable of making adavanced LLM based products. The Application is a Flashcard Generation website which uses use provided notes, slides etc. to generate sets of flashcards which integrate with Quizlet. My work personally focused on the middle end and devops portioons hosting the site via AWS as well as using FastAPI to communicate between the front and back end I also worked on managing schemas between the two sides."
        tech1={pythonLogo}
        tech2={langchainLogo}
        tech3={vanillaLogo}
        tech4={jinjaLogo}
        tech5={fastAPILogo}
        tech6={pydanticLogo}
        webLink="https://devpost.com/software/flashcardfactory"
        github="https://github.com/cbarbes1/HenHacks2025"
        ></SmallCard>



        <SmallCard
        title="Attention Chess Bot"
        quote="An Advanced Pytorch Model"
        image={chessbot}
        background="Given a love for chess and mathematics when provided the oppurtunity in my Large Language Model course to create my own model a chess bot became the immideate front running idea. The bot is an Alpha Zero like attention based neural network with MCST integration. It uses its neural network to guide decisions and has a 92% GM game predication accuracy. The model uses ResNets, Self-Attention, Kaiming/Xavier Initializtion, Batching, The ADAM Optimizer, GELU Activation functions, and more complex NN topics."
        tech1={pythonLogo}
        tech2={pytorchLogo}
        tech3={pyqtLogo}
        webLink="https://pynaclegames.org/downloads?game=6"
        github="https://github.com/Omniladder/Attention_Chess_Bot"
        downloadFile="./downloads/chessbotPresentation.pdf"
        ></SmallCard>

        <SmallCard
        title="NixOS Configuration"
        quote="A Declarative System Configuration"
        image={nixos}
        background="CatP is my personal NixOS configuration built with a modular flake-based architecture that declaratively manages my entire development environment. The configuration leverages Home Manager for reproducible user-level customization and features a comprehensive setup including the Niri window manager, a complete development toolchain with Neovim, Wezterm, Tmux, and Zsh. The modular design allows for easy system replication across multiple machines while maintaining consistency. Built with advanced systemd service integration for desktop utilities like swww and eww, the configuration showcases infrastructure-as-code principles applied to desktop Linux environments."
        github="https://github.com/Omniladder/CatP-Dustin-NixOS-Config"
        tech1={nixosLogo}
        tech2={niriLogo}
        tech3={neovimLogo}
        tech4={gitLogo}
        tech5={tmuxLogo}
        tech6={linuxLogo}
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
        title="Sports Classifying"
        quote="A Data-Driven Sports Analysis"
        image={sports}
        background="The final Data Science Capstone project this research focuses on classifying different sports as contact and collision based. Where the former incolves sports where direct physical interaction isn't considered part of the game but still while the latter involves sports with direct physical contact. These classifications are used to inform policy in regards to sport safety however current classes are currently very subjective. Out study attempts to use a data driven approach to classify players and the sports they play as either collision or contact."
        tech1={pythonLogo}
        tech2={sciKitLogo}
        tech3={langchainLogo}
        tech4={pandasLogo}
        tech5={rLogo}
        github="https://github.com/ktranfaglia1/SportClassification"
        downloadFile="./downloads/ClassifcationPaper.pdf"
        ></SmallCard>



        <SmallCard
        title="Resumai"
        quote="A NextJS Resume Platform"
        image={resumai}
        background="Resumai was create for Georgetown HoyaHacks Hackathon 2025. With a Frontend built in Next.JS and a backend in python Resumeai includes many features relating to resumes built using Large Language Models and Generative AI Technology. This includes a Resume builder which takes your current resume and a job description passes it GPT to generate and then puts them into a Latex Resume Template which then compiles and is sent back to the user. It also contains an Application submission and Resume Querying software which takes a resume, breaks down the information inside of it and puts it into a series of vector databases which can then be queried based on a given prompt and return best candidates for the position."
        github="https://github.com/SpencerPresley/HoyaHacks2025"
        webLink="https://devpost.com/software/resume-hut"
        tech1={pythonLogo}
        tech2={nextjsLogo}
        tech3={langchainLogo}
        tech4={fastAPILogo}
        tech5={gptLogo}
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
        title="Multi-Model ToT"
        quote="A LLM-based Research Study"
        image={reasoning}
        background="Based on Princeton's ToT paper with a separate CoT comparison architecture. I conducted research for salisbury university analyzing the effect that multiple models can have on reasoning capabilties as well as attempting to decrease ToT high latency while attempting to maintain its stronger problem solving capcability. This research was specficially working with smaller local models where such inaccuracies and reasoning problems are less plentiful and have more room for improvement."
        tech1={pythonLogo}
        tech2={langchainLogo}
        tech3={ollamaLogo}
        tech4={huggingfaceLogo}
        tech5={jinjaLogo}
        tech6={pydanticLogo}
        github="https://github.com/Omniladder/COSC390_Benchmarking"
        downloadFile="./downloads/ToTPresentation.pdf"
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
        </div>
        </center>
        </div>
        </div>
    );
}
