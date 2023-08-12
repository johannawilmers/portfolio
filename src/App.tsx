import s from "./App.module.css";
import portraitUrl from "./assets/portrait1.png";
import Navbar from "./components/Navbar";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
