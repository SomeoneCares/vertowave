import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/verto_wave_logo.png'

const Navigation = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  const solutionCategories = [
    {
      name: 'Infrastructure & Operations',
      solutions: ['Configuration Management', 'Systems Management', 'Network Management', 'IT Asset Management']
    },
    {
      name: 'Security & Compliance',
      solutions: ['Identity & Access Management', 'Security Governance', 'Resilience & Backup', 'Zero Trust Frameworks', 'Data Protection & Privacy']
    },
    {
      name: 'Service Delivery & Automation',
      solutions: ['IT Service Management', 'Automation & Orchestration', 'DevOps & CI/CD']
    },
    {
      name: 'Cloud & Modernization',
      solutions: ['Cloud Migration & Optimization', 'Business Service Mapping']
    },
    {
      name: 'Insights & Intelligence',
      solutions: ['Observability & Dashboarding', 'Productivity Analytics', 'AIOps Platform']
    }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Verto Wave" className="h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Home
            </a>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors flex items-center">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-screen max-w-5xl">
                  <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-100">
                  <div className="grid grid-cols-5 gap-6">
                    {solutionCategories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="font-display font-semibold text-sm text-verto-blue mb-3">
                          {category.name}
                        </h3>
                        <ul className="space-y-2">
                          {category.solutions.map((solution, sIdx) => (
                            <li key={sIdx}>
                              <a
                                href={`#${solution.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm text-gray-600 hover:text-verto-blue transition-colors"
                              >
                                {solution}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a href="#all-solutions" className="text-verto-blue hover:underline font-display font-medium">
                      View All Solutions →
                    </a>
                  </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#industries" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Industries
            </a>
            <a href="#resources" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Resources
            </a>
            <a href="#about" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              About Us
            </a>
            <a href="#contact" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="font-display border-verto-blue text-verto-blue hover:bg-verto-blue hover:text-white"
            >
              Contact Sales
            </Button>
            <Button className="font-display bg-verto-blue hover:bg-verto-blue-dark text-white">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-verto-dark-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="font-display text-verto-dark-gray hover:text-verto-blue">
                Home
              </a>
              <a href="#solutions" className="font-display text-verto-dark-gray hover:text-verto-blue">
                Solutions
              </a>
              <a href="#industries" className="font-display text-verto-dark-gray hover:text-verto-blue">
                Industries
              </a>
              <a href="#resources" className="font-display text-verto-dark-gray hover:text-verto-blue">
                Resources
              </a>
              <a href="#about" className="font-display text-verto-dark-gray hover:text-verto-blue">
                About Us
              </a>
              <a href="#contact" className="font-display text-verto-dark-gray hover:text-verto-blue">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-verto-blue text-verto-blue">
                  Contact Sales
                </Button>
                <Button className="w-full bg-verto-blue hover:bg-verto-blue-dark text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
