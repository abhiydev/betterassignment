"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Our products");
  const categories = ["Our products", "Calculators", "Guides & FAQs"];

  return (
    <section className="section w-full pb-base lg:pb-12">
      <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
        <div className="flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
            Got questions?<br />We&apos;ve got answers
          </h2>
          <div className="flex gap-3 lg:gap-6 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary hover:text-green-800 ${
                  activeCategory === category
                    ? "text-green-800 border-[6px]"
                    : "border border-green-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
          <Link
            href="/content/buying-your-first-home-with-better-mortgage/"
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none"
          >
            <div className="flex items-center gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                Buying your first home with Better
              </h4>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-in-out duration-300 fill-transparent group-hover:[&_path]:fill-white group-hover:[&_rect]:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    />
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="First Home"
              loading="lazy"
              width={200}
              height={200}
              decoding="async"
              className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
              src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
              style={{ color: "transparent" }}
            />
          </Link>
          <Link
            href="/b/one-day-mortgage/"
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg"
          >
            <div className="flex items-center gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                One Day Mortgage<sup>1</sup>
              </h4>
              <p className="hidden md:block text-sm text-backgroundInversePrimary">
                Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.<sup>1</sup>
              </p>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-in-out duration-300 fill-transparent group-hover:[&_path]:fill-white group-hover:[&_rect]:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A8"
                    />
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="One day mortgage"
              loading="lazy"
              width={200}
              height={200}
              decoding="async"
              className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
              src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
              style={{ color: "transparent" }}
            />
          </Link>
          <Link
            href="https://www.bettercover.com"
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg"
          >
            <div className="flex items-center gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                Insurance
              </h4>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-in-out duration-300 fill-transparent group-hover:[&_path]:fill-white group-hover:[&_rect]:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A8"
                    />
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="Insurance"
              loading="lazy"
              width={200}
              height={200}
              decoding="async"
              className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
              src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
              style={{ color: "transparent" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
