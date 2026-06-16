import { motion } from "motion/react";
import { Code2, Server, Database, Cloud, Github as GitIcon, Globe } from "lucide-react";
import { JellyText } from "./JellyText";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "Firebase", icon: Database },
  { name: "GitHub", icon: GitIcon },
  { name: "Netlify", icon: Cloud },
  { name: "React", icon: Globe }
];

export function About() {
  return (
    <section id="about" className="pt-24 md:pt-40 pb-20 md:pb-24 px-6 md:px-12 relative overflow-hidden z-10 min-h-[90vh]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-2/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
            <img 
              src="/veck.png" 
              alt="" 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 mb-8 md:mb-12 mix-blend-screen opacity-90 pointer-events-none select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-8 leading-tight flex flex-col items-center gap-2 md:gap-4">
            <span className="flex flex-wrap justify-center gap-2"><JellyText text="ENGINEERING" /></span>
            <span className="flex flex-wrap justify-center gap-2 md:gap-4 mt-1 md:mt-2"><JellyText text="WITH" /> <span className="text-gray-500"><JellyText text="PURPOSE." /></span></span>
          </h2>
          <div className="w-full h-[1px] bg-white/10 mt-6 md:mt-12 max-w-3xl" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center lg:text-left"
          >
            <p>
              I am John-Tobi Ekundayo, a dedicated Full-Stack Web Developer. I specialize in building highly scalable, performance-driven web applications that bridge complex backend logic with elegant frontend interfaces.
            </p>
            <p>
              My approach focuses on solid architectural foundations, type safety, and delivering exceptional user experiences across the entire stack.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="font-mono text-brand-3 tracking-widest uppercase mb-8 text-lg">
              Core Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={skill.name}
                  className="px-6 py-4 border border-white/10 rounded-2xl text-white md:text-lg font-medium hover:border-brand-2 hover:bg-secondary/40 hover:-translate-y-1 transition-all flex items-center gap-3 backdrop-blur-sm bg-secondary"
                >
                  <skill.icon size={24} className="text-brand-1" />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
