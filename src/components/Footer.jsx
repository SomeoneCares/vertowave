import { Linkedin, Twitter, Youtube } from 'lucide-react'
import logo from '../assets/verto_wave_logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Infrastructure & Operations', href: '#infrastructure' },
        { name: 'Security & Compliance', href: '#security' },
        { name: 'Service Delivery & Automation', href: '#service-delivery' },
        { name: 'Cloud & Modernization', href: '#cloud' },
        { name: 'Insights & Intelligence', href: '#insights' },
        { name: 'View All Solutions', href: '#all-solutions' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Partners', href: '#partners' },
        { name: 'News & Press', href: '#news' },
        { name: 'Contact Us', href: '#contact' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Whitepapers', href: '#whitepapers' },
        { name: 'Webinars', href: '#webinars' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Support', href: '#support' }
      ]
    }
  }

  return (
    <footer className="bg-verto-dark-gray text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Solutions */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">{footerLinks.solutions.title}</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-verto-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">{footerLinks.company.title}</h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-verto-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">{footerLinks.resources.title}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-verto-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center lg:items-start">
              <img src={logo} alt="Verto Wave" className="h-8 mb-2" />
              <p className="text-gray-400 text-sm">IT Transformation Done Right.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-verto-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-verto-blue transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-verto-blue transition-colors">
                Cookie Policy
              </a>
              <a href="#security" className="hover:text-verto-blue transition-colors">
                Security Statement
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>&copy; {currentYear} Verto Wave. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
