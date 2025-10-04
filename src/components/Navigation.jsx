import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/verto_wave_logo.webp'

const Navigation = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


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
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Verto Wave" className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Home
            </Link>
            
            <a href="#solutions" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Solutions
            </a>

            <a href="#industries" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Industries
            </a>
            <a href="#resources" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              Resources
            </a>
            <Link to="/about" className="font-display text-verto-dark-gray hover:text-verto-blue transition-colors">
              About Us
            </Link>
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
