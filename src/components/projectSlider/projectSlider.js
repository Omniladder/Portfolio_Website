import "./projectSlider.css";
import React, { useState } from "react";

import { LargeCard } from "../../components/largeCard/largeCard.js";

//Modal Element used for popup cards
import Modal from "@mui/material/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// These are the imports for images used in large project sliders
import haskell from "../../pics/haskell.jpeg";
import cellular from "../../pics/cells.png";
import wants from "../../pics/clientWants.png";
import testifAi from "../../pics/TestifAi.png";

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

/**
 *  IN THIS REGION WE DECLARE THE VARIOUS CARD PROPS TO BE USED
 */

const lambdaCardProps = {
  title: "Lambda Check",
  quote: "A Haskell Vulnerability Detector",
  image: haskell,
  background:
    "Lambda Check is a Haskell security detection software featuring a CLI program and a database-oriented backend, designed to aggregate and manage security data from various large, popular databases into a unified backend. The CLI can parse Haskell configuration files to identify packages with known vulnerabilities stored in the database. Additionally, it analyzes Haskell code for common security issues, such as thread-unsafe interactions, race conditions, and other vulnerabilities. Developed in 24 hours for the University of Delaware’s HenHacks Hackathon in 2024, Lambda Check won Bank of America’s Best Financial Hack category.",
  github: "https://github.com/jamesmontebell/lambda-check",
  webLink: "https://devpost.com/software/lambda-check",
  downloadFile: null,
  tech1: haskellLogo,
  tech2: pythonLogo,
  tech3: fastAPILogo,
  tech4: SQLLogo,
  tech5: restLogo,
  tech6: null,
};

const celiteCardProps = {
  title: "Celite",
  quote: "A Cellular Automata Simulator",
  image: cellular,
  background: "Celite is a website developed over 12 months, designed to provide a user-friendly experience for mathematicians and enthusiasts to explore elementary cellular automata. It has been used to create visuals for new textbooks and courses, supporting undergraduate research projects. Built by a team of three, including myself, during two advanced computer science courses, the project was guided by university professors. Celite is set to be presented at Salisbury University's SUSRC Research Conference, showcasing its impact on education and research.",
  github: "https://github.com/ktranfaglia1/Celite",
  webLink: "https://celite.org/",
  downloadFile: null,
  tech1: JSLogo,
  tech2: HTMLLogo,
  tech3: CSSLogo,
  tech4: agileLogo,
  tech5: null,
  tech6: null,
};

const wantsCardProps = {
  title: "Saltcast Chatbot",
  quote: "A Salinity Oriented RAG Chatbot",
  image: wants,
  background:
    "During my contract as a Summer Research Student, I collaborated with a partner on developing a chatbot for the Saltcast project at Salisbury University. The chatbot aimed to assist stakeholders affected by rising salt levels in the Chesapeake Bay by interpreting transcripts and providing clear, accessible responses. The project's scope expanded to include a front-facing tool for the Saltcast website, enabling users to explore the site and access technical research papers through interactive dialogue. I had the opportunity to present our research achievements at MIT's Undergraduate Research Conference, showcasing the impact of our work.",
  github: "https://github.com/SpencerPresley/saltcast-ai-headless",
  webLink: "https://www.saltcast.io",
  downloadFile: "./downloads/MITResearch.pdf",
  tech1: pythonLogo,
  tech2: langchainLogo,
  tech3: dockerLogo,
  tech4: fastAPILogo,
  tech5: pydanticLogo,
  tech6: GPTLogo,
};

const testCardProps = {
  title: "Testif.Ai",
  quote: "A LLM Based Test Generator",
  image: testifAi,
  background:
    "Created for HackUMBC 2024 Testif.Ai is a test generation program built on the back of ChatGPT. The site works by setting up an API backend which sends users a form in regards to test structure and the content to generate the test off of. This information is parsed in the backend and data is sent to OpenAI to create questions and answers off of this information is then inputted into a Jinja template which sends its information back to the user in the form of a test. These tests are easily modifiable and downloadable with the answer key. This project won both UMBC’s Best Educational Hack Category alongside Second best Overall Hack.",
  github: "https://github.com/SpencerPresley/UMBC-2024-Hackathon",
  webLink: "https://devpost.com/software/testifai",
  downloadFile: null,
  tech1: pythonLogo,
  tech2: langchainLogo,
  tech3: vanillaLogo,
  tech4: jinjaLogo,
  tech5: fastAPILogo,
  tech6: pydanticLogo,
};

