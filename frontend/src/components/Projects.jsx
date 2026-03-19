import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  // Show only featured projects (first 3) on the main page
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-50 dark:bg-[#020617]/50 overflow-hidden transition-colors duration-500"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Featured <span className="text-sky-500">Projects</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my best work, from complex e-commerce platforms to minimalist blog systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-white rounded-2xl font-bold hover:border-sky-500 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 shadow-sm hover:shadow-xl group"
          >
            See All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects

