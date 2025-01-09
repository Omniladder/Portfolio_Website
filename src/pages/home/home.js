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
        <div class="me-container">
          <img src={me} className="self-picture" alt="self" />
          <div class="text-container">
            <div class="name-container">Hi I'm</div>
            <div class="name-container">Dustin O'Brien</div>
            <div class="major-container">Computer Science Major</div>
            <div class="major-container">Data Science Major</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default home;
