import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
    }, [])
    

  return (
    <div className='min-h-[69vh] md:min-h-[60vh]'>
        <div className="w-[390px] h-[350px] md:w-[1000px] bg-gray-300 m-auto my-24 p-12 rounded-lg flex justify-center items-center flex-col">
            <p className='text-green-500 text-4xl'>
                <BsBagCheckFill/>
            </p>
            <h2 className='uppercase text-center mt-4 font-bold text-lg md:text-4xl '>Thank you for your order!</h2>
            <p className='text-sm md:text-lg text-center font-semibold'>Check your email inbox for the receipt.</p>
            <p className='text-lg text-center font-semibold m-2 mt-7'>
                If you have any questions, fell free to ask us on
                <a className='ml-1 text-red-500' href="mailto:order@codeswear.com"> order@swagswear.com</a>
            </p>
            <Link href="/">
                <button type="button" className='w-[300px] rounded-lg py-2 px-3 border-none text-xl mt-5 uppercase bg-red-500 text-white scale-100 hover:scale-110 transition-transform duration-500 ease-linear'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success