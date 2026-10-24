import React from "react";
import {
  Code2,
  Layers,
  ServerCog,
  Smartphone,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Frontend engineering",
    description:
      "Fast, responsive interfaces with thoughtful motion, accessible components and pixel-level attention to detail.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: Layers,
    title: "Full-stack products",
    description:
      "End-to-end web applications — from the first interface to the data model and everything that connects them.",
    tags: ["Next.js", "Python", "APIs"],
  },
  {
    icon: ServerCog,
    title: "APIs & backend",
    description:
      "Clean REST services, dependable integrations and data structures built to stay maintainable as products grow.",
    tags: ["FastAPI", "REST", "Cassandra"],
  },
  {
    icon: Smartphone,
    title: "Mobile & AI",
    description:
      "Cross-platform mobile experiences and AI-integrated features that extend the product beyond the browser.",
    tags: ["React Native", "Firebase", "AI"],
  },
];

export default function Sec4() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="What I Do"
          title={
            <>
              From interface
              <span className="text-gradient"> to infrastructure.</span>
            </>
          }
          description="I work across the product — shaping the experience, building the interface and connecting it to the systems that make it work."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
                  <span className="absolute right-5 top-5 font-mono text-[11px] text-mist/30">
                    0{index + 1}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-5 font-display text-xl text-ivory">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
