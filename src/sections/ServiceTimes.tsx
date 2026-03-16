import { useEffect, useRef, useState } from 'react';
import { Clock, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ServiceTimes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      day: 'Sunday',
      title: 'Sunday School',
      time: '9:30 AM',
      description: 'Bible study and spiritual growth for all ages',
      icon: Book,
    },
    {
      day: 'Sunday',
      title: 'Sunday Worship',
      time: '10:45 AM',
      description: 'Our main worship service with praise and preaching',
      icon: Sun,
      featured: true,
    },
    {
      day: 'Wednesday',
      title: 'Noonday Bible Study',
      time: '12:00 PM',
      description: 'Midweek spiritual refreshment and study',
      icon: Clock,
    },
    {
      day: 'Wednesday',
      title: 'Evening Bible Study',
      time: '7:00 PM',
      description: 'Evening worship and in-depth Bible teaching',
      icon: Moon,
    },
  ];

  return (
    <section 
      id="service-times" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-display text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
          SERVICE TIMES
        </span>
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
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">Plan Your Visit</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>

          <h2 
            className={`heading-lg text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Join Us For Worship
          </h2>

          <p 
            className={`body-md text-white/70 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We gather throughout the week to worship, learn, and grow together in faith.
            All are welcome to join us.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`relative h-full p-6 rounded-2xl border transition-all duration-500 ${
                service.featured 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/25' 
                  : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10'
              }`}>
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-body font-bold rounded-full">
                    MAIN SERVICE
                  </div>
                )}

                {/* Day Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
                  service.featured ? 'bg-white/20' : 'bg-primary/20'
                }`}>
                  <Calendar className={`w-4 h-4 ${service.featured ? 'text-white' : 'text-primary'}`} />
                  <span className={`font-body text-sm ${service.featured ? 'text-white' : 'text-primary'}`}>
                    {service.day}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.featured ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <service.icon className={`w-7 h-7 ${service.featured ? 'text-white' : 'text-primary'}`} />
                </div>

                {/* Content */}
                <h3 className={`font-display font-semibold text-xl mb-2 ${
                  service.featured ? 'text-white' : 'text-white'
                }`}>
                  {service.title}
                </h3>

                <div className={`flex items-center gap-2 mb-3 ${
                  service.featured ? 'text-white/90' : 'text-primary'
                }`}>
                  <Clock className="w-5 h-5" />
                  <span className="font-display font-bold text-2xl">{service.time}</span>
                </div>

                <p className={`font-body text-sm ${
                  service.featured ? 'text-white/80' : 'text-white/60'
                }`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Card */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg">Visit Us</h3>
                  <p className="font-body text-white/70">4916 High Street, Fort Smith, AR 72904</p>
                  <p className="font-body text-primary">(479) 782-5756</p>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=4916+High+Street+Fort+Smith+AR+72904"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Get Directions
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon Components
function Book({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function Sun({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function Moon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export default ServiceTimes;
