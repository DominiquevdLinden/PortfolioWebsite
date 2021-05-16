import "./App.css";

function App() {
  return (
    <div>
      <main id="main">
        <nav id="navbar" className="sticky">
          <a>Contact</a>
          <a>Projects</a>
          <a>Welcome</a>
        </nav>
        <div className="welcome">
          <section id="welcome-section">
            <h1>Dominique van der Linden</h1>
            <p>
              Hi, I'm a developer mainly based on: Java/typescript, react and
              currently working on Python!
            </p>
            <img src="https://avatars.githubusercontent.com/u/38658422?v=4"></img>
          </section>
        </div>
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
