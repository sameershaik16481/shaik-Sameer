'use client';
import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiAmazon, SiGooglecloud, SiFastapi, SiDjango, SiFlask,
  SiTailwindcss, SiHtml5, SiCss3, SiKubernetes
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <SiReact />, level: 92 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 93 },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
        { name: 'CSS3', icon: <SiCss3 />, level: 94 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 90 },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 92 },
        { name: 'Django', icon: <SiDjango />, level: 88 },
        { name: 'Flask', icon: <SiFlask />, level: 87 },
      ],
    },
    {
      title: 'Database & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
        { name: 'Docker', icon: <SiDocker />, level: 85 },
        { name: 'Git', icon: <SiGit />, level: 95 },
        { name: 'AWS', icon: <SiAmazon />, level: 80 },
        { name: 'GCP', icon: <SiGooglecloud />, level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6"
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
                  <div
                    key={skill.name}
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
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Always learning and exploring new technologies to stay at the forefront of innovation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'Microservices', 'CI/CD', 'Responsive Design', 'API Integration', 'Database Design'].map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 bg-dark-800 text-primary-400 rounded-full text-sm font-medium cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

