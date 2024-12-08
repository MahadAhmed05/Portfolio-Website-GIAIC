import React from "react";
import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projectsSection">
      <h2 className="heading">My Projects</h2>
      <div className="cardContainer">
        <div className="card">
          <h3>Apple Website</h3>
          <p>A modern Apple Website with HTML, CSS, and JavaScript</p>
          <a
            href="https://applemahad.netlify.app/"
            target="_blank"
            className="button"
          >
            View Project
          </a>
        </div>
        <div className="card">
          <h3>OFF MENU WEBSITE</h3>
          <p>A OFF MENU WEBSite with HTML, CSS, and JavaScript</p>
          <a
            href="https://offmenu-mahad.netlify.app/"
            className="button"
            target="_blank"
          >
            View Project
          </a>
        </div>
        <div className="card">
          <h3>TRIVIA CHALLENGE</h3>
          <p>A TRIVIA Challenger with HTML, CSS and Javascript</p>
          <a
            href="https://trivia-challenge-mahad.netlify.app/"
            className="button"
            target="_blank"
          >
            View Project
          </a>
        </div>
        <div className="card">
          <h3>Resume Builder</h3>
          <p>A Resume Builder with HTML, CSS and TypeScript</p>
          <a
            href="https://resume-builder-mahad.netlify.app/"
            className="button"
            target="_blank"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
