'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Sec5 = () => {
    const router =useRouter();
   
  return (
    <div>
    <div className='flex lg:h-[50vh] gap-3 p-2.5 items-center justify-center bg-black flex-col'>
        <h1 className='text-yellow-500 text-[40px] font-bold  md:text-center lg:text-center'>Do you have a Project Idea? <br />Let's discuss your project!</h1>
        <p className='text-white text-[20px] sm:text-center lg:text-center'>Do you have a Project Idea? Let's  discuss your project!</p>

        <button onClick={()=> router.push("/Contact")} className='bg-yellow-500 text-[20px] text-white w-[200px] h-[50px] rounded-[5px] shadow-lg'>
            Let's Work Together
        </button>

    </div>
    </div>
  )
}

export default Sec5