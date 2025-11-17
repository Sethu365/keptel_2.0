import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { Zap, Shield, TrendingUp } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const brand = "#D63A1E";

  // Simple motion presets
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const pillars = [
    {
      id: "01",
      title: "Product & Platform Engineering",
      copy: "Keptel designs and builds stable, scalable digital products with clear architecture, managed risks, and predictable release paths.",
    },
    {
      id: "02",
      title: "Technology & Operations Enablement",
      copy: "We modernise applications and workflows so IT and operations teams can run business-critical processes with confidence and control.",
    },
    {
      id: "03",
      title: "Specialised Delivery Pods",
      copy: "Senior, cross-functional pods from Keptel integrate into your organisation and share accountability for outcomes—not just deliverables.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* ============================ HERO (UNCHANGED) ============================ */}
      <Hero
        title="Transform Your Enterprise for the Digital Age"
        subtitle="We partner with global leaders to drive innovation, accelerate growth, and create sustainable competitive advantages through technology and strategic insight."
        ctaPrimary="Get Started"
        ctaSecondary="Learn More"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
        backgroundImage="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundVideoSrc="../public/assets/Video.mp4"
        backgroundVideoPoster="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
        videoOnMobile={true}
      />

      {/* ===== FONT SCALE WRAPPER (applies to everything below, NOT hero) ===== */}
      <div
        className="
          [&_h2]:text-[28px] md:[&_h2]:text-[34px]
          [&_h3]:text-[20px]
          [&_p]:text-[16px] md:[&_p]:text-[17px]
          [&_li]:text-[15px] md:[&_li]:text-[16px]
          [&_span]:text-[14px]
        "
      >
        {/* ===================== 1. WHAT WE DO AT A GLANCE ===================== */}
        <Section background="white">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <p className="text-[15px] tracking-[0.22em] font-semibold uppercase text-[#D63A1E]/80">
              What We Do
            </p>

            <h2 className="mt-2 font-semibold tracking-tight text-slate-900">
              Technology, delivery, and teams aligned to your context
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Keptel works with enterprises and high-growth organisations to design, build, and
              operate digital solutions that support day-to-day business instead of disrupting it.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pillars.map((p) => (
              <motion.div key={p.id} variants={item}>
                <Card className="h-full bg-white border border-slate-200/70 shadow-sm hover:shadow-md hover:border-slate-300 transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-semibold tracking-[0.22em] uppercase"
                      style={{ color: brand }}
                    >
                      {p.id}
                    </span>
                    <h3 className="font-semibold text-slate-900 tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{p.copy}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* ===================== 2. ABOUT KEPTEL ===================== */}
        <Section
          background="gray"
          eyebrow="About Keptel"
          title="A focused partner for complex technology environments"
          subtitle="We are structured to work alongside internal product, IT, and operations teams rather than replace them."
        >
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Keptel is built around compact, senior-leaning teams that can engage at different
                stages of your technology journey—from shaping new initiatives to stabilising and
                scaling existing platforms.
              </p>
              <p>
                Our approach is measured and practical. We prioritise clarity of scope, alignment on
                constraints, and realistic planning so that delivery remains predictable and
                maintainable over time.
              </p>
            </div>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                We are comfortable working within established enterprise processes and standards:
                change management, approvals, risk frameworks, and existing vendor ecosystems.
                Keptel’s role is to add structure and capacity without adding noise.
              </p>
              <ul className="mt-2 space-y-1 text-slate-700 list-disc ml-5">
                <li>Aligned with your technology and governance standards</li>
                <li>Clear ownership and defined engagement boundaries</li>
                <li>Focus on systems that support business-critical operations</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="primary" size="lg" onClick={() => onNavigate("why-keptel")}>
                  Why Keptel
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate("about")}>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ===================== 3. CORE AREAS WE SUPPORT ===================== */}
        <Section
          background="white"
          eyebrow="Service Lines"
          title="Core areas we support"
          subtitle="A connected set of capabilities spanning applications, platforms, and enterprise workflows."
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl hover:shadow-md hover:border-slate-300 transition">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Zap className="w-5 h-5" style={{ color: brand }} />
              </div>
              <h3 className="font-semibold mb-2">Application Modernisation</h3>
              <p className="text-slate-600 leading-relaxed">
                Redesign and refactor legacy systems for reliability, scalability, and more efficient
                release cycles—without losing the business logic that already works.
              </p>
            </Card>

            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl hover:shadow-md hover:border-slate-300 transition">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Shield className="w-5 h-5" style={{ color: brand }} />
              </div>
              <h3 className="font-semibold mb-2">Cloud & Platform Engineering</h3>
              <p className="text-slate-600 leading-relaxed">
                Build and evolve cloud, hybrid, and on-prem platforms with strong foundations for
                security, observability, and long-term maintainability.
              </p>
            </Card>

            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl hover:shadow-md hover:border-slate-300 transition">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <TrendingUp className="w-5 h-5" style={{ color: brand }} />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Integrations & Data</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect systems, streamline workflows, and create data flows that support accurate
                reporting and decision-making across Keptel-enabled environments.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              className="rounded-xl px-8 py-3"
              onClick={() => onNavigate("services")}
            >
              View detailed services
            </Button>
          </div>
        </Section>

        {/* ===================== 4. INDUSTRY EXPERIENCE ===================== */}
        <Section
          background="gray"
          eyebrow="Industries"
          title="Experience across regulated and operations-heavy environments"
          subtitle="Our methods are consistent, but every Keptel engagement is tuned to sector-specific requirements and constraints."
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl bg-white hover:shadow-md hover:border-slate-300 transition">
              <h3 className="font-semibold mb-2">Financial Services</h3>
              <p className="text-slate-600 leading-relaxed">
                Digital workflows for onboarding, compliance, lending operations, and risk
                teams—bringing consistency, traceability, and strong process discipline.
              </p>
            </Card>

            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl bg-white hover:shadow-md hover:border-slate-300 transition">
              <h3 className="font-semibold mb-2">Healthcare & Wellness</h3>
              <p className="text-slate-600 leading-relaxed">
                Support for clinics, care networks, and operational teams that require structured
                coordination, dependable systems, and fast, accurate workflows.
              </p>
            </Card>

            <Card className="p-6 border border-slate-200/70 shadow-sm rounded-xl bg-white hover:shadow-md hover:border-slate-300 transition">
              <h3 className="font-semibold mb-2">Operations & Service Organisations</h3>
              <p className="text-slate-600 leading-relaxed">
                Keptel strengthens mobility operations, logistics-driven environments, and
                multi-location service teams that depend on real-time visibility, clear ownership,
                and structured coordination across the day-to-day.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-[#D63A1E] text-[#D63A1E] hover:bg-[#D63A1E] hover:text-white px-8 py-3"
              onClick={() => onNavigate("industries")}
            >
              View industry detail
            </Button>
          </div>
        </Section>

        {/* ===================== 5. FINAL CTA ===================== */}
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] rounded-2xl md:rounded-3xl p-12 md:p-16 text-white shadow-xl border border-slate-700/70 max-w-5xl mx-auto"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
              Next Steps
            </p>
            <h2 className="font-semibold tracking-tight mb-5">
              Discuss how Keptel can support your initiatives
            </h2>

            <p className="mb-9 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are planning a new digital initiative, modernising existing platforms, or
              looking for specialised delivery capacity, Keptel can walk through your context and
              outline a practical way to engage.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                className="px-8"
              >
                Connect with our team
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("why-keptel")}
                className="px-8"
              >
                Learn how we engage
              </Button>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
}
