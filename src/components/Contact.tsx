import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-medium leading-[0.9] tracking-tight text-slate-900 mb-10">
              LET'S BUILD <br />
              SOMETHING <span className="font-serif italic font-normal lowercase text-indigo-600">extraordinary.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to new opportunities.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-lg font-bold text-slate-900">folaranminazeefat8@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-lg font-bold text-slate-900">+234 8083168508</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Nazeefat-boot/folaranmi-Nazeefat-Oludamilola' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/nazeefat-folaranmi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                { icon: Twitter, href: 'https://x.com/Nazeefat11?t=zQvX3hyqKYXMpkp7hUHeWw&s=09' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/20"
          >
            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent successfully!');
            }}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-0 py-4 bg-transparent border-b border-slate-100 outline-none focus:border-indigo-600 transition-colors font-medium placeholder:text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-0 py-4 bg-transparent border-b border-slate-100 outline-none focus:border-indigo-600 transition-colors font-medium placeholder:text-slate-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-100 outline-none focus:border-indigo-600 transition-colors resize-none font-medium placeholder:text-slate-200"
                />
              </div>
              <button 
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100"
              >
                Send Request
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
