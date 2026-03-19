import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-slate-300 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500/50">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3 font-medium">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 group-hover:border-sky-500/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
