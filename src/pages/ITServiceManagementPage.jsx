import { ArrowLeft, Ticket, BookText, Package, TriangleAlert, Bug, GitPullRequest, ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react'
import solutionITSM from '../assets/solution-infrastructure.png' // Placeholder for hero image

const ITServiceManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Service Request Management",
      description: "Streamline the handling of user requests for IT services, software, and hardware."
    },
    {
      icon: <BookText className="w-6 h-6" />,
      title: "Knowledge Management",
      description: "Centralize and share IT knowledge to empower users and improve issue resolution."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "IT Asset Management",
      description: "Track and manage the lifecycle of all IT assets, from procurement to disposal."
    },
    {
      icon: <TriangleAlert className="w-6 h-6" />,
      title: "Incident Management",
      description: "Rapidly detect, diagnose, and resolve IT incidents to minimize disruption."
    }
  ]

  const benefits = [
    { metric: "30%", description: "Reduction in operational costs" },
    { metric: "40%", description: "Faster incident resolution times" },
    { metric: "25%", description: "Improvement in user satisfaction" },
    { metric: "20%", description: "Increase in IT service availability" }
  ]

  const technologies = [
    { category: "ITSM Platforms", tools: ["ServiceNow", "Jira Service Management", "BMC Helix ITSM"] },
    { category: "Automation & Orchestration", tools: ["Ansible", "Puppet", "Chef"] },
    { category: "Monitoring & Analytics", tools: ["Splunk", "Datadog", "New Relic"] },
    { category: "Knowledge Bases", tools: ["Confluence", "SharePoint"] }
  ]

  const integrations = [
    { solution: "Configuration Management", benefit: "Synchronized IT asset and configuration data" },
    { solution: "Security Operations", benefit: "Automated incident response and threat remediation" },
    { solution: "Cloud Management", benefit: "Unified service delivery across hybrid cloud environments" },
    { solution: "DevOps & Agile", benefit: "Seamless collaboration between development and operations" }
  ]

  const deliverables = [
    "ITSM strategy and roadmap development",
    "Service catalog design and implementation",
    "Incident, Problem, and Change Management process optimization",
    "Knowledge base creation and content management",
    "IT asset discovery and inventory solutions",
    "Performance monitoring and reporting dashboards",
    "User portal and self-service enablement",
    "Training and adoption programs"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="inline-flex items-center text-gray-600 hover:text-[#1DB4D8] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Solutions
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#1DB4D8]/20 rounded-full text-[#1DB4D8] text-sm font-medium mb-6">
                IT Operations
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                IT Service Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline IT service delivery, enhance user experience, and optimize operational efficiency with comprehensive IT Service Management solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#1DB4D8] text-white rounded-lg font-medium hover:bg-[#1DB4D8]/90 transition-colors">
                  Request Demo
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                  Download Datasheet
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={solutionITSM} 
                alt="IT Service Management" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Solution Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Verto Wave's IT Service Management (ITSM) solution empowers organizations to deliver high-quality IT services efficiently and effectively. By adopting industry best practices and leveraging advanced automation, we help you transform your IT operations from reactive problem-solving to proactive service delivery.
            </p>
            <p>
              Our comprehensive platform covers the entire service lifecycle, from managing service requests and incidents to optimizing IT assets and knowledge. This ensures seamless IT experiences for your users while driving significant operational improvements and cost reductions.
            </p>
            <p>
              We integrate seamlessly with your existing infrastructure and other Verto Wave solutions, providing a unified approach to managing your complex IT environment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1DB4D8]/10 rounded-lg flex items-center justify-center text-[#1DB4D8] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantified Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Quantified Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#1DB4D8] mb-3">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Vendors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Technologies & Vendors Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#1DB4D8] mr-2 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Other Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">
            Integration with Verto Wave Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1DB4D8]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{integration.solution}</h3>
                <p className="text-gray-600">{integration.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">What You'll Get</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="grid md:grid-cols-2 gap-4">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#1DB4D8] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1DB4D8] to-[#1DB4D8]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Transform Your IT Service Delivery?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our IT Service Management solution can help you achieve your operational excellence goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Verto Wave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default ITServiceManagementPage

