import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import ImageFeature from "../components/ImageFeature";
import ClientLogos from "../components/ClientLogos";
import Button from "../components/Button";
import { Zap, Shield, TrendingUp, Users, CheckCircle, Target } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // --- Motion helpers ---
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
  };

  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Countries Served" },
    { value: "25+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Accelerate your business evolution with cutting-edge digital solutions and strategic technology integration.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your enterprise with comprehensive security frameworks and advanced threat protection systems.",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description:
        "Transform data into actionable insights with our advanced analytics and business intelligence platforms.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description:
        "Strategic advisory services to optimize operations and drive sustainable business growth.",
    },
  ];

  const clientLogos = [
    { name: "AWS", image: "../assets/clients/aws.svg" },
    { name: "Microsoft", image: "../assets/clients/microsoft.svg" },
    { name: "Google Cloud", image: "../assets/clients/google-cloud.svg" },
    { name: "IBM", image: "../assets/clients/ibm.svg" },
    { name: "Cisco", image: "../assets/clients/cisco.svg" },
    { name: "Accenture", image: "../assets/clients/accenture.svg" },
  ];

  return (
    <div className="bg-slate-50">
      {/* --- HERO --- */}
      <Hero
        title="Transform Your Enterprise for the Digital Age"
        subtitle="We partner with global leaders to drive innovation, accelerate growth, and create sustainable competitive advantages through technology and strategic insight."
        ctaPrimary="Get Started"
        ctaSecondary="Learn More"
        onPrimaryClick={() => onNavigate("contact")}
        onSecondaryClick={() => onNavigate("services")}
        backgroundImage="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundVideoSrc="/assets/Video.mp4"
        backgroundVideoPoster="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
        videoOnMobile={true}
      />

      {/* --- STATS --- */}
      <Section background="white">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Stats stats={stats} />
        </motion.div>
      </Section>

      {/* --- CLIENT LOGOS --- */}
      <Section
        id="clients"
        background="gray"
        eyebrow="Trusted By Industry Leaders"
        title="Partnering with the World's Most Innovative Companies"
      >
        <ClientLogos logos={clientLogos} />
      </Section>

      {/* --- SERVICES --- */}
      <Section
        id="services"
        eyebrow="Our Services"
        title="Comprehensive Solutions for Modern Enterprises"
        subtitle="We deliver end-to-end solutions designed to transform your business and accelerate growth."
      >
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#D63A1E]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            icon
            onClick={() => onNavigate("services")}
            className="bg-[#D63A1E] hover:bg-[#B72B12] text-white rounded-xl"
          >
            View All Services
          </Button>
        </div>
      </Section>

      {/* --- IMAGE FEATURE 1 --- */}
      <Section background="white">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <ImageFeature
            image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imagePosition="left"
            eyebrow="Innovation First"
            title="Driving Digital Excellence Through Technology"
            description="We combine deep industry expertise with cutting-edge technology to deliver solutions that transform businesses and create lasting value."
            features={[
              { icon: CheckCircle, text: "Strategic planning and roadmap development" },
              { icon: CheckCircle, text: "Enterprise architecture and system integration" },
              { icon: CheckCircle, text: "Change management and organizational transformation" },
            ]}
          />
        </motion.div>
      </Section>

      {/* --- IMAGE FEATURE 2 --- */}
      <Section background="gray">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <ImageFeature
            image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imagePosition="right"
            eyebrow="Results Driven"
            title="Measurable Impact for Your Business"
            description="Our proven methodologies and industry-leading practices ensure tangible results that drive growth and operational excellence."
            features={[
              { icon: Target, text: "Measurable ROI and business value realization" },
              { icon: Target, text: "Scalable solutions built for enterprise growth" },
              { icon: Target, text: "Continuous optimization and performance improvement" },
            ]}
          />
        </motion.div>
      </Section>

      {/* --- TESTIMONIALS --- */}
      <Section
        background="white"
        eyebrow="Client Success"
        title="What Our Partners Say"
        subtitle="Hear from industry leaders who have transformed their businesses with our solutions."
      >
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <Testimonial
              quote="Keptel Analytics Space transformed our entire digital infrastructure. Their expertise and strategic approach delivered results beyond our expectations."
              author="Sarah Johnson"
              role="CTO"
              company="TechCorp Global"
            />
          </motion.div>
          <motion.div variants={item}>
            <Testimonial
              quote="Working with Keptel Analytics Space was a game-changer. Their team's dedication and innovative solutions helped us achieve a 40% increase in operational efficiency."
              author="Michael Chen"
              role="VP of Operations"
              company="Innovation Systems"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* --- FINAL CTA --- */}
      {/* FINAL CTA — brighter, higher-contrast corporate style */}
<Section className="text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#111827] rounded-3xl p-16 text-white shadow-xl border border-slate-700/60"
  >
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg md:text-xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
      Let’s discuss how we can help you achieve your strategic objectives and drive sustainable growth.
    </p>

    <div className="flex flex-wrap gap-5 justify-center">
      <Button
        variant="primary"
        size="lg"
        icon
        onClick={() => onNavigate("contact")}
        className="bg-brand hover:bg-brand-600 text-white px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Schedule a Consultation
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={() => onNavigate("services")}
        className="border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg rounded-xl transition-all"
      >
        Explore Services
      </Button>
    </div>
  </motion.div>
</Section>

    </div>
  );
}
