
//modules
import Hero from "~/components/modules/Hero.js"
import About from "~/components/modules/About.js"
import Skills from "~/components/modules/Skills.js"
import Projects from "~/components/modules/Projects.js"
import Contact from "~/components/modules/Contact.js"

//nav
import Header from "~/components/nav/Header.js"
import Footer from "~/components/nav/Footer.js"


export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
