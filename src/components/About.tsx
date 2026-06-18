import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { JellyText } from "./JellyText";
import { Code2, Database, Layout, Palette, Server, Zap } from "lucide-react";

const skills = [
  { name: "React & Next.js", icon: <Layout size={20} /> },
  { name: "TypeScript", icon: <Code2 size={20} /> },
  { name: "Node.js", icon: <Server size={20} /> },
  { name: "PostgreSQL", icon: <Database size={20} /> },
  { name: "UI/UX Design", icon: <Palette size={20} /> },
  { name: "Tailwind CSS", icon: <Zap size={20} /> },
];

const experience = [
  {
    role: "Freelance Senior Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Designing and building scalable web applications and digital experiences for global clients."
  },
  {
    role: "Frontend Engineer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: "Led the development of modern web interfaces using React, focusing on performance and accessible design."
  }
];

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-secondary w-full" id="about">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-brand-1/5 rounded-full blur-[120px] -z-0 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-2/5 rounded-full blur-[150px] -z-0 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-12 md:pt-20">
        
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 lg:mb-24 flex flex-col items-start text-left"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight flex flex-row gap-2 md:gap-4 items-center text-white mb-6">
            <span className="flex"><JellyText text="ABOUT" /></span>
            <span className="text-brand-1 flex"><JellyText text="ME" /></span>
          </h1>
          <div className="w-full h-[1px] bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-24">
          {/* Image/Avatar Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 relative flex items-center"
          >
            <div className="aspect-square sm:aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-secondary/50 relative group flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-1/10 via-transparent to-brand-2/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/veck.png" 
                alt="John-Tobi Ekundayo" 
                className="w-32 h-32 sm:w-48 sm:h-48 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_30px_rgba(255,117,24,0.3)] select-none"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-2/20 rounded-full blur-[40px] -z-10" />
          </motion.div>

          {/* Bio Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-center h-full"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              Hello! I'm John-Tobi.
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-sans font-light">
              <p>
                I am a passionate web developer and designer with over 5 years of experience. I specialize in creating responsive, user-friendly websites and applications that not only look great but also perform exceptionally well.
              </p>
              <p>
                My approach focuses on solid architectural foundations, type safety, and delivering exceptional user experiences across the entire stack. I craft beautiful, functional platforms that drive results.
              </p>
              <p>
                When I'm not coding or pushing pixels, you can find me exploring new technologies, contributing to open-source, or analyzing the latest design theories.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-brand-1 hover:text-white transition-colors duration-300 inline-block"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Skills & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-brand-1" />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full before:bg-white/10 last:before:h-0">
                  <span className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-brand-2 ring-4 ring-secondary" />
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm font-mono text-brand-1 tracking-wider">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-display font-semibold text-white mb-1">{exp.role}</h4>
                  <p className="text-sm font-medium text-gray-300 mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-brand-2" />
              Core Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 border border-white/10 rounded-2xl flex items-center gap-4 bg-secondary/50 hover:bg-white/5 hover:border-white/20 transition-all border-l-4 hover:border-l-brand-1 group"
                >
                  <div className="p-3 bg-secondary/80 rounded-xl text-brand-2 shadow-inner group-hover:bg-brand-1 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
