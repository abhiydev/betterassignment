"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import CombinedSections from "@/components/about";

export default function About() {
  const [isScrolled, setNavBg] = useState<boolean>(false);

  const changeNavBg = () => {
    setNavBg(window.scrollY >= 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  return (
    <div className="w-full transition-all duration-700 ease-in-out overflow-y-hidden">
      <Navbar scrolled={isScrolled} />
      <main className="">
        <CombinedSections />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
