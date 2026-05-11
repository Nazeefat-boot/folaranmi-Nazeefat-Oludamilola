import { motion } from 'motion/react';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#FBFBF9] overflow-hidden relative">
      <div className="container-wide relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Expertise</span>
                <div className="h-px w-12 bg-indigo-100" />
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold leading-[0.9] tracking-tight text-slate-900">
                PROVIDING DIGITAL <br />
                <span className="font-serif italic font-normal lowercase text-indigo-600">excellence.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg font-light max-w-sm leading-relaxed">
              Merging cutting-edge technology with high-fidelity design to solve complex problems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Layout;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-10 bg-white border border-slate-100 rounded-[40px] group transition-all shadow-sm",
                  i === 1 ? "md:scale-105 md:z-10 bg-black text-white border-transparent" : "hover:border-slate-200"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all",
                  i === 1 ? "bg-white/10 text-white group-hover:bg-indigo-500" : "bg-slate-50 text-slate-900 group-hover:bg-black group-hover:text-white"
                )}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className={cn(
                  "text-sm leading-relaxed mb-8",
                  i === 1 ? "text-slate-400" : "text-slate-500 font-light"
                )}>
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <LucideIcons.ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
