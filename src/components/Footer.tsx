// src/components/Footer.tsx
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const company = [
    { label: "About Us", page: "about" },
    { label: "Careers", page: "careers" },
    { label: "Contact", page: "contact" },
  ];

  const solutions = [
    { label: "Talent Intelligence", page: "services" },
    { label: "Talent Acquisition", page: "services" },
    { label: "Executive Search", page: "services" },
    { label: "Global PEO Services", page: "services" },
  ];

  // ✅ Updated industries according to your screenshot
  const industries = [
    { label: "IT Services", page: "industries" },
    { label: "Automotive", page: "industries" },
    { label: "Automation", page: "industries" },
    { label: "Healthcare", page: "industries" },
  ];

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-slate-800 text-slate-200 pt-16 pb-10 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-10 border-b border-slate-800/30 gap-6">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-4">
            <div className="rounded-md p-1 bg-white/6 hover:bg-white/8 transition">
              <img
                src="/assets/logo.png"
                alt="Keptel Analytics Space"
                className="h-16 md:h-28 w-auto object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="hidden md:block h-10 w-px bg-white/10" />
            <p className="text-sm md:text-base text-slate-400 max-w-md">
              Engineering trusted platforms for strategy, systems, and scale.
            </p>
          </div>

          {/* Newsletter */}
          <form onSubmit={handleNewsletter} className="w-full md:w-auto">
            <label htmlFor="newsletter" className="sr-only">
              Email
            </label>
            <div className="flex gap-3">
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Work email"
                className="w-full md:w-80 bg-[#0F1720] border border-slate-700 px-4 py-3 rounded-xl text-sm placeholder:text-slate-500 focus:ring-2 focus:ring-[#D63A1E] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl font-semibold bg-[#D63A1E] hover:bg-[#B72B12] transition text-white"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              We only send relevant insights. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 py-10">
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-70" />
                <span>contact@keptel.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-70" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 opacity-70" />
                <span>
                  123 Business Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">
              Follow Us
            </h4>
            <ul className="flex items-center gap-4 mt-2">
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10"
                >
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800/30 pt-6 mt-4 flex flex-col md:flex-row justify-between text-xs text-slate-400 gap-4">
          <span>© {year} Keptel Analytics Space. All rights reserved.</span>

          <span className="font-semibold text-slate-200">
            Powered by Valise Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
