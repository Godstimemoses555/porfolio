"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400 tracking-wide"
        >
          MosTech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-200 flex flex-col items-center py-6 space-y-6 border-t border-gray-700">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href="/Projects"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-yellow-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-yellow-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
