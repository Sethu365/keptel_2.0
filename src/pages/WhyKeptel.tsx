// src/pages/WhyKeptel.tsx
import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import {
  CheckCircle,
  Users,
  Cloud,
  Globe,
  BarChart2,
  Layers,
  ChevronRight,
} from "lucide-react";

interface WhyKeptelProps {
  onNavigate: (page: string) => void;
}

export default function WhyKeptel({ onNavigate }: WhyKeptelProps) {
  const brand = "#D63A1E";
  const brandLight = "#FF7A53";

  const points = [
    {
      Icon: CheckCircle,
      title: "Enterprise-grade delivery",
      copy: "Pods that own outcomes, not just tickets — with milestones and reporting.",
    },
    {
      Icon: Users,
      title: "Specialist senior talent",
      copy: "Engineers, leaders and niche roles — mapped, benchmarked and filtered.",
    },
    {
      Icon: Cloud,
      title: "Cloud & platform thinking",
      copy: "Modern stack, SRE mindset and operational discipline from day zero.",
    },
    {
      Icon: Globe,
      title: "Global operations handled",
      copy: "Payroll, PEO and compliance in-market — run as one managed stream.",
    },
    {
      Icon: BarChart2,
      title: "Data-led hiring",
      copy: "Market mapping and salary benchmarks to reduce hiring and attrition risk.",
    },
    {
      Icon: Layers,
      title: "Flexible engagement models",
      copy: "Pods, retained search, RPO — built around outcomes and runway.",
    },
  ];

  const models = [
    {
      label: "Delivery Pods",
      copy: "Multi-disciplinary pods (PM, engineering, QA, design) accountable for a piece of your roadmap.",
      tag: "For when you need velocity",
    },
    {
      label: "Specialist & Leadership Hiring",
      copy: "Senior ICs, leads and heads of function with shortlists backed by real market data.",
      tag: "For when you need key people",
    },
    {
      label: "Global Workforce Ops",
      copy: "In-country payroll, PEO, contracts and onboarding standardised across markets.",
      tag: "For when you need to scale globally",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased text-[15px] md:text-[16px]">
      {/* HERO – people-focused image + clean copy */}
      <Hero
        title="Why Keptel"
        subtitle="High-trust engineering teams, senior hiring and global workforce operations — delivered by people who work like your people."
        backgroundImage="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1920"
        ctaPrimary="Book a discovery call"
        ctaSecondary="Explore services"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
      />

      {/* Stats strip under hero */}
      <Section className="-mt-10 mb-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                Senior roles
              </p>
              <p className="mt-2 text-4xl md:text-5xl font-semibold text-slate-900">
                250+
              </p>
              <p className="mt-2 text-base text-slate-600">
                Senior hires across product, engineering and data.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                Time-to-hire
              </p>
              <p className="mt-2 text-4xl md:text-5xl font-semibold text-slate-900">
                40%
              </p>
              <p className="mt-2 text-base text-slate-600">
                Average improvement in time-to-hire for critical roles.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                Markets supported
              </p>
              <p className="mt-2 text-4xl md:text-5xl font-semibold text-slate-900">
                12
              </p>
              <p className="mt-2 text-base text-slate-600">
                Markets with in-country workforce operations run by Keptel.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* WHY LEADERS CHOOSE KEPTEL */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2.6fr)_minmax(0,2.4fr)] items-start">
            <div>
              <p
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(214,58,30,0.06)",
                  color: brand,
                }}
              >
                WHY LEADERS CHOOSE KEPTEL
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-snug text-slate-900">
                One team that cares about{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(120deg, ${brand}, ${brandLight})`,
                  }}
                >
                  delivery, hiring and operations
                </span>{" "}
                — not just a single metric.
              </h2>

              <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-xl">
                Keptel sits in the middle of your roadmap, people plan and global
                footprint. Instead of managing multiple vendors, you get{" "}
                <span className="font-semibold" style={{ color: brand }}>
                  one accountable partner
                </span>{" "}
                that reports against shared outcomes.
              </p>

              <div className="mt-7 space-y-4 text-base text-slate-600">
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-3 w-3 rounded-full"
                    style={{ background: brand }}
                  />
                  <p>
                    <strong>For product & engineering leaders:</strong> pods that own
                    milestones, quality and velocity.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-2 h-3 w-3 rounded-full"
                    style={{ background: brandLight }}
                  />
                  <p>
                    <strong>For people & talent teams:</strong> senior hiring with clear
                    market data and structured, predictable process.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-3 w-3 rounded-full bg-slate-400" />
                  <p>
                    <strong>For founders & operators:</strong> global payroll, PEO and
                    compliance handled without extra noise.
                  </p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {points.map((p, i) => {
                const Icon = p.Icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${brand}, ${brandLight})`,
                          boxShadow: "0 10px 26px rgba(214,58,30,0.18)",
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-base text-slate-600">
                          {p.copy}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FFD0C1] via-[#FFE1D4] to-transparent group-hover:w-24 transition-all" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* HOW KEPTEL IS DIFFERENT */}
      <Section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold tracking-[0.18em] uppercase"
              style={{
                background: "rgba(214,58,30,0.06)",
                color: brand,
              }}
            >
              HOW KEPTEL IS DIFFERENT
            </p>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
              Not a generic staffing vendor. A partner that operates like a product team.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-500">
                Typical vendor
              </p>
              <ul className="mt-4 space-y-3 text-base text-slate-600">
                <li>• Optimised for volume, not for fit or outcomes.</li>
                <li>• Fragmented between hiring, delivery and payroll vendors.</li>
                <li>• Limited visibility into market data and benchmarks.</li>
                <li>• You project-manage multiple partners yourself.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-transparent bg-gradient-to-br from-[#fff4f1] via-white to-[#ffe5dc] p-[1px]">
              <div className="h-full rounded-3xl bg-white p-7">
                <p
                  className="text-sm font-semibold tracking-[0.22em] uppercase"
                  style={{ color: brand }}
                >
                  Keptel
                </p>
                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  <li>• Single team accountable for delivery, hiring and ops outputs.</li>
                  <li>• Pods aligned to your roadmap, not just to a stack or skill list.</li>
                  <li>• Market mapping, benchmarks and structured hiring for senior roles.</li>
                  <li>• Clear milestones, reporting and one decision-making counterpart.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-10">
            <div>
              <p
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(214,58,30,0.06)",
                  color: brand,
                }}
              >
                ENGAGEMENT MODELS
              </p>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
                Choose the starting point that matches where you are.
              </h3>
              <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl">
                Most clients start with a single pod or a small number of senior roles.
                From there, we expand into workforce operations where it makes sense.
              </p>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white"
              style={{
                background: `linear-gradient(120deg, ${brand}, ${brandLight})`,
              }}
            >
              Talk through options
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {models.map((m, idx) => (
              <div
                key={m.label}
                className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px]"
                    style={{
                      border: "1px solid rgba(15,23,42,0.14)",
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span>{m.tag}</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">
                  {m.label}
                </h4>
                <p className="mt-3 text-base text-slate-600">
                  {m.copy}
                </p>
                <div
                  className="mt-5 h-[2px] w-16 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${brand}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-18 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-100 bg-white px-7 py-12 md:px-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-9">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Ready for an outcome-focused conversation?
              </h3>
              <p className="mt-4 text-base md:text-lg text-slate-600">
                Share where you are currently blocked — roadmap, hiring or entering
                new markets. Keptel will respond with a practical, milestone-based plan.
              </p>

              <p className="mt-5 text-sm md:text-base text-slate-500">
                Prefer a call instead of email?{" "}
                <button
                  onClick={() => onNavigate("contact")}
                  className="font-semibold underline underline-offset-4"
                  style={{ color: brand }}
                >
                  Request a call back
                </button>{" "}
                and we&apos;ll line up slots that work for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate("contact")}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base md:text-lg font-semibold text-white shadow-lg"
                style={{
                  background: `linear-gradient(120deg, ${brand}, ${brandLight})`,
                }}
              >
                Book 30-min discovery
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3 text-sm md:text-base text-slate-800"
              >
                View services
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Floating Request a Call Back button */}
      <button
        onClick={() => onNavigate("contact")}
        aria-label="Request a call back"
        className="fixed right-5 bottom-5 md:right-6 md:bottom-6 z-50 flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3.5 rounded-full shadow-2xl shadow-slate-400/30 hover:shadow-slate-500/40 hover:translate-y-0.5 transition text-base"
        style={{
          background: `linear-gradient(120deg, ${brand}, ${brandLight})`,
          color: "white",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M22 16.92V19a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 4.18 2 2 0 0 1 5 2h2.09a2 2 0 0 1 2 1.72c.12 1.21.4 2.39.82 3.5a2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.75-1.75a2 2 0 0 1 2.11-.45c1.11.42 2.29.7 3.5.82A2 2 0 0 1 22 16.92z"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold whitespace-nowrap">
          Request a Call Back
        </span>
      </button>
    </div>
  );
}
