import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Assess',
      description: 'We evaluate your current state, identify gaps, and understand your business objectives.'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Design',
      description: 'We architect the right solution tailored to your specific needs and industry requirements.'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implement',
      description: 'We deploy with minimal disruption, ensuring smooth transition and user adoption.'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimize',
      description: 'We continuously improve performance, monitor results, and adapt to your evolving needs.'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            How We Transform Your IT
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful IT transformation from assessment to optimization.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-verto-blue via-verto-blue to-verto-blue transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-full bg-verto-blue flex items-center justify-center relative z-10 shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-verto-blue animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-verto-blue font-display font-bold text-sm mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-verto-blue flex items-center justify-center shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                <div className="text-verto-blue font-display font-bold text-sm mb-2">
                  STEP {step.number}
                </div>
                <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
