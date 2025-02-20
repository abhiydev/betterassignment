"use client";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ItemsListForHam = ({ itemName, itemlist }: { itemName: string, itemlist: string }) => {
    // Split the string by commas
    const items = itemlist.split(",");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full">
            <div className="flex justify-between w-full h-full">
                <h3 className="font-semibold">
                    {itemName}
                </h3>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                    {isOpen ? <IoMdArrowDropup /> : <MdOutlineArrowDropDown />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="px-2 mt-2 p-2 hover:cursor-pointer rounded-lg hover:bg-gray-300 transition-colors duration-500 ease-in-out"
                            >
                                {item.trim()}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ItemsListForHam;
