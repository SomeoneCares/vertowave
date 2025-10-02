import { Building2, Heart, Factory, ShoppingCart, Laptop, Landmark } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banking and finance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'HIPAA-compliant IT infrastructure and security',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industry 4.0 and operational technology solutions',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      description: 'Scalable infrastructure for digital commerce',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Laptop,
      name: 'Technology & SaaS',
      description: 'Cloud-native solutions for tech companies',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Landmark,
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
              className="group relative bg-white rounded-xl border-2 border-gray-100 p-8 hover:border-verto-blue transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2 group-hover:text-verto-blue transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 text-verto-blue opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all">
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
