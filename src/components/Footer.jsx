import { Linkedin, Twitter, Youtube } from 'lucide-react'
import logo from '../assets/vw white.png'

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
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <img src={logo} alt="Verto Wave" className="h-8 mb-3" />
            <p className="text-gray-400 text-sm mb-4">IT Transformation Done Right.</p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-verto-blue flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-bold text-base mb-4">{footerLinks.solutions.title}</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.links.slice(0, 4).map((link, index) => (
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

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-base mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-2">
              {footerLinks.company.links.slice(0, 4).map((link, index) => (
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

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-base mb-4">{footerLinks.resources.title}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.links.slice(0, 4).map((link, index) => (
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

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Verto Wave. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-verto-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-verto-blue transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-verto-blue transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
