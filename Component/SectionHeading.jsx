import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
          <span className="eyebrow-line" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2 className="mt-5 font-display text-3xl leading-[1.12] tracking-tight text-ivory sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
