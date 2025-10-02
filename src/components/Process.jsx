import { Search, Lightbulb, Rocket, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'

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

  const maturityLevels = [
    {
      level: 1,
      name: 'Initial',
      description: 'Reactive',
      color: 'bg-red-500'
    },
    {
      level: 2,
      name: 'Repeatable',
      description: 'Aware',
      color: 'bg-orange-500'
    },
    {
      level: 3,
      name: 'Defined',
      description: 'Proactive',
      color: 'bg-yellow-500'
    },
    {
      level: 4,
      name: 'Capable',
      description: 'Managed',
      color: 'bg-blue-500'
    },
    {
      level: 5,
      name: 'Optimizing',
      description: 'Transformational',
      color: 'bg-green-500'
    }
  ]

  const capabilityAreas = [
    {
      title: 'IT Availability',
      description: 'Ensure systems and services are accessible when needed',
      icon: '🔄'
    },
    {
      title: 'IT Control',
      description: 'Maintain governance and compliance across IT operations',
      icon: '🎯'
    },
    {
      title: 'IT Protection',
      description: 'Safeguard data and infrastructure from security threats',
      icon: '🛡️'
    },
    {
      title: 'IT Visibility',
      description: 'Gain insights into IT performance and business impact',
      icon: '👁️'
    },
    {
      title: 'IT Governance',
      description: 'Align IT strategy with business objectives',
      icon: '⚖️'
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
        <div className="hidden lg:block mb-20">
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
        <div className="lg:hidden space-y-8 mb-20">
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

        {/* IT Maturity Assessment Section */}
        <div className="mt-24 pt-20 border-t-2 border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-verto-blue/10 text-verto-blue text-sm font-display font-semibold rounded-full mb-4">
              Based on Gartner's Capability Model
            </div>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-verto-dark-gray mb-4">
              Benchmark Your IT Maturity
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive assessment evaluates your organization across five critical capability areas and five maturity levels to identify opportunities for improvement.
            </p>
          </div>

          {/* Maturity Levels Progression */}
          <div className="mb-16">
            <h4 className="font-display font-semibold text-xl text-verto-dark-gray mb-6 text-center">
              Five Maturity Levels
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {maturityLevels.map((level, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center border-2 border-gray-100 hover:border-verto-blue">
                    <div className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                      {level.level}
                    </div>
                    <h5 className="font-display font-bold text-lg text-verto-dark-gray mb-2">
                      {level.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {level.description}
                    </p>
                  </div>
                  {index < maturityLevels.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capability Areas */}
          <div className="mb-16">
            <h4 className="font-display font-semibold text-xl text-verto-dark-gray mb-6 text-center">
              Five Capability Areas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {capabilityAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 rounded-xl p-6 hover:shadow-lg transition-all border border-verto-blue/20">
                  <div className="text-4xl mb-4 text-center">
                    {area.icon}
                  </div>
                  <h5 className="font-display font-bold text-lg text-verto-dark-gray mb-3 text-center">
                    {area.title}
                  </h5>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-2xl text-verto-dark-gray mb-6">
                  Why Assess Your IT Maturity?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Identify Gaps</p>
                      <p className="text-sm text-gray-600">Discover areas where your IT capabilities need improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Prioritize Investments</p>
                      <p className="text-sm text-gray-600">Focus resources on initiatives with the highest impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Benchmark Performance</p>
                      <p className="text-sm text-gray-600">Compare your IT maturity against industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Create Roadmap</p>
                      <p className="text-sm text-gray-600">Develop a clear path to IT transformation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Assessment Process
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Questionnaire</p>
                      <p className="text-sm text-gray-600">Complete our comprehensive IT maturity questionnaire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Analysis</p>
                      <p className="text-sm text-gray-600">Our experts analyze your responses across all capability areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Report</p>
                      <p className="text-sm text-gray-600">Receive detailed maturity assessment report with scores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Roadmap</p>
                      <p className="text-sm text-gray-600">Get personalized recommendations and transformation roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-verto-blue hover:bg-verto-blue-dark text-white font-display font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Your IT Maturity Assessment
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Complimentary assessment for qualified organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
