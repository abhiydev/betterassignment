'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  return (
    <div className="">
      <Navbar scrolled={isScrolled}/>
    </div>
  );
}
