'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI-Powered Chatbot Platform',
      description: 'An intelligent conversational AI system using NLP and transformer models',
      problem: 'Businesses struggle with customer support scalability and 24/7 availability',
      solution: 'Built a custom chatbot using GPT architecture with fine-tuned models for domain-specific queries',
      impact: 'Reduced response time by 85% and handled 10,000+ conversations daily with 92% accuracy',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      title: 'Real-Time Object Detection System',
      description: 'Computer vision application for detecting and tracking objects in live video streams',
      problem: 'Security systems need real-time threat detection with high accuracy',
      solution: 'Implemented YOLOv8 model with custom training on specific object classes and optimized for edge devices',
      impact: 'Achieved 30 FPS processing speed with 95% detection accuracy on edge devices',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'CUDA', 'Flask'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Full-stack web application for data visualization and predictive modeling',
      problem: 'Companies need actionable insights from complex datasets without technical expertise',
      solution: 'Created an interactive dashboard with ML models for forecasting and automated reporting',
      impact: 'Enabled non-technical users to make data-driven decisions, improving forecast accuracy by 40%',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Scikit-learn', 'D3.js'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
      title: 'E-Commerce Recommendation Engine',
      description: 'Personalized product recommendation system using collaborative filtering',
      problem: 'Users face decision fatigue with too many product choices, leading to low conversion rates',
      solution: 'Built a hybrid recommendation system combining collaborative and content-based filtering',
      impact: 'Increased user engagement by 65% and boosted sales conversion rate by 28%',
      technologies: ['Python', 'Django', 'Redis', 'TensorFlow', 'Next.js'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    },
    {
      title: 'Smart Document Processing System',
      description: 'Automated document analysis and data extraction using OCR and NLP',
      problem: 'Manual document processing is time-consuming and error-prone',
      solution: 'Developed an AI system that extracts, classifies, and structures data from various document types',
      impact: 'Reduced document processing time from hours to seconds with 98% accuracy',
      technologies: ['Python', 'Tesseract', 'spaCy', 'FastAPI', 'Docker'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800',
    },
    {
      title: 'Social Media Analytics Platform',
      description: 'Real-time sentiment analysis and trend detection for social media content',
      problem: 'Brands need to monitor public sentiment and respond to trends quickly',
      solution: 'Created a platform that analyzes millions of posts using NLP to detect sentiment and emerging trends',
      impact: 'Helped brands respond 5x faster to customer feedback and identify viral trends early',
      technologies: ['Python', 'React', 'Kafka', 'Elasticsearch', 'BERT'],
      github: 'https://github.com/sameershaik16481',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions built with cutting-edge technologies to solve meaningful problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sameershaik16481"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <FiCode />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

