/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Splash } from "./components/Splash";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Background3D } from "./components/Background3D";
import { AnimatePresence, motion } from "motion/react";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-grow flex flex-col justify-center">
        {children}
      </div>
      {location.pathname === "/" && <Footer />}
    </motion.div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
        <Background3D />
        
        <AnimatePresence>
          {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col min-h-screen z-10 relative"
          >
            <Navbar />
            <AnimatedRoutes />
          </motion.div>
        )}
      </div>
    </Router>
  );
}
