'use client'
import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react' // Telegram-style icon

const Aboutsec1 = () => {
  const colors = ["text-yellow-500", "text-blue-400", "text-green-400", "text-pink-500", "text-purple-500"]
  const [colorIndex, setColorIndex] = useState(0)

  // Auto color change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-6">
      {/* === Profile Image === */}
      <div className="mb-6">
        <img
          src="https://ik.imagekit.io/90uckyblwx/Snapchat-1481906845-removebg-preview.png"
          alt="Godstime MosTech"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-yellow-500 object-cover shadow-lg"
        />
      </div>

      {/* === Animated Text === */}
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-500 ${colors[colorIndex]}`}>
        Let’s Build Something Great Together
      </h2>

      <p className="text-gray-400 text-center max-w-xl mb-8">
        Have a project in mind or just want to say hi? Drop your message below — I’d love to hear from you!
      </p>

      {/* === Message Box === */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
        <textarea
          placeholder="Type your message..."
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none h-32"
        ></textarea>

        {/* === Telegram-style Button === */}
        <button
          className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Send
        </button>
      </div>
    </div>
  )
}

export default Aboutsec1
