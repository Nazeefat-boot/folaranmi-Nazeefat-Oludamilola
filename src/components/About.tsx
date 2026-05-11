import { motion } from 'motion/react';
import { SKILLS } from '../data';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-medium leading-none mb-10 text-slate-900">
              CRAFTING DIGITAL <br />
              <span className="font-serif italic font-normal lowercase text-indigo-600">solutions </span>
              WITH PURPOSE
            </h2>
            <div className="space-y-8 text-lg text-slate-400 font-light leading-relaxed max-w-lg">
              <p>
                My journey into web development started with a simple curiosity about how things work 
                on the screen. What began as hobbyist tinkering quickly evolved into a full-blown 
                obsession with <span className="text-slate-900 font-medium tracking-tight border-b border-black/5">clean code</span> and intuitive user experiences.
              </p>
              <p>
                I specialize in bridging the gap between design and functionality. Whether it's 
                hand-coding a custom React application or architecting a robust WordPress site. 
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-5xl font-black text-slate-900 mb-2">99<span className="text-indigo-600">%</span></h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Customer<br/>Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-black rounded-[32px] flex flex-col justify-between"
            >
              <h3 className="text-5xl font-black text-white mb-2">40<span className="text-indigo-400">+</span></h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Live<br/>Projects</p>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-8 bg-indigo-600 rounded-3xl col-span-2"
            >
              <h3 className="text-xl font-bold text-white mb-4 italic">Favorite Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'React', 'Framer Motion', 'Elementor PRO', 'Canva', 'Figma'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
