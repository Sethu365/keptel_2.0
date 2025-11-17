import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const [industryDropdown, setIndustryDropdown] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  // ----------------------------
  // SERVICE LINKS
  // ----------------------------
  const serviceLinks = [
    { name: <b>Overview</b>, path: "services" },
    { name: "IT Services", path: "service:it-services" },
    { name: "Staffing Services", path: "service:staffing-services" },
    { name: "Workforce Solutions", path: "service:workforce-solutions" },
    { name: "Technology Consulting", path: "service:technology-consulting" },
    { name: "Software Training", path: "service:software-training" },
  ];

  // ----------------------------
  // INDUSTRY LINKS
  // ----------------------------
  const industryLinks = [
    { name: "Aerospace", path: "industry:aerospace" },
    { name: "Automotive", path: "industry:automotive" },
    { name: "Healthcare", path: "industry:healthcare" },
    { name: "E-Commerce", path: "industry:ecommerce" },
    { name: "Banking", path: "industry:banking" },
    { name: "IT Services", path: "industry:it-services" },
  ];

  const links = [
    { name: "Why Keptel", path: "why_keptel" },
    { name: "About", path: "about" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20 py-2">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img
              src="../assets/logo.png"
              alt="Keptel Analytics Space"
              className="h-[5.2rem] md:h-[6.5rem] object-contain"
            />
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-10">
            {/* HOME */}
            <button
              onClick={() => onNavigate("home")}
              className={`font-medium relative group ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[var(--keptel)] transition-all ${
                  currentPage === "home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* ====================== SERVICES (NOW FIRST) ====================== */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button
                onClick={() => onNavigate("services")}
                className={`flex items-center gap-1 font-medium relative group ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Services
                <ChevronDown size={16} />

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--keptel)] transition-all ${
                    currentPage === "services"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              <AnimatePresence>
                {serviceDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-3 z-50"
                  >
                    {serviceLinks.map((item) => (
                      <li
                        key={item.path}
                        onClick={() => onNavigate(item.path)}
                        className="px-4 py-2 cursor-pointer text-[var(--text-default)] hover:bg-[var(--keptel-light)] hover:text-[var(--keptel)] transition"
                      >
                        {item.name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* ====================== INDUSTRY (NOW AFTER SERVICES) ====================== */}
            <div
              className="relative"
              onMouseEnter={() => setIndustryDropdown(true)}
              onMouseLeave={() => setIndustryDropdown(false)}
            >
              <button
                onClick={() => setIndustryDropdown(!industryDropdown)}
                className={`flex items-center gap-1 font-medium relative group ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Industry
                <ChevronDown
                  size={16}
                  className={`${industryDropdown ? "rotate-180" : ""} transition`}
                />

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--keptel)] transition-all ${
                    currentPage.startsWith("industry")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              <AnimatePresence>
                {industryDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-3 z-50"
                  >
                    {industryLinks.map((item) => (
                      <li
                        key={item.path}
                        onClick={() => onNavigate(item.path)}
                        className="px-4 py-2 cursor-pointer text-[var(--text-default)] hover:bg-[var(--keptel-light)] hover:text-[var(--keptel)] transition"
                      >
                        {item.name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* OTHER LINKS */}
            {links.map((l) => (
              <button
                key={l.path}
                onClick={() => onNavigate(l.path)}
                className={`font-medium relative group ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {l.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--keptel)] transition-all ${
                    currentPage === l.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            {/* CTA */}
            <Button
              variant={isScrolled ? "primary" : "outline"}
              onClick={() => onNavigate("contact")}
              className={
                isScrolled
                  ? "bg-[var(--keptel)] hover:bg-[var(--keptel-dark)] text-white px-5 py-2"
                  : "border-white text-white hover:bg-[var(--keptel)] px-5 py-2"
              }
            >
              Contact Us
            </Button>
          </div>

          {/* ====================== MOBILE MENU BUTTON ====================== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? "text-slate-900" : "text-white"} md:hidden`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ====================== MOBILE MENU ====================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 space-y-4">
              {/* Home */}
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 font-medium text-slate-800"
              >
                Home
              </button>

              {/* MOBILE SERVICES - FIRST */}
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
                      animate={{ opacity: 1, height: "auto" }}
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
                          className="block w-full text-left py-1 text-[var(--muted)] hover:text-[var(--keptel)]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE INDUSTRY - SECOND */}
              <div>
                <button
                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                  className="flex justify-between items-center w-full py-2 font-medium text-[var(--text-default)]"
                >
                  Industry
                  <ChevronDown
                    size={18}
                    className={`${mobileIndustryOpen ? "rotate-180" : ""} transition-transform`}
                  />
                </button>

                <AnimatePresence>
                  {mobileIndustryOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {industryLinks.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => {
                            onNavigate(item.path);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left py-1 text-[var(--muted)] hover:text-[var(--keptel)]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* OTHER LINKS */}
              {links.map((l) => (
                <button
                  key={l.path}
                  onClick={() => {
                    onNavigate(l.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 font-medium text-slate-700"
                >
                  {l.name}
                </button>
              ))}

              {/* CTA */}
              <Button
                variant="primary"
                className="w-full bg-[var(--keptel)]"
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
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
