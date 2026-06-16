import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isHome = location.pathname === "/";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 pointer-events-none flex justify-between items-start">
        <Link to="/" className="pointer-events-auto">
          <img 
            src="/screen.png" 
            alt="" 
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="w-12 h-12 object-contain hover:scale-110 transition-transform drop-shadow-lg pointer-events-none select-none"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>

        {/* Navbar Right Side */}
        {!isHome ? (
          <Link 
            to="/"
            className="pointer-events-auto w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-1 hover:border-brand-1 transition-all duration-300 group shadow-lg"
          >
            <ArrowLeft className="group-hover:-translate-x-1 group-hover:scale-110 transition-all duration-300" size={20} />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <motion.nav
              variants={{
                visible: { y: 0, opacity: 1, scale: 1 },
                hidden: { y: -100, opacity: 0, scale: 0.95 }
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="pointer-events-auto bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 hidden md:flex items-center gap-8 shadow-2xl"
            >
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-1 after:transition-all hover:after:w-full pb-1"
            >
              {item.name}
            </Link>
          ))}
            </motion.nav>

            {/* Mobile Toggle */}
            <motion.button 
              variants={{
                visible: { y: 0, opacity: 1, scale: 1 },
                hidden: { y: -100, opacity: 0, scale: 0.95 }
              }}
              animate={hidden ? "hidden" : "visible"}
              className="md:hidden text-white pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 p-3 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-secondary/95 backdrop-blur-xl pt-32 px-6 flex flex-col gap-8 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-4xl font-display">
              <li key="Home">
                <Link 
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block"
                >
                  Home
                </Link>
              </li>
              {navItems.filter(item => item.name !== "Contact").map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block"
                >
                  {item.name}
                </Link>
              ))}
              <li key="Contact">
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-brand-2 hover:text-brand-1 block mt-4"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
