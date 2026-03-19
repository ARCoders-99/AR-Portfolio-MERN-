import React from 'react'
import { SiGit, SiGithub, SiPostman, SiRedux, SiTailwindcss, SiMongodb, SiBootstrap } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Tools = () => {
  const tools = [
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-900' },
    { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-purple-600' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
    { name: 'VS Code', icon: <VscCode />, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    { name: 'MongoDB Atlas', icon: <SiMongodb />, color: 'text-green-600' },
  ]

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-bold text-xs uppercase tracking-widest mb-4">
            Development Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tools & <span className="text-sky-500">Technologies</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            A specialized collection of tools I use to build 
            <span className="text-slate-900 font-medium"> scalable and robust</span> applications.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="relative bg-white p-8 rounded-[2.5rem] shadow-md border-2 border-slate-100 flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div className={`text-5xl mb-5 ${tool.color} drop-shadow-sm`}>
                {tool.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 tracking-tight">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools

