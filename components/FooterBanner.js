import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { discount, smallText, midText, largeText1, largeText2, saleTime, slug, buttonText, image, desc } }) => {
  return (
    <div className='py-10 px-4 md:px-6 rounded-lg relative h-[560px] md:h-[400px] text-white bg-red-500 mt-32'>
        <div className='flex justify-between flex-wrap gap-5'>
            <div className='left'>
                <p className='m-4'>{discount}</p>
                <h3 className='font-bold text-4xl md:text-7xl ml-6'>{largeText1}</h3>
                <h3 className='font-bold text-4xl md:text-7xl ml-6'>{largeText2}</h3>
                <p className='m-4'>{saleTime}</p>
            </div>
            <div className='right mt-10 md:m-0'>
                <p className='text-xl'>{smallText}</p>
                <h3 className='font-bold text-5xl md:text-6xl lead'>{midText}</h3>
                <p className='text-xl'>{desc}</p>
                <Link href={`/product/${slug.current}`}>
                    <button type="button" className='rounded-md px-4 py-1 bg-white text-red-500 border-none mt-10 text-lg font-semibold cursor-pointer'>{buttonText}</button>
                </Link>
            </div>
            <img src={urlFor(image)} alt="headphones" className='absolute left-[25%] md:top-[-25%] md:left-[25%] w-[77%] h-[56%] md:w-max md:h-max' />
        </div>
    </div>
  )
}

export default FooterBanner