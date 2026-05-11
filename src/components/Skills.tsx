import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../data';
import { cn } from '../lib/utils';

export default function Skills() {
  const skills = [
    { name: 'React', level: 90, category: 'Logic' },
    { name: 'TypeScript', level: 85, category: 'Logic' },
    { name: 'Tailwind CSS', level: 95, category: 'Design' },
    { name: 'Framer Motion', level: 80, category: 'Design' },
    { name: 'WordPress', level: 90, category: 'Platform' },
    { name: 'UI/UX Design', level: 75, category: 'Design' },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">The Toolkit</span>
            <div className="h-px w-12 bg-indigo-100" />
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold leading-[0.9] tracking-tight text-slate-900">
            TECHNICAL <br />
            <span className="font-serif italic font-normal lowercase text-indigo-600">capabilities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "p-8 rounded-[32px] border border-slate-100 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group",
                i % 2 === 0 ? "bg-[#FBFBF9]" : "bg-white"
              )}
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
                  {skill.category}
                </span>
                <span className="text-xl font-display font-medium text-slate-300 group-hover:text-slate-900 transition-colors">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2 truncate">{skill.name}</h3>
              <div className="flex items-end gap-2">
                <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-indigo-600"
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="md:col-span-2 p-10 bg-black rounded-[40px] flex flex-col justify-between overflow-hidden relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <LucideIcons.Cpu size={120} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4">Continuous <br />Learning</h3>
              <p className="text-slate-500 text-sm font-light max-w-xs">
                Constantly evolving with the latest ecosystem trends and performance optimizations.
              </p>
            </div>
            
            <div className="relative z-10 mt-12 flex flex-wrap gap-2">
              {['Vite', 'ESLint', 'Node.js', 'GitHub'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
