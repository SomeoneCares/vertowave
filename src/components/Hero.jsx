import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBackground from '../assets/hero-background.webp'
import heroBackgroundPng from '../assets/hero-background.webp'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 wave-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3">
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-verto-dark-gray leading-tight mb-6">
              YOUR IT TRANSFORMATION PARTNER
            </h1>
            
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-verto-blue mb-6">
              IT Transformation Done Right.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              We help organizations modernize their IT infrastructure, enhance security, and accelerate digital transformation with comprehensive solutions tailored to your unique needs.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="font-display text-lg bg-verto-blue hover:bg-verto-blue-dark text-white px-8 py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display text-lg border-2 border-verto-blue text-verto-blue hover:bg-verto-blue hover:text-white px-8 py-6"
              >
                Explore Solutions
              </Button>
            </div>
            
            {/* Key Stats Badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-verto-light-gray px-4 py-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-verto-blue" />
                <span className="font-display font-medium text-sm">23 Comprehensive Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-verto-light-gray px-4 py-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-verto-blue" />
                <span className="font-display font-medium text-sm">6 Industries</span>
              </div>
              <div className="flex items-center gap-2 bg-verto-light-gray px-4 py-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-verto-blue" />
                <span className="font-display font-medium text-sm">100+ Clients</span>
              </div>
            </div>
          </div>
          
          {/* Right Image - 40% */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* AI-Generated Hero Background Image */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroBackground} 
                  alt="Modern IT operations center with team collaborating on digital transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Wave Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="text-verto-blue">
                  <path 
                    d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
