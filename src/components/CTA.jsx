import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const CTA = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-verto-blue via-verto-blue to-verto-blue-dark"></div>
      <div className="absolute inset-0 wave-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Ready to Transform Your IT?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how Verto Wave can help you achieve your goals and drive digital transformation
          </p>
          
          {/* Trust Indicator */}
          <p className="text-white/80 mb-10">
            Join 100+ organizations transforming their IT infrastructure with Verto Wave
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="font-display text-lg bg-white text-verto-blue hover:bg-gray-100 px-8 py-6"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-display text-lg border-2 border-white text-white hover:bg-white hover:text-verto-blue px-8 py-6"
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-display">+1 (234) 567-890</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <a 
              href="mailto:info@vertowave.com" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-display">info@vertowave.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
