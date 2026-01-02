import React from "react";
import { ArrowUp } from "lucide-react";
import saggarImage from "../../assets/saggar_farid.png";
import data from "../../data.json";

const SoftwareEngineerCard = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const biography = data.biography;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-cyan-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[450px] md:w-[380px] md:h-[520px] hidden md:block rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={saggarImage}
                  alt="Saggar Farid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Senior Software Engineer
              <br />
              Full-Stack & Backend Specialist
            </h1>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed max-h-[380px] overflow-y-auto pr-2">
              {biography.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
{/* buttons  */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition shadow-lg">
                View Projects
              </button>

              <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-3 rounded-lg border-2 border-gray-200 transition shadow flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </button>
            </div> */}
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

export default SoftwareEngineerCard;
