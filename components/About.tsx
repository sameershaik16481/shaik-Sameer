'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiBriefcase, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FiCode />, label: 'Projects Completed', value: '20+' },
    { icon: <FiBriefcase />, label: 'Years Experience', value: '2+' },
    { icon: <FiAward />, label: 'Certifications', value: '10+' },
    { icon: <FiHeart />, label: 'GitHub Repos', value: '50+' },
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
                <div className="aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-9xl font-bold text-white">
                  SB
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
                I&apos;m a passionate <strong className="text-primary-400">AI Engineer</strong> and{' '}
                <strong className="text-primary-400">Full-Stack Developer</strong> with a deep love 
                for creating innovative solutions that leverage the power of artificial intelligence 
                and modern web technologies.
              </p>
              <p>
                My journey began with a fascination for how machines can learn and adapt. This curiosity 
                led me to explore the realms of <strong className="text-primary-400">Machine Learning</strong>, 
                {' '}<strong className="text-primary-400">Deep Learning</strong>, and{' '}
                <strong className="text-primary-400">Natural Language Processing</strong>, where I discovered 
                my passion for building intelligent systems.
              </p>
              <p>
                Beyond AI, I thrive on crafting seamless user experiences through full-stack development. 
                From designing intuitive interfaces to architecting robust backend systems, I enjoy the 
                entire spectrum of software development. I believe in writing clean, maintainable code 
                and following best practices to deliver high-quality solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I&apos;m always 
                excited to tackle challenging problems and learn something new every day.
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

