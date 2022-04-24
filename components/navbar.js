import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = () => {
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }

  return (
    <div className='flex justify-center md:justify-start items-center flex-col md:flex-row py-2 shadow-md'>
        <Link href="/">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <Image src="/about02.png" alt="" width="70" height="50" />
              <span className="text-xl md:text-2xl font-bold">CodesWear</span>
            </a>
          </Link>
        <div className="nav">
            <ul className="flex items-center space-x-2 mx-5 font-bold md:text-md">
                <Link href="/tshirts"><a><li>T-Shirts</li></a></Link>
                <Link href="/hoodies"><a><li>Hoodies</li></a></Link>
                <Link href="/mugs"><a><li>Mugs</li></a></Link>
            </ul>
        </div>
        <div onClick={toggleCart} className="cart absolute right-0 top-4 mt-2 mx-5">
            <button><AiOutlineShoppingCart className='text-xl md:text-2xl' /></button>
        </div>
        <div ref={ref} className="sidebar absolute w-72 h-full z-10 top-0 right-0 bg-zinc-300 px-8 py-10 transform transition-transform translate-x-full">
          <h2 className='font-bold text-center text-xl'>Shopping Cart</h2>
          <span onClick={toggleCart} className='absolute top-5 right-3 cursor-pointer text-2xl'><AiFillCloseCircle/></span>
          <ol>
            <li>
              <div className="item flex font-semibold my-5">
                <div className="w-2/3">Tshirt - Wear the code</div>
                <div className="w-1/3 flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-sm cursor-pointer'/> 
                  <span className='mx-3'>1</span> 
                  <AiOutlinePlusCircle className='text-sm cursor-pointer'/>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex font-semibold my-5">
                <div className="w-2/3">Tshirt - Wear the code</div>
                <div className="w-1/3 flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-sm cursor-pointer'/> 
                  <span className='mx-3'>1</span> 
                  <AiOutlinePlusCircle className='text-sm cursor-pointer'/>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex font-semibold my-5">
                <div className="w-2/3">Tshirt - Wear the code</div>
                <div className="w-1/3 flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-sm cursor-pointer'/> 
                  <span className='mx-3'>1</span> 
                  <AiOutlinePlusCircle className='text-sm cursor-pointer'/>
                </div>
              </div>
            </li>
          </ol>
          <button className='flex items-center mx-auto mt-16 text-white bg-zinc-600 border-0 py-2 px-8 rounded text-lg focus:outline-none'><BsFillBagCheckFill className='m-2'/> Checkout</button>
        </div>
    </div>
  )
}

export default Navbar