"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import MotionImage from "@/Component/MotionImage";
import AnimatedCounter from "@/Component/AnimatedCounter";
import TechMarquee from "@/Component/TechMarquee";
import Sec2 from "@/Component/Sec2";
import Sec3 from "@/Component/Sec3";
import Sec4 from "@/Component/Sec4";
import Sec5 from "@/Component/Sec5";
import Experience from "@/Component/Experience";
import Projectdemo from "@/Component/Projecdemo";
import usePrefersReducedMotion from "@/Component/usePrefersReducedMotion";

const Home = () => {
  const reduceMotion = usePrefersReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.12 },
    },
  };

  const item = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { value: 2, suffix: "+", label: "Years experience" },
    { value: 8, suffix: "", label: "Projects shipped" },
    { value: 2, suffix: "", label: "Team projects" },
  ];

  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-24 lg:pt-16">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10"
            >
              <motion.div variants={item}>
                <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs text-ivory/80">
                  <span className="ping-soft h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for new projects
                </span>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300/90"
              >
                <MapPin size={13} />
                Full Stack & Mobile App Developer · Lagos, Nigeria
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-4 font-display text-[2.7rem] leading-[1.02] tracking-tight text-ivory min-[380px]:text-5xl sm:text-6xl lg:text-[4.6rem]"
              >
                Godstime
                <span className="text-gradient block">Moses</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
              >
                I build fast, accessible web and mobile app products with clean
                interfaces and reliable APIs. From thoughtful frontends in{" "}
                <span className="text-ivory">React, Next.js and React Native</span>{" "}
                to scalable backends with{" "}
                <span className="text-ivory">Python and FastAPI</span>, I care
                about how the whole experience feels.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_20px_45px_-20px_rgba(212,175,55,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  Let&apos;s work together
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-200"
                >
                  View projects
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="/GodstimeMosesCV.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-mist transition-colors hover:text-gold-200 sm:px-2"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-10 grid grid-cols-3 gap-2.5 sm:max-w-md sm:gap-3"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl px-3 py-3.5 text-center sm:px-4 sm:py-4"
                  >
                    <p className="font-display text-2xl text-gold-200 sm:text-3xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-1 text-[10px] leading-tight text-mist sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="relative z-10"
            >
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[430px]">
                <div
                  className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_66%)]"
                  aria-hidden="true"
                />

                <div className="glass gold-ring relative rounded-[2rem] p-2.5">
                  <MotionImage
                    src="https://ik.imagekit.io/aqlcazi2f/junior%20dev.jpeg"
                    alt="Godstime Moses"
                    priority
                    containerClassName="aspect-square w-full rounded-[1.55rem]"
                  />
                  <div
                    className="pointer-events-none absolute inset-2.5 rounded-[1.55rem] ring-1 ring-inset ring-white/10"
                    aria-hidden="true"
                  />
                </div>

                <div className="glass absolute -left-3 top-9 hidden items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs text-ivory/85 sm:flex lg:-left-8">
                  <Code2 size={14} className="text-gold-300" />
                  React · Next.js
                </div>

                <div className="glass absolute -right-3 bottom-24 hidden items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs text-ivory/85 sm:flex lg:-right-8">
                  <Server size={14} className="text-ice-400" />
                  Python · FastAPI
                </div>

                <div className="glass-strong absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] text-ivory/85 sm:text-xs">
                  <Sparkles size={13} className="text-gold-300" />
                  2+ years · 8 projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <Sec2 />
      <Sec3 />
      <Experience />
      <Sec4 />
      <Projectdemo />
      <Sec5 />
    </div>
  );
};

export default Home;
