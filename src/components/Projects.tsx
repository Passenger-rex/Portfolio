import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { JellyText } from "./JellyText";

const projects = [
  {
    title: "DROP",
    description: "A robust modern web application focusing on seamless data flows and intuitive user interface.",
    link: "https://github.com/Passenger-rex/DROP.git",
    site: "https://drop-929904691490.europe-west2.run.app/",
    logo: "https://drop-929904691490.europe-west2.run.app/logo.svg"
  },
  {
    title: "Fiikky Write Consult",
    description: "Consultancy platform providing sophisticated structural architecture and elegant frontend delivery.",
    link: "https://github.com/Passenger-rex/Fiikky-Write-Consult.git",
    site: "https://fikkywriteconsult.netlify.app/",
    logo: "https://fikkywriteconsult.netlify.app/logo.png"
  },
  {
    title: "Exam City",
    description: "Full-stack educational platform built for scale, featuring real-time state and dynamic assessments.",
    link: "https://github.com/Passenger-rex/exam-city.git",
    site: "https://examcity.qzz.io/",
    logo: "https://examcity.qzz.io/apple-touch-icon.png"
  },
  {
    title: "GistWire.ng",
    description: "Modern news and gist platform providing real-time updates with an elegant reading experience.",
    link: "https://github.com/Passenger-rex/GistWire.ng.git",
    site: "https://gistwireng.vercel.app/",
    logo: "https://gistwireng.vercel.app/favicon.ico"
  }
];

export function Projects() {
  return (
    <section id="projects" className="pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 relative z-10 min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-20 cursor-default flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 flex flex-col md:flex-row gap-2 md:gap-[0.5em] items-center">
            <span className="flex flex-wrap justify-center gap-1"><JellyText text="FEATURED" /></span>
            <span className="text-brand-2 md:text-brand-1 flex flex-wrap justify-center gap-1"><JellyText text="PROJECTS" /></span>
          </h2>
          <div className="w-full h-[1px] bg-white/10 mt-6 md:mt-8" />
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="group relative border border-brand-2/50 md:border-white/10 hover:border-brand-2 p-6 sm:p-8 md:p-12 transition-all rounded-3xl overflow-hidden bg-secondary shadow-[0_0_30px_rgba(255,117,24,0.15)] md:shadow-none hover:shadow-[0_0_30px_rgba(255,117,24,0.2)]"
            >
              {/* Hover glow / Static glow on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-1/5 via-brand-2/5 to-brand-3/5 group-hover:from-brand-1/10 group-hover:via-brand-2/5 group-hover:to-brand-3/10 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-2xl flex flex-col md:flex-row md:items-center gap-6">
                  {project.logo && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center justify-center w-20 h-20 bg-transparent rounded-2xl border border-white/10 p-2 transition-transform hover:scale-105 hover:border-brand-1">
                      <img src={project.logo} alt="" draggable={false} onContextMenu={(e) => e.preventDefault()} className="w-full h-full object-contain drop-shadow-md pointer-events-none select-none" />
                    </a>
                  )}
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-brand-2 md:text-white group-hover:text-brand-2 transition-colors">
                      <a href={project.site} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-brand-2/50 underline-offset-8">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-gray-400 text-lg mb-4 md:mb-0 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:bg-brand-2 hover:text-white transition-all shrink-0"
                >
                  <Github size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
