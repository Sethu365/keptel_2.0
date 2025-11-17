  // src/pages/Services.tsx
  import { motion } from "framer-motion";
  import Hero from "../components/Hero";
  import Section from "../components/Section";
  import Card from "../components/Card";
  import Button from "../components/Button";
  import {
    Zap,
    Shield,
    TrendingUp,
    Cloud,
    Database,
    Code,
    Smartphone,
    BarChart,
    Lock,
    Globe,
    Cpu,
    Layers,
    Users,
    Search
  } from "lucide-react";

  interface ServicesProps {
    onNavigate: (page: string) => void;
  }

  export default function Services({ onNavigate }: ServicesProps) {
    // subtle, professional motion helpers
    const container = {
      hidden: { opacity: 0, y: 6 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 },
      },
    };

    const item = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    };

    const services = [
      {
        icon: Zap,
        category: "Digital Transformation",
        title: "Enterprise Modernization",
        description:
          "Accelerate your digital journey with transformation strategies, legacy system modernization and cloud-native architecture.",
      },
      {
        icon: Cloud,
        category: "Cloud Solutions",
        title: "Cloud Migration & Management",
        description:
          "Seamlessly migrate to cloud infrastructure with a pragmatic multi-cloud strategy, cost optimization and managed services.",
      },
      {
        icon: Shield,
        category: "Cybersecurity",
        title: "Security & Compliance",
        description:
          "Defend the enterprise with threat detection, incident response, security posture and compliance engineering.",
      },
      {
        icon: TrendingUp,
        category: "Business Analytics",
        title: "Data & Analytics",
        description:
          "Turn data into strategic advantage with analytics platforms, BI, predictive models and decisioning pipelines.",
      },
      {
        icon: Code,
        category: "Custom Development",
        title: "Software Engineering",
        description:
          "Design and build scalable software: APIs, microservices, and robust engineering practices for enterprise delivery.",
      },
      {
        icon: Smartphone,
        category: "Mobile Solutions",
        title: "Mobile App Development",
        description:
          "Design and deliver performant native and cross-platform apps with a focus on UX, reliability and maintainability.",
      },
      {
        icon: Database,
        category: "Data Management",
        title: "Data Engineering",
        description:
          "Implement resilient data pipelines, warehousing and governance for trusted analytics and reporting.",
      },
      {
        icon: BarChart,
        category: "Strategy",
        title: "Digital Strategy Consulting",
        description:
          "Practical roadmaps and measurable plans to align technology investments with business outcomes.",
      },
      {
        icon: Lock,
        category: "Identity & Access",
        title: "IAM & Identity",
        description:
          "Secure access architectures: SSO, MFA, privileged access, and identity governance for modern enterprises.",
      },
      {
        icon: Globe,
        category: "Integration",
        title: "System Integration",
        description:
          "Connect systems reliably — APIs, middleware, and integration patterns that scale with your business.",
      },
      {
        icon: Cpu,
        category: "AI & Machine Learning",
        title: "AI Solutions",
        description:
          "Concrete ML solutions for automation, predictions, and operationalization aligned to real KPIs.",
      },
      {
        icon: Layers,
        category: "Architecture",
        title: "Enterprise Architecture",
        description:
          "Design resilient, scalable architectures that align engineering execution to strategic goals.",
      },
    ];

    // Talent / People services (from the image) — Executive Search shown WITHOUT 'Board Room Hiring'
    const talentServices = [
      {
        icon: Zap,
        category: "People Intelligence",
        title: "Talent Intelligence",
        description:
          "Data-led market mapping, pay benchmarking, and talent landscape insights to inform strategic hiring and workforce planning.",
      },
      {
        icon: Users,
        category: "Hiring",
        title: "Talent Acquisition",
        description:
          "End-to-end recruitment — sourcing, screening, interview orchestration and candidate experience to secure top performers.",
      },
      {
        icon: Search,
        category: "Leadership",
        title: "Executive Search",
        description:
          "Confidential search for senior leadership and mission-critical roles — discreet sourcing, assessment and offer support.",
      },
      {
        icon: Layers,
        category: "Outsourcing",
        title: "Recruitment Process Outsourcing",
        description:
          "Flexible RPO engagements to scale hiring capacity, reduce time-to-fill and bring predictable hiring outcomes.",
      },
      {
        icon: Globe,
        category: "Global HR",
        title: "Global PEO Services",
        description:
          "Employer-of-record and PEO services to simplify international expansion, local payroll, compliance and benefits administration.",
      },
    ];

    // Keptel brand color
    const brand = "#D63A1E";
    const brandLight = "#FF7A53"; // subtle lighter tone for gradients

    return (
      <div>
        <Hero
          title="Enterprise Solutions That Drive Results"
          subtitle="Comprehensive technology services designed to transform your business and accelerate growth in the digital economy."
          ctaPrimary="Schedule Consultation"
          ctaSecondary="View Case Studies"
          onPrimaryClick={() => onNavigate("contact")}
          onSecondaryClick={() => onNavigate("services")}
          backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        {/* Services grid */}
        

        {/* Talent & People section (new) */}
        <Section
          eyebrow="Talent Solutions"
          title="People & Hiring Services"
          subtitle="Recruitment, executive search and global HR services tailored to your growth plan."
        >
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {talentServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={i} variants={item}>
                  <Card className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-brand" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                          {svc.category}
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{svc.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{svc.description}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => onNavigate("services")}
                        className="text-brand font-semibold inline-flex items-center gap-2 text-sm hover:underline"
                      >
                        Learn More
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Our Approach — Keptel pipeline (connected line, no chevrons) */}
        <Section
          background="gray"
          eyebrow="Our Approach"
          title="How We Deliver Excellence"
          subtitle="A focused, visible pipeline — clear milestones, confident delivery."
        >
          <div className="mx-auto max-w-6xl py-12 relative">
            {/* Connector SVG: extended and behind content */}
            <svg
              className="hidden md:block absolute inset-x-0 top-28 h-20 pointer-events-none z-0"
              viewBox="0 0 1400 120"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="keptelGradFull" x1="0" x2="1">
                  <stop offset="0%" stopColor="#D63A1E" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF7A53" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Start near left badge (x=40) and end near right badge (x=1360) */}
              <path
                d="M40 60 C 260 8, 460 112, 700 60 S 980 8, 1360 60"
                stroke="url(#keptelGradFull)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 6px 14px rgba(214,58,30,0.06))' }}
              />
            </svg>

            {/* actual nodes row (cards + badges) */}
            <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
              {[
                { id: "01", title: "Discovery", copy: "Align outcomes, constraint mapping, and success metrics." },
                { id: "02", title: "Strategy", copy: "Roadmap, technical approach, and risk-balanced planning." },
                { id: "03", title: "Execution", copy: "Cross-functional pods delivering validated increments." },
                { id: "04", title: "Optimization", copy: "Telemetry-led tuning, A/B, and scale for ROI." },
              ].map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.42 }}
                  whileHover={{ translateY: -6 }}
                  className="flex-1 min-w-0"
                >
                  <div className="md:flex md:items-center md:gap-6">
                    {/* badge + pin */}
                    <div className="flex items-start md:flex-col md:items-center gap-4 md:gap-3">
                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #D63A1E, #FF7A53)",
                            boxShadow: "0 8px 30px rgba(214,58,30,0.12)",
                            zIndex: 20,
                          }}
                        >
                          {s.id}
                        </div>

                        {/* pin under badge to visually meet the curve */}
                        <div
                          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-14 w-1.5 h-6 rounded-full"
                          style={{ background: "linear-gradient(180deg, #D63A1E, #FF7A53)", zIndex: 10 }}
                        />
                      </div>
                    </div>

                    {/* card (no chevron) */}
                    <div className="mt-4 md:mt-0 bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="flex-1">
                        <h5 className="text-base font-semibold text-slate-900">{s.title}</h5>
                        <p className="mt-2 text-sm text-slate-600 leading-snug">{s.copy}</p>

                        <div
                          className="mt-4 h-1 w-20 rounded-full"
                          style={{ background: "linear-gradient(90deg, #D63A1E, #FF7A53)" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* mobile: simple progress line */}
            <div className="md:hidden mt-8 w-full flex items-center justify-between gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(90deg, #D63A1E, #FF7A53)"
                        : "rgba(15,23,42,0.06)",
                  }}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-slate-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 mb-8">Let's discuss how our services can help you achieve your business objectives.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" icon onClick={() => onNavigate("contact")} className="bg-brand hover:bg-brand-600 text-white rounded-xl">
                Contact Our Team
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate("industries")} className="border-slate-400 text-slate-900 rounded-xl">
                Explore Industries
              </Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }
