import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLayout } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pb-24">
      {/* Header Area */}
      <div className="bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-800 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-8 group font-bold"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                All <span className="text-sky-500">Projects</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
                A portfolio of my development projects demonstrating practical solutions and technical skills.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-20 h-20 bg-sky-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-sky-500 shadow-inner">
                <FiLayout size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
