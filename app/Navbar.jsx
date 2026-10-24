"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-7xl overflow-hidden rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong shadow-2xl shadow-black/40" : "glass"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
          <Link
            href="/"
            aria-label="Godstime Moses — home"
            className="group flex min-w-0 items-center gap-2.5"
            onClick={() => setIsOpen(false)}
          >
            <span className="gold-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] font-display text-sm text-gold-200 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-ink-950 sm:h-10 sm:w-10 sm:text-base">
              GM
            </span>
            <span className="hidden min-w-0 flex-col leading-none min-[370px]:flex">
              <span className="truncate font-display text-base text-ivory sm:text-lg">
                Godstime Moses
              </span>
              <span className="mt-1 truncate text-[9px] uppercase tracking-[0.22em] text-mist/70">
                Full Stack & Mobile App Developer
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-white/[0.08] text-gold-200"
                        : "text-ivory/75 hover:bg-white/[0.05] hover:text-ivory"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-xl bg-gold-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-500/20 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              className="glass flex h-10 w-10 items-center justify-center rounded-xl text-ivory transition-colors hover:text-gold-300 md:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/10 px-4 pb-5 pt-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-xl px-3 py-3 text-base transition-colors ${
                          isActive
                            ? "bg-white/[0.07] text-gold-200"
                            : "text-ivory/80 hover:bg-white/[0.05] hover:text-ivory"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-4 py-3 text-sm font-semibold text-ink-950"
                >
                  Start a project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
