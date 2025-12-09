import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-950 border-t border-gray-800 py-10 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-teal-400 mb-4">
          Let&apos;s Connect
        </h3>
        <p className="text-gray-400 mb-6">
          Open to full-stack / frontend roles, internships, and exciting
          collaborations.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/yashraj-kumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://github.com/yashrajk03"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={26} />
          </a>
          <a href="mailto:yashrajk03@gmail.com" className="social-icon">
            <FaEnvelope size={26} />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Built with React &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
