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
  PhoneCall,
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
      title: "Outcome-Driven Delivery",
      copy: "Cross-functional pods that take ownership of milestones, quality and execution.",
    },
    {
      Icon: Users,
      title: "Senior & Specialist Talent",
      copy: "Deep-screened engineering, product and leadership roles for high-impact teams.",
    },
    {
      Icon: Cloud,
      title: "Cloud Native Expertise",
      copy: "Secure, scalable, modern architectures aligned to enterprise standards.",
    },
    {
      Icon: Globe,
      title: "Global Workforce Coverage",
      copy: "Payroll, PEO, compliance and onboarding across multiple international markets.",
    },
    {
      Icon: BarChart2,
      title: "Data-Led Hiring",
      copy: "Market intelligence, salary benchmarks and structured evaluation frameworks.",
    },
    {
      Icon: Layers,
      title: "Flexible Engagement Models",
      copy: "Pods, retained search, managed ops — built around your roadmap and goals.",
    },
  ];

  const models = [
    {
      label: "Delivery Pods",
      tag: "Velocity & Ownership",
      copy: "Engineering, QA, PM and design teams aligned to roadmap outcomes.",
    },
    {
      label: "Leadership & Specialist Hiring",
      tag: "Key Roles",
      copy: "Tech leads, senior ICs and heads of function with validated expertise.",
    },
    {
      label: "Global Workforce Operations",
      tag: "Scale Anywhere",
      copy: "Payroll, compliance, PEO and onboarding unified under one accountable partner.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO */}
      <Hero
        title="Why Keptel"
        subtitle="An integrated partner for engineering delivery, senior hiring and global workforce operations."
        backgroundImage="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1920"
        overlay="rgba(0,0,0,0.35)"
        ctaPrimary="Book a call"
        ctaSecondary="Explore services"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
      />

      {/* STATS — reduced bottom spacing */}
      <Section className="-mt-10 pb-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          {[
            {
              label: "Senior Roles",
              value: "250+",
              desc: "Engineering, product & data placements",
            },
            {
              label: "Time-to-Hire",
              value: "40%",
              desc: "Reduction for critical positions",
            },
            {
              label: "Global Markets",
              value: "12",
              desc: "Countries supported through workforce ops",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>

              <div
                className="mt-1 h-[3px] w-10 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${brand}, ${brandLight})`,
                }}
              />

              <p className="mt-5 text-4xl font-semibold" style={{ color: brand }}>
                {item.value}
              </p>
              <p className="mt-3 text-slate-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY KEPTEL — reduced top padding */}
      <Section className="pt-6 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-16 lg:grid-cols-2">
          <div>
            <p
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(214,58,30,0.08)", color: brand }}
            >
              Why leaders choose Keptel
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              One accountable partner across{" "}
              <span
                className="pb-1"
                style={{ borderBottom: `3px solid ${brand}` }}
              >
                delivery, hiring & operations.
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Keptel works as an extension of your organisation — not a vendor.
              Our teams blend execution, talent and global workforce operations
              under one framework.
            </p>

            <div className="mt-8 space-y-5 text-slate-700">
              {[
                "Pods aligned to measurable outcomes and deliverables.",
                "Structured hiring backed by role scopes & market data.",
                "Global compliance and payroll enabled without friction.",
              ].map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className="mt-[9px] h-2.5 w-2.5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${brand}, ${brandLight})`,
                    }}
                  />
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
                >
                  <div
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full mb-2"
                    style={{
                      background: "rgba(214,58,30,0.06)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: brand }} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-slate-600">{p.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(214,58,30,0.08)", color: brand }}
          >
            Engagement Models
          </p>

          <h3 className="mt-6 text-3xl md:text-4xl font-semibold max-w-2xl">
            Start where it fits. Scale when it makes sense.
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {models.map((m, idx) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <p className="text-xs uppercase text-slate-500 font-medium flex items-center gap-2">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full border border-slate-300 text-[10px]">
                    {idx + 1}
                  </span>
                  {m.tag}
                </p>

                <h4 className="mt-4 text-xl font-semibold">{m.label}</h4>
                <p className="mt-3 text-slate-600">{m.copy}</p>

                <div
                  className="mt-5 h-[2px] w-16 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${brand}, ${brandLight})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-12 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Ready to explore what Keptel can deliver?
            </h3>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Share where you need clarity — roadmap, hiring or global
              expansion — and we’ll prepare a structured, outcome-driven plan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition"
                style={{
                  background: `linear-gradient(135deg, ${brand}, ${brandLight})`,
                }}
              >
                Book a discovery call
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate("services")}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-slate-800 hover:bg-slate-50 transition"
              >
                View services
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* FLOATING CALLBACK BTN */}
      <button
        onClick={() => onNavigate("contact")}
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition"
        style={{
          background: `linear-gradient(135deg, ${brand}, ${brandLight})`,
        }}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
          <PhoneCall className="w-4 h-4 text-white" />
        </span>
        Request a Call Back
      </button>
    </div>
  );
}
