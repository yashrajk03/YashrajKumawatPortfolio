import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="bg-gray-800 text-white py-24 md:py-32 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-slide-down">
                    Hi, I'm <span className="text-teal-400">Yashraj Kumawat</span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in">
                    Full-Stack Developer | React.js • Node.js • MySQL
                </p>

                <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10 animate-fade-in-delayed">
                    A developer skilled in building scalable applications, secure backend systems,
                    and high-performance React interfaces. 350+ DSA problems solved.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-8 animate-fade-in-delayed">
                    <a href="https://linkedin.com/in/yashraj-kumawat" target="_blank" className="social-icon">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/yashrajk03" target="_blank" className="social-icon">
                        <FaGithub size={32} />
                    </a>
                    <a href="mailto:yashrajk03@gmail.com" className="social-icon">
                        <FaEnvelope size={32} />
                    </a>
                </div>

                <a
                    href="#projects"
                    className="mt-12 inline-block px-10 py-3 text-lg font-semibold bg-teal-600 text-white rounded-xl shadow-xl hover:scale-110 hover:bg-teal-500 transition-all duration-300 animate-bounce-slow"
                >
                    View Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;
