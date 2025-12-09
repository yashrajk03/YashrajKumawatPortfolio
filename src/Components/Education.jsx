import React from "react";

const EducationItem = ({ degree, institution, duration, description }) => (
  <div className="relative pl-10 md:pl-24 pb-10 group">

    {/* Timeline line */}
    <div className="absolute left-3 md:left-10 top-0 h-full w-1 bg-gray-700 group-last:h-6"></div>

    {/* Timeline dot */}
    <div className="absolute left-3 md:left-10 w-4 h-4 rounded-full bg-teal-500 transform -translate-x-1/2 shadow-md"></div>

    {/* Content card */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 
                    hover:border-teal-500 hover:shadow-teal-500/30 
                    transition-all duration-300 animate-slide-up">

      <h3 className="text-2xl font-bold text-teal-400">{degree}</h3>

      <p className="text-lg font-medium text-gray-300">{institution}</p>

      <p className="text-sm text-gray-400 italic mb-3">{duration}</p>

      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology, Chennai",
      duration: "2022 – Present",
      description: "CGPA: 8.88 • Strong foundation in DSA, DBMS, OS, CN, OOP, and full-stack development.",
    },
    {
      degree: "12th Grade – PCM (95.80%)",
      institution: "Matrix High School, Sikar",
      duration: "2020 – 2021",
      description: "Completed with distinction in Physics • Chemistry • Mathematics.",
    },
  ];

  return (
    <section id="education" className="bg-gray-900 py-16 md:py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center mb-16">
          <span className="border-b-4 border-teal-500 pb-2">
            Education Timeline
          </span>
        </h2>

        <div className="space-y-10">
          {educationData.map((item, idx) => (
            <EducationItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
