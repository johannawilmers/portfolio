import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.wrapper}>
        <h4>
          <a className={s.link} href="#home">
            Johanna Wilmers
          </a>
        </h4>

        <div className={s.rightLinks}>
          <a className={s.link} href="#about">
            About me
          </a>
          <a className={s.link} href="#about">
            Projects
          </a>
          <a className={s.link} href="#about">
            Work
          </a>
          <a className={s.link} href="#about">
            Voulentary work
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
