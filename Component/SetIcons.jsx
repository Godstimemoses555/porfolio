"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";

const iconClass =
  "glass flex h-10 w-10 items-center justify-center rounded-xl text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/50 hover:text-gold-200";

const SetIcons = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <a
        href="https://github.com/Godstimemoses555"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={iconClass}
      >
        <Github size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/godstime-inyang/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconClass}
      >
        <Linkedin size={18} />
      </a>

      <a
        href="https://x.com/godstime_i39699"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className={iconClass}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[17px] w-[17px]"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );
};

export default SetIcons;
