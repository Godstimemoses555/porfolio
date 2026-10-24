import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const Sec5 = () => {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="shell">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.2),transparent_68%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center">
                <Sparkles size={13} />
                Let&apos;s collaborate
              </span>

              <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight text-ivory sm:text-4xl lg:text-5xl">
                Have a project in mind?
                <span className="text-gradient block">Let&apos;s build it well.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                Whether it is a new product, a redesign or a backend that needs
                to catch up with the frontend, I would love to hear what you are
                working on.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 sm:w-auto"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="mailto:inyanggodstime63@gmail.com"
                  className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-200 sm:w-auto"
                >
                  <Mail size={16} />
                  Send an email
                </a>
              </div>

              <p className="mt-5 text-xs text-mist/60">
                Available for freelance projects and collaborations.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sec5;
