import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Splash({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="splash"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
    >
      <motion.div
        animate={isLoaded ? { 
          scale: [0.5, 1.2, 1], 
          opacity: [0, 1, 1], 
          rotate: [-20, 10, -5, 0] 
        } : { opacity: 0 }}
        transition={{ 
          duration: 1.8,
          ease: "easeInOut"
        }}
        className="flex justify-center"
      >
        <img 
          src="/screen.png" 
          alt="" 
          onLoad={() => setIsLoaded(true)}
          className={`w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(227,83,54,0.4)] transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>
    </motion.div>
  );
}
