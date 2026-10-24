import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/Component/Reveal";
import SetIcons from "@/Component/SetIcons";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 px-3 pb-6 pt-12 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="grid gap-10 border-b border-white/10 p-6 sm:p-10 lg:grid-cols-[1.5fr_0.7fr_1fr]">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3"
                  aria-label="Godstime Moses — home"
                >
                  <span className="gold-ring flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] font-display text-base text-gold-200">
                    GM
                  </span>
                  <span className="font-display text-xl text-ivory">
                    Godstime Moses
                  </span>
                </Link>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
                  Full Stack & Mobile App Developer building fast, accessible web
                  and mobile products with clean code and thoughtful design.
                </p>

                <SetIcons className="mt-6" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300/80">
                  Navigate
                </p>
                <nav className="mt-4 flex flex-col gap-2.5">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-fit text-sm text-ivory/75 transition-colors hover:text-gold-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300/80">
                  Get in touch
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a
                    href="mailto:inyanggodstime63@gmail.com"
                    className="flex items-start gap-2.5 break-all text-ivory/75 transition-colors hover:text-gold-200"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0 text-gold-300/80" />
                    inyanggodstime63@gmail.com
                  </a>

                  <a
                    href="tel:07041126796"
                    className="flex items-center gap-2.5 text-ivory/75 transition-colors hover:text-gold-200"
                  >
                    <Phone size={15} className="shrink-0 text-gold-300/80" />
                    07041126796
                  </a>

                  <span className="flex items-center gap-2.5 text-ivory/75">
                    <MapPin size={15} className="shrink-0 text-gold-300/80" />
                    Lagos, Nigeria
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-200 transition-colors hover:text-gold-100"
                >
                  Start a project
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-mist/70 sm:flex-row sm:px-10 sm:text-left">
              <p>
                © {new Date().getFullYear()} Godstime Moses. All rights
                reserved.
              </p>
              <p>Designed &amp; built with intent.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
