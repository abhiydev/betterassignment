"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroStory from "@/components/HeroStory";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [isScrolled, setNavBg] = useState<boolean>(false);

  const changeNavBg = () => {
    setNavBg(window.scrollY >= 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  return (
    <div className="w-full transition-all duration-700 ease-in-out">
      <Navbar scrolled={isScrolled} />
      <div className="bg-green-900">
        <Hero />
      </div>
      <main className="">
        <HeroStory />
      </main>
      <FAQSection />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
