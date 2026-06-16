import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { JellyText } from "./JellyText";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-1/20 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full z-10 text-center md:text-left mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-brand-2 font-mono tracking-widest uppercase mb-4 block text-sm md:text-base">
            Hi, I am
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] mb-6 md:mb-8 flex flex-col items-center md:items-start gap-1">
            <span className="flex flex-wrap justify-center md:justify-start gap-1"><JellyText text="JOHN-TOBI" /></span>
            <span className="mt-1 md:mt-2 text-brand-2 md:text-brand-1 flex flex-wrap justify-center md:justify-start gap-1"><JellyText text="EKUNDAYO." /></span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-xl mx-auto md:mx-0 flex flex-col items-center md:items-start"
        >
          <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
            I craft polished, scalable full-stack experiences using modern web technologies. 
            From pixel-perfect frontends to robust backends.
          </p>

          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-brand-1 to-brand-2 text-white border border-brand-3/50 shadow-[0_0_20px_rgba(255,117,24,0.6)] md:shadow-[0_0_15px_rgba(227,83,54,0.4)] rounded-full font-semibold md:hover:shadow-[0_0_25px_rgba(255,117,24,0.7)] transition-all duration-300 group relative z-20"
          >
            Selected Works
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
