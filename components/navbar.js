import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-center md:justify-start items-center flex-col md:flex-row py-2'>
        <Link href="/">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <Image src="/about02.png" alt="" width="70" height="50" />
              <span className="text-xl md:text-2xl font-bold">CodesWear</span>
            </a>
          </Link>
        <div className="nav">
            <ul className="flex items-center space-x-2 mx-5 font-bold md:text-l">
                <Link href="/tshirts"><a><li>T-Shirts</li></a></Link>
                <Link href="/hoodies"><a><li>Hoodies</li></a></Link>
                <Link href="/mugs"><a><li>Mugs</li></a></Link>
            </ul>
        </div>
        <div className="cart absolute right-0 top-2 mt-2 mx-5">
            <button><AiOutlineShoppingCart className='text-xl md:text-2xl' /></button>
        </div>
    </div>
  )
}

export default Navbar