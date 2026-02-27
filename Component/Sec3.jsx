"use client";

import React from "react";
import { Code, Server, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code size={36} className="text-yellow-500 mb-4" />,
    title: "Clean Code",
    description: "Writing readable and maintainable code to ensure long-term project quality.",
  },
  {
    icon: <Server size={36} className="text-yellow-500 mb-4" />,
    title: "Backend Integration",
    description: "Connecting frontend with scalable and secure backend services seamlessly.",
  },
  {
    icon: <Database size={36} className="text-yellow-500 mb-4" />,
    title: "Database Management",
    description: "Designing and managing databases for efficient data storage and retrieval.",
  },
  {
    icon: <Layout size={36} className="text-yellow-500 mb-4" />,
    title: "Responsive Design",
    description: "Building modern, responsive layouts that look great on any device.",
  },
];

const Sec3 = () => {
  return (
    <div className="bg-black text-white p-6">
      {/* Top Section */}
      <div className="flex lg:flex-row lg:h-[50vh] gap-6">
        <div className="flex flex-col gap-4 lg:w-[50%]">
          <h1 className="text-yellow-500 text-[50px] font-bold">Work Process.</h1>
          <p className="text-[20px]">
            Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention — merging usability with visual clarity.  
            I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.
          </p>
        </div>
      </div>

      {/* Bottom Section: Features with animation */}
      <div className="flex flex-col lg:flex-row lg:gap-8 mt-10 items-center justify-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg text-center mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {feature.icon}
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-white text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sec3;
