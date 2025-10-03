import { ArrowLeft, CheckCircle, TrendingUp, Shield, Zap, Users, ArrowRight } from 'lucide-react'
import solutionInfrastructure from '../assets/solution-infrastructure.png'

const ConfigurationManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Configuration",
      description: "Automatically deploy and maintain consistent configurations across all infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against industry standards and internal policies"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Drift Detection",
      description: "Identify and remediate configuration drift before it causes issues"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Version Control",
      description: "Track all configuration changes with full audit trails and rollback capabilities"
    }
  ]

  const benefits = [
    { metric: "70%", description: "Reduction in configuration errors" },
    { metric: "80%", description: "Improvement in compliance rates" },
    { metric: "60%", description: "Faster deployment times" },
    { metric: "50%", description: "Decrease in security incidents" }
  ]

  const technologies = [
    { category: "Enterprise Platforms", tools: ["StackX", "Microsoft", "VMware", "Broadcom"] },
    { category: "Cloud Platforms", tools: ["StackX", "AWS", "Microsoft", "VMware"] },
    { category: "Analytics & Intelligence", tools: ["StackX", "Elastic", "SAS", "Microsoft"] },
    { category: "Security", tools: ["StackX", "Palo Alto Networks", "Microsoft", "Broadcom"] }
  ]

  const integrations = [
    { solution: "Systems Management", benefit: "Unified infrastructure visibility" },
    { solution: "Security Governance", benefit: "Automated security policy enforcement" },
    { solution: "IT Service Management", benefit: "Change management integration" },
    { solution: "Observability & Dashboarding", benefit: "Real-time configuration monitoring" }
  ]

  const deliverables = [
    "Configuration management strategy and roadmap",
    "Automated configuration deployment pipelines",
    "Compliance monitoring dashboards",
    "Configuration drift detection and remediation",
    "Version control and audit trail system",
    "Documentation and runbooks",
    "Team training and knowledge transfer"
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
                Configuration Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Automate and standardize configuration across your entire infrastructure with real-time compliance monitoring and drift detection.
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
                src={solutionInfrastructure} 
                alt="Configuration Management" 
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
              Verto Wave's Configuration Management solution provides comprehensive automation and governance for your IT infrastructure configuration. Our platform enables organizations to maintain consistent, compliant, and secure configurations across on-premises, cloud, and hybrid environments.
            </p>
            <p>
              By implementing infrastructure as code (IaC) principles and automated compliance checking, we help you eliminate configuration drift, reduce human error, and accelerate deployment cycles while maintaining security and compliance standards.
            </p>
            <p>
              Our solution integrates seamlessly with your existing tools and workflows, providing a unified platform for configuration management across your entire technology stack.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Transform Your Configuration Management?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our Configuration Management solution can help you achieve your infrastructure goals.
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

export default ConfigurationManagementPage
