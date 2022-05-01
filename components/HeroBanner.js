/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner: { smallText, midText, largeText1, slug, buttonText, image, desc } }) => {
  return (
    <div className="py-10 px-6 relative rounded-lg w-full h-[500px] bg-slate-300">
      <p className="text-xl font-semibold mt-5">{smallText}</p>
      <h3 className="text-6xl font-bold mt-1">{midText}</h3>
      <h1 className="text-8xl text-white font-bold mt-1">
        {largeText1}
      </h1>
      <img
        src={urlFor(image)}
        alt="headphones"
        className="absolute top-[-2%] md:top-0 right-[-6%] md:right-[20%] w-[77%] md:w-[450px] h-[62%] md:h-[450px]"
      />
      <div>
        <Link href={`/product/${slug.current}`}>
          <button
            className="mt-10 text-sm font-semibold cursor-pointer z-10 bg-red-600 rounded-lg px-4 py-2 text-white border-none"
            type="button"
          >
            {buttonText}
          </button>
        </Link>
        <div className="absolute right-[5%] bottom-[5%] w-[300px] flex flex-col leading-5">
          <h5 className="font-semibold text-gray-600">Description</h5>
          <p className="text-gray-400">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
