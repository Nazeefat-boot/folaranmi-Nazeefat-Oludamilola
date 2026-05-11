import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter text-slate-900 mb-6 block">
              NZ<span className="text-indigo-600">.</span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
              Empowering brands with precision code and thoughtful design. 
              Let's create something meaningful together.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Nazeefat-boot/folaranmi-Nazeefat-Oludamilola' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/nazeefat-folaranmi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                { icon: Twitter, href: 'https://x.com/Nazeefat11?t=zQvX3hyqKYXMpkp7hUHeWw&s=09' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-slate-50 border border-slate-100 text-slate-400 rounded-xl flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm font-medium">folaranminazeefat8@gmail.com</li>
              <li className="text-slate-500 text-sm font-medium">+234 8083168508</li>
              <li className="text-slate-500 text-sm font-medium">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm flex items-center gap-1">
            © {currentYear} Nazeefat. Built with <Heart size={14} className="text-red-500" /> in Lagos.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs font-semibold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs font-semibold uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
