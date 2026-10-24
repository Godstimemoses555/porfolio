import { Building2, Clock3 } from "lucide-react";
import Reveal from "./Reveal";

const roles = [
  {
    company: "Talent Nation",
    initials: "TN",
    role: "Coding Mentor",
    description:
      "Provided mentorship to aspiring developers in core web development, guiding them through practical coding exercises, debugging, and building real projects.",
    tags: ["Mentorship", "Web Development"],
  },
  {
    company: "Raito Tech",
    initials: "RT",
    role: "Web Development",
    description:
      "Worked on modern web interfaces and practical digital solutions, with a focus on responsive layouts, clean implementation and dependable delivery.",
    tags: ["Web Development", "Responsive UI", "Delivery"],
  },
  {
    company: "RHS School",
    initials: "RHS",
    role: "Web Development",
    description:
      "Contributed to web projects shaped around clarity, accessibility and a dependable experience across phones, tablets and desktop screens.",
    tags: ["Web Development", "Accessibility", "UI"],
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Experience
            </span>

            <h2 className="mt-5 font-display text-3xl leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-[2.9rem]">
              Where I&apos;ve <span className="text-gradient">worked.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
              Two years of hands-on experience building and shipping web work
              with teams that value clarity, speed and thoughtful execution.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass inline-flex items-center gap-3 rounded-full px-5 py-3">
              <Clock3 size={17} className="text-gold-300" />
              <span className="text-sm text-ivory">
                <span className="font-semibold text-gold-200">2 years</span>{" "}
                total experience
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {roles.map((role, index) => (
            <Reveal key={role.company} delay={index * 0.1}>
              <article className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_68%)]"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="gold-ring flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/25 bg-gold-400/[0.07] font-display text-xl text-gold-200">
                      {role.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ivory">
                        {role.company}
                      </h3>
                      <p className="mt-1 text-sm text-gold-300/90">{role.role}</p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-mist/40">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-mist sm:text-base">
                  {role.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-mist"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.2em] text-mist/60">
                  <Building2 size={13} className="text-gold-300/70" />
                  Worked with
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
