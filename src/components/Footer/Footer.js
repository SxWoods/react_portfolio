import React from "react";
import "./style.css";
import PDF from "../../../src/asset/Resume.pdf";

const Footer = () => {
  return (
    <div>
      <footer>
        <nav class="navbar fixed-bottom">
          <div class="container-fluid">
            <div class="navBarBtns">
              <a
                href="https://www.linkedin.com/in/solomon-woods-0121094/"
                rel="noreferrer"
                target="_blank"
                class="btn btn-secondary icons"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/SxWoods"
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary icons"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href={PDF}
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary navbar-brand icons"
              >
                <i class="far fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
