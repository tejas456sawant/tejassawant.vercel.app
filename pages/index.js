/** @format */

import React from "react";
import Head from "next/head";
import Landing from "../components/landing";
import "../css/index.css";
import Projects from "../components/projects";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Layout from "../layout/layout";
import GoTop from "../components/gotop";

const Home = () => (
  <div>
    <Head>
      <title>Tejas Sawant</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0'></meta>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Layout>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <GoTop />
    </Layout>
  </div>
);

export default Home;
