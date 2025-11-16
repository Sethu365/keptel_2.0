import { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Business Avenue, Suite 500',
      state: 'NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'newyork@keptel.com'
    },
    {
      city: 'San Francisco',
      address: '456 Innovation Drive',
      state: 'CA 94105',
      phone: '+1 (555) 234-5678',
      email: 'sanfrancisco@keptel.com'
    },
    {
      city: 'London',
      address: '789 Enterprise Street',
      state: 'EC2A 4BX',
      phone: '+44 20 1234 5678',
      email: 'london@keptel.com'
    }
  ];

  return (
    <div>
      <Hero
        title="Let's Start a Conversation"
        subtitle="Connect with our team to discuss how we can help transform your business and achieve your strategic objectives."
        backgroundImage="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand font-semibold uppercase tracking-wider text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How Can We Help You?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you're looking to modernize your technology infrastructure, optimize operations, or drive digital innovation, our team is ready to help you succeed.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600">contact@keptel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  placeholder="john.smith@company.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data & Analytics</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </Card>
        </div>
      </Section>

      <Section
        background="gray"
        eyebrow="Global Presence"
        title="Our Offices"
        subtitle="We have locations around the world to serve you better."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card key={index}>
              <div className="w-12 h-12 bg-gradient-to-br from-brand to-slate-700 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{office.city}</h3>
              <div className="space-y-3 text-slate-600">
                <p>{office.address}<br />{office.state}</p>
                <div className="pt-3 border-t border-slate-200">
                  <p className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {office.email}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Prefer to Explore First?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Learn more about our services, industry expertise, and success stories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" onClick={() => onNavigate('services')}>
              View Services
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('about')}>
              About Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
