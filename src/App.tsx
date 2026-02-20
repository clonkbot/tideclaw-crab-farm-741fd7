import { useState, useEffect } from 'react';

// Animated Crab Component
const AnimatedCrab = ({ className = '', size = 60 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 100 80"
    width={size}
    height={size * 0.8}
    className={className}
    fill="currentColor"
  >
    {/* Body */}
    <ellipse cx="50" cy="45" rx="28" ry="20" />
    {/* Left Claw */}
    <ellipse cx="12" cy="35" rx="12" ry="10" />
    <ellipse cx="5" cy="28" rx="6" ry="5" />
    {/* Right Claw */}
    <ellipse cx="88" cy="35" rx="12" ry="10" />
    <ellipse cx="95" cy="28" rx="6" ry="5" />
    {/* Eyes */}
    <circle cx="42" cy="28" r="5" fill="#0a1628" />
    <circle cx="58" cy="28" r="5" fill="#0a1628" />
    <circle cx="43" cy="27" r="2" fill="#fdfbf7" />
    <circle cx="59" cy="27" r="2" fill="#fdfbf7" />
    {/* Legs */}
    <path d="M25 50 L10 65" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
    <path d="M30 55 L18 72" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
    <path d="M38 58 L30 75" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
    <path d="M75 50 L90 65" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
    <path d="M70 55 L82 72" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
    <path d="M62 58 L70 75" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

// Wave SVG Component
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute bottom-0 w-full h-64 md:h-96"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#4a9b8c"
        fillOpacity="0.1"
        className="animate-wave"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <path
        fill="#c45c26"
        fillOpacity="0.08"
        className="animate-wave-slow"
        d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  icon,
  delay
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) => (
  <div
    className="group relative bg-white/60 backdrop-blur-sm border border-copper/20 p-6 md:p-8 rounded-sm hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-copper to-seafoam transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    <div className="text-copper mb-4 text-3xl md:text-4xl">{icon}</div>
    <h3 className="font-display text-xl md:text-2xl text-navy mb-3">{title}</h3>
    <p className="font-body text-navy/70 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

// Stats Component
const StatItem = ({ number, label, delay }: { number: string; label: string; delay: number }) => (
  <div
    className="text-center animate-fade-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="font-display text-4xl md:text-5xl lg:text-6xl text-copper mb-2">{number}</div>
    <div className="font-body text-cream/80 text-sm md:text-base uppercase tracking-widest">{label}</div>
  </div>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-body text-navy overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <AnimatedCrab
              size={32}
              className={`transition-colors duration-300 ${isScrolled ? 'text-copper' : 'text-copper'}`}
            />
            <span className={`font-display text-xl md:text-2xl transition-colors duration-300 ${isScrolled ? 'text-cream' : 'text-navy'}`}>
              Tideclaw Farms
            </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex gap-8 items-center font-body text-sm uppercase tracking-wider ${isScrolled ? 'text-cream/80' : 'text-navy/80'}`}>
            <a href="#about" className="hover:text-copper transition-colors">About</a>
            <a href="#products" className="hover:text-copper transition-colors">Our Crabs</a>
            <a href="#process" className="hover:text-copper transition-colors">Process</a>
            <a
              href="#contact"
              className={`px-5 py-2.5 border transition-all duration-300 ${isScrolled ? 'border-copper text-copper hover:bg-copper hover:text-cream' : 'border-navy text-navy hover:bg-navy hover:text-cream'}`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-cream' : 'bg-navy'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-cream' : 'bg-navy'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-cream' : 'bg-navy'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-6 flex flex-col gap-4 text-cream/80 font-body text-sm uppercase tracking-wider">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-copper transition-colors py-2">About</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="hover:text-copper transition-colors py-2">Our Crabs</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-copper transition-colors py-2">Process</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border border-copper text-copper hover:bg-copper hover:text-cream px-5 py-3 text-center transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WaveBackground />

        {/* Floating Crabs */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedCrab size={40} className="absolute top-1/4 left-[10%] text-copper/20 animate-float hidden md:block" />
          <AnimatedCrab size={30} className="absolute top-1/3 right-[15%] text-seafoam/30 animate-float-delayed hidden md:block" />
          <AnimatedCrab size={50} className="absolute bottom-1/4 left-[20%] text-copper/15 animate-float-slow hidden lg:block" />
        </div>

        <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-up">
            <span className="inline-block font-body text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-4 md:mb-6">
              Est. 1987 · Maine Coast
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-navy mb-6 md:mb-8 leading-[0.9] animate-fade-up animation-delay-100">
            Where the
            <br />
            <span className="text-copper italic">Finest Crabs</span>
            <br />
            Come Home
          </h1>

          <p className="font-body text-base md:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-up animation-delay-200 px-4">
            Three generations of sustainable crab farming, delivering the sweetest,
            most succulent crabs from our cold Atlantic waters to your table.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300 px-4">
            <a
              href="#products"
              className="group px-8 md:px-10 py-4 bg-copper text-cream font-body text-sm uppercase tracking-wider hover:bg-navy transition-all duration-300 flex items-center justify-center gap-3"
            >
              Explore Our Catch
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <a
              href="#process"
              className="px-8 md:px-10 py-4 border-2 border-navy text-navy font-body text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-copper rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatItem number="37" label="Years Experience" delay={0} />
            <StatItem number="50K+" label="Crabs Yearly" delay={100} />
            <StatItem number="100%" label="Sustainable" delay={200} />
            <StatItem number="24hr" label="Fresh Delivery" delay={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-4 block">
                Our Heritage
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
                From Our Waters to Your Table
              </h2>
              <div className="space-y-4 md:space-y-6 text-navy/70 leading-relaxed text-sm md:text-base">
                <p>
                  Founded in 1987 by Captain Elias Tidwell, Tideclaw Farms began as a small
                  family operation on the rugged Maine coastline. What started with a single
                  boat and a dream has grown into New England's most respected crab farm.
                </p>
                <p>
                  Our cold, pristine Atlantic waters produce crabs with an unmatched sweetness
                  and delicate texture. We've never compromised on quality, and we never will.
                </p>
                <p>
                  Today, the third generation continues the legacy, combining time-honored
                  techniques with sustainable practices that protect our ocean home.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-copper/10 flex items-center justify-center">
                  <AnimatedCrab size={36} className="text-copper" />
                </div>
                <div>
                  <div className="font-display text-lg md:text-xl text-navy">Captain Sarah Tidwell</div>
                  <div className="font-body text-sm text-navy/60">Third Generation Owner</div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] bg-gradient-to-br from-seafoam/20 to-copper/20 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatedCrab size={200} className="text-copper/30 animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 border-4 md:border-8 border-copper/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-4 block">
              Premium Selection
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy">
              Our Prized Catch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<span>&#129408;</span>}
              title="Blue Crab"
              description="Our signature offering. Sweet, tender meat with a delicate briny finish. Perfect for crab cakes and bisques."
              delay={0}
            />
            <FeatureCard
              icon={<span>&#127858;</span>}
              title="Dungeness"
              description="Prized for their sweet, slightly nutty flavor. These beauties are ideal for steaming and festive gatherings."
              delay={100}
            />
            <FeatureCard
              icon={<span>&#129438;</span>}
              title="Stone Crab"
              description="Harvested sustainably for their renowned claws. Firm, succulent meat with a subtle sweetness."
              delay={200}
            />
            <FeatureCard
              icon={<span>&#127836;</span>}
              title="Soft Shell"
              description="A seasonal delicacy. Entirely edible shells with melt-in-your-mouth texture."
              delay={300}
            />
            <FeatureCard
              icon={<span>&#129424;</span>}
              title="Snow Crab"
              description="Long, elegant legs filled with sweet, delicate meat. A true winter luxury."
              delay={400}
            />
            <FeatureCard
              icon={<span>&#127857;</span>}
              title="King Crab"
              description="The crown jewel. Massive legs with rich, buttery meat that defines indulgence."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 md:py-32 bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 40px
            )`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-4 block">
              Our Commitment
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream">
              Sustainable From Start to Finish
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Ethical Harvest', desc: 'Crabs are caught using humane traps that allow undersized crabs to escape.' },
              { step: '02', title: 'Ocean Pens', desc: 'Natural tidal flow keeps our crabs healthy without artificial intervention.' },
              { step: '03', title: 'Same-Day Processing', desc: 'From ocean to ice within hours, preserving peak freshness.' },
              { step: '04', title: 'Direct Delivery', desc: 'Shipped overnight to your door, never frozen, always fresh.' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="font-display text-6xl md:text-7xl lg:text-8xl text-copper/20 group-hover:text-copper/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-cream mt-2 md:mt-4 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-cream/60 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 md:py-32">
        <WaveBackground />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6 md:mb-8">
            Ready to Taste the Difference?
          </h2>
          <p className="font-body text-navy/70 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Whether you're a restaurant seeking premium seafood or a family planning a special dinner,
            we'd love to hear from you.
          </p>

          <form className="max-w-xl mx-auto space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/60 backdrop-blur-sm border border-copper/20 font-body text-navy placeholder:text-navy/40 focus:outline-none focus:border-copper transition-colors text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/60 backdrop-blur-sm border border-copper/20 font-body text-navy placeholder:text-navy/40 focus:outline-none focus:border-copper transition-colors text-sm md:text-base"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your needs..."
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/60 backdrop-blur-sm border border-copper/20 font-body text-navy placeholder:text-navy/40 focus:outline-none focus:border-copper transition-colors resize-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 md:px-12 py-4 bg-copper text-cream font-body text-sm uppercase tracking-wider hover:bg-navy transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12 md:py-16 text-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 md:mb-12">
            <div className="flex items-center gap-3">
              <AnimatedCrab size={40} className="text-copper" />
              <span className="font-display text-2xl">Tideclaw Farms</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-body text-sm text-cream/60">
              <a href="#about" className="hover:text-copper transition-colors">About</a>
              <a href="#products" className="hover:text-copper transition-colors">Products</a>
              <a href="#process" className="hover:text-copper transition-colors">Process</a>
              <a href="#contact" className="hover:text-copper transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-cream/40 text-center md:text-left">
              &copy; 2024 Tideclaw Farms. All rights reserved.
            </p>
            <p className="font-body text-xs text-cream/30">
              123 Harbor Way, Portland, ME 04101
            </p>
          </div>

          {/* Attribution Footer */}
          <div className="mt-8 pt-6 border-t border-cream/5 text-center">
            <p className="font-body text-xs text-cream/30">
              Requested by @OxPaulius · Built by @clonkbot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
