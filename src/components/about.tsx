"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CombinedSections: React.FC = () => {
  return (
    <>
      {/* Mission Section */}
      <section className="m-auto flex h-screen max-w-screen-xl items-center md:px-20">
        <div>
          <h1 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center text-textHighlight">
            Our mission
          </h1>
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter mt-8 text-center">
            We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h2>
        </div>
      </section>

      {/* Status Section */}
      <section className="m-auto flex max-w-screen-xl flex-col-reverse gap-x-32 gap-y-base px-20 pb-32 md:flex-row md:px-20">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center md:text-left">
            The status quo is broken
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base mt-6">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you.{" "}
            Better.com CEO,{" "}
            <Link href="/content/vishal-garg-better-ceo/">
              Vishal Garg
            </Link>
            , set out to change that.
          </p>
          <Link
            href="/content/the-house-that-got-away-why-i-started-better-mortgage/"
            className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center mt-8"
          >
            Read Vishal’s story
          </Link>
        </div>
        {/* Right Column */}
        <div className="relative w-full md:w-1/2">
          <button style={{ height: "400px" }}>
            <Image
              alt="Vishal Mission"
              src="https://media.better.com/video/vishal-mission.jpg"
              width={1080}
              height={800}
              loading="lazy"
              decoding="async"
              style={{
                color: "transparent",
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-play absolute"
              style={{ left: "45%", top: "35%" }}
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </button>
        </div>
      </section>

      {/* Changing Things Section */}
      <section className="bg-backgroundInverseSecondary px-20 py-20">
        <div className="m-auto max-w-screen-lg">
          <h2 className="font-bold leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter text-white">
            How we’re changing things
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-white text-base mt-8">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-white text-base mt-4">
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>
    </>
  );
};

export default CombinedSections;
