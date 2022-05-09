import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import Cart from './Cart';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex justify-between items-center py-2 shadow-md">
      <Link href="/">
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <Image src="/logo.png" alt="" width="70" height="50" />
          <span className="text-xl md:text-2xl font-bold">SwagsWear</span>
        </a>
      </Link>
      <button className="relative scale-100 hover:scale-110 mr-3" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart className="bg-transparent text-xl md:text-3xl" />
        <span className="absolute text-xs text-white top-[-8px] bg-red-600 right-[-5px] px-[6px] py-[1px] rounded-full text-center font-semibold">
          {totalQuantities}
        </span>
      </button>

      { showCart && <Cart /> }
    </div>
  );
};

export default Navbar;
