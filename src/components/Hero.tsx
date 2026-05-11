import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 px-6 overflow-hidden bg-[#FBFBF9]">
      {/* Subtle Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[35vw] font-black whitespace-nowrap uppercase tracking-tighter leading-none select-none">ARCHITECTURE</h2>
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12" />


          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-display font-bold leading-[0.85] tracking-tight mb-10 text-slate-900">
            DIGITAL <br />
            <span className="font-serif italic font-normal lowercase text-indigo-600 block my-2">Architect</span>
            OF <span className="text-slate-300">WEB</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 mx-auto max-w-xl leading-relaxed font-sans font-light">
            Crafting premium digital experiences through minimal design 
            and technical excellence as a <span className="text-slate-900 font-medium">Front-End Developer</span>.
          </p>
          
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-12 py-5 bg-black text-white rounded-full font-medium text-sm flex items-center gap-3 transition-all hover:bg-slate-900 shadow-2xl shadow-black/20"
            >
              Selected Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 group"
            >
              Let's talk 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Labels / Footer-like stats */}
      <div className="absolute bottom-12 left-0 right-0 hidden lg:flex justify-between px-24 items-end opacity-20 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-slate-400 mb-1">Based</span>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400 mb-1">Role</span>
            <span>Frontend Engineer</span>
          </div>
        </div>
        
        <div className="flex flex-col text-right">
          <span className="text-slate-400 mb-1">Scroll to explore</span>
          <div className="h-16 w-px bg-slate-900 mx-auto mt-2" />
        </div>

        <div className="flex flex-col text-right gap-4">
          <div className="flex flex-col">
            <span className="text-slate-400 mb-1">Experience</span>
            <span>3+ Years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400 mb-1">Style</span>
            <span>High Fidelity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
