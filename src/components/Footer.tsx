import { Github, Twitter, Linkedin, Mail, Instagram, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
import { JellyText } from "./JellyText";
import { motion } from "motion/react";

const BehanceIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.226-2.477-2.226-1.482 0-2.352.812-2.488 2.226zm-9.392-5.5c2.378 0 3.791.921 4.103 2.585.197 1.054-.315 2.186-1.564 2.871 1.761.642 3.048 2.122 2.65 4.536-.339 2.05-1.936 3.508-4.992 3.508h-6.845v-13.5h6.648zm-4.305 5.518h2.001c1.328 0 2.215-.568 2.215-1.895 0-1.402-1.045-1.763-2.261-1.763h-1.955v3.658zm0 5.494h2.296c1.671 0 2.646-.866 2.646-2.164 0-1.424-1.111-2.027-2.589-2.027h-2.353v4.191z"/>
  </svg>
);

const TumblrIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411v-9.746h-3.66v-3.755c3.787-.778 4.793-4.148 4.961-6.088h3.336v5.82h4.526v4.023h-4.509v8.329c0 1.636.561 2.379 1.954 2.379.799 0 1.722-.293 2.327-.58v4.202c-.939.385-2.613.827-4.904.827z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="pt-24 pb-8 px-6 md:px-12 border-t border-white/5 relative overflow-hidden z-10 w-full mt-auto bg-secondary">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-1/10 rounded-full blur-[150px] -z-0 pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 w-full pt-12 pb-8">
            
            {/* About Me */}
            <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-8">
              <Link to="/" className="w-fit">
                <img 
                  src="/screen.png" 
                  alt="" 
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-500 pointer-events-none select-none drop-shadow-[0_0_15px_rgba(255,117,24,0.3)]" 
                />
              </Link>
              <h3 className="text-xl font-display font-semibold text-white tracking-wide">About Me</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                I'm John-Tobi Ekundayo, a passionate web developer and designer specializing in creating modern, responsive, and user-friendly websites. With a keen eye for design and a love for clean code, I bring ideas to life in the digital realm.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-xl font-display font-semibold text-white tracking-wide">Navigation</h3>
              <nav className="flex flex-col gap-3">
                <Link to="/about" className="text-gray-400 hover:text-brand-1 transition-colors text-sm w-fit">About</Link>
                <Link to="/projects" className="text-gray-400 hover:text-brand-1 transition-colors text-sm w-fit">Projects</Link>
                <Link to="/services" className="text-gray-400 hover:text-brand-1 transition-colors text-sm w-fit">Services</Link>
                <Link to="/contact" className="text-gray-400 hover:text-brand-1 transition-colors text-sm w-fit">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              <h3 className="text-xl font-display font-semibold text-white tracking-wide">Services</h3>
              <nav className="flex flex-col gap-3">
                <Link to="/services" className="text-gray-400 hover:text-brand-2 transition-colors text-sm w-fit">Web Development</Link>
                <Link to="/services" className="text-gray-400 hover:text-brand-2 transition-colors text-sm w-fit">UI/UX Design</Link>
                <Link to="/services" className="text-gray-400 hover:text-brand-2 transition-colors text-sm w-fit">Mobile App Development</Link>
                <Link to="/services" className="text-gray-400 hover:text-brand-2 transition-colors text-sm w-fit">E-commerce Solutions</Link>
                <Link to="/services" className="text-gray-400 hover:text-brand-2 transition-colors text-sm w-fit">SEO Optimization</Link>
              </nav>
            </div>

            {/* Reach Out */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              <h3 className="text-xl font-display font-semibold text-white tracking-wide">Reach Out</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all group">
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all group">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-2 hover:border-brand-2 transition-all group">
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://dribbble.com/Passenger-rex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#EA4C89] hover:border-[#EA4C89] transition-all group">
                  <Dribbble size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.behance.net/johntoekunday" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1769FF] hover:border-[#1769FF] transition-all group">
                  <BehanceIcon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.tumblr.com/johnnydrops" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#36465D] hover:border-[#36465D] transition-all group">
                  <TumblrIcon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/passengerrex/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-1 hover:border-brand-1 transition-all group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:johntobismart@gmail.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-1 hover:border-brand-1 transition-all group">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="font-display text-xl font-bold tracking-tighter text-white hover:text-brand-2 transition-colors">
              <JellyText text="JOHN-TOBI EKUNDAYO" />
            </h2>
            <p className="text-gray-400 text-sm tracking-wide transition-colors md:text-right">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
