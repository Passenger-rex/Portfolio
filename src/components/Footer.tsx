import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { JellyText } from "./JellyText";
import { motion } from "motion/react";

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
          <img 
            src="/screen.png" 
            alt="" 
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-500 pointer-events-none select-none" 
          />

          <div className="flex items-center gap-6">
            <a href="https://x.com/Johnreysmart" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-1 hover:border-brand-1 hover:drop-shadow-[0_0_15px_rgba(227,83,54,0.5)] transition-all group">
              <Twitter size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/johntobiekundayo/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] hover:drop-shadow-[0_0_15px_rgba(0,119,181,0.5)] transition-all group">
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/Passenger-rex/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all group">
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:johntobismart@gmail.com" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-2 hover:border-brand-2 hover:drop-shadow-[0_0_15px_rgba(255,117,24,0.5)] transition-all group">
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="text-center pt-8 border-t border-white/10 w-full max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-white hover:text-brand-2 transition-colors">
              <JellyText text="JOHN-TOBI EKUNDAYO" />
            </h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest transition-colors hover:text-gray-300">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
