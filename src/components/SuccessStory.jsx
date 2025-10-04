import { Quote, TrendingUp, Clock, DollarSign } from 'lucide-react'

const SuccessStory = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-verto-dark-gray via-gray-700 to-verto-dark-gray"></div>
      <div className="absolute inset-0 wave-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-verto-blue/20 flex items-center justify-center">
              <Quote className="h-8 w-8 text-verto-blue" />
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="text-center mb-12">
            <p className="font-display font-light text-2xl lg:text-4xl text-white leading-relaxed mb-6">
              "Verto Wave transformed our IT infrastructure in just 6 months. Their comprehensive approach to cloud migration and security governance helped us reduce costs by 45% while significantly improving our security posture."
            </p>
            <footer className="text-verto-blue">
              <p className="font-display font-semibold text-xl mb-1">Sarah Johnson</p>
              <p className="text-gray-300">CIO, Global Financial Services Corp</p>
            </footer>
          </blockquote>

          {/* Results Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <DollarSign className="h-8 w-8 text-verto-blue" />
              </div>
              <div className="font-display font-bold text-4xl text-white mb-2">45%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-verto-blue" />
              </div>
              <div className="font-display font-bold text-4xl text-white mb-2">3x</div>
              <div className="text-gray-300">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-verto-blue" />
              </div>
              <div className="font-display font-bold text-4xl text-white mb-2">6 Months</div>
              <div className="text-gray-300">Implementation Time</div>
            </div>
          </div>

          {/* Industry Badge */}
          <div className="text-center mt-8">
            <span className="inline-block bg-verto-blue/20 text-verto-blue px-4 py-2 rounded-full text-sm font-display font-semibold">
              Financial Services Industry
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SuccessStory
