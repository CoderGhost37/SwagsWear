import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async() => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div
      ref={cartRef}
      className="w-screen bg-zinc-800 bg-opacity-80 fixed top-0 right-0 z-10 transition-all duration-1000 ease-in-out"
    >
      <div className="h-screen w-[300px] md:w-[45%] bg-white float-right relative p-1 md:py-10 md:px-2">
        <button
          type="button"
          className="flex items-center text-lg font-semibold cursor-pointer gap-1 ml-2 border-none bg-transparent"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-red-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="m-10 md:mt-20 text-center">
            <AiOutlineShopping className="inline" size={150} />
            <h3 className="font-bold text-xl">Your shopping bag is empty.</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-[400px] rounded-lg py-2 px-3 border-none text-xl mt-10 uppercase bg-red-500 text-white scale-100 hover:scale-110 transition-transform duration-500 ease-linear"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="overflow-y-auto max-h-[70vh] py-5 px-2">
          {cartItems.length>=1 && cartItems.map((item, index) => (
            <div className="flex gap-7 px-1 py-5 md:p-5" key={item._id}>
              <img src={urlFor(item?.image[0])} alt="" className='w-1/4 h-1/4 md:w-[180px] md:h-[150px] rounded-lg  bg-gray-300' />
              <div>
                <div className="flex items-center justify-between w-[200px] md:w-[350px] flex-wrap gap-2">
                  <h5 className="font-bold text-sm md:text-2xl">{item.name}</h5>
                  <h4 className="font-bold text-sm md:text-xl">₹{item.price}</h4>
                </div>
                <div className="flex justify-between w-[200px] md:w-[350px] mt-7 md:mt-14">
                  <div>
                    <p className="flex items-center border-[1px] border-gray-400 text-sm md:text-xl">
                      <span className="px-2 md:py-[2px] cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="border-l-[1px] border-r-[1px] border-gray-400 px-[10px] md:py-[2px] cursor-pointer">
                        {item.quantity}
                      </span>
                      <span className="px-2 md:py-[2px] cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button 
                    type="button"
                    className="text-lg md:text-2xl text-red-500 bg-transparent border-none"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length>=1 && (
          <div className="absolute bottom-2 right-1 w-full p-7 md:py-7 md:px-16">
            <div className="flex justify-between">
              <h3 className="text-xl md:text-2xl font-bold">SubTotal: </h3>
              <h3 className="text-xl md:text-2xl font-bold">₹{totalPrice}</h3>
            </div>
            <div className="m-auto w-[300px] md:w-[400px]">
              <button
               type="button"
               className="w-full rounded-lg py-2 px-3 border-none text-xl mt-5 uppercase bg-red-500 text-white scale-100 hover:scale-110 transition-transform duration-500 ease-linear"
               onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
