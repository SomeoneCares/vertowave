import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const FeaturedSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const solutions = [
    {
      name: 'Configuration Management',
      category: 'Infrastructure & Operations',
      benefit: 'Reduce configuration errors by 70%',
      description: 'Automate and standardize configuration across your entire infrastructure with real-time compliance monitoring.',
      technologies: ['ServiceNow', 'Ansible', 'Puppet', 'Chef'],
      categoryColor: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Identity & Access Management',
      category: 'Security & Compliance',
      benefit: 'Reduce data breach risk by 50%',
      description: 'Implement zero-trust security with comprehensive identity governance and access controls.',
      technologies: ['Okta', 'Azure AD', 'CyberArk', 'Ping Identity'],
      categoryColor: 'bg-red-100 text-red-700'
    },
    {
      name: 'Cloud Migration & Optimization',
      category: 'Cloud & Modernization',
      benefit: 'Reduce IT costs by 40%',
      description: 'Seamlessly migrate to the cloud and optimize your multi-cloud environment for cost and performance.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      categoryColor: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'AIOps Platform',
      category: 'Insights & Intelligence',
      benefit: 'Reduce MTTR by 60%',
      description: 'Leverage AI-powered insights to predict and prevent IT issues before they impact your business.',
      technologies: ['Datadog', 'Dynatrace', 'Splunk', 'New Relic'],
      categoryColor: 'bg-green-100 text-green-700'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-verto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Featured Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular solutions delivering measurable results for organizations worldwide
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {solutions.map((solution, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Left: Content */}
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-display font-semibold mb-4 ${solution.categoryColor}`}>
                          {solution.category}
                        </div>
                        
                        <h3 className="font-display font-bold text-3xl lg:text-4xl text-verto-dark-gray mb-4">
                          {solution.name}
                        </h3>
                        
                        <div className="bg-verto-blue/10 border-l-4 border-verto-blue px-4 py-3 mb-6">
                          <p className="font-display font-semibold text-lg text-verto-blue">
                            {solution.benefit}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <a
                          href={`#${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-verto-blue hover:text-verto-blue-dark font-display font-semibold text-lg group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </a>
                      </div>
                      
                      {/* Right: Technologies */}
                      <div>
                        <div className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 rounded-xl p-8">
                          <h4 className="font-display font-semibold text-lg text-verto-dark-gray mb-6">
                            Technologies & Partners
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {solution.technologies.map((tech, tIdx) => (
                              <div
                                key={tIdx}
                                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                              >
                                <p className="font-display font-medium text-gray-700">
                                  {tech}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-verto-blue hover:bg-verto-blue hover:text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-verto-blue hover:bg-verto-blue hover:text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-verto-blue w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSolutions
