'use client';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot Platform',
      description: 'An intelligent conversational AI system using NLP and transformer models',
      problem: 'Businesses struggle with customer support scalability and 24/7 availability',
      solution: 'Built a custom chatbot using GPT architecture with fine-tuned models for domain-specific queries',
      impact: 'Reduced response time by 85% and handled 10,000+ conversations daily with 92% accuracy',
      technologies: ['Python', 'FastAPI', 'React', 'MongoDB', 'OpenAI API'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      title: 'EduManage - Student Portal & LMS',
      description: 'Comprehensive Learning Management System for educational institutions',
      problem: 'Educational institutions need a unified platform for student management, course content, and progress tracking',
      solution: 'Developed a full-stack LMS with student portal, course management, assignment submission, and grade tracking features',
      impact: 'Streamlined student management process, improved engagement by 70%, and reduced administrative workload by 50%',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    },
    {
      title: 'InventoryFlow - SMB Inventory System',
      description: 'Complete inventory management solution for small and medium businesses',
      problem: 'Small businesses struggle with manual inventory tracking, leading to stockouts and overstocking issues',
      solution: 'Built an intuitive inventory management system with real-time tracking, automated alerts, and reporting capabilities',
      impact: 'Reduced inventory errors by 80%, improved stock visibility, and helped businesses save 30% on inventory costs',
      technologies: ['Python', 'Flask', 'React', 'MongoDB', 'Node.js'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      title: 'QuickService - Local Business Task Manager',
      description: 'Task and project management platform for local service businesses',
      problem: 'Local businesses need efficient task management, customer tracking, and service scheduling in one place',
      solution: 'Created a comprehensive task management system with customer profiles, service scheduling, and progress tracking',
      impact: 'Improved task completion rate by 65%, enhanced customer satisfaction, and reduced administrative overhead by 40%',
      technologies: ['Python', 'Django', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions built with cutting-edge technologies to solve meaningful problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Problem → Solution → Impact */}
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-red-400 font-semibold text-xs">❌ Problem:</span>
                    <p className="text-gray-400 text-xs mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold text-xs">💡 Solution:</span>
                    <p className="text-gray-400 text-xs mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold text-xs">✅ Impact:</span>
                    <p className="text-gray-400 text-xs mt-1">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-800 text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sameershaik16481"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-colors"
          >
            <FiCode />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

