import Link from "next/link";
import {
  Accessibility,
  ArrowUpRight,
  Download,
  ExternalLink,
  Gauge,
  Layers,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/Component/PageHero";
import MotionImage from "@/Component/MotionImage";
import SetIcons from "@/Component/SetIcons";
import Reveal from "@/Component/Reveal";
import SectionHeading from "@/Component/SectionHeading";
import Experience from "@/Component/Experience";
import Projectdemo from "@/Component/Projecdemo";
import Sec5 from "@/Component/Sec5";

const facts = [
  { label: "Role", value: "Full Stack & Mobile App Developer" },
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Experience", value: "2+ years" },
  { label: "Focus", value: "Web · Mobile Apps · APIs" },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Clarity first",
    description:
      "Simple structure, readable code and interfaces that explain themselves without a manual.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    description:
      "Lean pages, responsive interactions and attention to the details that make a product feel fast.",
  },
  {
    icon: Accessibility,
    title: "Open to everyone",
    description:
      "Semantic markup, usable contrast and keyboard-friendly flows as a default, not an afterthought.",
  },
];

const About = () => {
  return (
    <div>
      <PageHero
        eyebrow="About Me"
        title={
          <>
            A developer who cares about{" "}
            <span className="text-gradient">the details.</span>
          </>
        }
        description="I build modern, responsive web experiences where clean design, dependable engineering and thoughtful interaction meet."
      />

      <section className="relative overflow-hidden pb-20 sm:pb-28">
        <div className="shell">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="glass-card overflow-hidden rounded-3xl p-2.5">
                  <div className="relative overflow-hidden rounded-[1.4rem]">
                    <MotionImage
                      src="https://ik.imagekit.io/aqlcazi2f/junior%20dev.jpeg"
                    alt="Godstime Moses, full stack and mobile app developer"
                    priority
                    containerClassName="aspect-square w-full"
                  />
                  <span className="glass-strong absolute left-3 top-3 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-gold-200">
                    Full Stack & Mobile App Developer
                  </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-mist">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-gold-300/80" />
                        Lagos, Nigeria
                      </span>
                      <span className="h-1 w-1 rounded-full bg-mist/30" />
                      <span>Open to work</span>
                    </div>

                    <dl className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                      {facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="text-[9px] uppercase tracking-[0.2em] text-mist/50">
                            {fact.label}
                          </dt>
                          <dd className="mt-1 text-sm text-ivory/85">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <SetIcons className="mt-5" />
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="The short version"
                title={
                  <>
                    Engineering that feels
                    <br />
                    <span className="text-gradient">effortless.</span>
                  </>
                }
              />

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-mist sm:text-base">
                <p>
                  I am a professional full stack and mobile app developer
                  building modern, responsive and scalable websites and mobile
                  apps. I am passionate about clean code, innovative solutions
                  and elegant design, with a strong focus on frontend
                  engineering.
                </p>
                <p>
                  I build high-performance, pixel-perfect interfaces with React,
                  Next.js, React Native, WordPress and Tailwind CSS, delivering
                  smooth interactions and accessible experiences across every
                  screen size. Behind the interface, I work with Python, FastAPI,
                  Cassandra and Firebase to build reliable APIs and data layers.
                </p>
                <p>
                  Over the past two years I have worked with{" "}
                  <span className="text-ivory">Talent Nation</span>,{" "}
                  <span className="text-ivory">Raito Tech</span> and{" "}
                  <span className="text-ivory">RHS School</span>, shipping 8
                  projects across e-commerce, healthcare, events and personal
                  products. I also build AI-integrated mobile experiences with
                  React Native.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2.5 sm:max-w-md">
                {[
                  { value: "2+", label: "Years" },
                  { value: "8", label: "Projects" },
                  { value: "2", label: "Teams" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl px-3 py-3 text-center"
                  >
                    <p className="font-display text-2xl text-gold-200">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] text-mist">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  View projects
                  <ArrowUpRight size={15} />
                </Link>

                <a
                  href="/GodstimeMosesCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-200"
                >
                  <ExternalLink size={16} />
                  View CV
                </a>

                <a
                  href="/GodstimeMosesCV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-mist transition-colors hover:text-gold-200"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 sm:pb-28">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal key={principle.title} delay={index * 0.07}>
                  <article className="glass-card flex h-full flex-col rounded-2xl p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-ivory">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {principle.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="glass mt-6 flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                  <Layers size={18} />
                </span>
                <p className="text-sm text-ivory/85">
                  Comfortable across the stack — from the first component to the
                  final deployment.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-200 transition-colors hover:text-gold-100"
              >
                Work with me
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Experience />
      <Projectdemo />
      <Sec5 />
    </div>
  );
};

export default About;
