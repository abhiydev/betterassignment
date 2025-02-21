import Image from 'next/image'
import React, { useState } from 'react'

const HeroStory = () => {
  const [curImg, setCurImg] = useState<string>("Arian")

  return (
    <div className="bg-white">
      {/* Container: one column on mobile, two columns for md and above */}
      <div className="mx-4 md:mt-96 lg:mt-10 sm:mt-96 mt-56 grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {/* Left Column on Desktop: Image selection buttons & displayed image */}
        {/* For mobile, this column comes second (text first) */}
        <div className="order-2 md:order-1 flex md:flex-col-reverse flex-col items-center justify-center">
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setCurImg('Arian')}
              className={`font-semibold text-xl rounded-full px-4 py-2 transition-all duration-200 ease-in-out border border-green-700 hover:text-green-800 ${
                curImg === 'Arian'
                  ? 'text-green-800 border-[6px]'
                  : 'border'
              }`}
            >
              Arian
            </button>
            <button
              onClick={() => setCurImg('Amanda')}
              className={`font-semibold text-xl rounded-full px-4 py-2 transition-all duration-200 ease-in-out border border-green-700 hover:text-green-800 ${
                curImg === 'Amanda'
                  ? 'text-green-800 border-[6px]'
                  : 'border'
              }`}
            >
              Amanda
            </button>
            <button
              onClick={() => setCurImg('Paul')}
              className={`font-semibold text-xl rounded-full px-4 py-2 transition-all duration-200 ease-in-out border border-green-700 hover:text-green-800 ${
                curImg === 'Paul'
                  ? 'text-green-800 border-[6px]'
                  : 'border'
              }`}
            >
              Paul
            </button>
          </div>
          <div className="mt-8 flex max-w-[450px] justify-center items-center">
            <Image
              src={`/${curImg}.webp`}
              alt={curImg}
              height={100}
              width={100}
              className="w-[400px] h-auto px-8 py-4"
            />
          </div>
        </div>

        {/* Right Column on Desktop: Headline, button, and trust rating */}
        {/* For mobile, this comes first */}
        <div className="order-1 md:order-2 flex flex-col justify-center md:items-center">
          <h1 className="text-5xl font-semibold">
            {"Find out why we’re better."}
          </h1>
          <button className="mt-10 mx-2 w-full max-w-2xl p-6 bg-green-900 rounded-full text-2xl text-white text-center">
            See all our stories
          </button>
          <div className="mt-4 flex h-10 items-center justify-center">
            <Image
              src={'/trustpiolate.svg'}
              alt="Trust Pilot"
              height={100}
              width={100}
            />
            <p className="p-2 mt-[3px]">Excellent 4.4 out of 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroStory
