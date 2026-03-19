import React from 'react'
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      description: 'Structure & Semantics',
      icon: <SiHtml5 />,
      color: 'text-orange-500',
      glow: 'group-hover:shadow-orange-500/20'
    },
    {
      name: 'CSS3',
      description: 'Styling & Animations',
      icon: <SiCss3 />,
      color: 'text-blue-500',
      glow: 'group-hover:shadow-blue-500/20'
    },
    {
      name: 'Bootstrap',
      description: 'Responsive Design',
      icon: <SiBootstrap />,
      color: 'text-purple-600',
      glow: 'group-hover:shadow-purple-500/20'
    },
    {
      name: 'JavaScript',
      description: 'Core Programming',
      icon: <SiJavascript />,
      color: 'text-yellow-400',
      glow: 'group-hover:shadow-yellow-500/20'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL Database',
      icon: <SiMongodb />,
      color: 'text-green-500',
      glow: 'group-hover:shadow-green-500/20'
    },
    {
      name: 'Express.js',
      description: 'Backend Framework',
      icon: <SiExpress />,
      color: 'text-slate-400',
      glow: 'group-hover:shadow-slate-400/20'
    },
    {
      name: 'React',
      description: 'Frontend Library',
      icon: <FaReact />,
      color: 'text-sky-400',
      glow: 'group-hover:shadow-sky-400/20'
    },
    {
      name: 'Node.js',
      description: 'JS Runtime',
      icon: <FaNodeJs />,
      color: 'text-green-600',
      glow: 'group-hover:shadow-green-600/20'
    },
  ]

  return (
    <section id="skills" className="relative py-24 bg-[#030617] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-sky-400">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A comprehensive suite of modern technologies I use to craft 
            <span className="text-white font-medium"> high-performance digital solutions</span>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-8 rounded-[2rem] bg-slate-800/20 backdrop-blur-xl border border-slate-700/50 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center md:items-start md:text-left`}
            >
              {/* Icon Container */}
              <div className={`text-5xl mb-6 flex justify-center md:justify-start transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${skill.color}`}>
                {skill.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

