import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false); // Desktop dropdown
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false); // Mobile dropdown

  // Regular links (Services removed — handled separately)
  const links = [
    { name: 'Industries', path: 'industries' },
    { name: "Why Keptel", path: "why_keptel" },
    { name: 'About', path: 'about' },
    // { name: 'Careers', path: 'careers' },
  ];

  // Services dropdown items
const serviceLinks = [
  { name: <b>Overview</b>, path: "services" },
  { name: "Talent Intelligence", path: "service:talent-intelligence" },
  { name: "Talent Acquisition", path: "service:talent-acquisition" },
  { name: "Executive Search", path: "service:executive-search" },
  { name: "Recruitment Process Outsourcing", path: "service:rpo" },
  { name: "Global PEO Services", path: "service:global-peo" }
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
        <div className="flex items-center justify-between h-20 py-2">

          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">

            {/* === HOME === */}
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors relative group ${
                isScrolled ? 'text-slate-700 hover:text-[#D63A1E]' : 'text-white hover:text-white'
              } ${currentPage === 'home' ? 'font-semibold' : ''}`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#D63A1E] transition-all duration-300 ${
                  currentPage === "home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* === SERVICES (AFTER HOME) === */}
<div
  className="relative"
  onMouseEnter={() => setServiceDropdown(true)}
  onMouseLeave={() => setServiceDropdown(false)}
>
  <button
    onClick={() => onNavigate("services")}
    className={`flex items-center gap-1 font-medium transition-colors relative group ${
      isScrolled ? 'text-slate-700 hover:text-[var(--keptel)]' : 'text-white hover:text-white'
    } ${currentPage === "services" ? "font-semibold" : "" }`}
  >
    Services
    <ChevronDown size={16} />

    <span
      className={`absolute bottom-0 left-0 h-[2px] bg-[var(--keptel)] transition-all duration-300 ${
        currentPage === "services" ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </button>

  <AnimatePresence>
    {serviceDropdown && (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute left-0 mt-3 bg-white shadow-lg w-64 rounded-lg py-3 z-50 border border-gray-200"
      >
        {serviceLinks.map((item) => (
          <li
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className="
              px-4 py-2 cursor-pointer text-[var(--text-default)]
              hover:bg-[var(--keptel-light)] hover:text-[var(--keptel)]
              transition-all
            "
          >
            {item.name}
          </li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>


            {/* === Remaining Links === */}
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`font-medium transition-colors relative group ${
                  isScrolled ? 'text-slate-700 hover:text-[#D63A1E]' : 'text-white hover:text-white'
                } ${currentPage === link.path ? 'font-semibold' : ''}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#D63A1E] transition-all duration-300 ${
                    currentPage === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            {/* CTA */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-4">

              {/* Mobile Home */}
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium ${
                  currentPage === 'home'
                    ? 'text-[#D63A1E] font-bold'
                    : 'text-slate-700 hover:text-[#D63A1E]'
                }`}
              >
                Home
              </button>

              {/* Mobile Services Dropdown */}
<div>
  <button
    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
    className="flex justify-between items-center w-full py-2 font-medium text-[var(--text-default)]"
  >
    Services
    <ChevronDown
      size={18}
      className={`${mobileServiceOpen ? "rotate-180" : ""} transition-transform`}
    />
  </button>

  <AnimatePresence>
    {mobileServiceOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="ml-4 mt-2 space-y-2"
      >
        {serviceLinks.map((item) => (
          <button
            key={item.path}
            onClick={() => {
              onNavigate(item.path);
              setIsMobileMenuOpen(false);
            }}
            className="
              block w-full text-left py-1
              text-[var(--muted)] hover:text-[var(--keptel)]
            "
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>


              {/* Remaining mobile links */}
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
