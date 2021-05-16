import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <main id="main">
        <nav id="navbar" className="sticky">
          <a>Contact</a>
          <a>Projects</a>
          <a href="#welcome-section">Welcome</a>
        </nav>
        <section id="welcome-section">
          <h1>Welcome!</h1>
        </section>
        <section id="projects">
          <div className="project-tile">
            <h1>Projects</h1>
            <a target="_blank" href="google.com">
              to Project
            </a>
          </div>
        </section>
        <section id="contact">
          <h1>Contacts</h1>
          <a
            id="profile-link"
            target="_blank"
            href="https://github.com/DominiquevdLinden"
          >
            Github
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
