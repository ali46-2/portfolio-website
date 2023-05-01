import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Ali Murtaza</title>
      </Head>
      <Navbar theme={theme} handleTheme={handleTheme} />
      <Home />
      <About />
      <Skills theme={theme} />
      <Projects />
    </>
  );
}
