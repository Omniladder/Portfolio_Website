import "./about.css";
import React from "react";
import WebHeader from "../../components/header/header.js";

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
      <body className=""></body>
    </div>
  );
}

export default About;
