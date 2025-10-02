import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 wave-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3">
            <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl text-verto-dark-gray leading-tight mb-6">
              YOUR IT TRANSFORMATION PARTNER
            </h1>
            
            <p className="font-display text-3xl lg:text-4xl text-verto-blue mb-6">
              IT Transformation Done Right.
            </p>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
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
                <span className="font-display font-medium text-sm">17 Comprehensive Solutions</span>
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
              {/* Placeholder for professional business image */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-verto-blue/20 to-verto-blue/5">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-verto-blue/10 flex items-center justify-center">
                      <svg className="w-16 h-16 text-verto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="font-display text-xl text-verto-dark-gray">
                      Professional Business Partnership
                    </p>
                  </div>
                </div>
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
