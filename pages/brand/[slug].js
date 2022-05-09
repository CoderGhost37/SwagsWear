import React from "react";
import Head from "next/head";

import { client } from "../../lib/client";
import Product from "../../components/Product";

const BrandProducts = ({ slug, product }) => {
  return (
    <div>
      <Head>
        <title>{slug}</title>
      </Head>
      <section className="text-gray-600 body-font max-w-[1400px] p-3 mt-10 items-center">
        <div className="flex flex-wrap justify-center -m-4">
          {product?.map((product) => 
            <Product key={product._id} product={product} />
          )}
        </div>
      </section>
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
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const product = products.filter((item) => item.brand === slug)

  return {
    props: { slug, product },
  };
};

export default BrandProducts;
