import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-16 sm:pb-20 sm:pt-24">
      <div className="shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">
            <span className="eyebrow-line" aria-hidden="true" />
            {eyebrow}
            <span className="eyebrow-line rotate-180" aria-hidden="true" />
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
