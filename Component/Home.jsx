'use client'
import React from 'react'
import Sec2 from '@/Component/Sec2'
import Sec3 from '@/Component/Sec3'
import Sec4 from '@/Component/Sec4'
import Sec5 from '@/Component/Sec5'



const Home = () => {
  


  return (

    <div>

      <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10">

      {/* LEFT SECTION */}
      <div className="flex flex-col gap-6 lg:w-[60%] w-full">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Hello, I'm <br />
          <span className="text-yellow-400"> MosTech</span>
        </h1>

        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
          I'm a <span className="text-yellow-400 font-semibold">Programmer</span> with the efficiency of building
          scalable & responsive websites with great interactions. <br /><br />
          <span className="text-yellow-400">I write React.js, Python, JavaScript, Tailwind CSS, Next.js,</span> <br />
          Kasandra Database, FastAPI, HTML, CSS, and AI Integration,Mobile App.
        </p>

        {/* BUTTON */}
        <div className="mt-2">
          <button   className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40">
            Hire Me
          </button>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex-1 min-w-[150px] bg-neutral-800 border border-yellow-500 rounded-xl flex flex-col items-center justify-center py-4 shadow-md hover:scale-105 transition-transform">
            <h1 className="text-2xl font-bold text-yellow-400">2+</h1>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>

          <div className="flex-1 min-w-[150px] bg-neutral-800 border border-yellow-500 rounded-xl flex flex-col items-center justify-center py-4 shadow-md hover:scale-105 transition-transform">
            <h1 className="text-2xl font-bold text-yellow-400">10+</h1>
            <p className="text-sm text-gray-300">Projects Completed</p>
          </div>

          <div className="flex-1 min-w-[150px] bg-neutral-800 border border-yellow-500 rounded-xl flex flex-col items-center justify-center py-4 shadow-md hover:scale-105 transition-transform">
            <h1 className="text-2xl font-bold text-yellow-400">Team Work</h1>
            <p className="text-sm text-gray-300">1 Project</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="mt-10 lg:mt-0 lg:w-[35%] flex items-center justify-center">
        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src="https://ik.imagekit.io/90uckyblwx/Snapchat-1481906845-removebg-preview.png"
            alt="Godstime MosTech"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

    <Sec2/>
    <Sec3/>
    <Sec4/>
    <Sec5/>


    </div>
    
    
  )
}

export default Home
