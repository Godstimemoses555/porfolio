"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Projectdemo = () => {
  const router = useRouter();

  const items = [
    { title: "E‑Commerce", link: "https://realdemo-two.vercel.app/" },
    { title: "API Integration", link: "/projects/Api" },
    { title: "Other Project", link: "https://event-site-ssz8.vercel.app/" },
    { title: "Cassandra Database", link: "/projects/cassandra" },
    { title: "FastAPI", link: "/projects/fastapi" },
    { title: "Next.js App", link: "/projects/nextjs" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-16 flex flex-col items-center px-6">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Explore My Classic Projects
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-gray-300 max-w-2xl text-center mb-12"
      >
        A collection of my best work — from powerful API integrations to modern e‑commerce builds, high‑performance databases, and more.
      </motion.p>

      <div className="flex flex-wrap gap-6 justify-center w-full max-w-5xl">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-[280px] flex flex-col items-center shadow-xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>

            <button
              onClick={() => router.push(item.link)}
              className="mt-auto bg-yellow-500 text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-300 transition"
            >
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projectdemo;
