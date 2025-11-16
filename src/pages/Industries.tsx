// src/pages/Industries.tsx
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  Building2,
  Stethoscope,
  Factory,
  Plane,
  Truck,
  Smartphone,
} from "lucide-react";

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const industries = [
    {
      slug: "it-services",
      icon: Smartphone,
      title: "IT Services",
      description:
        "Managed IT, cloud services, infrastructure modernization, and enterprise application support to keep business systems reliable and secure.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "automotive",
      icon: Truck,
      title: "Automotive",
      description:
        "Connected vehicle platforms, telematics systems, ADAS data analytics, and software-defined vehicle solutions for next-generation mobility.",
      image:
        "https://images.pexels.com/photos/770596/pexels-photo-770596.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "automation",
      icon: Factory,
      title: "Automation",
      description:
        "Industrial automation, robotics integration, predictive maintenance, and end-to-end IIoT solutions to optimize factory operations.",
      image:
        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "aerospace",
      icon: Plane,
      title: "Aerospace",
      description:
        "Avionics software development, fleet analytics, safety-critical engineering, and supply-chain modernization for aerospace and defense.",
      // local image served from public/
      image: "../public/assets/aerospace.jpg",
    },
    {
      slug: "healthcare-life-sciences",
      icon: Stethoscope,
      title: "Health Care",
      description:
        "Telemedicine platforms, EMR/EHR integration, patient-centric applications, and regulatory-compliant solutions for healthcare organizations.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "digital-services",
      icon: Building2,
      title: "Digital Services",
      description:
        "End-to-end digital transformation, UI/UX engineering, marketing technology, and scalable SaaS product enablement for modern enterprises.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <Hero
        title="Industry-Specific Solutions"
        subtitle="Deep domain expertise and tailored solutions that address the unique challenges and opportunities of your industry."
        ctaPrimary="Discuss Your Needs"
        ctaSecondary="View Services"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section
        eyebrow="Industries We Serve"
        title="Expertise Across Multiple Sectors"
        subtitle="We bring deep industry knowledge and proven methodologies to deliver solutions that drive measurable business outcomes."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.slug}
                className="group bg-white border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => onNavigate(`industry:${industry.slug}`)}
                  className="block w-full text-left"
                >
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                        <Icon className="w-8 h-8 text-brand" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </button>

                <div className="px-0 pb-4">
                  <button
                    onClick={() => onNavigate(`industry:${industry.slug}`)}
                    className="text-brand font-semibold hover:underline inline-flex items-center gap-2 ml-2"
                  >
                    Explore Solutions
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
