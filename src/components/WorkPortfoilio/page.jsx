import React from "react";
import { ArrowUp } from "lucide-react";

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
              What I Do
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              I am a <strong>Senior Software Engineer at Alphasoft360</strong>{" "}
              with over 9+ years of professional experience in full-stack
              software development and backend system design. I specialize in
              building scalable, secure, and high-performance applications
              aligned with real-world business needs.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              I work closely with cross-functional teams and stakeholders to
              design, develop, and optimize enterprise solutions and freelance
              platforms, maintaining a strong focus on performance, scalability,
              and long-term maintainability.
            </p>

            {/* <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg">
              Let&apos;s Work Together
            </button> */}
          </div>

          {/* Right Column - Experience Cards */}
          <div className="space-y-6">
            {/* Maker’s Row */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Freelance Project – Maker’s Row
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Contributed to the development and optimization of Maker’s Row,
                a leading online platform connecting brands with vetted
                manufacturers. My work focused on backend improvements,
                performance optimization, and maintaining reliable system
                integrations.
              </p>
            </div>

            {/* Round Here */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Freelance Project – Round Here
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Worked on Round Here, a platform empowering Michigan founders by
                aggregating essential resources, funding opportunities,
                networking events, and business tools. I helped deliver scalable
                features and enhance system performance.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Strong hands-on experience with <strong>Laravel</strong> and{" "}
                <strong>Node.js</strong> for backend development, RESTful APIs,
                and scalable architectures. Experienced in integrating React and
                Vue.js frontends with backend systems, along with database
                optimization and DevOps workflows using MySQL.
              </p>
            </div>
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
