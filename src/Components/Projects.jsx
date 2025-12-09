import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import updated JPEG images
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, liveUrl }) => (
  <div
    className="group bg-gray-900/80 rounded-xl overflow-hidden border border-gray-700 
               hover:border-teal-500 hover:shadow-teal-500/40 transition-all duration-300 
               shadow-xl transform hover:-translate-y-2 animate-slide-up"
  >
    {/* Image */}
    <div className="h-48 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-teal-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs md:text-sm rounded-full bg-gray-800 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-3">

        {/* GitHub Button */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg 
                     hover:bg-gray-700 hover:scale-105 transition-all duration-300"
        >
          <FaGithub />
          <span>Code</span>
        </a>

        {/* Live Button — show only if provided */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg 
                       hover:bg-teal-500 hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "EaseMyHealth — Healthcare Appointment System",
      description:
        "Doctor listing, filtering, JWT-secured authentication, appointment booking, REST APIs, and Context API optimization.",
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Tailwind CSS"],
      imageUrl: p1,
      githubUrl: "https://github.com/yashrajk03",
      liveUrl: "https://67d2b33efa8b3bab23d2cc5e--resilient-valkyrie-3a27ce.netlify.app/",
    },
    {
      title: "QuickStay — Hotel Booking Platform",
      description:
        "Hotel search, filtering, date availability logic, booking flow, and optimized UI using React memoization.",
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      imageUrl: p2,
      githubUrl: "https://github.com/yashrajk03",
      liveUrl: "https://regal-dango-988b59.netlify.app/",
    },
    {
      title: "Tweet Sentiment Analysis",
      description:
        "84% accuracy ML model with NLP preprocessing, tokenization, stopword removal, and Scikit-learn model pipeline.",
      tags: ["Python", "ML", "NLP", "Scikit-learn"],
      imageUrl: p3,
      githubUrl: "https://github.com/yashrajk03",
      liveUrl: null, // No live link – only GitHub
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          <span className="border-b-4 border-teal-500 pb-2">Featured Projects</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* GitHub Section */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/yashrajk03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-teal-500 text-teal-400 rounded-lg 
                       hover:bg-teal-500 hover:text-white transition-all duration-300 font-semibold 
                       hover:scale-105"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
