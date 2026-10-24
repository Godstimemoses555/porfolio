import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: Monitor,
    title: "Frontend",
    stack: "React · Next.js · WordPress · Tailwind",
  },
  {
    icon: Server,
    title: "Backend",
    stack: "Python · FastAPI · REST",
  },
  {
    icon: Database,
    title: "Databases",
    stack: "Cassandra · Firebase",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    stack: "React Native · Mobile Apps",
  },
  {
    icon: Sparkles,
    title: "UI craft",
    stack: "Responsive · Accessible · Fast",
  },
  {
    icon: Wrench,
    title: "CMS & Tooling",
    stack: "WordPress · Git · GitHub",
  },
];

const Sec3 = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Skills & Craft"
            title={
              <>
                The stack behind
                <br />
                <span className="text-gradient">the work.</span>
              </>
            }
            description="A practical toolkit for building complete products — polished interfaces, dependable APIs and the data layer that connects them."
          />

          <Reveal delay={0.1}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm text-ivory/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              2+ years hands-on
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <CodeShowcase />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Reveal key={skill.title} delay={index * 0.05}>
                  <div className="glass-card h-full rounded-2xl p-4 sm:p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                      <Icon size={17} />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-ivory">
                      {skill.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-mist">
                      {skill.stack}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
