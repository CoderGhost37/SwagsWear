import Head from "next/head";
import { client } from '../lib/client'
import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";
import Product from '../components/Product';

const Home = ({ products, bannerData }) => {
  return (
    <div className="p-3 m-auto max-w-[1400px] w-full">
      <Head>
        <title>CodesWear.com - Wear the code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Wear the code with CodesWear.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Wear whatever you want. What do you want? You want code? Why not
              wear the code?
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            {products?.map((product => <Product key={product._id} product={product} />))}
          </div>
        </div>
      </section>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
