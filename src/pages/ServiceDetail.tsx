// src/pages/ServiceDetail.tsx
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

interface ServiceDetailProps {
  slug: string;
  onNavigate: (page: string) => void;
}

const SERVICE_DATA = {
  // ======================================================
  // 1) TALENT INTELLIGENCE — SIMPLIFIED
  // ======================================================
  "talent-intelligence": {
    title: "Talent Intelligence",
    heroImage:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1920",

    summary:
      "We help you understand the job market, what skills are available, and what other companies are doing. This makes hiring easier and helps you make better decisions.",

    bullets: [
      "Know which skills are easy or hard to find.",
      "See how much companies pay for different roles.",
      "Understand how teams are structured in other companies.",
      "Plan hiring with simple, clear data.",
      "Avoid hiring mistakes with better information.",
    ],

    value: [
      "Clear Hiring Decisions",
      "Easy Expansion Planning",
      "Better Talent Visibility",
      "Simple Data You Can Use",
    ],

    solutions: [
      {
        title: "Skill & Market Reports",
        desc: "Easy-to-read reports showing talent availability, locations, and hiring difficulty.",
      },
      {
        title: "Competitor Insights",
        desc: "Simple breakdown of how other companies hire, pay, and structure teams.",
      },
      {
        title: "Hiring Trend Charts",
        desc: "Clean visuals that show what’s happening in the job market.",
      },
      {
        title: "Workforce Planning Help",
        desc: "Basic support to plan future roles and team sizes.",
      },
    ],

    process: [
      "We understand your needs.",
      "We collect useful data.",
      "We study the information.",
      "We explain everything clearly.",
      "We help with next steps.",
    ],

    industries: [
      "IT & Digital",
      "Healthcare",
      "Retail",
      "Telecom",
      "Manufacturing",
      "Startups",
      "BFSI",
    ],

    stats: [
      "35% Faster Hiring Clarity",
      "50% Better Talent Visibility",
      "Used Across 20+ Countries",
    ],
  },

  // ======================================================
  // 2) TALENT ACQUISITION — SIMPLIFIED
  // ======================================================
  "talent-acquisition": {
    title: "Talent Acquisition",
    heroImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",

    summary:
      "We help you hire the right people faster and easier. Our team handles sourcing, screening, coordination, and candidate support.",

    bullets: [
      "Slow hiring processes.",
      "Hard-to-find skilled candidates.",
      "Candidates not staying engaged.",
      "Miscommunication between teams.",
      "Unclear screening or evaluations.",
    ],

    value: [
      "Better Candidates",
      "Faster Hiring",
      "Great Candidate Experience",
      "Lower Hiring Cost",
    ],

    solutions: [
      {
        title: "Complete Hiring Support",
        desc: "From finding candidates to onboarding — we handle everything.",
      },
      {
        title: "Simple Screening Process",
        desc: "Clear and easy evaluation steps for every role.",
      },
      {
        title: "Specialized Hiring",
        desc: "We help hire for tech, sales, design, analytics, and more.",
      },
      {
        title: "Candidate Engagement",
        desc: "Regular communication that keeps candidates interested.",
      },
    ],

    process: [
      "We understand your job requirement.",
      "We search the market.",
      "We screen candidates simply.",
      "You interview the best.",
      "We help with offers and joining.",
    ],

    industries: [
      "IT & SaaS",
      "Healthcare",
      "E-Commerce",
      "Fintech",
      "Telecom",
      "Global Startups",
    ],

    stats: ["45% Faster Hiring", "78% Offer Acceptance", "2x Better Pipeline"],
  },

  // ======================================================
  // 3) EXECUTIVE SEARCH — SIMPLIFIED
  // ======================================================
  "executive-search": {
    title: "Executive Search",
    heroImage:
      "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1920",

    summary:
      "We help you find reliable and capable leaders in a simple, private, and well-organized way.",

    bullets: [
      "Finding trusted leaders is difficult.",
      "Leadership roles require privacy.",
      "Hard to judge senior candidates.",
      "Hiring a wrong leader is costly.",
      "Need faster decision-making for top roles.",
    ],

    value: [
      "Strong Leadership Hires",
      "Private & Safe Hiring",
      "Access to Great Leaders",
      "Clear Assessments",
    ],

    solutions: [
      {
        title: "Leadership Hiring",
        desc: "We find the right leaders for senior positions.",
      },
      {
        title: "Easy Assessments",
        desc: "Simple tools to understand leadership style and fit.",
      },
      {
        title: "Leadership Mapping",
        desc: "We show you clear profiles of available leaders.",
      },
      {
        title: "Private Replacement Hiring",
        desc: "We help replace leaders quietly when needed.",
      },
    ],

    process: [
      "We understand the leadership role.",
      "We search for suitable leaders.",
      "We evaluate and shortlist.",
      "You meet top candidates.",
      "We help with final steps.",
    ],

    industries: [
      "IT Services",
      "Manufacturing",
      "Telecom",
      "BFSI",
      "Retail",
      "Startups",
    ],

    stats: [
      "92% Leaders Stay 18+ Months",
      "45–60 Days to Hire",
      "Large Leader Network",
    ],
  },

  // ======================================================
  // 4) RPO — SIMPLIFIED
  // ======================================================
  rpo: {
    title: "Recruitment Process Outsourcing (RPO)",
    heroImage:
      "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1920",

    summary:
      "We provide a dedicated hiring team that works closely with you. This helps you hire faster, stay organized, and reduce costs.",

    bullets: [
      "Internal hiring teams are overloaded.",
      "Hiring steps are not organized.",
      "Agencies are expensive.",
      "Hiring speed is unpredictable.",
      "Need quick hiring for new projects.",
    ],

    value: [
      "Faster Large-Scale Hiring",
      "Dedicated Hiring Team",
      "Better Workflow & Tracking",
      "Lower Hiring Costs",
    ],

    solutions: [
      {
        title: "Dedicated Hiring Team",
        desc: "A team that works only on your company’s hiring.",
      },
      {
        title: "Simple Hiring Process Setup",
        desc: "Clear steps, rules, and timelines for hiring.",
      },
      {
        title: "Easy Dashboard & Tracking",
        desc: "See progress and updates in one place.",
      },
      {
        title: "Bulk Hiring Support",
        desc: "Hire many people quickly for expansions.",
      },
    ],

    process: [
      "We understand your hiring needs.",
      "We assign a hiring team.",
      "We set up simple workflows.",
      "We start active hiring.",
      "We review progress with you.",
    ],

    industries: [
      "Retail",
      "IT Services",
      "Logistics",
      "Healthcare",
      "Manufacturing",
      "BPO/KPO",
    ],

    stats: ["60% Faster Hiring", "40% Lower Costs", "100% Process Clarity"],
  },

  // ======================================================
  // 5) GLOBAL PEO — SIMPLIFIED
  // ======================================================
  "global-peo": {
    title: "Global PEO Services",
    heroImage:
      "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1920",

    summary:
      "We help you hire people in other countries without opening a local office. We handle compliance, payroll, contracts, and all paperwork.",

    bullets: [
      "Setting up a company abroad takes too long.",
      "Payroll rules differ across countries.",
      "Hiring global workers is complicated.",
      "Hard to manage taxes and compliance.",
      "Paperwork takes too much time.",
    ],

    value: [
      "Hire Globally, Easily",
      "No Need for Local Entity",
      "Full Legal Compliance",
      "Everything Managed in One Place",
    ],

    solutions: [
      {
        title: "Employer of Record",
        desc: "We legally employ workers for you in any country.",
      },
      {
        title: "Payroll & Compliance",
        desc: "We manage salaries, taxes, and benefits.",
      },
      {
        title: "Easy Onboarding",
        desc: "Smooth joining experience for global workers.",
      },
      {
        title: "Visa & Mobility Help",
        desc: "Support for relocations, visas, and paperwork.",
      },
    ],

    process: [
      "We check local rules.",
      "We onboard your team.",
      "We set up payroll.",
      "We manage employment.",
      "We help with exit steps if needed.",
    ],

    industries: [
      "Tech & SaaS",
      "Fintech",
      "Healthcare",
      "Engineering",
      "Remote Teams",
      "Global Companies",
    ],

    stats: ["Hire in 5 Days", "150+ Countries Supported", "100% Compliance"],
  },
};

