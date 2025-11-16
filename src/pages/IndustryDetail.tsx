// src/pages/IndustryDetail.tsx
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

interface IndustryDetailProps {
  slug: string;
  onNavigate: (page: string) => void;
}

const INDUSTRY_DATA: Record<
  string,
  {
    title: string;
    heroImage: string;
    summary: string;
    highlights: string[];
    solutions: { title: string; desc: string }[];
  }
> = {
  "it-services": {
    title: "IT Services",
    heroImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Reliable end-to-end IT solutions including development, deployment, support, and digital enablement for businesses of all sizes.",
    highlights: [
      "Web & Mobile Applications",
      "Cloud Setup & Deployment",
      "Support & Maintenance",
    ],
    solutions: [
      {
        title: "Custom Web & Mobile Apps",
        desc:
          "We build scalable websites and mobile applications tailored to your business goals using modern and efficient technologies.",
      },
      {
        title: "Cloud Setup & Hosting",
        desc:
          "Deployment on AWS, Azure, or custom servers with performance optimization and secure access management.",
      },
      {
        title: "Ongoing Support",
        desc:
          "Regular updates, issue fixes, performance improvements, monitoring, and dedicated support.",
      },
    ],
  },

  automotive: {
    title: "Automotive",
    heroImage:
      "https://images.pexels.com/photos/770596/pexels-photo-770596.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Digital solutions for automotive businesses, including fleet platforms, service automation, and vehicle management systems.",
    highlights: [
      "Fleet Tracking Solutions",
      "Vehicle Booking Systems",
      "Workshop Automation",
    ],
    solutions: [
      {
        title: "Fleet Management Tools",
        desc:
          "Track vehicles, monitor trips, assign drivers, generate reports, and manage data in a single digital dashboard.",
      },
      {
        title: "Booking & Rental Platforms",
        desc:
          "Complete vehicle rental or booking systems with scheduling, payment integration, and user-friendly interfaces.",
      },
      {
        title: "Workshop Management",
        desc:
          "Digital tools for service reminders, job cards, repair history, part inventory, and customer communication.",
      },
    ],
  },

  automation: {
    title: "Automation",
    heroImage:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Automation solutions that help companies reduce manual work, improve accuracy, and scale operations efficiently.",
    highlights: [
      "Business Process Automation",
      "Reports & Dashboards",
      "IoT Integrations",
    ],
    solutions: [
      {
        title: "Workflow Automation",
        desc:
          "Automate repetitive tasks like approvals, form processing, tracking, and routine operations with simple digital tools.",
      },
      {
        title: "Dashboard & Reporting",
        desc:
          "Custom dashboards for sales, operations, logistics, HR, and other teams for real-time visibility.",
      },
      {
        title: "IoT & Smart Systems",
        desc:
          "Integrate sensors, machines, and hardware with easy-to-use dashboards for remote monitoring and control.",
      },
    ],
  },

  aerospace: {
    title: "Aerospace",
    heroImage:
      "https://images.pexels.com/photos/373885/pexels-photo-373885.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Simple and effective digital tools for aviation and aerospace companies to manage operations, teams, and schedules.",
    highlights: ["Crew & Shift Planning", "Maintenance Logs", "Operations Dashboards"],
    solutions: [
      {
        title: "Crew Scheduling Software",
        desc:
          "Easy platforms to plan rosters, assign teams, and manage shift changes efficiently.",
      },
      {
        title: "Maintenance & Inspection Logs",
        desc:
          "Digital recordkeeping for service activities, part usage, reminders, and inspection documentation.",
      },
      {
        title: "Operational Dashboards",
        desc:
          "Custom dashboards that provide real-time visibility into on-ground and in-air operations.",
      },
    ],
  },

  "healthcare-life-sciences": {
    title: "Health Care",
    heroImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Digital platforms for clinics, hospitals, labs, and healthcare service providers to simplify daily operations.",
    highlights: [
      "Telemedicine Solutions",
      "Patient Records Management",
      "Clinic Automation",
    ],
    solutions: [
      {
        title: "Telemedicine Platforms",
        desc:
          "Video consultation, appointment booking, secure chat, prescription generation, and digital payments.",
      },
      {
        title: "Digital Patient Records",
        desc:
          "Secure storage for reports, medical history, patient forms, and appointment records.",
      },
      {
        title: "Clinic Automation Tools",
        desc:
          "Reception automation, reminders, billing systems, staff coordination, and workflow tools.",
      },
    ],
  },

  "digital-services": {
    title: "Digital Services",
    heroImage:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Complete digital solutions for businesses — from designing interfaces to building applications and automation systems.",
    highlights: ["UI/UX Design", "Website & App Development", "Brand & Digital Identity"],
    solutions: [
      {
        title: "Website & App Development",
        desc:
          "High-quality, fast, and responsive digital products designed to match your goals and user needs.",
      },
      {
        title: "UI/UX Design & Branding",
        desc:
          "Clean interfaces, intuitive flows, brand identity design, and visual systems for digital products.",
      },
      {
        title: "Business Digitalization",
        desc:
          "Digitizing manual processes with custom tools, dashboards, and automation systems.",
      },
    ],
  },
};

export default function IndustryDetail({ slug, onNavigate }: IndustryDetailProps) {
  const data = INDUSTRY_DATA[slug];

  if (!data) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
        <p className="mb-8 text-slate-600">
          We’re adding more industries soon. Please choose another.
        </p>
        <Button variant="primary" onClick={() => onNavigate("industries")}>
          Back to Industries
        </Button>
      </Section>
    );
  }

  return (
    <div>
      <Hero
        title={data.title}
        subtitle={data.summary}
        ctaPrimary="Contact Us"
        onPrimaryClick={() => onNavigate("contact")}
        backgroundImage={data.heroImage}
      />

      <Section eyebrow="Highlights" title="What We Offer">
        <div className="grid md:grid-cols-3 gap-6">
          {data.highlights.map((h) => (
            <Card key={h} className="text-slate-800">
              <h3 className="font-semibold text-lg">{h}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" eyebrow="Services" title="Our Solutions">
        <div className="grid md:grid-cols-3 gap-8">
          {data.solutions.map((s) => (
            <Card key={s.title}>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Button variant="primary" size="lg" onClick={() => onNavigate("contact")}>
          Get in Touch
        </Button>
      </Section>
    </div>
  );
}
