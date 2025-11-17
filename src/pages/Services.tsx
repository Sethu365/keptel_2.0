// src/pages/Services.tsx
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { Brain, Users, BadgeCheck, Repeat, Globe2 } from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      slug: "talent-intelligence",
      icon: Brain,
      title: "Talent Intelligence",
      description:
        "Research-backed workforce insights, talent market clarity, competitor intelligence, and predictive hiring analytics for confident decision-making.",
      image:
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      slug: "talent-acquisition",
      icon: Users,
      title: "Talent Acquisition",
      description:
        "End-to-end, structured, scalable hiring solutions focused on speed, accuracy, and premium candidate experience.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      slug: "executive-search",
      icon: BadgeCheck,
      title: "Executive Search",
      description:
        "Confidential, research-driven CXO and leadership hiring with rigorous assessment frameworks and global talent reach.",
      image:
        "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      slug: "rpo",
      icon: Repeat,
      title: "Recruitment Process Outsourcing (RPO)",
      description:
        "Embedded recruitment teams, workflow automation, and SLA-driven volume hiring models that deliver predictable results.",
      image:
        "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      slug: "global-peo",
      icon: Globe2,
      title: "Global PEO Services",
      description:
        "Hire globally without entity setup. We handle compliance, payroll, onboarding, benefits, and cross-border workforce management.",
      image:
        "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <div>
      <Hero
        title="Strategic Talent Services"
        subtitle="Premium, insight-driven, and globally adaptable — our services empower organizations to attract, understand, and scale talent with clarity & confidence."
        ctaPrimary="Contact Experts"
        ctaSecondary="Explore Industries"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("industries")}
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section
        eyebrow="Our Offerings"
        title="End-to-End Talent Solutions"
        subtitle="Every service is crafted with precision, modernity, and measurable business outcomes — presented in a clean, centered layout."
        className="text-center"
      >
        <div className="flex flex-wrap justify-center gap-16 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className="group bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl w-full max-w-xl text-center p-0 overflow-hidden"
              >
                <button
                  onClick={() => onNavigate(`service:${service.slug}`)}
                  className="block w-full"
                >
                  <div className="relative w-full h-60 overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-[var(--keptel)]" />
                      </div>
                    </div>
                  </div>

                  <div className="px-10 py-12">
                    <h3 className="text-3xl leading-snug font-semibold text-[var(--text-default)] mb-6">
                      {service.title}
                    </h3>
                    <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <span className="text-[var(--keptel)] text-lg font-medium">
                      Learn More →
                    </span>
                  </div>
                </button>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="text-center py-28">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[var(--text-default)]">
          Build a Workforce That Powers Growth
        </h2>
        <p className="text-[var(--muted)] text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Whether you’re scaling teams, building leadership capability, or expanding globally, our
          specialists help you achieve sustainable results with clarity and confidence.
        </p>
        <Button
          variant="primary"
          onClick={() => onNavigate("contact")}
          className="bg-[var(--keptel)] hover:bg-[var(--keptel-dark)] text-white px-12 py-4 text-lg rounded-2xl"
        >
          Get Started
        </Button>
      </Section>
    </div>
  );
}
