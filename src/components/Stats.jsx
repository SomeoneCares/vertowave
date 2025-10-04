import { Layers, Building, Users, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Layers,
      number: '23',
      label: 'Comprehensive Solutions',
      description: 'Across 6 strategic categories'
    },
    {
      icon: Building,
      number: '6',
      label: 'Industries Served',
      description: 'Specialized expertise'
    },
    {
      icon: Users,
      number: '100+',
      label: 'Satisfied Clients',
      description: 'Worldwide partnerships'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'Always here to help'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-verto-blue/10 flex items-center justify-center group-hover:bg-verto-blue group-hover:scale-110 transition-all">
                  <stat.icon className="h-8 w-8 text-verto-blue group-hover:text-white transition-colors" />
                </div>
              </div>
              
              {/* Number */}
              <div className="font-display font-bold text-5xl lg:text-6xl text-verto-blue mb-2">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="font-display font-semibold text-xl text-verto-dark-gray mb-1">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
