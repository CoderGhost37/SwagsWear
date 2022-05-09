/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ brand }) => {
    const { brand_name, image, slug } = brand;
  return (
    <div className="m-4">
      <Link href={`/brand/${slug.current}`}>
        <div 
        className="cursor-pointer min-h-[180px] scale-100 hover:scale-110 transition delay-150 duration-300 ease-linear">
          <img
            src={urlFor(image)}
            alt=""
            width={250}
            height={250}
            className="rounded-md h-[200px] bg-zinc-200 scale-100 transition delay-150 duration-300 ease-linear"
          />
          <p className="text-center text-xl font-semibold">{brand_name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
