import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div >
      <div className="footer">
        <div className="socialMedia">
          <a href="https://linkedin.com/in/andre-kiona">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/KionAndr3">
            <TwitterIcon />
          </a>
          <a href="https://github.com/andreKiona">
            <GitHubIcon />
          </a>
          <EmailIcon />
        </div>
      </div>

      <div className="copyright">
        <p> © 2023 Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
