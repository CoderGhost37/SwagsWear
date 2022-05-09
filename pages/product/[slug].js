import React, { useState } from "react";
import Head from "next/head";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import Product from "../../components/Product";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = async() => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex gap-10 m-10 mt-16 flex-wrap justify-center">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="rounded-lg w-[350px] md:w-[400px] h-[350px] md:h-[400px] bg-gray-200 hover:bg-red-500 transition ease-in-out duration-300"
            />
          </div>
          <div className="flex gap-2 mt-5">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                alt={item.name}
                key={i}
                className={
                  i === index
                    ? "w-[70px] h-[70px] rounded-lg p-[2px] border-2 border-red-500 bg-red-500"
                    : "rounded-lg w-[70px] h-[70px] bg-gray-200"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="font-bold text-4xl">{name}</h1>
          <div className="mt-2 flex gap-1 items-center">
            <div className="flex text-red-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          <h4 className="font-semibold mt-2">Details:</h4>
          <p>{details}</p>
          <p className="mt-2 font-bold text-3xl text-red-500">₹{price}</p>

          <div className="flex gap-5 mt-2 items-center">
            <h3 className="font-semibold text-lg">Quantity:</h3>
            <p className="flex items-center border-[1px] border-gray-400">
              <span className="px-3 py-1 cursor-pointer" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="border-l-[1px] border-r-[1px] border-gray-400 px-3 py-1 cursor-pointer">
                {qty}
              </span>
              <span className="px-3 py-1 cursor-pointer" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="flex gap-7">
            <button
              type="button"
              className="py-2 px-5 mt-10 text-lg font-semibold text-red-500 w-36 md:w-48 border-[1px] border-red-500 scale-100 hover:scale-110 transition delay-150 duration-300 ease-linear"
              onClick={() => onAdd(product, qty)}
              >
              Add to Cart
            </button>
            <button
              type="button"
              className="py-2 px-5 mt-10 text-lg font-semibold bg-red-500 text-white w-36 md:w-48 border-none scale-100 hover:scale-110 transition delay-150 duration-300 ease-linear"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-center font-bold text-2xl m-12">
          You may also like
        </h2>
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="flex justify-center gap-4 mt-5 absolute whitespace-nowrap will-change-transform w-[180%] animate-marquee hover:animate-play-state-none hover:pause">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery =  `*[_type == "product" && brand == '${slug.split('-')[0]}']`;
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
