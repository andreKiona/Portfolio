import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Andre</h2>
        <div className="prompt">
          <p>
            Front-end developer. PLC programer. Electronics Engineer.
          </p>
          <a href="https://github.com/andreKiona">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/andre-kiona">
              <LinkedInIcon/>
          </a>
          <a href="https://twitter.com/KionAndr3">
              <TwitterIcon/>
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h3> Front-End </h3>
            <span>Reacts, HTML, CSS, Yarn, MaterialUI, Python</span>
            <h3> FrameWork </h3>
            <span>Reacts, NextJS, Flutter</span>
          </li>
          <li className="item">
            <h3> Languages </h3>
            <span>JavaScript, Python, C, LadderLogics, Dart</span>
          </li>
          <li className="item">
            <h3> PLC programming </h3>
            <span>Delta PL, ABB PLC</span>
          </li>
          <li className="item">
            <h3> Electronics </h3>
            <span>
              Board-level-Repair, Electronics Troubleshooting Skills 
              <br />Soldering Skills, PCB-Design: Schematics and PCB Layout
              <br />Basic electrical Panel design, Eplan software design of electrical panels
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
