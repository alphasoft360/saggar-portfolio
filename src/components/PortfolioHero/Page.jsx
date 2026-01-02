import React, { useEffect, useState } from "react";
import saggarImage from "../../assets/saggar_farid.png";
import data from "../../data.json";

/* =========================
   Count Up Stat Component
========================= */
const Stat = ({ value, label }) => {
  const target = parseInt(value.replace(/\+$/, ""), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-purple-50 rounded-xl p-4 text-center">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
        {count}+
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
};

/* =========================
   Main Hero Component
========================= */
const PortfolioHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-cyan-100 flex items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 py-12 sm:px-10 lg:px-14">

          {/* LEFT — TEXT */}
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-lg text-center lg:text-left space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I&apos;m
                <br />
                <span className="block mt-1 text-purple-900">{data.hero.name}</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {data.hero.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {data.hero.stats.map((stat, index) => (
                  <Stat key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-96 sm:w-80 sm:h-[26rem] bg-gradient-to-br from-purple-100 to-cyan-100 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={saggarImage}
                alt="Saggar Farid"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
