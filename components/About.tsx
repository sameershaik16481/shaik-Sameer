'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiBriefcase, FiAward, FiHeart } from 'react-icons/fi';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FiCode />, label: 'Projects Completed', value: '10+' },
    { icon: <FiBriefcase />, label: 'Years Experience', value: '1.5+' },
    { icon: <FiAward />, label: 'Certifications', value: '4+' },
    { icon: <FiHeart />, label: 'GitHub Repos', value: '30+' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="glass rounded-2xl p-8 neon-border">
                <div className="aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl overflow-hidden flex items-center justify-center relative">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Shaik Sameer Basha"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl w-full h-full items-center justify-center text-9xl font-bold text-white absolute inset-0">
                    SSB
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              My Journey in Tech
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m a passionate <strong className="text-primary-400">Python Full-Stack Developer</strong> with expertise in 
                building scalable web applications and robust backend systems. I specialize in Python 
                frameworks like Django, Flask, and FastAPI, along with modern frontend technologies.
              </p>
              <p>
                My journey in technology began with a strong foundation in software development principles. 
                I excel at developing RESTful APIs, managing databases, and creating responsive user 
                interfaces. My experience spans across building student portals, inventory management 
                systems, and business task management applications.
              </p>
              <p>
                I thrive on solving complex problems and delivering efficient, maintainable solutions. 
                With experience in both frontend and backend development, I bring a holistic approach 
                to software engineering. I&apos;m proficient in technologies like React, Next.js, Node.js, 
                MongoDB, PostgreSQL, and have a keen eye for creating intuitive user experiences.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to 
                projects, or continuously learning to stay updated with the latest industry trends. 
                I&apos;m always excited to tackle challenging problems and contribute to meaningful projects 
                that make a difference.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-1"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:neon-border transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-primary-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

