import Layout from "@/Layout/Layout";
import {
  FaCarSide,
  FaBolt,
  FaWrench,
  FaCogs,
  FaCompass,
  FaBullseye,
  FaGlobe
} from "react-icons/fa";

export default function AboutPage () {
  const topics = [
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Electric Vehicles",
      description: "Comprehensive reviews and analysis of the latest EVs, from Tesla to emerging brands, covering performance, range, and charging infrastructure.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaCarSide className="w-8 h-8" />,
      title: "SUV Reviews",
      description: "In-depth evaluations of SUVs across all segments, from compact crossovers to full-size luxury models, focusing on practicality and performance.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaWrench className="w-8 h-8" />,
      title: "Maintenance Tips",
      description: "Expert advice on keeping your vehicle in peak condition, from routine maintenance schedules to troubleshooting common issues.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Car Modifications",
      description: "Guides for enhancing your vehicle&apos;s performance, aesthetics, and functionality through carefully selected modifications and upgrades.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaCompass className="w-8 h-8" />,
      title: "Driving Tips",
      description: "Professional driving techniques, safety advice, and tips for maximizing fuel efficiency and extending vehicle lifespan.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Industry News",
      description: "Latest automotive industry trends, technological breakthroughs, and market analysis to keep you informed about the future of mobility.",
      color: "from-teal-500 to-green-600"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "Next Js", description: "Modern React with hooks and concurrent features" },
        { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "npm", description: "Fast build tool and development server" }
      ]
    },
    {
      category: "UI Components",
      technologies: [
        { name: "React Icons", description: "Beautiful, customizable SVG icons" },
        { name: "Custom Components", description: "Modular, reusable React components" },
        { name: "Responsive Design", description: "Mobile-first approach with breakpoint optimization" },
        { name: "Animations", description: "Smooth transitions and micro-interactions" }
      ]
    },
    {
      category: "Development",
      technologies: [
        { name: "ESLint", description: "Code linting for consistent code quality" },
        { name: "PostCSS", description: "CSS processing with Autoprefixer" },
        { name: "Modern ES6+", description: "Latest JavaScript features and syntax" },
        { name: "Component Architecture", description: "Modular, maintainable code structure" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 mt-10">
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FaBullseye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    This car blog exists to bridge the gap between automotive enthusiasts and the rapidly evolving 
                    world of modern vehicles. We believe that everyone deserves access to honest, comprehensive, 
                    and expertly crafted automotive content.
                  </p>
                  <p>
                    In an era where the automotive industry is experiencing unprecedented transformation—from 
                    electric vehicles to autonomous driving—we&apos;re here to guide you through every development, 
                    review, and innovation that matters.
                  </p>
                  <p>
                    Our team of automotive experts, engineers, and passionate drivers work tirelessly to bring 
                    you content that&apos;s not just informative, but genuinely useful for your automotive journey.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Sports car"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                    <img 
                      src="https://images.pexels.com/photos/7144175/pexels-photo-7144175.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Electric vehicle"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Car interior"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                    <img 
                      src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Yellow sports car"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Cover</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cutting-edge electric vehicles to practical maintenance advice, 
                we cover every aspect of the automotive world that matters to you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is built using cutting-edge web technologies to ensure fast performance, 
                beautiful design, and an exceptional user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techStack.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                        <p className="text-gray-600 text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
