import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Stats from '../components/Stats';
import ImageFeature from '../components/ImageFeature';
import Button from '../components/Button';
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const stats = [
    { value: '1998', label: 'Founded' },
    { value: '5,000+', label: 'Employees' },
    { value: '50+', label: 'Global Offices' },
    { value: '$2.5B', label: 'Annual Revenue' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Client Success',
      description:
        'We measure our success by the success of our clients. Every engagement is focused on delivering measurable business value.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We continuously invest in emerging technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in the power of partnership and work closely with our clients as an extension of their teams.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards of quality and professionalism in everything we do.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description:
        'Our worldwide presence enables us to bring diverse insights and best practices to every engagement.'
    },
    {
      icon: Eye,
      title: 'Integrity',
      description:
        'We operate with transparency, honesty, and ethical principles in all our business relationships.'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started as a boutique consulting firm in New York' },
    { year: '2005', title: 'Global Expansion', description: 'Opened offices in London, Singapore, and Tokyo' },
    { year: '2012', title: 'Digital Innovation Lab', description: 'Established research and development center for emerging technologies' },
    { year: '2018', title: 'Industry Recognition', description: 'Named Leader in Gartner Magic Quadrant for IT Services' },
    { year: '2023', title: 'Sustainability Initiative', description: 'Launched comprehensive sustainability and ESG practice' }
  ];

  return (
    <div>
      <Hero
        title="Transforming Businesses Since 1998"
        subtitle="A trusted partner to the world's leading enterprises, delivering innovative solutions that drive sustainable growth and competitive advantage."
        ctaPrimary="Join Our Team"
        ctaSecondary="Our Services"
        onPrimaryClick={() => onNavigate('careers')}
        onSecondaryClick={() => onNavigate('services')}
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section
        eyebrow="About Keptel Analytics Space"
        title="Who We Are"
        subtitle="A global leader in enterprise technology and consulting services, partnering with organizations to navigate digital transformation and achieve strategic objectives."
      >
        {/* ✅ Paragraphs justified */}
        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6 text-justify">
          <p>
            Founded in 1998, Keptel Analytics Space has grown from a boutique consulting firm into one of the world's most trusted technology
            services partners. With over 5,000 professionals across 50 offices worldwide, we combine deep industry expertise with
            cutting-edge technology capabilities to deliver transformative solutions.
          </p>
          <p>
            Our client portfolio spans Fortune 500 companies, government agencies, and innovative startups across diverse industries.
            We pride ourselves on building long-term partnerships based on trust, transparency, and measurable results.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <Stats stats={stats} />
      </Section>

      <Section>
        <ImageFeature
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imagePosition="left"
          eyebrow="Our Mission"
          title="Empowering Enterprise Excellence"
          description="We exist to help organizations harness the power of technology to solve complex challenges, optimize operations, and create sustainable competitive advantages. Our mission is to be the trusted advisor that enables our clients to thrive in an increasingly digital world."
        />
      </Section>

      <Section background="gray">
        <ImageFeature
          image="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imagePosition="right"
          eyebrow="Our Vision"
          title="Leading the Future of Enterprise Technology"
          description="We envision a future where technology seamlessly enables business innovation and growth. Through continuous investment in research, talent development, and emerging technologies, we're building the capabilities to help our clients navigate tomorrow's challenges today."
        />
      </Section>

      <Section
        eyebrow="Our Values"
        title="Principles That Guide Us"
        subtitle="Our core values shape our culture, guide our decisions, and define how we partner with clients."
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

      <Section
        background="gray"
        eyebrow="Our Journey"
        title="Key Milestones"
        subtitle="Over 25 years of innovation, growth, and client success."
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <Card key={index} hover={false}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-5xl font-bold text-brand md:w-32 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    {/* keep milestone copy left-aligned for readability */}
                    <p className="text-slate-600 text-lg">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Leadership"
        title="Led by Industry Experts"
        subtitle="Our executive team brings decades of experience from leading technology companies and consulting firms."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Jennifer Martinez', role: 'Chief Executive Officer', image: 'JM' },
            { name: 'David Thompson', role: 'Chief Technology Officer', image: 'DT' },
            { name: 'Sarah Williams', role: 'Chief Operating Officer', image: 'SW' }
          ].map((leader, index) => (
            <Card key={index}>
              <div className="w-full h-64 bg-gradient-to-br from-brand to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-6xl mb-6">
                {leader.image}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{leader.name}</h3>
              <p className="text-slate-600">{leader.role}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Be part of a team that's shaping the future of enterprise technology and making a real impact for clients worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" icon onClick={() => onNavigate('careers')}>
              Explore Careers
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
