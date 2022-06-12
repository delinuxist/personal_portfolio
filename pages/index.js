import Image from "next/image";
import Head from "next/head";
import BackgroundAnimation from "../components/BgAnimation/BgAnimation";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emmanuel | Full-Stack Developer</title>
      </Head>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
      </div>
    </>
  );
}