export function ProjectSlider() {
  //Lambda Open Test Functions
  const [isLambdaOpen, setLambdaOpen] = useState(false);
  const lambdaOpen = () => setLambdaOpen(true);
  const lambdaClose = () => setLambdaOpen(false);

  //Celite Open Test Functions
  const [isCeliteOpen, setCeliteOpen] = useState(false);
  const celiteOpen = () => setCeliteOpen(true);
  const celiteClose = () => setCeliteOpen(false);

  //Saltcast Chatbot Open Test Functions
  const [isWantsOpen, setWantsOpen] = useState(false);
  const wantsOpen = () => setWantsOpen(true);
  const wantsClose = () => setWantsOpen(false);

  //Testif.Ai Open Test Functions
  const [isTestOpen, setTestOpen] = useState(false);
  const testOpen = () => setTestOpen(true);
  const testClose = () => setTestOpen(false);

  return (
    <div>
      {/*<swiper slides-per-view={3} speed={500} loop={true} navigation={true} centeredSlides={false}  >*/}
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        slidesPerView={3}
        speed={500}
        loop={true}
        loopedslides={4}
        zIndex={0}
        spaceBetween={100}
        pagination={{ clickable: true }}
        className="cardswiper"
        virtual={false}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 3 }}
        style={{ overflow: "visible", width: "100%" }}
        coverflowEffect={{
          rotate: -12,
          slideShadows: false,
        }}
      >
        {/* Slide 1 Lambda Check*/}
        <SwiperSlide>
          {({ isVisible }) =>
            isVisible ? (
              <div
                style={{ width: "fit-content" }}
                onClick={() => {
                  lambdaOpen();
                }}
              >
                <LargeCard {...{ ...lambdaCardProps, initalOpen: true }}></LargeCard>
              </div>
            ) : null
          }
        </SwiperSlide>

        {/* Slide 2 Celite*/}
        <SwiperSlide>
          {({ isVisible }) =>
            isVisible ? ( //Stops rendering when off of swiper
              <div
                style={{ width: "fit-content" }}
                onClick={() => {
                  celiteOpen();
                }}
              >
                <LargeCard {...{ ...celiteCardProps, initalOpen: true }}></LargeCard>
              </div>
            ) : null
          }
        </SwiperSlide>

        {/* Slide 3 Salinity Chatbot*/}
        <SwiperSlide>
          {({ isVisible }) =>
            isVisible ? (
              <div
                style={{ width: "fit-content" }}
                onClick={() => {
                  wantsOpen();
                }}
              >
                <LargeCard {...{ ...wantsCardProps, initalOpen: true }}></LargeCard>
              </div>
            ) : null
          }
        </SwiperSlide>

        {/* Slide 4 TestifAi*/}
        <SwiperSlide>
          {({ isVisible }) =>
            isVisible ? (
              <div
                style={{ width: "fit-content" }}
                onClick={() => {
                  testOpen();
                }}
              >
                <LargeCard {...{ ...testCardProps, initalOpen: true }}></LargeCard>
              </div>
            ) : null
          }
        </SwiperSlide>
      </Swiper>

      {/** Modal Popup Section */}
      <Modal open={isLambdaOpen}>
        <div
          style={{ width: "fit-content" }}
          onClick={() => {
            lambdaClose();
          }}
        >
          <LargeCard {...{ ...lambdaCardProps, initalOpen: false }}></LargeCard>
        </div>
      </Modal>

      <Modal open={isCeliteOpen}>
        <div
          style={{ width: "fit-content" }}
          onClick={() => {
            celiteClose();
          }}
        >
          <LargeCard {...{ ...celiteCardProps, initalOpen: false }}></LargeCard>
        </div>
      </Modal>

      <Modal open={isWantsOpen}>
        <div
          style={{ width: "fit-content" }}
          onClick={() => {
            wantsClose();
          }}
        >
          <LargeCard {...{ ...wantsCardProps, initalOpen: false }}></LargeCard>
        </div>
      </Modal>

      <Modal open={isTestOpen}>
        <div
          style={{ width: "fit-content" }}
          onClick={() => {
            testClose();
          }}
        >
          <LargeCard {...{ ...testCardProps, initalOpen: false }}></LargeCard>
        </div>
      </Modal>
    </div>
  );
}
