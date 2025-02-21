"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import ItemsListForHam from "./sub/ItemsListForHam";

interface DropdownProps {
  id: string;
  title: React.ReactNode;
  itemlist: string;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
}

// Reusable Dropdown Component for Desktop Navigation
const Dropdown: React.FC<DropdownProps> = ({
  id,
  title,
  itemlist,
  activeDropdown,
  setActiveDropdown,
}) => {
  const isOpen = activeDropdown === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="px-2 py-1 md:px-3 md:py-2 rounded-full transition-colors duration-300 hover:bg-white hover:text-black text-center">
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 sm:w-56 md:w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black"
          >
            <ul className="p-3">
              {itemlist.split(",").map((item, index) => (
                <li
                  key={index}
                  className="p-1 text-xs sm:text-sm hover:bg-gray-100 rounded cursor-pointer"
                >
                  {item.trim()}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isHamOpen, setIsHamOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPhoneHovering, setIsPhoneHovering] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const callContainerRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // For the phone icon tooltip using ref (desktop)
  useEffect(() => {
    const handleMouseEnter = () => setIsPhoneHovering(true);
    const handleMouseLeave = () => setIsPhoneHovering(false);
    const refElem = callContainerRef.current;
    if (refElem) {
      refElem.addEventListener("mouseenter", handleMouseEnter);
      refElem.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (refElem) {
        refElem.removeEventListener("mouseenter", handleMouseEnter);
        refElem.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full z-50 flex h-full justify-between items-center ${
        scrolled ? "bg-white" : "bg-green-900 text-white"
      }`}
    >
      {/* Desktop Navbar */}
      {!isHamOpen && (
        <>
          <div className="flex items-center">
            <Link
              href="#"
              className="text-xl md:text-2xl px-4 md:px-6 mx-2 md:mx-6 p-2 md:p-4 font-bold"
            >
              {/* Logo SVG remains unchanged */}
              <svg
                role="img"
                className="icon icon-LogoBetter2021"
                width="65px"
                height="20px"
                viewBox="0 0 495 133"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Better</title>
                <path
                  d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            {/* Dropdown Container */}
            <div
              className="hidden lg:flex list-none gap-3 md:gap-4"
              ref={dropdownContainerRef}
            >
              <Dropdown
                id="buy"
                title="Buy"
                itemlist="Apply now, Purchase rates, Affordability calculator, Mortgage calculator, Rent vs buy calculator, Find an agent, VA loans, Learning center"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                id="refinance"
                title="Refinance"
                itemlist="Apply Now, Refinance rates, Cash-out refinance calculator, Learning Center"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                id="heloc"
                title="HELOC"
                itemlist="Apply Now, Calculate your Cash 💵, HELOC vs. Cash-out Refinance, Learning Center"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                id="rates"
                title="Rates"
                itemlist="Purchase mortgage rates, Refinance rates, Refinance cash-out rates"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                id="better"
                title="Better"
                itemlist="HELOC rates, Purchase VA rates, Get Insurance, Title and Closing, Better Attorney Match, Learning Center, Better Agent Match, For Agents, Better Duo, For Agents"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
          </div>
          <ul className="flex justify-center items-center px-8 py-2 lg:px-16 lg:py-6">
            <div className="relative border rounded-full py-1 scale-90 md:text-2xl mx-4 md:mx-8" ref={callContainerRef}>
              <Dropdown
                id="toCall"
                title={<IoIosCall />}
                itemlist="Call us anytime at (415) 523 88371"
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
            <button
              className={`${
                scrolled
                  ? "hover:bg-gray-300 hidden md:flex justify-center items-center mr-6 px-4 py-3 text-xs md:text-sm hover:text-black rounded-full"
                  : "hover:bg-white hidden md:flex justify-center items-center mr-6 px-4 py-3 text-xs md:text-sm hover:text-black rounded-full"
              }`}
            >
              Sign In
            </button>
            <button
              className={`${
                scrolled
                  ? "bg-green-900 text-white font-serif lg:text-base md:scale-100 w-full transition-colors duration-300 ease-in-out hover:bg-green-900 text-xs md:text-sm mr-6 px-4 py-3 rounded-full"
                  : "bg-green-500 text-black font-serif lg:text-base md:scale-100 w-full transition-colors duration-300 ease-in-out hover:bg-green-900 text-xs md:text-sm mr-6 px-4 py-3 rounded-full"
              }`}
            >
              Get started
            </button>
            <button
              onClick={() => setIsHamOpen(true)}
              className="flex justify-center lg:hidden items-center text-xl font-bold p-2"
              aria-label="Open Menu"
            >
              <RxHamburgerMenu />
            </button>
          </ul>
        </>
      )}

      {/* Hamburger Overlay for Mobile */}
      <AnimatePresence>
        {isHamOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-screen w-screen bg-white text-black absolute top-0 left-0 z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4">
              <Link href={"#"} className="text-xl md:text-2xl font-bold">
                Better
              </Link>
              <button
                onClick={() => setIsHamOpen(false)}
                className="flex justify-center items-center text-2xl hover:bg-gray-300 rounded-lg p-2"
                aria-label="Close Menu"
              >
                <IoClose />
              </button>
            </div>
            <ul className="m-4 space-y-2">
              <div>
                <ItemsListForHam
                  itemlist="Apply now, Purchase rates, Affordability calculator, Mortgage calculator, Rent vs buy calculator, Find an agent, VA loans, Learning center,"
                  itemName="Buy"
                />
              </div>
              <div>
                <ItemsListForHam
                  itemlist="Apply Now, Refinance rates, Cash-out refinance calculator, Learning Center,"
                  itemName="Refinance"
                />
              </div>
              <div>
                <ItemsListForHam
                  itemlist="Apply Now, Calculate your Cash 💵, HELOC vs. Cash-out Refinance, Learning Center,"
                  itemName="HELOC"
                />
              </div>
              <div>
                <ItemsListForHam
                  itemlist="Purchase mortgage rates, Refinance rates, Refinance cash-out rates,"
                  itemName="Rates"
                />
              </div>
              <div>
                <ItemsListForHam
                  itemlist="HELOC rates, Purchase VA rates, Get Insurance, Title and Closing, Better Attorney Match, Learning Center, Better Agent Match, For Agents, Better Duo, For Agents,"
                  itemName="Better+"
                />
              </div>
            </ul>
            <div className="mx-6 mt-8">
              <div className="flex gap-3" ref={dropdownContainerRef}>
                <Dropdown
                  id="Phone"
                  title="Phone"
                  itemlist="Call us anytime at (415) 523 88371,"
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              </div>
              <div className="flex flex-col mx-6 mt-12 gap-4">
                <button className="bg-green-500 text-black px-3 py-2 rounded-full">
                  Get started
                </button>
                <button className="flex justify-center items-center gap-1 border border-black text-black px-3 py-2 rounded-full">
                  Sign In <FaUser />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
