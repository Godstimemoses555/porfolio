'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const projects = [
  { name: 'FastAPI', link: '/projects/fastapi' },
  { name: 'E-Commerce', link: '/projects/ecommerce' },
  { name: 'Normal Website Design', link: '/projects/website' },
  { name: 'AI Integration', link: '/projects/ai' },
  { name: 'Other Projects', link: '/projects/other' },
]

const projectsdiv = () => {
  const router = useRouter()

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Container for flex items */}
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] hover:shadow-2xl transition-shadow duration-300 snap-start"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-6">
                A brief description of {project.name}. Highlight key features or tech stack.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(project.link)}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default projectsdiv
