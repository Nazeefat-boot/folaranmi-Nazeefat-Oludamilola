import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../data';
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div 
        className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-slate-100 mb-6"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${project.title} project images`}
      >
        <div aria-live="polite" aria-atomic="true" className="w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1} of ${project.images.length}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-white shadow-sm transition-all focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-white shadow-sm transition-all focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
          role="tablist"
          aria-label="Image selection indicators"
        >
          {project.images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentImageIndex}
              aria-label={`Go to image ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                i === currentImageIndex ? 'bg-white w-4' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 pointer-events-none group-hover:pointer-events-auto">
          <a
            href={project.link}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform shadow-lg"
          >
            <ExternalLink size={24} />
          </a>
        </div>
        
        <div className="absolute top-6 left-6 flex gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">{project.category}</span>
            <div className="h-px w-8 bg-indigo-100" />
          </div>
          <h3 className="text-3xl font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-none">
            {project.title}
          </h3>
          <p className="mt-4 text-slate-400 leading-relaxed text-sm font-light max-w-sm">
            {project.description}
          </p>
        </div>
        <a 
          href={project.link} 
          className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0 shadow-sm"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Front-End', 'WordPress', 'Graphics Design'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-slate-600 max-w-md">
              A curated collection of projects where I've blended design principles 
              with technical excellence.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, i) => (
            <div 
              key={project.id} 
              className={`${
                i === 0 ? 'md:col-span-8' : i === 1 ? 'md:col-span-4' : 'md:col-span-6'
              }`}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
