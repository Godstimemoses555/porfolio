"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Code, Monitor, LayoutGrid, ServerCog, Database, Cpu } from "lucide-react";

export default function Sec4() {
  const router = useRouter();

  const projects = [
    { title: "Web App UI", description: "Modern web interfaces.", icon: <Monitor size={36} className="text-yellow-500 mb-2" /> },
    { title: "API Integration", description: "Seamless backend integration.", icon: <ServerCog size={36} className="text-yellow-500 mb-2" /> },
    { title: "Database Design", description: "Efficient database structures.", icon: <Database size={36} className="text-yellow-500 mb-2" /> },
    { title: "Responsive Layouts", description: "Layouts for all devices.", icon: <LayoutGrid size={36} className="text-yellow-500 mb-2" /> },
    { title: "Clean Code", description: "Readable and maintainable code.", icon: <Code size={36} className="text-yellow-500 mb-2" /> },
    { title: "Performance Optimization", description: "Fast-loading web experiences.", icon: <Cpu size={36} className="text-yellow-500 mb-2" /> },
  ];

  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <div className="flex flex-col items-center mb-10 gap-4">
        <h1 className="text-yellow-500 text-[45px] font-bold">Portfolio</h1>
        <p className="text-white text-[20px] text-center">
          Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {project.icon}
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-white text-sm mb-4">{project.description}</p>
            <button
              onClick={() => router.push("/projects")}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
