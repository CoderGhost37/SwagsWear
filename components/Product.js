/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  return (
    <div className="m-4">
      <Link href={`/product/${product.slug.current}`}>
        <div className="cursor-pointer scale-100 hover:scale-110 transition delay-150 duration-300 ease-linear">
          <img
            src={urlFor(product.image && product.image[0])}
            alt=""
            width={250}
            height={250}
            className="rounded-md bg-zinc-200 scale-100 transition delay-150 duration-300 ease-linear"
          />
          <p className="font-semibold">{product.name}</p>
          <p className="font-bold mt-1">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
