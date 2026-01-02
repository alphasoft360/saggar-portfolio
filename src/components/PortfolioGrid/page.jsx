import React from 'react';
import { ArrowRight } from 'lucide-react';
import data from '../../data.json';

const PortfolioGrid = () => {
  const projects = data.portfolioProjects;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There is a sequence of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${project.bgColor} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Case Study Button */}
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors group">
                  Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Project Button */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            More Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;