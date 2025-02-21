"use client";
import Image from "next/image";
import React from "react";
import { CiStopwatch } from "react-icons/ci";
import RatingComponent from "./sub/Rating";

const Hero = () => {
    return (
        <div className="bg-green-900 w-[100vw - 2ppx] relative text-white font-bold h-[100vh] flex justify-center items-center">
            {/* Mobile Layout */}
            <div className="lg:hidden w-full bg-green-900 flex flex-col items-center justify-start">
                {/* Tagline */}
                <h1 className="text-center mt-4 sm:mt-[50vh] text-green-400 text-5xl font-bold mb-4">
                    Mortgages
                    <br />
                    made simple
                </h1>
                {/* Approval Button & Subtext */}
                <div className="w-full max-w-md flex flex-col justify-center items-center mb-4">
                    <button className="w-full bg-green-400 hover:bg-green-900 hover:text-white transition ease-in-out text-black text-lg font-normal py-4 rounded-full">
                        Start my approval
                    </button>
                    <p className="flex mt-2 items-center justify-center gap-1 font-thin text-sm">
                        <CiStopwatch /> 3 min | No credit impact
                    </p>
                </div>
                {/* Image Container: Full width with green background so that
            the background is visible on the right and left side */}
                <div className="w-[100vw] flex justify-center mb-4 bg-green-900">
                    <div className="max-w-[400px] w-full">
                        <Image
                            alt="Hero image"
                            src="/image.png"
                            width={400}
                            height={300}
                            className="mt-4"
                        />
                                        {/* Rating / Review Component */}
                    <div className="flex justify-center">
                        <RatingComponent />
                    </div>
                    </div>
                </div>

            </div>

            {/* Desktop Layout (Unchanged) */}
            <div className="hidden lg:flex relative flex-col justify-center items-center h-full bg-green-900 ">
                <Image
                    alt=""
                    src="/image.png"
                    width={400}
                    height={300}
                    className="absolute z-0 lg:top-[128px] mt-10 scale-125 md:scale-100 bg-green-900"
                />
                <h1 className="text-wrap max-w-80 lg:max-w-[500px] z-10 text-center lg:text-7xl text-5xl text-green-400">
                    Mortgages made simple
                </h1>
                <div className="flex flex-col relative justify-between items-center md:flex-row max-w-[1120px]">
                    <div className="w-full md:flex md:w-screen justify-around items-center">
                        <div className="w-full h-full max-w-64">
                            <button className="text-lg z-20 flex justify-center items-center w-full mt-6 max-h-16 text-center bg-green-400 hover:bg-green-900 hover:text-white transition duration-300 ease-in-out text-black font-normal py-8 rounded-full">
                                Start my approval
                            </button>
                            <p className="flex mt-2 z-20 items-center justify-center gap-1 text-center font-thin text-sm">
                                <CiStopwatch /> 3 min | No credit impact
                            </p>
                        </div>
                        <div className="h-[400px]"></div>
                        <div>
                            <RatingComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
