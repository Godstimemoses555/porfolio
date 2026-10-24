import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A professional e-commerce experience with product management, payment integration and responsive layouts built to convert.",
    tags: ["Next.js", "Payments", "Responsive"],
    link: "https://realdemo-two.vercel.app/",
    gradient:
      "radial-gradient(circle at 18% 18%, rgba(212,175,55,0.4), transparent 58%), linear-gradient(135deg, #111a2b 0%, #080c15 100%)",
  },
  {
    title: "React Pro — Healthcare",
    category: "Full Stack",
    description:
      "A modern healthcare web application with an accessible interface for patient services and care workflows.",
    tags: ["React", "Healthcare", "Accessible"],
    link: "https://react-pro-rose-two.vercel.app/",
    gradient:
      "radial-gradient(circle at 75% 20%, rgba(125,211,252,0.28), transparent 58%), linear-gradient(135deg, #0e1b2a 0%, #080c15 100%)",
  },
  {
    title: "Event & Ticketing",
    category: "Frontend",
    description:
      "A clean event and ticketing website focused on strong presentation, smooth browsing and responsive layouts.",
    tags: ["React", "UI/UX", "Responsive"],
    link: "https://event-site-ssz8.vercel.app/",
    gradient:
      "radial-gradient(circle at 20% 80%, rgba(45,212,191,0.22), transparent 60%), linear-gradient(135deg, #0c1b1a 0%, #080c15 100%)",
  },

];

export default function Projectdemo({ showHeading = true }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell">
        {showHeading && (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Built to be used.
                  <br />
                  <span className="text-gradient">Designed to be felt.</span>
                </>
              }
              description="A selection of products I have engineered — focused on performance, clean interfaces and real-world usability."
            />

            <Reveal delay={0.1}>
              <Link
                href="/projects"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:text-gold-200"
              >
                All projects
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        )}

        <div className={`grid gap-5 sm:grid-cols-2 ${showHeading ? "mt-12" : ""}`}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
                <div
                  className="relative h-40 overflow-hidden border-b border-white/10 sm:h-44"
                  style={{ backgroundImage: project.gradient }}
                >
                  <div
                    className="ambient-grid absolute inset-0 opacity-60"
                    aria-hidden="true"
                  />

                  <div className="absolute left-5 top-5 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/25" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>

                  <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory/80">
                    {project.category}
                  </span>

                  <span className="absolute bottom-3 left-5 font-display text-6xl leading-none text-white/15 sm:text-7xl">
                    0{index + 1}
                  </span>

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-ivory sm:text-2xl">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gold-300 transition-colors hover:text-gold-200"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-200 transition-colors hover:text-gold-100"
                  >
                    Visit project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
