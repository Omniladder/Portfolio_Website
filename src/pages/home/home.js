import React from "react";
import me from "../../pics/dustin.png";

import "./home.css";
import WebHeader from "../../components/header/header.js";

function home() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <WebHeader
            title={"Home"}
            quote={"In Your Heart You Know He's Right!"}
          />
        </div>
      </header>
      <body className="App-header">
        <div className="me-container">
          <img src={me} className="self-picture" alt="self" />
          <div className="text-container">
            <div className="name-container">Hi I&apos;m</div>
            <div className="name-container">Dustin O&apos;Brien</div>
            <div className="major-container">Computer Science Major</div>
            <div className="major-container">Data Science Major</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default home;
