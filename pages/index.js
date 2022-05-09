import Head from "next/head";
import Image from "next/image";
import Header from '../components/Header'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          let theme = document.documentElement.getAttribute("data-theme");

          if (theme != "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
          }
        }}
      >
        Change Theme
      </button>
      <div className="home">test</div>
      <About />
    </div>
  );
}
