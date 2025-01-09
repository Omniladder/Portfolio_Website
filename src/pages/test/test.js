import "./test.css";

import React from "react";

import { SmallCard } from "../../components/smallCard/smallCard.js";
import haskell from "../../pics/haskell.jpeg";

import haskellLogo from "../../pics/haskellLogo.png";
import pythonLogo from "../../pics/pythonLogo.png";
import fastAPILogo from "../../pics/fastapiLogo.svg";
import SQLLogo from "../../pics/sqlLogo.png";
import restLogo from "../../pics/restLogo.png";

const lambdaCardProps = {
  title: "Lambda Check",
  quote: "A Haskell Vulnerability Detector",
  image: haskell,
  background:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem.",
  github: "https://github.com/jamesmontebell/lambda-check",
  webLink: "https://devpost.com/software/lambda-check",
  downloadFile: "./downloads/Resume-1.pdf",
  tech1: haskellLogo,
  tech2: pythonLogo,
  tech3: fastAPILogo,
  tech4: SQLLogo,
  tech5: restLogo,
};

function Test() {
  return (
    <div className="App">
      <center>
        <SmallCard {...{ ...lambdaCardProps, initalOpen: true }}></SmallCard>
      </center>
    </div>
  );
}

export default Test;
