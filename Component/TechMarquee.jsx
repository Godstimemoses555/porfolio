const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "React Native",
  "WordPress",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Firebase",
  "Cassandra",
  "Git & GitHub",
  "REST APIs",
];

const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] py-4">
      <p className="sr-only">
        Technologies I work with: {skills.join(", ")}.
      </p>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-2.5 px-2.5">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="glass whitespace-nowrap rounded-full px-4 py-1.5 text-xs text-ivory/70 transition-colors duration-300 hover:text-gold-200 sm:px-5 sm:py-2 sm:text-sm"
              aria-hidden="true"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
