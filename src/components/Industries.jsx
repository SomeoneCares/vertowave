import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import industryFinancial from '../assets/industry-financial.webp'
import industryHealthcare from '../assets/industry-healthcare.webp'
import industryManufacturing from '../assets/industry-manufacturing.webp'
import industryRetail from '../assets/industry-retail.webp'
import industryOilGas from '../assets/industry-oil-gas.webp'
import industryGovernment from '../assets/industry-government.webp'

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null)

  const industries = [
    {
      image: industryFinancial,
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banking and finance',
      color: 'from-blue-500 to-blue-600',
      overview: 'Financial institutions face unique challenges in maintaining security, ensuring compliance, and delivering seamless customer experiences. Verto Wave provides comprehensive IT solutions specifically designed for the financial sector.',
      challenges: [
        'Regulatory compliance (SOX, PCI-DSS, GDPR)',
        'Cybersecurity threats and fraud prevention',
        'Legacy system modernization',
        'Digital banking transformation',
        'Data privacy and protection'
      ],
      solutions: [
        'Identity & Access Management',
        'Security Governance',
        'Cloud Migration & Optimization',
        'AIOps Platform',
        'Data Protection & Privacy'
      ]
    },
    {
      image: industryHealthcare,
      name: 'Healthcare',
      description: 'HIPAA-compliant IT infrastructure and security',
      color: 'from-red-500 to-red-600',
      overview: 'Healthcare organizations require secure, reliable IT infrastructure that protects patient data while enabling efficient care delivery. Our solutions ensure HIPAA compliance and operational excellence.',
      challenges: [
        'HIPAA compliance and patient data protection',
        'Electronic health records (EHR) management',
        'Medical device integration and security',
        'Telehealth infrastructure',
        'Healthcare data interoperability'
      ],
      solutions: [
        'Security Governance',
        'Data Protection & Privacy',
        'Resilience & Backup',
        'IT Service Management',
        'Network Management'
      ]
    },
    {
      image: industryManufacturing,
      name: 'Manufacturing',
      description: 'Industry 4.0 and operational technology solutions',
      color: 'from-orange-500 to-orange-600',
      overview: 'Manufacturing companies are embracing Industry 4.0 technologies to optimize operations, improve quality, and reduce costs. We help manufacturers modernize their IT and OT infrastructure.',
      challenges: [
        'IT/OT convergence and security',
        'Supply chain visibility and optimization',
        'Predictive maintenance implementation',
        'Legacy equipment connectivity',
        'Production data analytics'
      ],
      solutions: [
        'Network Management',
        'Observability & Dashboarding',
        'AIOps Platform',
        'Automation & Orchestration',
        'Business Service Mapping'
      ]
    },
    {
      image: industryRetail,
      name: 'Retail & E-commerce',
      description: 'Scalable infrastructure for digital commerce',
      color: 'from-purple-500 to-purple-600',
      overview: 'Retail organizations need scalable, reliable IT infrastructure to support omnichannel experiences and handle peak demand. Our solutions enable seamless digital commerce and customer engagement.',
      challenges: [
        'Omnichannel customer experience',
        'Peak season scalability',
        'Payment security (PCI compliance)',
        'Inventory management across channels',
        'Customer data analytics'
      ],
      solutions: [
        'Cloud Migration & Optimization',
        'IT Service Management',
        'Security Governance',
        'Observability & Dashboarding',
        'Productivity Analytics'
      ]
    },
    {
      image: industryOilGas,
      name: 'Oil & Gas',
      description: 'Digital transformation and IoT solutions for energy sector',
      color: 'from-green-500 to-green-600',
      overview: 'Energy companies require robust IT infrastructure to support remote operations, IoT devices, and data-intensive applications. We provide solutions that enhance operational efficiency and safety.',
      challenges: [
        'Remote site connectivity and management',
        'IoT device security and management',
        'Operational technology (OT) security',
        'Environmental compliance monitoring',
        'Asset performance optimization'
      ],
      solutions: [
        'Network Management',
        'Zero Trust Frameworks',
        'IT Asset Management',
        'AIOps Platform',
        'Business Service Mapping'
      ]
    },
    {
      image: industryGovernment,
      name: 'Government & Public Sector',
      description: 'Secure, compliant solutions for public services',
      color: 'from-indigo-500 to-indigo-600',
      overview: 'Government agencies require secure, compliant IT solutions that protect citizen data while delivering efficient public services. Our solutions meet stringent security and compliance requirements.',
      challenges: [
        'FedRAMP and government compliance',
        'Citizen data protection and privacy',
        'Legacy system modernization',
        'Interagency collaboration',
        'Cybersecurity threats'
      ],
      solutions: [
        'Security Governance',
        'Identity & Access Management',
        'Cloud Migration & Optimization',
        'Data Protection & Privacy',
        'Configuration Management'
      ]
    }
  ]

  const openModal = (industry) => {
    setSelectedIndustry(industry)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedIndustry(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver industry-specific solutions tailored to your unique challenges and compliance requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => openModal(industry)}
              className="group relative bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-verto-blue transition-all duration-300 h-80 w-full text-left"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                
                {/* Content */}
                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-verto-blue transition-colors">
                  {industry.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 text-white group-hover:text-verto-blue opacity-70 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all">
                  <span className="font-display font-medium text-sm">Learn More →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedIndustry.image} 
                alt={selectedIndustry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-display font-bold text-4xl text-white mb-2">
                  {selectedIndustry.name}
                </h2>
                <p className="text-white/90 text-lg">
                  {selectedIndustry.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-4">
                  How Verto Wave Helps
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-4">
                  Key Challenges We Solve
                </h3>
                <div className="grid gap-3">
                  {selectedIndustry.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-4">
                  Relevant Solutions
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedIndustry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-verto-blue/5 rounded-lg border border-verto-blue/20">
                      <div className="w-2 h-2 rounded-full bg-verto-blue flex-shrink-0"></div>
                      <span className="text-gray-800 font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-verto-blue to-verto-teal rounded-xl p-6 text-white text-center">
                  <h4 className="font-display font-bold text-xl mb-2">
                    Ready to Transform Your {selectedIndustry.name} IT?
                  </h4>
                  <p className="mb-4 opacity-90">
                    Let's discuss how Verto Wave can help your organization
                  </p>
                  <button className="bg-white text-verto-blue px-8 py-3 rounded-lg font-display font-semibold hover:bg-gray-100 transition-colors">
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Industries
