"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const SetIcons = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        <Linkedin size={24} />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        <Facebook size={24} />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        <Instagram size={24} />
      </a>

      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        <Twitter size={24} />
      </a>
    </div>
  );
};

export default SetIcons;
