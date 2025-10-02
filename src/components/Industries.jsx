import industryFinancial from '../assets/industry-financial.png'
import industryHealthcare from '../assets/industry-healthcare.png'
import industryManufacturing from '../assets/industry-manufacturing.png'
import industryRetail from '../assets/industry-retail.png'
import industryOilGas from '../assets/industry-oil-gas.png'
import industryGovernment from '../assets/industry-government.png'

const Industries = () => {
  const industries = [
    {
      image: industryFinancial,
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banking and finance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      image: industryHealthcare,
      name: 'Healthcare',
      description: 'HIPAA-compliant IT infrastructure and security',
      color: 'from-red-500 to-red-600'
    },
    {
      image: industryManufacturing,
      name: 'Manufacturing',
      description: 'Industry 4.0 and operational technology solutions',
      color: 'from-orange-500 to-orange-600'
    },
    {
      image: industryRetail,
      name: 'Retail & E-commerce',
      description: 'Scalable infrastructure for digital commerce',
      color: 'from-purple-500 to-purple-600'
    },
    {
      image: industryOilGas,
      name: 'Oil & Gas',
      description: 'Digital transformation and IoT solutions for energy sector',
      color: 'from-green-500 to-green-600'
    },
    {
      image: industryGovernment,
      name: 'Government & Public Sector',
      description: 'Secure, compliant solutions for public services',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

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
            <a
              key={index}
              href={`#${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-verto-blue transition-all duration-300 h-80"
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
                  <span className="font-display font-medium text-sm">Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
