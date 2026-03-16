import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '4916 High Street',
      subContent: 'Fort Smith, AR 72904',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(479) 782-5756',
      subContent: 'Mon-Fri 9AM-5PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@stjamesbc.org',
      subContent: 'We reply within 24hrs',
    },
    {
      icon: Clock,
      title: 'Service Times',
      content: 'Sunday: 9:30 AM & 10:45 AM',
      subContent: 'Wednesday: 12:00 PM & 7:00 PM',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/saintjamesmbcfs', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/SJMBC_FortSmith', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/sjmbc_fs', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCXV4-JaH-ilFqo1zgFhl87Q', label: 'YouTube' },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary" />
      </div>

      <div className="relative z-10 w-full section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>

          <h2 
            className={`heading-lg text-navy mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Contact Us
          </h2>

          <p 
            className={`body-md text-text-gray max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We'd love to hear from you. Whether you have questions, prayer requests, 
            or just want to say hello, reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-light transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy mb-1">{item.title}</h3>
                    <p className="font-body text-text-gray">{item.content}</p>
                    <p className="font-body text-sm text-text-gray/70">{item.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-display font-semibold text-navy mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-primary-light rounded-2xl p-8">
              <h3 className="font-display font-semibold text-navy text-xl mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-sm font-medium text-navy mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-navy mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    type="tel"
                    placeholder="(479) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-body font-semibold py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
