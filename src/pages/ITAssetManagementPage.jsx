import { ArrowLeft, CheckCircle, Scan, LifeBuoy, Scale, ShieldCheck, ArrowRight } from 'lucide-react'
import solutionItam from '../assets/solution-infrastructure.png'

const ITAssetManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Automated Asset Discovery",
      description: "Automatically discover and inventory all hardware, software, and cloud assets across your network, ensuring a complete and accurate asset register."
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: "Full Lifecycle Management",
      description: "Manage assets from procurement and deployment through maintenance, upgrades, and eventual retirement, optimizing their value at every stage."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Software License Optimization",
      description: "Track software usage, manage licenses, and ensure compliance to avoid costly penalties and optimize software spend."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Compliance & Risk Management",
      description: "Monitor asset configurations against regulatory standards and internal policies, identifying vulnerabilities and reducing security risks."
    }
  ]

  const benefits = [
    { metric: "25%", description: "Reduction in IT operational costs through optimized asset utilization and streamlined processes." },
    { metric: "90%", description: "Improvement in software license compliance, avoiding penalties and unexpected expenses." },
    { metric: "40%", description: "Faster incident resolution and problem diagnosis due to accurate asset data." },
    { metric: "30%", description: "Enhanced security posture by identifying and remediating unauthorized or vulnerable assets." }
  ]

  const technologies = [
    { category: "Asset Discovery", tools: ["Tanium", "ServiceNow Discovery", "SCCM"] },
    { category: "ITAM Platforms", tools: ["Flexera", "Snow Software", "Ivanti", "ServiceNow ITAM"] },
    { category: "Cloud Asset Management", tools: ["AWS Config", "Azure Cost Management", "Google Cloud Asset Inventory"] },
    { category: "Security & Compliance", tools: ["Qualys", "Tenable", "Splunk"] }
  ]

  const integrations = [
    { solution: "Systems Management", benefit: "Unified visibility and control over asset health and performance." },
    { solution: "Security Governance", benefit: "Automated enforcement of security policies based on asset data." },
    { solution: "IT Service Management", benefit: "Seamless integration with incident, problem, and change management processes." },
    { solution: "Financial Management", benefit: "Accurate cost allocation and budgeting based on asset depreciation and usage." }
  ]

  const deliverables = [
    "Comprehensive ITAM strategy and implementation roadmap",
    "Automated asset discovery and inventory solutions",
    "Software license management and optimization programs",
    "Compliance reporting and audit readiness frameworks",
    "Asset lifecycle management workflows and policies",
    "Customized dashboards and analytics for asset insights",
    "Training and support for ITAM best practices"
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
                Infrastructure & Operations
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                IT Asset Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Gain complete visibility and control over your IT assets, optimizing their lifecycle from procurement to disposal for enhanced efficiency, cost savings, and compliance.
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
                src={solutionItam} 
                alt="IT Asset Management" 
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
              Verto Wave's IT Asset Management (ITAM) solution provides a comprehensive framework for managing your organization's hardware, software, and cloud assets throughout their entire lifecycle. Our platform enables you to track, monitor, and optimize every asset, ensuring accountability, maximizing value, and minimizing risks. By centralizing asset data and automating key processes, we help you make informed strategic decisions, reduce operational costs, improve compliance, and bolster security across your diverse IT landscape.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Take Control of Your IT Assets Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's IT Asset Management solution can transform your asset visibility, optimize costs, and strengthen your security posture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Download Our ITAM Whitepaper
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

export default ITAssetManagementPage

