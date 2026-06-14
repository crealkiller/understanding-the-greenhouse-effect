import { Leaf, Thermometer, Wind, Droplets, Sun, Factory, Car, TreePine, Recycle, Lightbulb, Globe, ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[--background]">
      <Navigation />
      <Hero />
      <WhatIsSection />
      <HowItWorks />
      <CausesSection />
      <ImpactSection />
      <SolutionsSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--background]/80 backdrop-blur-lg border-b border-[--border]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-8 h-8 text-[--primary]" />
          <span className="font-bold text-xl tracking-tight">EarthWatch</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#what-is" className="text-sm text-[--text-secondary] hover:text-[--foreground] transition-colors">About</a>
          <a href="#causes" className="text-sm text-[--text-secondary] hover:text-[--foreground] transition-colors">Causes</a>
          <a href="#impact" className="text-sm text-[--text-secondary] hover:text-[--foreground] transition-colors">Impact</a>
          <a href="#solutions" className="text-sm text-[--text-secondary] hover:text-[--foreground] transition-colors">Solutions</a>
        </div>
        <button className="px-5 py-2 bg-[--primary] text-[--background] font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Take Action
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Atmospheric gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[--surface] via-[--background] to-[--background]" />
      
      {/* Animated atmospheric layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[--primary]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[--secondary]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[--accent]/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Earth representation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] max-w-full max-h-[60vh] aspect-square">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[--secondary]/30 via-[--primary]/20 to-[--primary]/40 animate-float" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[--surface] via-[--background] to-[--surface] border border-[--border]" />
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[--surface] to-[--background]" />
          {/* Greenhouse gas particles */}
          <div className="absolute -top-4 left-1/3 w-3 h-3 bg-[--accent]/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/4 -right-4 w-2 h-2 bg-[--primary]/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-[--secondary]/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute -bottom-2 right-1/4 w-2 h-2 bg-[--accent]/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[--surface] border border-[--border] rounded-full mb-8">
          <span className="w-2 h-2 bg-[--primary] rounded-full animate-pulse" />
          <span className="text-sm text-[--text-secondary]">Our planet is warming</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          The 
          <span className="bg-gradient-to-r from-[--primary] via-[--secondary] to-[--accent] bg-clip-text text-transparent animate-gradient"> Greenhouse </span>
          Effect
        </h1>
        <p className="text-xl md:text-2xl text-[--text-secondary] max-w-2xl mx-auto mb-10 leading-relaxed">
          Understanding how our atmosphere traps heat and why it matters for the future of our planet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#what-is" className="px-8 py-4 bg-[--primary] text-[--background] font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#solutions" className="px-8 py-4 bg-[--surface] border border-[--border] font-semibold rounded-xl hover:bg-[--border] transition-colors flex items-center justify-center gap-2">
            Take Action
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[--text-secondary]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-[--border] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[--primary] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function WhatIsSection() {
  return (
    <section id="what-is" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[--primary] font-semibold tracking-wider uppercase text-sm mb-4 block">Understanding the Science</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What is the Greenhouse Effect?
            </h2>
            <p className="text-lg text-[--text-secondary] leading-relaxed mb-6">
              The greenhouse effect is a natural process that warms Earth's surface. When the Sun's energy reaches Earth, some of it is reflected back to space and the rest is absorbed, warming the planet.
            </p>
            <p className="text-lg text-[--text-secondary] leading-relaxed mb-8">
              Greenhouse gases in the atmosphere act like a blanket, trapping heat and keeping our planet warm enough to support life. Without this natural effect, Earth's average temperature would be about -18°C instead of the 15°C it is today.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[--surface] rounded-2xl border border-[--border]">
                <Thermometer className="w-8 h-8 text-[--secondary] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[--primary]">15°C</div>
                <div className="text-xs text-[--text-secondary]">Average Temp</div>
              </div>
              <div className="text-center p-4 bg-[--surface] rounded-2xl border border-[--border]">
                <Wind className="w-8 h-8 text-[--secondary] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[--primary]">33°C</div>
                <div className="text-xs text-[--text-secondary]">Warming Effect</div>
              </div>
              <div className="text-center p-4 bg-[--surface] rounded-2xl border border-[--border]">
                <Droplets className="w-8 h-8 text-[--secondary] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[--primary]">71%</div>
                <div className="text-xs text-[--text-secondary]">Ocean Coverage</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[--surface] to-[--background] rounded-3xl border border-[--border] p-8 relative overflow-hidden">
              {/* Visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Sun */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg shadow-yellow-500/30" />
                  
                  {/* Atmosphere layers */}
                  <div className="absolute inset-0 border-2 border-[--primary]/20 rounded-full" />
                  <div className="absolute inset-4 border border-[--secondary]/30 rounded-full" />
                  <div className="absolute inset-8 border border-[--accent]/20 rounded-full" />
                  
                  {/* Earth */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[--primary]/40 to-[--secondary]/40 rounded-full" />
                  
                  {/* Heat rays */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="heatGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#48ea8e" />
                      </linearGradient>
                    </defs>
                    <path d="M 50 50 Q 30 30 20 15" stroke="url(#heatGradient)" strokeWidth="0.3" fill="none" opacity="0.6" />
                    <path d="M 50 50 Q 60 35 75 20" stroke="url(#heatGradient)" strokeWidth="0.3" fill="none" opacity="0.6" />
                    <path d="M 50 50 Q 40 40 35 25" stroke="url(#heatGradient)" strokeWidth="0.3" fill="none" opacity="0.6" />
                  </svg>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute top-12 left-8 text-xs text-[--text-secondary]">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Solar Radiation</span>
                </div>
              </div>
              <div className="absolute bottom-12 right-8 text-xs text-[--primary]">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  <span>Earth's Surface</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Solar Energy Arrives',
      description: 'Sunlight passes through the atmosphere and reaches Earth\'s surface, heating land and oceans.',
      icon: Sun,
    },
    {
      number: '02',
      title: 'Heat Absorption',
      description: 'The Earth\'s surface absorbs most of the solar energy and converts it to infrared radiation (heat).',
      icon: Thermometer,
    },
    {
      number: '03',
      title: 'Radiation Released',
      description: 'The warmed surface releases this heat energy back into the atmosphere as infrared radiation.',
      icon: Wind,
    },
    {
      number: '04',
      title: 'Greenhouse Gases Trap Heat',
      description: 'Gases like CO₂, methane, and water vapor absorb and re-emit infrared radiation, trapping heat.',
      icon: Leaf,
    },
  ]

  return (
    <section className="py-32 px-6 bg-[--surface]/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[--primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[--secondary]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-[--secondary] font-semibold tracking-wider uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-xl text-[--text-secondary] max-w-2xl mx-auto">
            A delicate balance of energy absorption and radiation that keeps our planet habitable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[--primary]/10 to-[--secondary]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[--background] border border-[--border] rounded-2xl p-8 h-full hover:border-[--primary]/30 transition-colors">
                <div className="text-5xl font-bold text-[--border] mb-6">{step.number}</div>
                <step.icon className="w-10 h-10 text-[--primary] mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[--text-secondary] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CausesSection() {
  const causes = [
    {
      title: 'Fossil Fuel Combustion',
      description: 'Burning coal, oil, and natural gas for energy releases massive amounts of CO₂ into the atmosphere.',
      icon: Factory,
      stat: '76%',
      statLabel: 'of global emissions',
    },
    {
      title: 'Transportation',
      description: 'Cars, trucks, airplanes, and ships burn fossil fuels, adding billions of tons of CO₂ annually.',
      icon: Car,
      stat: '14%',
      statLabel: 'of global emissions',
    },
    {
      title: 'Deforestation',
      description: 'Trees absorb CO₂, so cutting them down reduces our planet\'s ability to filter carbon from the air.',
      icon: TreePine,
      stat: '10%',
      statLabel: 'of global emissions',
    },
  ]

  return (
    <section id="causes" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[--accent] font-semibold tracking-wider uppercase text-sm mb-4 block">What's Causing It</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Main Causes
          </h2>
          <p className="text-xl text-[--text-secondary] max-w-2xl mx-auto">
            Human activities have significantly intensified the natural greenhouse effect
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="relative group">
              <div className="bg-[--surface] border border-[--border] rounded-3xl p-8 h-full hover:border-[--accent]/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-[--background] rounded-2xl">
                    <cause.icon className="w-8 h-8 text-[--accent]" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[--primary]">{cause.stat}</div>
                    <div className="text-xs text-[--text-secondary]">{cause.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
                <p className="text-[--text-secondary] leading-relaxed">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CO2 level indicator */}
        <div className="mt-16 bg-[--surface] border border-[--border] rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Current Atmospheric CO₂</h3>
              <p className="text-[--text-secondary]">Parts per million (ppm) over the past 800,000 years</p>
            </div>
            <div className="flex items-end gap-4">
              <div className="text-5xl md:text-6xl font-bold text-[--primary]">421</div>
              <div className="text-[--text-secondary] mb-2">ppm</div>
            </div>
          </div>
          <div className="mt-8 h-4 bg-[--background] rounded-full overflow-hidden">
            <div className="h-full w-[140%] bg-gradient-to-r from-[--primary] via-[--secondary] to-[--accent] rounded-full" />
          </div>
          <div className="flex justify-between mt-2 text-xs text-[--text-secondary]">
            <span>Pre-industrial: 280 ppm</span>
            <span>Safe level: 350 ppm</span>
            <span>Current: 421 ppm</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const impacts = [
    {
      title: 'Rising Temperatures',
      description: 'Global average temperatures have increased 1.1°C since pre-industrial times, with accelerating trends.',
      gradient: 'from-[--primary] to-[--secondary]',
    },
    {
      title: 'Melting Ice Caps',
      description: 'Arctic sea ice is declining at 13% per decade, contributing to sea level rise and habitat loss.',
      gradient: 'from-[--secondary] to-[--accent]',
    },
    {
      title: 'Sea Level Rise',
      description: 'Oceans have risen 8-9 inches since 1880, threatening coastal communities and island nations.',
      gradient: 'from-[--accent] to-[--primary]',
    },
    {
      title: 'Extreme Weather',
      description: 'More frequent and intense heatwaves, storms, floods, and droughts are becoming the new normal.',
      gradient: 'from-[--primary] to-[--accent]',
    },
  ]

  return (
    <section id="impact" className="py-32 px-6 bg-[--surface]/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[--accent]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-[--warning] font-semibold tracking-wider uppercase text-sm mb-4 block">The Consequences</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Real-World Impact
          </h2>
          <p className="text-xl text-[--text-secondary] max-w-2xl mx-auto">
            The effects of climate change are already visible across every continent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" 
                   style={{ background: `linear-gradient(135deg, var(--${index % 2 === 0 ? 'primary' : 'secondary'}), var(--background))` }} />
              <div className="relative bg-[--background] border border-[--border] rounded-3xl p-8 h-full hover:border-[--primary]/30 transition-colors">
                <div className={`w-12 h-1 bg-gradient-to-r ${impact.gradient} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold mb-4">{impact.title}</h3>
                <p className="text-[--text-secondary] leading-relaxed">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Temperature rise visualization */}
        <div className="mt-16 bg-[--background] border border-[--border] rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Temperature Rise Over Time</h3>
          <div className="flex items-end justify-center gap-2 md:gap-4 h-48">
            {[0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2].map((temp, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-8 md:w-12 bg-gradient-to-t from-[--primary] to-[--accent] rounded-t-lg transition-all duration-300"
                  style={{ height: `${temp * 100}px` }}
                />
                <span className="text-xs text-[--text-secondary] mt-2">+{temp}°C</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-[--text-secondary] text-sm">
            <span className="text-[--primary]">▲</span> Global temperature anomaly since 2015
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      icon: Recycle,
      title: 'Reduce Emissions',
      description: 'Transition to renewable energy sources like solar, wind, and hydroelectric power.',
    },
    {
      icon: TreePine,
      title: 'Protect Forests',
      description: 'Plant trees and prevent deforestation to increase carbon absorption capacity.',
    },
    {
      icon: Lightbulb,
      title: 'Energy Efficiency',
      description: 'Improve energy efficiency in buildings, transportation, and industrial processes.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Living',
      description: 'Adopt sustainable practices in daily life, from diet choices to consumption habits.',
    },
  ]

  return (
    <section id="solutions" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[--primary]/20 via-[--surface] to-[--secondary]/20 rounded-3xl border border-[--border] p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-[--surface] rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-[--primary] mb-2">30%</div>
                    <div className="text-sm text-[--text-secondary]">Emission reduction possible with existing tech</div>
                  </div>
                  <div className="bg-[--background] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[--border]">
                    <div className="text-4xl font-bold text-[--secondary] mb-2">3°C</div>
                    <div className="text-sm text-[--text-secondary]">Warming we can still prevent</div>
                  </div>
                  <div className="bg-[--background] rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[--border]">
                    <div className="text-4xl font-bold text-[--accent] mb-2">2050</div>
                    <div className="text-sm text-[--text-secondary]">Target year for net-zero emissions</div>
                  </div>
                  <div className="bg-[--surface] rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-[--primary] mb-2">8M</div>
                    <div className="text-sm text-[--text-secondary]">Jobs in green economy by 2030</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-[--primary] font-semibold tracking-wider uppercase text-sm mb-4 block">What We Can Do</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Solutions Exist
            </h2>
            <p className="text-lg text-[--text-secondary] leading-relaxed mb-8">
              The technology and knowledge to combat climate change already exist. What we need is the collective will to act.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-4 bg-[--surface] rounded-2xl border border-[--border] hover:border-[--primary]/30 transition-colors">
                  <div className="flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-[--primary]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{solution.title}</h4>
                    <p className="text-sm text-[--text-secondary]">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[--primary]/10 via-transparent to-[--secondary]/10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[--primary]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-[--text-secondary] mb-10 max-w-2xl mx-auto">
          Every action counts. Join millions around the world taking steps to reduce their carbon footprint and protect our planet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[--primary] text-[--background] font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Leaf className="w-5 h-5" />
            Start Your Journey
          </button>
          <button className="px-8 py-4 bg-[--surface] border border-[--border] font-semibold rounded-xl hover:bg-[--border] transition-colors flex items-center justify-center gap-2">
            <Globe className="w-5 h-5" />
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[--border]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-[--primary]" />
            <span className="font-bold text-xl tracking-tight">EarthWatch</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[--text-secondary]">
            <a href="#" className="hover:text-[--foreground] transition-colors">About</a>
            <a href="#" className="hover:text-[--foreground] transition-colors">Research</a>
            <a href="#" className="hover:text-[--foreground] transition-colors">Take Action</a>
            <a href="#" className="hover:text-[--foreground] transition-colors">Resources</a>
            <a href="#" className="hover:text-[--foreground] transition-colors">Contact</a>
          </div>
          <div className="text-sm text-[--text-secondary]">
            © 2025 EarthWatch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
