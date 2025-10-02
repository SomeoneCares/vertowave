import { ArrowRight } from 'lucide-react'
import challengeLegacy from '../assets/challenge-legacy.png'
import challengeSecurity from '../assets/challenge-security.png'
import challengeCloud from '../assets/challenge-cloud-migration.png'

const Challenges = () => {
  const challenges = [
    {
      image: challengeLegacy,
      title: 'Legacy Systems Holding You Back?',
      description: 'Outdated infrastructure hindering growth and innovation. Maintenance costs skyrocketing while performance declines.',
      link: 'Configuration Management Solutions',
      color: 'text-blue-600'
    },
    {
      image: challengeSecurity,
      title: 'Security Threats Keeping You Up?',
      description: 'Increasing cyber risks and compliance requirements. Data breaches and vulnerabilities threatening your business.',
      link: 'Security Solutions',
      color: 'text-red-600'
    },
    {
      image: challengeCloud,
      title: 'Cloud Migration Feels Overwhelming?',
      description: 'Complex cloud transformation with unclear ROI. Managing multi-cloud environments and optimizing costs.',
      link: 'Cloud Solutions',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-verto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Common IT Challenges We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand the complex challenges facing modern IT organizations. Our solutions are designed to address your most pressing concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <img 
                  src={challenge.image} 
                  alt={challenge.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="font-display font-semibold text-2xl text-verto-dark-gray mb-4">
                {challenge.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {challenge.description}
              </p>
              
              <a
                href={`#${challenge.link.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-verto-blue hover:text-verto-blue-dark font-display font-medium group-hover:translate-x-2 transition-transform"
              >
                See {challenge.link}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Challenges
