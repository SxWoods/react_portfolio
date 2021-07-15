import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="wrapper container">
      <div className="row">
        <section className="aboutMeCard">
          <div className="card aboutMe">
            <h5 className="card-header aboutMeHeader">
              <code className="code"> ABOUT ME</code>
            </h5>
            <div className="card-body">
              <p className="card-text">
              Highly experienced Customer Service Representative with over 8 years of experience in both face-to-face, and over-the-phone customer relations. 
              </p>
              {/* <!-- Contact Info --> */}
              <div className="btnFormatting">
                <a href="https://www.linkedin.com/in/solomon-woods-0121094/" target="_blank" rel="noreferrer" className="btn btn-secondary icons">
                  <i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/SxWoods" target="_blank" rel="noreferrer" className="btn btn-secondary icons"
                ><i className="fab fa-github"></i></a>
                <a href="solomonwoods1994@gmail.com" target="_blank" rel="noreferrer" className="btn btn-secondary icons">
                  <i className="fas fa-envelope-open-text"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br></br>
      <hr></hr>
    </div>
  );
};

export default About;
