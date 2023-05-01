import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import Index from "@/components/Index";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
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
      <Navbar theme={theme} handleTheme={handleTheme} />
      <Index />
      <About />
      <Skills theme={theme} />
    </>
  );
}
