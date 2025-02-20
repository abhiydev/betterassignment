"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ItemsListForHam from "./sub/ItemsListForHam";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
    const [isHamOpen, setIsHamOpen] = useState(false);

    return (
        <div
            className={`w-full ${scrolled
                ? ""
                : "flex h-full justify-between items-center bg-green-800 text-white"
                }`}
        >
            {!isHamOpen ? (
                <>
                    <div className="text-2xl m-2 p-1">Better</div>
                    <ul className="flex justify-center items-center gap-4 m-2 p-1">
                        <li className="border rounded-full p-1">
                            <IoIosCall aria-label="Call" />
                        </li>
                        <li
                            className={`${scrolled
                                ? ""
                                : "bg-green-400 text-sm text-black px-2 py-1 rounded-full"
                                }`}
                        >
                            Get started
                        </li>
                        <li>
                            <button
                                onClick={() => setIsHamOpen(true)}
                                className="flex justify-center items-center text-xl font-bold"
                                aria-label="Open Menu"
                            >
                                <RxHamburgerMenu />
                            </button>
                        </li>
                    </ul>
                </>
            ) : null}
            <AnimatePresence>
                {isHamOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-screen w-screen bg-white text-black absolute top-0 left-0"
                    >
                        <div className="flex justify-between items-center">
                            <div className="text-2xl m-2 p-1">Better</div>
                            <button
                                onClick={() => setIsHamOpen(false)}
                                className="flex justify-center items-center text-2xl hover:bg-gray-300 rounded-lg m-2 p-1 font-bold"
                                aria-label="Close Menu"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <ul className="m-4">
                            <li>
                                <ItemsListForHam
                                    itemlist="Apply now, Purchase rates, Affordability calculator, Mortgage calculator, Rent vs buy calculator, Find an agent, VA loans, Learning center,"
                                    itemName="Buy"
                                />
                            </li>
                            <li>
                                <ItemsListForHam
                                    itemlist="Apply Now, Refinance rates, Cash-out refinance calculator, Learning Center,"
                                    itemName="Refinance"
                                />
                            </li>
                            <li>
                                <ItemsListForHam
                                    itemlist="Apply Now, Calculate your Cash 💵, HELOC vs. Cash-out Refinance, Learning Center,"
                                    itemName="HELOC"
                                />
                            </li>
                            <li>
                                <ItemsListForHam
                                    itemlist="Purchase mortgage rates, Refinance rates, Refinance cash-out rates,"
                                    itemName="Rates"
                                />
                            </li>
                            <li>
                                <ItemsListForHam
                                    itemlist="HELOC rates, Purchase VA rates, Get Insurance, Title and Closing, Better Attorney Match, Learning Center, Better Agent Match, For Agents, Better Duo, For Agents,"
                                    itemName="Better+"
                                />
                            </li>
                        </ul>
                            <h1 className="flex gap-2 bg-gray-200 rounded-full mx-6 py-1 items-center justify-center">
                                <IoIosCall className="text-xl"/> {"Call us anytime at "} <a className="underline-offset" href="#">(415) 523 88371</a>
                            </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
