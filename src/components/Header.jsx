import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", to: "home" },
    { name: "Sobre Mim", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Projetos", to: "projects" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b shadow-md backdrop-blur-lg bg-black/40 border-white/10">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto text-white max-w-7xl">
        <motion.div
          className="font-mono text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-white bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bernardo.dev
        </motion.div>

        {/* Desktop nav */}
        <nav className="items-center hidden space-x-8 text-sm font-medium md:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="relative cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-transform hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-6 space-y-6 text-center text-white shadow-lg md:hidden bg-black/95"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
