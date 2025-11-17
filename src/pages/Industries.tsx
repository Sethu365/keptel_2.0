import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import {
  Building2,
  Stethoscope,
  Factory,
  Plane,
  Truck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const industries = [
    {
      slug: "aerospace",
      icon: Plane,
      title: "Aerospace",
      description:
        "Digital platforms, operations dashboards, and maintenance tracking that help aviation and aerospace teams improve safety, on-time performance, and regulatory compliance.",
      image:
        "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "automotive",
      icon: Truck,
      title: "Automotive",
      description:
        "Connected systems, service workflows, and analytics that support OEMs, suppliers, and mobility providers in delivering safer, smarter, and more efficient experiences.",
      image:
        "https://images.pexels.com/photos/770596/pexels-photo-770596.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "healthcare",
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Patient-centric digital tools, scheduling, and information systems that enable clinics, hospitals, and health networks to run smoothly and deliver better care.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "ecommerce",
      icon: Smartphone,
      title: "E-Commerce",
      description:
        "Scalable commerce platforms, order journeys, and data-driven engagement that help brands convert more customers and manage multi-channel operations with ease.",
      image:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "banking",
      icon: Building2,
      title: "Banking & Financial Services",
      description:
        "Secure, compliant digital experiences, workflow automation, and reporting solutions for banks, NBFCs, and fintech players focused on trust and transparency.",
      image:
        "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "it-services",
      icon: Factory,
      title: "IT Services",
      description:
        "Modern IT foundations — from infrastructure and applications to support — that keep internal teams, customers, and partners connected and productive.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <Hero
        title="Industries We Serve"
        subtitle="We combine domain understanding, modern technology, and flexible engagement models to support organizations across key industries."
        ctaPrimary="Talk to Our Team"
        ctaSecondary="View Services"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* === INDUSTRY OVERVIEW (Velovox-style messaging) === */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            A Practical Blend of Innovation & Implementation
          </h2>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
            Every industry has its own regulations, customer expectations, and operational
            constraints. We focus on creating solutions that respect those realities while
            introducing the right amount of automation, analytics, and digital experience.
          </p>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            From highly regulated environments like banking and healthcare to fast-moving sectors
            such as e-commerce and automotive, Keptel helps teams improve productivity, visibility,
            and decision-making — without disrupting what already works.
          </p>

          <div className="h-[2px] bg-slate-300 w-24 mx-auto mt-10 rounded-full opacity-60" />
        </motion.div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Where We Create Impact"
        subtitle="Explore how we partner with organizations in different sectors to improve operations and accelerate digital outcomes."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.slug}
                className="group bg-white border border-slate-100 shadow-sm hover:shadow-lg transition"
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
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/85 flex items-center justify-center shadow-sm">
                        <Icon className="w-8 h-8 text-brand" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                    {industry.description}
                  </p>
                </button>

                <button
                  onClick={() => onNavigate(`industry:${industry.slug}`)}
                  className="text-brand font-semibold hover:underline inline-flex items-center gap-2 ml-2 pb-4"
                >
                  View Industry Details →
                </button>
              </Card>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
