import { motion } from "motion/react";
import { JellyText } from "./JellyText";
import { Layout, PenTool, Palette, Code, Layers, Sparkles, Smartphone, Search, ShoppingCart } from "lucide-react";
import { FAQ } from "./FAQ";

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: <Code size={32} className="text-brand-1 mb-4" />
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and attractive user interfaces that enhance user engagement and satisfaction.",
    icon: <Layout size={32} className="text-brand-2 mb-4" />
  },
  {
    title: "E-commerce Solutions",
    description: "Robust online stores with secure payment gateways and inventory management systems.",
    icon: <ShoppingCart size={32} className="text-brand-1 mb-4" />
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone size={32} className="text-brand-2 mb-4" />
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility in search engines to drive organic traffic.",
    icon: <Search size={32} className="text-brand-1 mb-4" />
  }
];

export function Services() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-secondary w-full" id="services">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-2/5 rounded-full blur-[150px] -z-0 pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 flex flex-col md:flex-row gap-2 md:gap-[0.5em] items-center justify-center md:justify-start">
            <span className="flex flex-wrap justify-center gap-1"><JellyText text="MY" /></span>
            <span className="text-brand-2 md:text-brand-1 flex flex-wrap justify-center gap-1"><JellyText text="SERVICES" /></span>
          </h2>
          <div className="w-full h-[1px] bg-white/10 mt-6 md:mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="group relative border border-brand-2/50 md:border-white/10 hover:border-brand-2 p-8 sm:p-10 transition-all rounded-3xl overflow-hidden bg-secondary/80 backdrop-blur-sm shadow-[0_0_30px_rgba(255,117,24,0.1)] md:shadow-none hover:shadow-[0_0_30px_rgba(255,117,24,0.2)] flex flex-col items-start"
            >
              {/* Hover glow / Static glow on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-1/5 via-brand-2/5 to-brand-3/5 group-hover:from-brand-1/10 group-hover:via-brand-2/10 group-hover:to-brand-3/10 transition-all duration-700" />
              
              <div className="relative z-10">
                {service.icon}
                <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-brand-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-sans group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-24 w-full">
        <FAQ />
      </div>
    </section>
  );
}
