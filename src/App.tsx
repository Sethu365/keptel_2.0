import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import IndustryDetail from "./pages/IndustryDetail";
import SplashScreen from "./components/SplashScreen";
import WhyKeptel from "./pages/WhyKeptel";
import { useScrollToTop } from "./hooks/useScrollToTop";
import ServiceDetail from "./pages/ServiceDetail";

type PageKey =
  | "home"
  | "services"
  | "about"
  | "industries"
  | "why_keptel"
  | "careers"
  | "contact"
  | "industryDetail"
  | "serviceDetail";

function formatSlugToTitle(slug: string) {
  return slug
    .split("-")
    .map((s) => (s.length ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string | null>(null);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const [splashDone, setSplashDone] = useState(false);

  // Scroll to top handling (supports industry + service detail pages)
  const scrollKey = useMemo(() => {
    if (currentPage === "industryDetail" && selectedIndustrySlug) {
      return `industry:${selectedIndustrySlug}`;
    }
    if (currentPage === "serviceDetail" && selectedServiceSlug) {
      return `service:${selectedServiceSlug}`;
    }
    return currentPage;
  }, [currentPage, selectedIndustrySlug, selectedServiceSlug]);

  useScrollToTop(scrollKey);

  // Document title handler
  useEffect(() => {
    const base = "Keptel Analytics Space";
    const titles: Record<Exclude<PageKey, "industryDetail" | "serviceDetail">, string> = {
      home: `${base} — Enterprise Technology Solutions`,
      services: `Services — ${base}`,
      about: `About Us — ${base}`,
      industries: `Industries — ${base}`,
      why_keptel: `Why Keptel — ${base}`,
      careers: `Careers — ${base}`,
      contact: `Contact Us — ${base}`,
    };

    if (currentPage === "industryDetail" && selectedIndustrySlug) {
      document.title = `${formatSlugToTitle(selectedIndustrySlug)} — ${base}`;
      return;
    }

    if (currentPage === "serviceDetail" && selectedServiceSlug) {
      document.title = `${formatSlugToTitle(selectedServiceSlug)} — ${base}`;
      return;
    }

    document.title = titles[currentPage as Exclude<PageKey, "industryDetail" | "serviceDetail">] || base;
  }, [currentPage, selectedIndustrySlug, selectedServiceSlug]);

  // Navigation handler
  const handleNavigate = (page: string) => {
    // Industry dynamic navigation
    if (page.startsWith("industry:")) {
      const slug = page.split(":")[1] || "";
      setSelectedIndustrySlug(slug);
      setCurrentPage("industryDetail");
      return;
    }

    // Service dynamic navigation
    if (page.startsWith("service:")) {
      const slug = page.split(":")[1] || "";
      setSelectedServiceSlug(slug);
      setCurrentPage("serviceDetail");
      return;
    }

    // Normal pages
    const key = (page as PageKey) || "home";
    setCurrentPage(key);
  };

  // Page resolver
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;

      case "services":
        return <Services onNavigate={handleNavigate} />;

      case "about":
        return <About onNavigate={handleNavigate} />;

      case "industries":
        return <Industries onNavigate={handleNavigate} />;

      case "why_keptel":
        return <WhyKeptel onNavigate={handleNavigate} />;

      case "careers":
        return <Careers onNavigate={handleNavigate} />;

      case "contact":
        return <Contact onNavigate={handleNavigate} />;

      case "industryDetail":
        return selectedIndustrySlug ? (
          <IndustryDetail slug={selectedIndustrySlug} onNavigate={handleNavigate} />
        ) : (
          <Industries onNavigate={handleNavigate} />
        );

      case "serviceDetail":
        return selectedServiceSlug ? (
          <ServiceDetail slug={selectedServiceSlug} onNavigate={handleNavigate} />
        ) : (
          <Services onNavigate={handleNavigate} />
        );

      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {!splashDone && (
        <SplashScreen
          minDuration={2500}
          logoSrc="/assets/logo.png"
          onFinish={() => setSplashDone(true)}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-500 ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar
          currentPage={
            currentPage === "industryDetail"
              ? "industries"
              : currentPage === "serviceDetail"
              ? "services"
              : currentPage
          }
          onNavigate={handleNavigate}
        />

        <main>{renderPage()}</main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}
