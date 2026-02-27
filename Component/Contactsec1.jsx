'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import SetIcons from './SetIcons';
import { useEffect  } from 'react';
import { useState } from 'react';

const Contactsec1 = () => {

    const router = useRouter();
  const colors=["text-purple-500", "text-green-500", "text-yellow-500",  "text-pink-500", "text-red-500"]
  const [colorIndex,setColorIndex]=useState(0)

  useEffect(()=>{
    const interval =setInterval(() => {
      setColorIndex((prev) =>  ( prev +1) % colors .length)
    }, 2000);
     return  () => clearInterval(interval)
  }, [])
  return (
    <div>

   

  
    
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:h-[100vh] bg-black items-center justify-center">
      
      {/* Left Section: Image + Icons */}
      <div className="flex flex-col items-center justify-center lg:w-[40%]">
        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src="https://ik.imagekit.io/90uckyblwx/Snapchat-1481906845-removebg-preview.png"
            alt="Godstime MosTech"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <SetIcons/>
        </div>
      </div>

      {/* Right Section: Text + Buttons */}
      <div className="flex flex-col lg:w-[50%] gap-6 items-center lg:items-start text-center lg:text-left">
        <h1 className={`text-4xl lg:text-5xl font-bold  leading-tight transition-all duration-500  ${colors[colorIndex]} `}>
          Crafting Modern & Scalable Web Experiences
        </h1>

        <p className="text-lg lg:text-xl text-white">
          I am a professional web developer, building modern, responsive, and scalable websites. Passionate about clean code, innovative solutions, and elegant design.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
          <button
            onClick={() => router.push("/projects")}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            View Projects
          </button>

          <a
            href="/GodstimeMosesCV.pdf"
            download
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contactsec1