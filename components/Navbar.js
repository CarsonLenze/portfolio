import { useState, useEffect } from "react";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    setIsTop(window.scrollY > 150)
    window.addEventListener("scroll", () => {
      const istop = window.scrollY > 150;
      if (istop != isTop) {
        setIsTop(istop)
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-gradient" : "bg-transparent"
      } `}
    >
      <a className="navbar-brand" href="/#home">
        {`<Carson />`}
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link lead"
              href="/#about"
            >
              <b>About</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href="/#projects"
            >
              <b>Projects</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href="/#contact"
            >
              <b>Contact</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};