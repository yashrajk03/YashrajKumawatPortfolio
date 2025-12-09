import React from "react";
import { FaDownload } from "react-icons/fa";
import resumePdf from "../assets/YASH-RAJ-KUMAWAT.pdf";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-2xl md:text-3xl font-extrabold text-teal-400 hover:text-teal-300 transition duration-300 animate-slide-down"
        >
          Yashraj Kumawat
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Resume button */}
        <a
          href={resumePdf}
          download
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
        >
          <FaDownload size={16} />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
