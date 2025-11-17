import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Industries', path: 'industries' },
    { name: "Why Keptel", path: "why_keptel" },
    { name: 'About', path: 'about' },
    // { name: 'Careers', path: 'careers' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6">
        {/* Reduced navbar height but kept logo same size */}
        <div className="flex items-center justify-between h-20 py-2">
          
          {/* ✅ LOGO (unchanged size) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="../assets/logo.png"
              alt="Keptel Analytics Space"
              draggable={false}
              className="h-[5.2rem] md:h-[6.5rem] w-auto object-contain select-none transition-all"
            />
          </motion.div>

          {/* ✅ NAV LINKS + BUTTON */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`font-medium transition-colors relative group ${
                    isScrolled
                      ? 'text-slate-700 hover:text-[#D63A1E]'
                      : 'text-white hover:text-white'
                  } ${currentPage === link.path ? 'font-semibold' : ''}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#D63A1E] transition-all duration-300 group-hover:w-full ${
                      currentPage === link.path ? 'w-full' : ''
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                onClick={() => onNavigate('contact')}
                className={
                  isScrolled
                    ? 'bg-[#D63A1E] hover:bg-[#b92d14] text-white px-5 py-2 text-sm rounded-lg'
                    : 'border-white text-white hover:bg-[#D63A1E] hover:border-[#D63A1E] px-5 py-2 text-sm rounded-lg'
                }
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    onNavigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-medium ${
                    currentPage === link.path
                      ? 'text-[#D63A1E] font-bold'
                      : 'text-slate-700 hover:text-[#D63A1E]'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <Button
                variant="primary"
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-center bg-[#D63A1E] hover:bg-[#b92d14] text-white"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
