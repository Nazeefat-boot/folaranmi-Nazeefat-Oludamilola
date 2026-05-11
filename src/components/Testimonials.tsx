import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-slate-600">
            Real stories from people I've worked with. I pride myself on clear 
            communication and delivering high-quality results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-indigo-600/20 mb-6" size={40} />
                <p className="text-lg text-slate-700 font-medium italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale transition-all hover:grayscale-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
