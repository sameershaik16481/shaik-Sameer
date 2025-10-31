'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiAmazon, SiGooglecloud, SiFastapi, SiDjango, SiFlask,
  SiTailwindcss, SiRedux, SiGraphql, SiKubernetes, SiJupyter, SiNumpy,
  SiPandas, SiOpencv
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 95 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 90 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 88 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 92 },
        { name: 'OpenCV', icon: <SiOpencv />, level: 85 },
        { name: 'NumPy', icon: <SiNumpy />, level: 95 },
        { name: 'Pandas', icon: <SiPandas />, level: 93 },
        { name: 'Jupyter', icon: <SiJupyter />, level: 90 },
      ],
    },
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <SiReact />, level: 92 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 93 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
        { name: 'Redux', icon: <SiRedux />, level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 92 },
        { name: 'Django', icon: <SiDjango />, level: 88 },
        { name: 'Flask', icon: <SiFlask />, level: 87 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 82 },
      ],
    },
    {
      title: 'Database & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
        { name: 'Docker', icon: <SiDocker />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 75 },
        { name: 'Git', icon: <SiGit />, level: 95 },
        { name: 'AWS', icon: <SiAmazon />, level: 80 },
        { name: 'GCP', icon: <SiGooglecloud />, level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:neon-border transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-primary-400 group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Always learning and exploring new technologies to stay at the forefront of innovation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Neural Networks', 'Computer Vision', 'NLP', 'REST APIs', 'Microservices', 'CI/CD', 'Agile'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-dark-800 text-primary-400 rounded-full text-sm font-medium hover:bg-dark-700 transition-colors duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

