import { useState } from 'react'
import { X, MapPin, Clock, Users, Upload, Send, Briefcase, ArrowRight } from 'lucide-react'

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null
  })

  const openPositions = [
    {
      id: 1,
      title: 'Senior Solutions Architect',
      department: 'Technology',
      location: 'Remote / Cairo, Egypt',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the design and implementation of comprehensive IT solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience in solution architecture',
        'Strong knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with enterprise integration patterns',
        'Excellent communication and leadership skills'
      ]
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines, infrastructure automation, and cloud deployment strategies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Proficiency in Docker, Kubernetes, and cloud platforms',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash, PowerShell)'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Consultant',
      department: 'Security',
      location: 'Remote / Dubai, UAE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Provide cybersecurity consulting services and implement security frameworks for clients.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security frameworks (ISO 27001, NIST)',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive business growth by identifying new opportunities and building client relationships.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '3+ years of B2B sales experience in IT services',
        'Strong networking and relationship-building skills',
        'Understanding of IT solutions and services',
        'Excellent presentation and communication skills'
      ]
    },
    {
      id: 5,
      title: 'Cloud Migration Specialist',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead cloud migration projects and help clients optimize their cloud infrastructure.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of cloud migration experience',
        'Expertise in AWS, Azure, or Google Cloud',
        'Experience with migration tools and methodologies',
        'Strong project management skills'
      ]
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Design intuitive and engaging user interfaces for our digital solutions and client projects.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '2+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing design skills',
        'Understanding of user research and testing'
      ]
    }
  ]

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsModalOpen(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      cv: null
    })
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-verto-blue-dark to-verto-teal-dark opacity-80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${new URL('../assets/hero-careers.webp', import.meta.url).href})` }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Be part of a dynamic team that's transforming IT infrastructure and driving digital innovation across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-white text-verto-blue hover:bg-gray-100 font-display font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Send Your CV
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#open-positions"
                className="border-2 border-white text-white hover:bg-white hover:text-verto-blue font-display font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits and opportunities that make Verto Wave an exceptional place to build your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented professionals in a supportive, inclusive environment that values teamwork and innovation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career with continuous learning, professional development, and challenging projects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-verto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Flexible Work</h3>
              <p className="text-gray-600">Enjoy flexible working arrangements, remote options, and a healthy work-life balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to advance your professional journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray">{position.title}</h3>
                  <span className="bg-verto-blue/10 text-verto-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {position.experience}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {position.department}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-verto-dark-gray mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-verto-blue rounded-full mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={openModal}
                  className="w-full bg-verto-blue text-white hover:bg-verto-blue-dark font-display font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display font-bold text-2xl text-verto-dark-gray">Send Your CV</h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                      Position of Interest
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((position) => (
                        <option key={position.id} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                    Years of Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verto-blue focus:border-transparent"
                    placeholder="Tell us about yourself and why you're interested in joining Verto Wave..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-verto-dark-gray mb-2">
                    Upload CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-verto-blue transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Click to upload or drag and drop your CV
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX (Max 10MB)
                    </p>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      id="cv-upload"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="inline-block mt-2 bg-verto-blue text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-verto-blue-dark transition-colors"
                    >
                      Choose File
                    </label>
                    {formData.cv && (
                      <p className="text-sm text-verto-blue mt-2">
                        Selected: {formData.cv.name}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-verto-blue text-white hover:bg-verto-blue-dark font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CareersPage
