import React from "react";
import { ArrowUp } from "lucide-react";
import saggarImage from "../../assets/saggar_farid.png";

const SoftwareEngineerCard = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const biography = [
    "I am a Senior Software Engineer with over 9+ years of professional experience in full-stack software development and backend system design. I specialize in building scalable, secure, and high-performance applications that align with real-world business requirements.",
    "Throughout my career, I have worked closely with cross-functional teams and stakeholders to design, develop, and optimize software solutions for both enterprise environments and freelance clients, maintaining a strong focus on performance, scalability, and long-term maintainability.",
    <span key="maker-row"><strong>Freelance Project – Maker’s Row:</strong> I contributed to the development and optimization of Maker’s Row, a leading online platform that connects brands with vetted manufacturers to streamline production and bring product ideas to life.</span>,
    <span key="round-here"><strong>Freelance Project – Round Here:</strong> I worked on Round Here, a platform created to empower Michigan founders by aggregating essential resources, funding opportunities, networking events, and business tools.</span>,
    <span key="backend"><strong>Backend Expertise:</strong> Strong hands-on experience with Laravel and Node.js, developing RESTful APIs, backend services, and scalable architectures.</span>,
    <span key="frontend"><strong>Frontend & DevOps:</strong> Experienced with React, Vue.js, MySQL, and DevOps best practices for optimized deployments.</span>,
    <span key="agile"><strong>Agile & Team Collaboration:</strong> I follow Agile methodologies and collaborate effectively with teams to deliver high-quality solutions.</span>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-cyan-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[450px] md:w-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
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
