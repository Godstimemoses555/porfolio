'use client'
import Aboutsec1 from '@/Component/Aboutsec1'
import SetIcons from '@/Component/SetIcons'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (

    <div>

      <div className="bg-black text-white">

      {/* === ABOUT SECTION === */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:h-[100vh] items-center justify-center">

        {/* === LEFT SECTION: IMAGE + ICONS === */}
        <div className="flex flex-col items-center justify-center lg:w-[40%]">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="https://ik.imagekit.io/90uckyblwx/Snapchat-1481906845-removebg-preview.png"
              alt="Godstime MosTech"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <SetIcons />
          </div>
        </div>

        {/* === RIGHT SECTION: TEXT + BUTTONS === */}
        <div className="flex flex-col lg:w-[50%] gap-6 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-500 leading-tight">
            Crafting Modern & Scalable Web Experiences
          </h1>

          <p className="text-lg lg:text-xl text-gray-300">
            I am a professional web developer, building modern, responsive, and scalable websites.
            Passionate about clean code, innovative solutions, and elegant design.
          </p>

          {/* === BUTTONS === */}
          <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
            <Link
              href="/projects"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Projects
            </Link>

            <Link
              href="/GodstimeMosesCV.pdf"
              download
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>

      {/* === PROJECTS SECTION === */}
      <div className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-yellow-500 mb-10">
          My Featured Projects
        </h2>

        {/* === FLEX INSTEAD OF GRID === */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">

          {/* === Project 1 === */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 w-[300px]">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">E-Commerce Website</h3>
            <p className="text-gray-400 mb-6">A professional e-commerce platform with product management and payment integration.</p>
            <Link
              href="https://realdemo-two.vercel.app/"
              target="_blank"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>

          {/* === Project 2 === */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 w-[300px]">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Portfolio Website</h3>
            <p className="text-gray-400 mb-6">A sleek personal portfolio showcasing creativity and responsive design.</p>
            <Link
              href="https://your-portfolio-link.com"
              target="_blank"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>

          {/* === Project 3 === */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 w-[300px]">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Blog Platform</h3>
            <p className="text-gray-400 mb-6">A modern blog system with a CMS-style interface and smooth reading experience.</p>
            <Link
              href="https://event-site-azure.vercel.app/"
              target="_blank"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>

          {/* === Project 4 === */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 w-[300px]">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Restaurant Website</h3>
            <p className="text-gray-400 mb-6">An elegant restaurant website with menus, gallery, and reservation features.</p>
            <Link
              href="https://your-restaurant-link.com"
              target="_blank"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>

          {/* === Project 5 === */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 w-[300px]">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Business Dashboard</h3>
            <p className="text-gray-400 mb-6">A data-driven dashboard for managing analytics and performance insights.</p>
            <Link
              href="https://your-dashboard-link.com"
              target="_blank"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>

        </div>
      </div>
    </div>

    <Aboutsec1/>

    </div>
    
  )
}

export default About
