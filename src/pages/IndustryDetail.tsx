import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

interface IndustryDetailProps {
  slug: string;
  onNavigate: (page: string) => void;
}

/*  
 ALL INDUSTRIES NOW HAVE:
 sections: []  
 card1: {}  
 card2: {}  
 sectionsAfterCards: []
*/

const INDUSTRY_DATA: any = {
  aerospace: {
    title: "Aerospace",
    heroImage:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Digital solutions that strengthen operational stability, crew planning, and maintenance ecosystems within aviation and aerospace environments.",

    sections: [
      {
        heading: "Industry Landscape",
        content:
          "Aviation and aerospace operations function under extremely demanding environments where every process must align with safety, compliance, and time-critical execution. As organizations modernize, traditional manual workflows become increasingly insufficient to support the level of coordination required across crews, maintenance teams, and operational units. By introducing structured digital systems, aerospace organizations can significantly improve transparency, minimize operational friction, and strengthen decision-making across the ecosystem.",
      },
      {
        heading: "Operational Realities",
        content:
          "Many aviation workflows continue to rely on spreadsheets, disconnected applications, and verbal coordination—creating room for inconsistencies and delays. These gaps become more evident during peak operations, irregular events, or cross-location coordination. Our digital frameworks help standardize these processes, ensuring that every stakeholder—from ground teams to operations control—works with unified, real-time information.",
      },
    ],

    card1: {
      title: "Crew Coordination Systems",
      desc: "We build platforms that streamline rosters, shifts, qualifications, and approvals—ensuring crews are aligned with operational needs at every moment.",
    },
    card2: {
      title: "Digital Maintenance Records",
      desc: "Our solutions replace scattered documentation with structured, auditable digital maintenance ecosystems that improve reliability and regulatory adherence.",
    },

    sectionsAfterCards: [
      {
        heading: "Crew Management Transformation",
        content:
          "Crew scheduling remains one of the most complex tasks within aviation operations. Rotations, fatigue rules, availability constraints, certifications, and real-time disruptions create constant pressure on planners. By digitizing these processes, organizations gain a more controlled and predictable environment—allowing planners to simulate outcomes, visualize conflicts, and allocate resources more confidently while reducing manual dependencies.",
      },
      {
        heading: "Maintenance Intelligence",
        content:
          "Maintenance environments often operate with legacy, paper-based record-keeping systems that limit the visibility required for efficient forecasting and rapid issue response. Our digital platforms simplify these workflows, providing structured maintenance timelines, asset-level activity histories, and real-time updates that help teams stay prepared, compliant, and aligned.",
      },
      {
        heading: "Operational Command",
        content:
          "Operational control teams rely heavily on accurate, up-to-date information to manage movements, resources, disruptions, and safety-critical workflows. We design dashboards and operational views that combine data from multiple sources, enabling faster decision cycles and minimizing risks linked to incomplete or outdated information.",
      },
      {
        heading: "Strategic Impact",
        content:
          "By integrating modern technology with aviation realities, we help organizations build resilient operational ecosystems. The outcomes include greater process consistency, improved coordination, enhanced compliance visibility, and a more controlled operational environment that supports long-term stability and growth.",
      },
    ],
  },

  /* ------------------------- IT SERVICES ------------------------- */

  "it-services": {
    title: "IT Services",
    heroImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "IT foundations that strengthen reliability, improve delivery, and align technology with evolving business demands.",

    sections: [
      {
        heading: "Industry Landscape",
        content:
          "Technology has become the engine that drives every modern business. IT teams now operate within complex environments that combine legacy systems, modern applications, cloud platforms, and cross-functional integrations. As organizations scale, the expectations placed on technology teams grow significantly—demanding higher stability, stronger security, and faster innovation.",
      },
      {
        heading: "Technology Expectations",
        content:
          "Enterprises expect IT to be highly responsive, predictable, and performance-driven. This requires a clear architectural foundation, disciplined development practices, and operational maturity. We help establish well-governed ecosystems where systems behave consistently and engineering quality is protected.",
      },
    ],

    card1: {
      title: "Modern Engineering",
      desc: "We build software on scalable architecture that supports clean integrations, predictable behavior, and long-term maintainability.",
    },
    card2: {
      title: "Infrastructure Readiness",
      desc: "From cloud migrations to hybrid infrastructure models, we ensure technology foundations can support growth and evolving business needs.",
    },

    sectionsAfterCards: [
      {
        heading: "Application Modernization",
        content:
          "Outdated systems often hold organizations back due to performance bottlenecks and high maintenance costs. We analyze legacy environments, redesign architectures, and introduce modernization strategies that unlock new capabilities.",
      },
      {
        heading: "Cloud Transformation",
        content:
          "Cloud environments are central to agility and cost efficiency. We guide businesses through structured cloud adoption—ensuring workloads are optimized and governance is clear.",
      },
      {
        heading: "Enterprise Integration",
        content:
          "Disconnected systems create friction across operations. We build integration layers that unify data flows and maintain system-wide consistency.",
      },
      {
        heading: "Strategic Impact",
        content:
          "By strengthening architecture and engineering quality, organizations shift from reactive IT to proactive value creation—achieving long-term digital resilience.",
      },
    ],
  },

  /* ------------------------- HEALTHCARE ------------------------- */

  healthcare: {
    title: "Healthcare",
    heroImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Digital platforms that simplify clinical operations, strengthen patient journeys, and enable reliable healthcare delivery.",

    sections: [
      {
        heading: "Industry Landscape",
        content:
          "Healthcare providers face rising demand for coordinated, safe, and efficient patient care. Paper-driven processes and outdated systems slow down treatment cycles, increase waiting times, and drain clinical productivity. Digital transformation is essential to improving both patient outcomes and operational stability.",
      },
      {
        heading: "Care Delivery Pressure",
        content:
          "Clinics and hospitals manage complex workflows—including appointments, patient registration, nursing coordination, billing, and communication. Fragmented systems disrupt these workflows, creating administrative overload. Our solutions reduce friction and support smooth care delivery.",
      },
    ],

    card1: {
      title: "Patient Experience",
      desc: "Online appointments, structured communication, and patient-friendly digital touchpoints that simplify care journeys.",
    },
    card2: {
      title: "Clinical Coordination",
      desc: "Unified tools for records, billing, reception, and staff coordination—improving workflow visibility and reducing delays.",
    },

    sectionsAfterCards: [
      {
        heading: "Telehealth & Hybrid Care",
        content:
          "Tele-consultation and hybrid care models have become essential. We design digital pathways that maintain continuity and clarity for patients and clinicians.",
      },
      {
        heading: "Record Management",
        content:
          "Paper-based records slow decision-making and increase risk. Our digital records improve accessibility, accuracy, and long-term data integrity.",
      },
      {
        heading: "Operational Flow",
        content:
          "Healthcare teams need predictability. We build systems that reduce manual work, strengthen queue management, and improve care coordination.",
      },
      {
        heading: "Strategic Impact",
        content:
          "Connected digital infrastructure allows healthcare providers to deliver consistent experiences, lower administrative strain, and improve long-term service quality.",
      },
    ],
  },

  /* ------------------------- AUTOMOTIVE ------------------------- */

  automotive: {
    title: "Automotive",
    heroImage:
      "https://images.pexels.com/photos/4489728/pexels-photo-4489728.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Digital systems that support connected mobility, service excellence, and operational clarity across automotive ecosystems.",

    sections: [
      {
        heading: "Industry Landscape",
        content:
          "The automotive sector is transforming rapidly with connected vehicles, mobility services, and evolving customer expectations. OEMs and service networks rely on digital systems to coordinate workflows spanning workshops, fleets, and partner ecosystems.",
      },
      {
        heading: "Operational Complexity",
        content:
          "Automotive operations involve constant movement of vehicles, customers, parts, and service workflows. Manual coordination creates bottlenecks and inefficiencies. Our digital systems reduce these dependencies and improve visibility.",
      },
    ],

    card1: {
      title: "Workshop Digitization",
      desc: "We modernize aftersales workflows—job cards, estimates, inspections, and customer communication.",
    },
    card2: {
      title: "Fleet Intelligence",
      desc: "Connected dashboards for utilization, maintenance readiness, and performance insights.",
    },

    sectionsAfterCards: [
      {
        heading: "Service Transformation",
        content:
          "Aftersales operations depend on smooth coordination. Our platforms reduce delays, improve transparency, and create brand-consistent service experiences.",
      },
      {
        heading: "Dealer Network Harmonization",
        content:
          "OEMs struggle with fragmented dealer systems. We unify dealer operations and improve reporting accuracy while respecting local workflows.",
      },
      {
        heading: "Mobility Operations",
        content:
          "Fleet environments require strong visibility. Our dashboards optimize deployment, reduce downtime, and strengthen decision-making.",
      },
      {
        heading: "Strategic Impact",
        content:
          "By connecting service, fleet, and sales ecosystems, automotive organizations gain competitive advantage and stronger operational performance.",
      },
    ],
  },

  /* ------------------------- E-COMMERCE ------------------------- */

  ecommerce: {
    title: "E-Commerce",
    heroImage:
      "https://images.pexels.com/photos/6231606/pexels-photo-6231606.jpeg?auto=compress&cs=tinysrgb&w=1920",
    summary:
      "Commerce platforms designed for scalability, operational precision, and seamless customer experiences across channels.",

    sections: [
      {
        heading: "Industry Landscape",
        content:
          "E-commerce continues to evolve with increased competition and rising customer expectations. Brands must balance growth, operational discipline, and seamless shopping experiences—requiring strong digital foundations.",
      },
      {
        heading: "Operational Complexity",
        content:
          "Behind every storefront is a complex network of catalog data, inventory, fulfillment, returns, and logistics. Fragmented systems create inconsistencies and increase operational risk. Our systems unify and streamline these processes.",
      },
    ],

    card1: {
      title: "Storefront Experience",
      desc: "Fast, conversion-optimized commerce interfaces that build trust and improve customer retention.",
    },
    card2: {
      title: "Order & Inventory Intelligence",
      desc: "Unified visibility into orders, stock levels, and fulfillment workflows, reducing delays and improving accuracy.",
    },

    sectionsAfterCards: [
      {
        heading: "Experience Quality",
        content:
          "We design customer journeys that feel natural, intuitive, and consistent—supporting conversions and loyalty across all devices.",
      },
      {
        heading: "Operational Accuracy",
        content:
          "Unified operations eliminate discrepancies across catalog, inventory, and order flow—reducing errors and improving fulfillment reliability.",
      },
      {
        heading: "Scalable Systems",
        content:
          "Our commerce architectures support expansion across new product lines, geographies, and channels without creating technical debt.",
      },
      {
        heading: "Strategic Impact",
        content:
          "By aligning customer experience with operational intelligence, brands gain stronger retention, improved efficiency, and long-term scalability.",
      },
    ],
  },
  banking: {
  title: "Banking & Financial Services",
  heroImage:
    "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1920",
  summary:
    "Secure, compliant digital workflows that support customer onboarding, operations, risk, and reporting across banking and financial services.",

  sections: [
    {
      heading: "Industry Landscape",
      content:
        "Banks, NBFCs, and financial institutions operate in environments where trust, compliance, and operational discipline are non-negotiable. At the same time, customers expect fast, digital-first experiences across onboarding, servicing, and self-service. Bridging regulatory rigor with modern expectations requires strong digital foundations that are reliable, secure, and audit-ready."
    },
    {
      heading: "Operational Demands",
      content:
        "Financial operations—including KYC, onboarding, credit checks, underwriting, servicing, and compliance reviews—span multiple systems and teams. When workflows depend on manual tasks or disconnected tools, turnaround time increases, visibility decreases, and risk exposure rises. We build structured digital ecosystems that streamline these operations end-to-end."
    }
  ],

  card1: {
    title: "Onboarding & Servicing Journeys",
    desc:
      "Account opening, KYC verification, and self-service workflows built to be intuitive for customers while maintaining strong internal control for compliance and operations."
  },

  card2: {
    title: "Operations & Risk Workflows",
    desc:
      "Digitized case flow management with clear audit trails, structured approvals, and document controls that increase operational efficiency and reduce compliance gaps."
  },

  sectionsAfterCards: [
    {
      heading: "Customer Journeys",
      content:
        "Onboarding is often a customer’s first real interaction with a financial institution. Slow or complex processes reduce conversion and increase support load. We design onboarding and servicing journeys that provide real-time status, automated notifications, and smooth digital guidance across every step of the customer lifecycle."
    },
    {
      heading: "Case Management & Exceptions",
      content:
        "Financial operations depend heavily on managing cases—credit processing, dispute resolution, fraud checks, and compliance exceptions. We build structured workflows that track cases from initiation to closure, ensure documentation integrity, and provide real-time visibility for operations leaders."
    },
    {
      heading: "Reporting & Regulatory Insight",
      content:
        "Accurate reporting is essential for leadership and mandatory for regulators. Our systems ensure data flows are captured correctly at the source so MIS, auditing, and regulatory reports are always consistent, complete, and dependable."
    },
    {
      heading: "Strategic Impact",
      content:
        "When customer journeys, operations, and risk workflows run on a unified digital foundation, financial institutions achieve faster processing times, greater customer trust, and stronger regulatory compliance while reducing operational overhead."
    }
  ]
},

};

