'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiBriefcase, FiAward, FiHeart } from 'react-icons/fi';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate heading letters
  const headingText = "About Me";
  const letters = headingText.split('');

  const paragraphs = [
    "I'm a passionate Python Full-Stack Developer with expertise in building scalable web applications and robust backend systems. I specialize in Python frameworks like Django, Flask, and FastAPI, along with modern frontend technologies.",
    "My journey in technology began with a strong foundation in software development principles. I excel at developing RESTful APIs, managing databases, and creating responsive user interfaces. My experience spans across building student portals, inventory management systems, and business task management applications.",
    "I thrive on solving complex problems and delivering efficient, maintainable solutions. With experience in both frontend and backend development, I bring a holistic approach to software engineering. I'm proficient in technologies like React, Next.js, Node.js, MongoDB, PostgreSQL, and have a keen eye for creating intuitive user experiences.",
    "When I'm not coding, you'll find me exploring new frameworks, contributing to projects, or continuously learning to stay updated with the latest industry trends. I'm always excited to tackle challenging problems and contribute to meaningful projects that make a difference.",
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20, rotateX: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={letter === ' ' ? 'w-2' : letter === 'M' ? 'gradient-text' : ''}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-primary-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="relative z-10"
              animate={{
                rotateY: typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.01 : 0,
                rotateX: typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * -0.01 : 0,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
              <motion.div
                className="glass rounded-2xl p-8 neon-border"
                whileHover={{ boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl overflow-hidden flex items-center justify-center relative group/image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.2 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/profile-pic.jpg"
                      alt="Shaik Sameer Basha"
                      fill
                      className="object-cover image-hover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary-500/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                  />
                  <div className="hidden aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl w-full h-full items-center justify-center text-9xl font-bold text-white absolute inset-0">
                    SSB
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: inView ? [1, 1.2, 1] : 1,
                opacity: inView ? [0.2, 0.3, 0.2] : 0.2,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              My Journey in Tech
            </motion.h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="relative group/para"
                >
                  <motion.span
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 opacity-0 group-hover/para:opacity-100 transition-opacity duration-300"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1, transition: { duration: 0.3 } }}
                  />
                  <span className="pl-2">
                    {paragraph.split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.6 + index * 0.15 + wordIndex * 0.02,
                        }}
                        className="inline-block mr-1"
                      >
                        {word}{' '}
                      </motion.span>
                    ))}
                  </span>
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8"
            >
              <motion.a
                href="#contact"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-full font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Connect
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
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

