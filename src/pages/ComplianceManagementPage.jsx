import { ArrowLeft, CheckCircle, Shield, FileText, BarChart, Lightbulb, ArrowRight } from 'lucide-react'
import solutionCompliance from '../assets/solution-infrastructure.png' // Placeholder image, assuming it will be created/available

const ComplianceManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Policy Enforcement",
      description: "Automatically apply and enforce compliance policies across systems and data."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Real-time Compliance Monitoring",
      description: "Continuously monitor systems and activities for compliance deviations."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Centralized Audit & Reporting",
      description: "Generate comprehensive audit trails and reports for regulatory bodies and internal stakeholders."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Risk Assessment & Mitigation",
      description: "Identify, assess, and mitigate compliance-related risks proactively."
    }
  ]

  const benefits = [
    { metric: "60%", description: "Reduction in Audit Preparation Time" },
    { metric: "85%", description: "Improvement in Regulatory Adherence" },
    { metric: "40%", description: "Decrease in Compliance-Related Fines" },
    { metric: "75%", description: "Faster Identification of Compliance Gaps" }
  ]

  const technologies = [
    { category: "Regulatory Intelligence", tools: ["Thomson Reuters Regulatory Intelligence", "Wolters Kluwer"] },
    { category: "GRC Platforms", tools: ["ServiceNow GRC", "Archer", "MetricStream"] },
    { category: "Cloud Compliance", tools: ["AWS Audit Manager", "Azure Compliance Manager", "Google Cloud Security Command Center"] },
    { category: "Data Privacy", tools: ["OneTrust", "TrustArc"] }
  ]

  const integrations = [
    { solution: "Security Governance", benefit: "Automated security policy enforcement and risk management." },
    { solution: "IT Service Management", benefit: "Streamlined incident and change management for compliance-related issues." },
    { solution: "Data Governance", benefit: "Ensure data privacy and protection standards are met across all data assets." },
    { solution: "Audit & Assurance", benefit: "Provide real-time data and reports for internal and external audits." }
  ]

  const deliverables = [
    "Comprehensive compliance strategy and roadmap",
    "Automated compliance workflows and controls implementation",
    "Real-time compliance dashboards and alerts",
    "Regular risk assessments and mitigation plans",
    "Training and support for compliance teams",
    "Integration with existing GRC and IT systems",
    "Documentation of policies, procedures, and evidence"
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
                Governance, Risk & Compliance
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Compliance Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Automate, monitor, and enforce regulatory compliance across your organization with Verto Wave's comprehensive Compliance Management solution.
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
                src={solutionCompliance} 
                alt="Compliance Management" 
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
              Verto Wave's Compliance Management solution provides a robust framework for organizations to navigate the complex landscape of regulatory requirements, internal policies, and industry standards. Our platform centralizes compliance efforts, automates monitoring, and streamlines reporting, significantly reducing the burden of manual compliance tasks.
            </p>
            <p>
              By leveraging advanced analytics and real-time data, we empower businesses to proactively identify and mitigate compliance risks, ensure adherence to evolving regulations like GDPR, HIPAA, and ISO 27001, and foster a culture of continuous compliance. This leads to enhanced operational efficiency, reduced legal exposure, and strengthened stakeholder trust.
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
          <div className="prose prose-lg max-w-none text-gray-600 text-center mb-8">
            <p>Verto Wave's Compliance Management solution seamlessly integrates with other Verto Wave offerings to provide a holistic approach to your enterprise needs:</p>
          </div>
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
          <h2 className="text-4xl font-bold mb-6 font-display">Achieve Unwavering Compliance with Verto Wave</h2>
          <p className="text-xl mb-8 text-white/90">
            Protect your organization from regulatory penalties and reputational damage. Discover how our Compliance Management solution can simplify your compliance journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule a Compliance Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Explore Compliance Case Studies
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

export default ComplianceManagementPage

