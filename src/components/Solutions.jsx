import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import solutionInfrastructure from '../assets/solution-infrastructure.webp'
import solutionSecurity from '../assets/solution-security.webp'
import solutionAutomation from '../assets/solution-automation.webp'
import solutionCloud from '../assets/solution-cloud.webp'
import solutionInsights from '../assets/solution-insights.webp'

const Solutions = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  // Mapping of solution names to their URL slugs
  const solutionLinks = {
    'Configuration Management': '/solutions/configuration-management',
    'Systems Management': '/solutions/systems-management',
    'Network Management': '/solutions/network-management',
    'IT Asset Management': '/solutions/it-asset-management',
    'Identity & Access Management': '/solutions/identity-access-management',
    'Security Governance': '/solutions/security-governance',
    'Backup & Disaster Recovery': '/solutions/backup-disaster-recovery',
    'Zero Trust Security': '/solutions/zero-trust-security',
    'Compliance Management': '/solutions/compliance-management',
    'IT Service Management': '/solutions/it-service-management',
    'Workflow Automation': '/solutions/workflow-automation',
    'DevOps & CI/CD': '/solutions/devops-cicd',
    'Cloud Migration & Optimization': '/solutions/cloud-migration-optimization',
    'Application Modernization': '/solutions/application-modernization',
    'AIOps Platform': '/solutions/aiops-platform',
    'IT Service Intelligence': '/solutions/it-service-intelligence',
    'Digital Employee Experience': '/solutions/digital-employee-experience'
  }

  const categories = [
    {
      image: solutionInfrastructure,
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
      image: solutionSecurity,
      name: 'Security & Compliance',
      count: 5,
      description: 'Protect your organization with comprehensive security and compliance solutions.',
      solutions: [
        'Identity & Access Management',
        'Security Governance',
        'Backup & Disaster Recovery',
        'Zero Trust Security',
        'Compliance Management'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      image: solutionAutomation,
      name: 'Service Delivery & Automation',
      count: 3,
      description: 'Accelerate service delivery and automate workflows for maximum efficiency.',
      solutions: [
        'IT Service Management',
        'Workflow Automation',
        'DevOps & CI/CD'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      image: solutionCloud,
      name: 'Cloud & Modernization',
      count: 2,
      description: 'Transform your IT with cloud-native solutions and modern architectures.',
      solutions: [
        'Cloud Migration & Optimization',
        'Application Modernization'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      image: solutionInsights,
      name: 'Insights & Intelligence',
      count: 3,
      description: 'Gain actionable insights with advanced analytics and AI-powered intelligence.',
      solutions: [
        'AIOps Platform',
        'IT Service Intelligence',
        'Digital Employee Experience'
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
                  <div className="w-20 h-20 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform p-2">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-contain"
                    />
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
                        <li key={sIdx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-verto-blue mr-2 flex-shrink-0"></div>
                          <Link 
                            to={solutionLinks[solution]} 
                            className="text-gray-700 hover:text-verto-blue hover:underline transition-colors"
                          >
                            {solution}
                          </Link>
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