// ===========================================================
// MAIN COMPONENT
// ===========================================================
export default function ServiceDetail({ slug, onNavigate }: ServiceDetailProps) {
  const data = SERVICE_DATA[slug];

  if (!data) {
    return (
      <Section className="text-center py-40">
        <h1 className="text-4xl font-semibold mb-6">Service Not Found</h1>
        <Button onClick={() => onNavigate("services")} className="px-10 py-4">
          Back to Services
        </Button>
      </Section>
    );
  }

  return (
    <div>
      <Hero
        title={data.title}
        subtitle={data.summary}
        ctaPrimary="Talk to Us"
        onPrimaryClick={() => onNavigate("contact")}
        backgroundImage={data.heroImage}
      />

      {/* Problems Solved */}
      <Section className="text-center">
        <h2 className="text-4xl font-semibold mb-10">What This Service Solves</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.bullets.map((b) => (
            <div
              key={b}
              className="text-xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200 leading-relaxed"
            >
              {b}
            </div>
          ))}
        </div>
      </Section>

      {/* Value */}
      <Section className="text-center">
        <h2 className="text-4xl font-semibold mb-12">Key Benefits</h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {data.value.map((v) => (
            <Card key={v} className="text-center text-2xl p-10 max-w-md">
              {v}
            </Card>
          ))}
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section className="text-center py-24" background="gray">
        <h2 className="text-4xl font-semibold mb-14">Core Capabilities</h2>

        <div className="flex flex-wrap justify-center gap-14 max-w-7xl mx-auto">
          {data.solutions.map((s) => (
            <Card key={s.title} className="p-10 max-w-xl text-center">
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-lg leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="text-center py-28">
        <h2 className="text-4xl font-semibold mb-12">How We Work</h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {data.process.map((step, idx) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 bg-[var(--keptel-light)] rounded-full flex items-center justify-center text-[var(--keptel)] text-2xl font-bold">
                {idx + 1}
              </div>
              <div className="text-2xl">{step}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section className="text-center">
        <h2 className="text-4xl font-semibold mb-12">Industries We Support</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {data.industries.map((i) => (
            <div key={i} className="px-8 py-4 bg-white border rounded-full text-xl">
              {i}
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray" className="text-center py-28">
        <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto place-items-center">
          {data.stats.map((s) => (
            <div key={s} className="text-3xl font-semibold text-[var(--keptel)]">
              {s}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center py-32">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          Want to know how this can help you?
        </h2>

        <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Talk to our team to understand how this service can support your
          company’s plans and goals.
        </p>

        <Button
          onClick={() => onNavigate("contact")}
          className="px-12 py-4 text-lg"
        >
          Contact Us
        </Button>
      </Section>
    </div>
  );
}
