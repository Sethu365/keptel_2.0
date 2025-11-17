import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import ImageFeature from '../components/ImageFeature';
import Button from '../components/Button';

import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Lightbulb,
  ShieldCheck,
  Layers,
  Compass,
  Sparkles,
  Handshake,
  Briefcase
} from 'lucide-react';

export default function About({ onNavigate }) {
  const values = [
    {
      icon: Target,
      title: 'Client First',
      description:
        'Every solution we build is tailored to solve real business challenges with measurable outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description:
        'Founded in 2025, our company was built on the idea of modern, scalable, AI-powered solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'We work closely with our clients as strategic partners, ensuring transparency at every step.'
    },
    {
      icon: Award,
      title: 'Quality & Excellence',
      description:
        'We follow global best practices to deliver reliable and future-ready products.'
    },
    {
      icon: Globe,
      title: 'Growing Global Presence',
      description:
        'With teams expanding regionally, we bring diverse perspectives to every project.'
    },
    {
      icon: Eye,
      title: 'Integrity',
      description:
        'We operate with honesty, accountability, and a commitment to ethical practices.'
    }
  ];

  return (
    <div>
      <Hero
        title="Shaping Digital Transformation Since 2025"
        subtitle="A modern technology consultancy delivering AI-driven, scalable enterprise solutions for the new digital era."
        ctaPrimary="Contact Us"
        ctaSecondary="Our Services"
        onPrimaryClick={() => onNavigate('contact')}
        onSecondaryClick={() => onNavigate('services')}
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section
        eyebrow="About Keptel Analytics Space"
        title="Who We Are"
        subtitle="A fast-growing technology and consulting company founded in 2025, helping organizations adopt modern, intelligent digital solutions."
      >
        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6 text-justify">
          <p>
            Keptel Analytics Space was founded in 2025 with the vision of creating powerful, intelligent, and scalable digital solutions
            for enterprises. From day one, our focus has been on delivering value through innovation and customer-centric design.
          </p>
          <p>
            We partner with organizations across industries to modernize processes, implement emerging technologies, and enable
            future-ready digital transformation.
          </p>
        </div>
      </Section>

      <Section>
        <ImageFeature
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imagePosition="left"
          eyebrow="Our Mission"
          title="Empowering Digital Intelligence"
          description="Our mission is to enable enterprises to embrace intelligent automation, AI-driven insights, and scalable technology ecosystems that create long-term impact."
        />
      </Section>

      <Section background="gray">
        <ImageFeature
          image="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imagePosition="right"
          eyebrow="Our Vision"
          title="Leading the Next Wave of Innovation"
          description="We aim to become a global leader in AI-powered consulting, giving organizations the tools and strategies to thrive in a rapidly evolving technological landscape."
        />
      </Section>

      <Section
        eyebrow="Our Values"
        title="Principles That Guide Us"
        subtitle="Our core values shape our culture and guide how we work with our clients."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* =====================================
          NEW SECTION — Our Philosophy (No repeated icons)
      ====================================== */}

      <Section
        background="gray"
        eyebrow="Our Philosophy"
        title="What Defines Us"
        subtitle="A consulting mindset rooted in trust, excellence, and long-term partnership."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence as a Standard</h3>
            <p className="text-slate-600 leading-relaxed">
              We believe excellence is a continuous pursuit, reflected in every solution, process, and delivery we offer.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">People & Partnerships</h3>
            <p className="text-slate-600 leading-relaxed">
              Our culture thrives on collaboration, transparency, and long-term relationships built on mutual respect.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation with Purpose</h3>
            <p className="text-slate-600 leading-relaxed">
              We innovate responsibly — solving real business challenges while advancing meaningful technological progress.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Integrity</h3>
            <p className="text-slate-600 leading-relaxed">
              Every engagement is built on trust, ethics, and a deep sense of responsibility toward our clients.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Future-Focused Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              We think ahead, designing systems and strategies that stand strong in a rapidly evolving digital world.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Commitment</h3>
            <p className="text-slate-600 leading-relaxed">
              Our consulting approach blends deep expertise with disciplined execution and global delivery standards.
            </p>
          </Card>

        </div>
      </Section>

      {/* FINAL CTA — NO “Work With Us” */}
      <Section background="gray" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Build Something Meaningful</h2>
          <p className="text-xl text-slate-600 mb-8">
            Connect with us to discuss your requirements and explore how we can support your digital transformation journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" icon onClick={() => onNavigate('contact')}>
              Contact Us
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('services')}>
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
