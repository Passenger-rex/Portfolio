import { motion, useAnimationControls } from "motion/react";
import { useState } from "react";

export function JellyText({ text, className }: { text: string; className?: string }) {
  // Split by words, then by letters, to keep words from breaking strangely
  const words = text.split(" ");
  
  return (
    <span className={`inline-flex flex-wrap ${className || ""}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <JellyLetter key={`${wordIndex}-${letterIndex}`} letter={letter} />
          ))}
        </span>
      ))}
    </span>
  );
}

function JellyLetter({ letter }: { letter: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 0.8
      }
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block origin-bottom transition-colors hover:text-brand-2 cursor-default font-display drop-shadow-[2px_2px_0px_rgba(227,83,54,0.3)] hover:drop-shadow-[4px_4px_0px_rgba(255,117,24,0.5)]"
    >
      {letter}
    </motion.span>
  );
}
