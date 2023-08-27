import s from "./App.module.css";
import portraitUrl from "./assets/portrait1.png";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Voulentarywork from "./components/Voulentarywork";

function App() {
  return (
    <main className={s.main}>
      <Navbar />
      <div className={s.frontPage} id="home">
        <div className={s.rowContainer}>
          <img className={s.portrait} src={portraitUrl} alt="" />

          <div>
            <h1>Johanna Wilmers</h1>
            <p>3. klasse Batchelor i Informatikk, NTNU</p>
            <p>21 år</p>
          </div>
        </div>
      </div>
      <div className={s.aboutMe} id="about">
        <div className={s.contentWrapper}>
          <h1>About me</h1>
          <p>
            Hello, my name is Johanna and this is my first portfolio page. I am
            currently studying informatics at my third year at NTNU in
            Trondheim. This webpage is made with React, Typescript, and CSS
            modules as a hobby project to learn more about web technologies. It
            is a webpage about me, what I do, and who I am. It's my second built
            React webpage. My React skills are mostly self-taught, so don't be
            harsh. You can check out the repository for this webpage unnder
            "projects".
          </p>
          <a href="https://www.linkedin.com/in/johanna-wilmers-02a580221/?originalSubdomain=no">
            Add me on linkedin!
          </a>
        </div>
      </div>
      <div className={s.projects} id="projects">
        <div className={s.contentWrapper}>
          <Projects />
        </div>
      </div>

      <div className={s.work} id="work">
        <div className={s.contentWrapper}>
          <Work />
        </div>
      </div>
      <div className={s.work} id="voulentarywork">
        <div className={s.contentWrapper}>
          <Voulentarywork />
        </div>
      </div>
    </main>
  );
}

export default App;
