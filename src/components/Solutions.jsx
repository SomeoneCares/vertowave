import { useState } from 'react'
import { Server, Shield, Zap, Cloud, BarChart3, ChevronDown, ArrowRight } from 'lucide-react'

const Solutions = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = [
    {
      icon: Server,
      name: 'Infrastructure & Operations Management',
      count: 4,
      description: 'Modernize and optimize your IT infrastructure for peak performance and reliability.',
      solutions: [
        'Configuration Management',
        'Systems Management',
        'Network Management',
        'IT Asset Management'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      name: 'Security & Compliance',
      count: 5,
      description: 'Protect your organization with comprehensive security and compliance solutions.',
      solutions: [
        'Identity & Access Management',
        'Security Governance',
        'Resilience & Backup',
        'Zero Trust Frameworks',
        'Data Protection & Privacy'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      name: 'Service Delivery & Automation',
      count: 3,
      description: 'Accelerate service delivery and automate workflows for maximum efficiency.',
      solutions: [
        'IT Service Management',
        'Automation & Orchestration',
        'DevOps & CI/CD'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Cloud,
      name: 'Cloud & Modernization',
      count: 2,
      description: 'Transform your IT with cloud-native solutions and modern architectures.',
      solutions: [
        'Cloud Migration & Optimization',
        'Business Service Mapping'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      name: 'Insights & Intelligence',
      count: 3,
      description: 'Gain actionable insights with advanced analytics and AI-powered intelligence.',
      solutions: [
        'Observability & Dashboarding',
        'Productivity Analytics',
        'AIOps Platform'
      ],
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Comprehensive Solutions for Every IT Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            17 solutions organized across 5 strategic categories to transform your IT infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-verto-blue transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setExpandedCategory(index)}
              onMouseLeave={() => setExpandedCategory(null)}
            >
              <div className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-verto-blue/10 text-verto-blue px-3 py-1 rounded-full text-sm font-display font-semibold">
                    {category.count} Solutions
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-3 group-hover:text-verto-blue transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Solutions List */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  expandedCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <ul className="space-y-2">
                      {category.solutions.map((solution, sIdx) => (
                        <li key={sIdx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-verto-blue mr-2"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-verto-blue hover:text-verto-blue-dark font-display font-medium group-hover:translate-x-2 transition-transform"
                >
                  Explore Category
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Hover Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </div>
          ))}
        </div>

        {/* View All Solutions CTA */}
        <div className="text-center mt-12">
          <a
            href="#all-solutions"
            className="inline-flex items-center text-verto-blue hover:text-verto-blue-dark font-display font-semibold text-lg group"
          >
            View All 17 Solutions
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
