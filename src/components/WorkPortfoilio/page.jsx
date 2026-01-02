import React from "react";
import { ArrowUp } from "lucide-react";
import data from "../../data.json";

const WorkPortfoilio = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-200 py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              {data.whatIDo.title}
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {data.whatIDo.paragraphs[0]}
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {data.whatIDo.paragraphs[1]}
            </p>

            {/* <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg">
              Let&apos;s Work Together
            </button> */}
          </div>

          {/* Right Column - Experience Cards */}
          <div className="space-y-6">
            {data.workProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
};

export default WorkPortfoilio;