export default function IndustryDetail({ slug, onNavigate }: IndustryDetailProps) {
  const data = INDUSTRY_DATA[slug];

  if (!data) {
    return (
      <Section className="text-center py-16">
        <h1 className="text-3xl font-bold mb-3">Industry Not Found</h1>
        <Button variant="primary" onClick={() => onNavigate("industries")}>
          Back to Industries
        </Button>
      </Section>
    );
  }

  return (
    <div>
      {/* HERO */}
      <Hero
        title={data.title}
        subtitle={data.summary}
        ctaPrimary="Contact Us"
        onPrimaryClick={() => onNavigate("contact")}
        backgroundImage={data.heroImage}
      />

      {/* TOP SECTIONS */}
      {data.sections.map((sec: any, i: number) => (
        <Section key={i} className="pt-6 pb-1">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] font-semibold text-slate-900 mb-2">
              {sec.heading}
            </h2>
            <p className="text-[17px] text-slate-700 leading-relaxed text-justify">
              {sec.content}
            </p>
          </div>
        </Section>
      ))}

      {/* CARDS */}
      <Section className="py-4">
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Card className="p-5 border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">{data.card1.title}</h3>
            <p className="text-[15px] text-slate-600 text-justify leading-relaxed">
              {data.card1.desc}
            </p>
          </Card>

          <Card className="p-5 border shadow-sm">
            <h3 className="text-lg font-semibold mb-1">{data.card2.title}</h3>
            <p className="text-[15px] text-slate-600 text-justify leading-relaxed">
              {data.card2.desc}
            </p>
          </Card>
        </div>
      </Section>

      {/* AFTER-CARDS SECTIONS */}
      {data.sectionsAfterCards.map((sec: any, i: number) => (
        <Section key={i} className="pt-5 pb-2">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] font-semibold text-slate-900 mb-2">
              {sec.heading}
            </h2>
            <p className="text-[17px] text-slate-700 leading-relaxed text-justify">
              {sec.content}
            </p>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="text-center py-10">
        <Button variant="primary" size="lg" onClick={() => onNavigate("contact")}>
          Discuss Your {data.title} Needs
        </Button>
      </Section>
    </div>
  );
}
