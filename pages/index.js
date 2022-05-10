import { Navbar, Hero, About, Projects } from '../components';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carson Lenze</title>
        <meta content="Carson Lenze" property="og:title" />
        <meta content="Hey there, My name is Carson, and I'm a 16 y/o developer" property="og:description" />
        <meta property="og:image" content="https://carsons.site/github.png"></meta>
        <meta name="theme-color" content="#5ee2ff" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}