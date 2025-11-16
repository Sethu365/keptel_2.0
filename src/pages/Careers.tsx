import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Users, TrendingUp, Award, Heart, Globe, Lightbulb, MapPin, Clock, Briefcase } from 'lucide-react';

interface CareersProps {
  onNavigate: (page: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Accelerate your career with mentorship programs, training opportunities, and clear advancement paths.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous PTO, and wellness programs to support your wellbeing.'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage, retirement plans, equity options, and performance bonuses.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Culture',
      description: 'Work on cutting-edge projects with the latest technologies and contribute to industry-leading solutions.'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'International assignments, cross-border collaboration, and exposure to diverse markets.'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Diverse, inclusive workplace where every voice is valued and respected.'
    }
  ];

  const jobs = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable, cloud-native applications for enterprise clients.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Technology',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions for Fortune 500 companies.'
    },
    {
      title: 'Data Analytics Consultant',
      department: 'Consulting',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Help clients unlock the value of their data through advanced analytics and business intelligence.'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Washington, DC',
      type: 'Full-time',
      description: 'Protect enterprise systems and develop security strategies for high-profile clients.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      description: 'Create intuitive, beautiful user experiences for enterprise applications and digital products.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Lead complex technology implementations and drive successful outcomes for clients.'
    }
  ];

  return (
    <div>
      <Hero
        title="Build Your Career with Industry Leaders"
        subtitle="Join a global team of innovators, problem-solvers, and technology experts who are shaping the future of enterprise solutions."
        ctaPrimary="View Open Positions"
        ctaSecondary="Learn About Culture"
        backgroundImage="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section
        eyebrow="Why Keptel Analytics Space"
        title="Where Talent Meets Opportunity"
        subtitle="We invest in our people because they are the foundation of our success and the key to delivering exceptional value to our clients."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-gradient-to-br from-brand to-slate-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        background="gray"
        eyebrow="Our Culture"
        title="A Place Where You Can Thrive"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Collaboration & Innovation
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We foster a culture of continuous learning, experimentation, and collaboration. Our teams work across disciplines and geographies to solve complex problems and deliver innovative solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From hackathons and innovation labs to peer mentorship and professional development programs, we create opportunities for growth and excellence at every stage of your career.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl md:order-2">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diversity and inclusion"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Diversity & Inclusion
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe diverse perspectives drive innovation. Our commitment to diversity, equity, and inclusion is reflected in our hiring practices, employee resource groups, and inclusive workplace policies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We actively work to create an environment where everyone feels valued, respected, and empowered to bring their authentic selves to work.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Open Positions"
        title="Current Opportunities"
        subtitle="Explore our open positions and find the role that matches your skills and career aspirations."
      >
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <Card key={index} hover={false}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-brand-50 text-brand rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{job.title}</h3>
                  <p className="text-slate-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="primary">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Don't see the right role? We're always looking for talented individuals.
          </p>
          <Button variant="outline" size="lg">
            Submit General Application
          </Button>
        </div>
      </Section>

      <Section background="gray" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join our team and work on challenging projects that make a difference for the world's leading organizations.
          </p>
          <Button variant="primary" size="lg" icon>
            Explore All Opportunities
          </Button>
        </div>
      </Section>
    </div>
  );
}
