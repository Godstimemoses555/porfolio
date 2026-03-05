'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
    <div className='flex lg:w-[50vh] bg-yellow-500 gap-2.5 p-2.5 items-center justify-between lg:w-[100%]  flex-col lg:flex-row'>
        <div className='flex lg:w-[100%] lg:h-[50%] bg-yellow-500 gap-2.5 p-2.5 items-center justify-between flex-col lg:flex-row'>
          <div className='flex lg:w-[200px]'>
            <h1 className='text-black text-[40px] font-bold'>MosTech</h1>

          </div>

          <div className='flex lg:w-[300px] gap-2.5'>
            <Link className='text-[20px] text-black' href='/'>
             Home
            
            </Link>
            
            <Link className='text-[20px] text-black' href="/about">
             About

            </Link>

            <Link className='text-[20px] text-black' href="/projects">

             Projects
            
            </Link>

            <Link className='text-[20px] text-black' href="/contact">
             Contact

            </Link>


          </div>

          <div className='flex lg:w-[500px] items-center justify-center '>
            <h1 className='text-[20px] text-black'>© Design by <span className='text-white text-[20px] font-bold'>MosTech </span> All Right Reserve 2025 </h1>

          </div>

        </div>

    </div>
    </div>
  )
}

export default Footer