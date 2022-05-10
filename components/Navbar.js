import { useState, useEffect } from "react";
import Link from 'next/link';

export function Navbar() {
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
      className={`navbar navbar-expand-lg fixed-top navbar-light ${isTop ? "bg-gradient" : "bg-transparent"
        } `}
    >
      <Link href="/#home">
        <a className="navbar-brand">
          {`<Carson />`}
        </a>
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link href="/#about">
              <a
                className="nav-link lead"
              >
                <b>About</b>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#projects">
              <a
                className="nav-link lead"
              >
                <b>Projects</b>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#contact">
              <a
                className="nav-link lead"
              >
                <b>Contact</b>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};