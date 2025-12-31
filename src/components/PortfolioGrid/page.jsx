import React from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Vivamus a viverra ipsum. Morbi sollicitudin dui libero, at interdum lectus ullamcorper in. Suspendisse.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      bgColor: 'from-pink-200 to-orange-200'
    },
    {
      id: 2,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Aliquam at mollis ipsum. Curabitur ac mi tortor. Suspendisse potenti. Proin feugiat velit vel lectus.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      bgColor: 'from-gray-800 to-gray-900'
    },
    {
      id: 3,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Vestibulum a mollis interdum ligula id. Aliquam velit. Vestibulum ante ipsum primis in faucibus orci.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      bgColor: 'from-gray-200 to-gray-300'
    },
    {
      id: 4,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Donec semper magna sit arcu. Nullam digni porttitor semper accumsan enim non quam.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      bgColor: 'from-amber-100 to-amber-200'
    },
    {
      id: 5,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Aliquam at mollis ipsum. Curabitur ac mi tortor. Suspendisse potenti. Proin feugiat velit vel.',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop',
      bgColor: 'from-green-300 to-yellow-200'
    },
    {
      id: 6,
      category: 'UI-UX DESIGN',
      title: 'Product Admin Dashboard',
      description: 'Aliquam at mollis ipsum. Curabitur ac mi tortor. Suspendisse potenti. Proin feugiat velit vel.',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop',
      bgColor: 'from-purple-200 to-purple-300'
    }
  ];

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