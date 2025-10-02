import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import challengeLegacy from '../assets/challenge-legacy.webp'
import challengeSecurity from '../assets/challenge-security.webp'
import challengeCloud from '../assets/challenge-cloud-migration.webp'
import challengeObservability from '../assets/challenge-observability.webp'
import challengeAutomation from '../assets/challenge-automation.webp'
import challengeAssets from '../assets/challenge-asset-management.webp'
import challengeServiceDesk from '../assets/challenge-service-desk.webp'
import challengeBackup from '../assets/challenge-backup.webp'
import challengeNetwork from '../assets/challenge-network.webp'
import challengeDevOps from '../assets/challenge-devops.webp'
import challengeZeroTrust from '../assets/challenge-zerotrust.webp'
import challengeAIOps from '../assets/challenge-aiops.webp'
import challengeCompliance from '../assets/challenge-compliance.webp'
import challengeServiceMapping from '../assets/challenge-service-mapping.webp'
import challengeProductivity from '../assets/challenge-productivity.webp'

const Challenges = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const challenges = [
    {
      image: challengeLegacy,
      title: 'Legacy Systems Holding You Back?',
      description: 'Outdated infrastructure hindering growth and innovation. Maintenance costs skyrocketing while performance declines.',
      link: 'Configuration Management',
      category: 'Infrastructure & Operations'
    },
    {
      image: challengeSecurity,
      title: 'Security Threats Keeping You Up?',
      description: 'Increasing cyber risks and compliance requirements. Data breaches and vulnerabilities threatening your business.',
      link: 'Security Solutions',
      category: 'Security & Compliance'
    },
    {
      image: challengeCloud,
      title: 'Cloud Migration Feels Overwhelming?',
      description: 'Complex cloud transformation with unclear ROI. Managing multi-cloud environments and optimizing costs.',
      link: 'Cloud Migration & Optimization',
      category: 'Cloud & Modernization'
    },
    {
      image: challengeObservability,
      title: "Can't See What's Happening in Your IT?",
      description: 'Lack of visibility across distributed infrastructure. Reactive problem-solving instead of proactive monitoring.',
      link: 'Observability & Dashboarding',
      category: 'Insights & Intelligence'
    },
    {
      image: challengeAutomation,
      title: 'Manual Processes Slowing You Down?',
      description: 'Repetitive manual tasks consuming valuable time. Inconsistent service delivery and human errors.',
      link: 'Automation & Orchestration',
      category: 'Service Delivery & Automation'
    },
    {
      image: challengeAssets,
      title: 'IT Assets Out of Control?',
      description: 'Unknown or unmanaged devices on your network. Software license compliance risks and wasted spend.',
      link: 'IT Asset Management',
      category: 'Infrastructure & Operations'
    },
    {
      image: challengeServiceDesk,
      title: 'Struggling with IT Service Requests?',
      description: 'Overwhelming ticket volumes and long resolution times. Poor user experience with IT support.',
      link: 'IT Service Management',
      category: 'Service Delivery & Automation'
    },
    {
      image: challengeBackup,
      title: 'Data Loss Keeping You Up at Night?',
      description: 'Inadequate backup and disaster recovery plans. Risk of ransomware and data corruption.',
      link: 'Resilience & Backup',
      category: 'Security & Compliance'
    },
    {
      image: challengeNetwork,
      title: 'Network Performance Issues?',
      description: 'Slow network speeds affecting productivity. Frequent outages and connectivity problems.',
      link: 'Network Management',
      category: 'Infrastructure & Operations'
    },
    {
      image: challengeDevOps,
      title: 'DevOps Pipeline Bottlenecks?',
      description: 'Slow release cycles and deployment failures. Lack of automation in CI/CD pipelines.',
      link: 'DevOps & CI/CD',
      category: 'Service Delivery & Automation'
    },
    {
      image: challengeZeroTrust,
      title: 'Zero Trust Security Gaps?',
      description: 'Traditional perimeter security no longer sufficient. Need for identity-based access controls.',
      link: 'Zero Trust Frameworks',
      category: 'Security & Compliance'
    },
    {
      image: challengeAIOps,
      title: 'IT Incidents Impacting Business?',
      description: 'Slow incident detection and resolution. Lack of predictive insights to prevent outages.',
      link: 'AIOps Platform',
      category: 'Insights & Intelligence'
    },
    {
      image: challengeCompliance,
      title: 'Compliance and Governance Concerns?',
      description: 'Difficulty meeting regulatory requirements. Lack of visibility into security and compliance posture.',
      link: 'Security Governance',
      category: 'Security & Compliance'
    },
    {
      image: challengeServiceMapping,
      title: 'Business Service Dependencies Unknown?',
      description: 'Unclear impact of IT changes on business services. Difficulty planning maintenance windows.',
      link: 'Business Service Mapping',
      category: 'Cloud & Modernization'
    },
    {
      image: challengeProductivity,
      title: 'Employee Productivity Unclear?',
      description: 'No visibility into how technology impacts workforce efficiency. Difficulty identifying improvement areas.',
      link: 'Productivity Analytics',
      category: 'Insights & Intelligence'
    }
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

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

        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-verto-blue hover:text-white transition-all duration-300 hidden lg:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-verto-blue hover:text-white transition-all duration-300 hidden lg:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-2 lg:px-12 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group snap-start"
              >
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-verto-blue/10 text-verto-blue text-xs font-display font-semibold rounded-full mb-4">
                  {challenge.category}
                </div>

                {/* Challenge Image */}
                <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <img 
                    src={challenge.image} 
                    alt={challenge.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Challenge Title */}
                <h3 className="font-display font-semibold text-2xl text-verto-dark-gray mb-4">
                  {challenge.title}
                </h3>
                
                {/* Challenge Description */}
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                  {challenge.description}
                </p>
                
                {/* CTA Link */}
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

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {Array.from({ length: Math.ceil(challenges.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="text-center mt-6 lg:hidden">
          <p className="text-sm text-gray-500">
            ← Swipe to see more challenges →
          </p>
        </div>
      </div>
    </section>
  )
}

export default Challenges
