'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      icon: <FiBriefcase />,
      title: 'Python Full-Stack Developer',
      company: 'Trangla Innovation Private Limited',
      location: 'Remote',
      period: 'June 2024 - Present',
      description: [
        'Developing scalable web applications using Python (Django, Flask, FastAPI) and modern frontend technologies',
        'Built RESTful APIs and implemented robust backend systems for student portals and inventory management',
        'Designed and optimized database schemas for PostgreSQL and MongoDB, ensuring data integrity and performance',
        'Collaborated with cross-functional teams to deliver high-quality full-stack solutions and maintained code quality',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      type: 'education',
      icon: <FiBookOpen />,
      title: 'Bachelor of Technology',
      company: 'Electrical and Electronics Engineering',
      location: 'KHIT, Guntur',
      period: '2021 - 2024',
      description: [
        'Acquired strong foundation in engineering principles and problem-solving methodologies',
        'Developed expertise in full-stack development through self-learning and project implementations',
        'Built multiple projects including LMS platforms, inventory systems, and task management applications',
        'Applied programming skills in Python, JavaScript, and modern web frameworks to create practical solutions',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const certifications = [
    {
      icon: <FiAward />,
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco',
      year: '2023',
    },
    {
      icon: <FiAward />,
      title: 'IOT  Fundamentals: Connecting Things',
      issuer: 'Cisco',
      year: '2023',
    },
    {
      icon: <FiAward />,
      title: 'Hackathon Playbook',
      issuer: 'Cisco',
      year: '2022',
    },
    {
      icon: <FiAward />,
      title: 'IOT  Fundamentals:Big Data & Analytics',
      issuer: 'Cisco Networking Academy',
      year: '2023',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className={`glass rounded-2xl p-6 hover:neon-border transition-all duration-300 transform hover:-translate-y-2`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-3xl bg-gradient-to-r ${exp.color} p-3 rounded-xl text-white`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="inline-block px-3 py-1 bg-dark-800 text-primary-400 rounded-full text-sm font-medium mb-4">
                      {exp.period}
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10"></div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:neon-border transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl text-primary-400 mb-3 flex justify-center">
                  {cert.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{cert.title}</h4>
                <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-primary-400 text-xs font-medium">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

