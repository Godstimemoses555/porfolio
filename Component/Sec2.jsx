"use client";
import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2, Download, ExternalLink, ArrowUpRight } from "lucide-react";
import MotionImage from "./MotionImage";
import SetIcons from "./SetIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const strengths = [
  "Responsive interfaces by default",
  "Clean, maintainable code",
  "API-first thinking",
  "Performance and accessibility",
];

const Sec2 = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl p-2.5">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <MotionImage
                  src="https://ik.imagekit.io/aqlcazi2f/junior%20dev.jpeg"
                  alt="Godstime Moses, full stack and mobile app developer"
                  containerClassName="aspect-square w-full"
                />
                <div className="glass-strong absolute inset-x-3 bottom-3 rounded-xl px-4 py-3">
                  <p className="font-display text-lg text-ivory">
                    Godstime Moses
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-gold-300">
                    Full Stack & Mobile App Developer
                  </p>
                </div>
              </div>

              <div className="px-3 pb-2 pt-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-mist">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-gold-300/80" />
                    Lagos, Nigeria
                  </span>
                  <span className="h-1 w-1 rounded-full bg-mist/30" />
                  <span>2+ years experience</span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <SetIcons />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  Full-stack thinking.
                  <br />
                  <span className="text-gradient">Frontend precision.</span>
                </>
              }
              description="I am a full stack and mobile app developer building modern, responsive and scalable web and mobile experiences. My focus is the point where clean design meets dependable engineering — interfaces that feel effortless and systems that hold up."
            />

            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                Over the past two years I have shipped 8 projects, including
                e-commerce builds, healthcare interfaces and collaborative team
                products. I work primarily with React, Next.js, React Native,
                WordPress, Tailwind CSS, Python and FastAPI, and I also build
                AI-integrated mobile experiences.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="flex items-start gap-2.5 text-sm text-ivory/80"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-gold-300"
                    />
                    {strength}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/GodstimeMosesCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  <ExternalLink size={16} />
                  View CV
                </a>

                <a
                  href="/GodstimeMosesCV.pdf"
                  download
                  className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-200"
                >
                  <Download size={16} />
                  Download CV
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-mist transition-colors hover:text-gold-200"
                >
                  More about me
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
