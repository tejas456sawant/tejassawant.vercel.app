import React from "react";
import Head from "next/head";
import Landing from "../components/landing";
import Projects from "../components/projects";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Layout from "../layout/layout";
import GoTop from "../components/gotop";

const Home = () => (
  <Layout>
    <Head>
      <title>Tejas Sawant</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Landing />
    <About />
    <Skills />
    {/* <Projects /> */}
    <Contact />
    <GoTop />
  </Layout>
);

export default Home;
