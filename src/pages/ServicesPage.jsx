// ServicesPage adapted from provided design, using existing Easily theme (black + brand yellow)
import React, { useState } from 'react';
import {
  Menu,
  X,
  Keyboard,
  Store,
  Tablet,
  ArrowRight,
  Globe
} from 'lucide-react';

// Wave background adapted to brand yellow theme
const WaveBackground = ({ className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-brand-yellow/20 blur-[110px] rounded-full mix-blend-screen" />
    <div className="absolute top-[-20%] right-[-20%] w-[100%] h-[100%] bg-brand-yellow/10 blur-[90px] rounded-full mix-blend-screen" />
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1000 400"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="services-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(252, 216, 52, 0)" />
          <stop offset="50%" stopColor="rgba(252, 216, 52, 0.9)" />
          <stop offset="100%" stopColor="rgba(252, 216, 52, 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,200 C300,100 700,300 1000,200"
        fill="none"
        stroke="url(#services-grad)"
        strokeWidth="2"
      />
      <path
        d="M0,220 C350,120 650,320 1000,220"
        fill="none"
        stroke="url(#services-grad)"
        strokeWidth="1"
        className="opacity-60"
      />
      <path
        d="M0,180 C250,80 750,280 1000,180"
        fill="none"
        stroke="url(#services-grad)"
        strokeWidth="1"
        className="opacity-60"
      />
    </svg>
  </div>
);

const ServiceCard = ({ tag, title, description, icon: Icon, visualType }) => {
  return (
    <div className="group relative w-full h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 bg-brand-card transition-all duration-500 hover:border-brand-yellow hover:shadow-[0_0_70px_-18px_rgba(252,216,52,0.8)]">
      <WaveBackground className="opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 h-full flex flex-col md:flex-row">
        {/* Left: Text */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center items-start z-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs font-medium tracking-wider text-gray-300 mb-6 uppercase">
            {tag}
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-normal max-w-sm leading-relaxed mb-8">
            {description}
          </p>
          <div className="mt-auto md:mt-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <button className="flex items-center text-brand-yellow text-sm font-medium hover:text-yellow-300">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="md:w-1/2 relative h-full flex items-center justify-center p-8 md:p-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {visualType === 'gaming' && (
              <div className="relative w-48 h-32 md:w-64 md:h-40 bg-gradient-to-br from-brand-gray to-black rounded-xl border border-white/10 shadow-2xl flex items-center justify-center transform group-hover:rotate-y-6 group-hover:-rotate-x-3 transition-transform duration-700">
                <div className="absolute inset-0 bg-brand-yellow/10 blur-xl" />
                <Keyboard className="w-16 h-16 text-brand-yellow opacity-80" strokeWidth={1} />
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/15 rounded-full" />
              </div>
            )}

            {visualType === 'ui' && (
              <div className="relative w-56 h-40 md:w-72 md:h-48 bg-brand-dark/90 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl p-4 transform group-hover:-translate-y-4 transition-transform duration-700">
                <div className="flex space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-white/10 rounded" />
                  <div className="h-2 w-1/2 bg-white/10 rounded" />
                  <div className="h-2 w-5/6 bg-white/10 rounded" />
                  <div className="h-2 w-2/3 bg-brand-yellow/30 rounded" />
                </div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full border border-white/20 flex items-center justify-center shadow-lg z-10">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-brand-yellow to-transparent opacity-50" />
              </div>
            )}

            {visualType === 'web3' && (
              <div className="flex gap-4 transform group-hover:scale-105 transition-transform duration-700">
                <div className="w-32 h-48 bg-brand-dark rounded-lg border border-white/10 shadow-2xl transform -rotate-6 translate-y-4 opacity-60" />
                <div className="w-40 h-56 bg-black rounded-xl border border-white/20 shadow-2xl flex items-center justify-center relative z-10">
                  <div className="absolute inset-1 bg-[radial-gradient(circle_at_50%_0%,_rgba(252,216,52,0.22),_transparent_70%)] rounded-lg" />
                  <Tablet className="w-12 h-12 text-gray-200 relative z-10" strokeWidth={1} />
                </div>
                <div className="w-32 h-48 bg-brand-dark rounded-lg border border-white/10 shadow-2xl transform rotate-6 translate-y-4 opacity-60" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 border border-brand-yellow/40 rotate-45 flex items-center justify-center">
        <div className="w-2 h-2 bg-brand-yellow" />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, image }) => (
  <div className="relative p-8 rounded-2xl bg-brand-card border border-white/5 overflow-hidden group hover:border-white/10 transition-colors duration-300">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-brand-yellow/10 to-transparent pointer-events-none" />

    <p className="relative text-gray-200 font-light leading-relaxed mb-8 min-h-[80px]">"{quote}"</p>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black p-[2px] mb-4">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover opacity-80" />
          ) : (
            <span className="text-xl font-bold text-gray-500">{name.charAt(0)}</span>
          )}
        </div>
      </div>
      <h4 className="text-white font-medium tracking-wide">{name}</h4>
      <span className="text-xs text-brand-yellow uppercase tracking-widest mt-1">{role}</span>
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-white/5 last:border-0">
    <button
      onClick={onClick}
      className={`w-full py-6 flex items-center justify-between text-left transition-colors duration-300 ${
        isOpen ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      <span className="text-base md:text-lg font-light tracking-wide">{question}</span>
      <div
        className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${
          isOpen ? 'bg-brand-yellow/10 border-brand-yellow/60 rotate-90' : 'bg-transparent'
        }`}
      >
        <ArrowRight className={`w-4 h-4 ${isOpen ? 'text-brand-yellow' : 'text-gray-500'}`} />
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-400 font-light leading-relaxed pr-8">{answer}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // kept for FAQ list only (no header mobile menu)

  const services = [
    {
      tag: 'Gaming',
      title: 'Turn your game ideas into reality',
      description:
        'Designing and building immersive GameFi and metaverse experiences with seamless financial flows.',
      icon: Keyboard,
      visualType: 'gaming'
    },
    {
      tag: 'UI / UX',
      title: 'Bring your vision to life',
      description:
        'User-centered interfaces and experiences that make complex financial products feel effortless.',
      icon: Store,
      visualType: 'ui'
    },
    {
      tag: 'Platforms',
      title: 'Elevate your digital presence',
      description:
        'End-to-end product design and development for modern web and mobile applications.',
      icon: Tablet,
      visualType: 'web3'
    },
    {
      tag: 'Scaling',
      title: 'Create a lasting impact',
      description:
        'Scalable architectures and growth foundations to support millions of customers.',
      icon: Globe,
      visualType: 'gaming'
    }
  ];

  const faqs = [
    {
      q: 'What kind of products do you design?',
      a: 'We focus on financial, productivity, and consumer experiences that need both trust and delight.'
    },
    {
      q: 'Do you handle end-to-end execution?',
      a: 'Yes. From discovery and UX research to design systems and front-end implementation.'
    },
    {
      q: 'How long does a typical engagement take?',
      a: 'Most projects run 8–12 weeks for a focused launch, with longer retainers for ongoing product work.'
    },
    {
      q: 'Can you collaborate with our in-house team?',
      a: 'Absolutely. We often embed directly with product, design, and engineering teams.'
    }
  ];

  const testimonials = [
    {
      name: 'Jacob Green',
      role: 'Director',
      quote:
        "Couldn't be happier with the results of our collaboration. The team understood our vision and delivered beyond expectations.",
      image: 'https://i.pravatar.cc/150?u=jacob'
    },
    {
      name: 'Sophia Martinez',
      role: 'Product Manager',
      quote:
        'They built a solution that scaled perfectly for our needs and felt on-brand from day one.',
      image: 'https://i.pravatar.cc/150?u=sophia'
    },
    {
      name: 'Daniel Wong',
      role: 'CEO',
      quote:
        'From ideation to launch, the process was structured, transparent, and genuinely collaborative.',
      image: 'https://i.pravatar.cc/150?u=daniel'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-yellow selection:text-black">
      {/* Hero */}
      <header className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <WaveBackground />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-[10px] md:text-xs mb-6 uppercase">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] mb-8">
            End-to-end product
            <br />
            design & delivery
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            From first sketch to launch day and beyond, we partner with teams to design modern experiences
            that feel effortless for customers.
          </p>
        </div>
      </header>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-24 mt-12 space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-black/80 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              What our clients say
            </h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase mt-4">
              Real feedback from real partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -bottom-32 -left-10 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
          <div className="absolute -top-32 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase mt-4">
              Find quick answers to common questions
            </p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={activeFAQ === index}
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
