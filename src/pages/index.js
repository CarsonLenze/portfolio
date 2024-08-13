import Hero from "~/components/layout/Hero.js"
import About from "~/components/layout/About.js"
import Skills from "~/components/layout/Skills.js"
import Projects from "~/components/layout/Projects.js"
import Contact from "~/components/layout/Contact.js"

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}
