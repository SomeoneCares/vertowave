import { ArrowLeft, CheckCircle, Users, Key, ShieldCheck, Fingerprint, ArrowRight } from 'lucide-react'
import solutionIam from '../assets/solution-infrastructure.png'

const IdentityAccessManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Centralized User Management",
      description: "Manage all user identities from a single console, simplifying provisioning, de-provisioning, and lifecycle management."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Single Sign-On (SSO)",
      description: "Provide seamless and secure access to multiple applications with a single set of credentials, enhancing user experience and productivity."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Multi-Factor Authentication (MFA)",
      description: "Strengthen security with multiple authentication factors, protecting against credential theft and unauthorized access."
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Access Governance & Compliance",
      description: "Define, enforce, and audit access policies to ensure compliance with regulatory requirements and internal security standards."
    }
  ]

  const benefits = [
    { metric: "40%", description: "Reduction in identity-related security breaches" },
    { metric: "60%", description: "Faster user onboarding and offboarding processes" },
    { metric: "75%", description: "Improvement in audit readiness and compliance adherence" },
    { metric: "30%", description: "Decrease in help desk calls for password resets" }
  ]

  const technologies = [
    { category: "Identity Providers", tools: ["Okta", "Azure AD", "Ping Identity", "Auth0"] },
    { category: "Access Management", tools: ["CyberArk", "SailPoint", "ForgeRock"] },
    { category: "Privileged Access Management", tools: ["BeyondTrust", "Thycotic"] },
    { category: "Directory Services", tools: ["Active Directory", "LDAP"] }
  ]

  const integrations = [
    { solution: "Security Governance", benefit: "Automated policy enforcement and risk management based on identity context." },
    { solution: "Data Protection", benefit: "Enhanced data security by controlling access to sensitive information." },
    { solution: "Cloud Security", benefit: "Consistent identity and access policies across multi-cloud environments." },
    { solution: "IT Service Management", benefit: "Streamlined user provisioning and access request workflows." }
  ]

  const deliverables = [
    "Comprehensive IAM strategy and roadmap",
    "Implementation of Single Sign-On (SSO) and Multi-Factor Authentication (MFA)",
    "Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) frameworks",
    "Automated user provisioning and de-provisioning workflows",
    "Identity governance and administration (IGA) solutions",
    "Regular access reviews and compliance reporting",
    "Documentation, training, and ongoing support"
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
                Security & Compliance
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Identity & Access Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Securely manage digital identities and control access to resources across your enterprise with Verto Wave's Identity & Access Management solution.
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
                src={solutionIam} 
                alt="Identity & Access Management" 
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
              Verto Wave's Identity & Access Management (IAM) solution provides a unified and robust framework for managing digital identities and controlling access to critical resources. In today's complex IT environments, ensuring that the right users have the right access to the right resources at the right time is paramount for security and operational efficiency.
            </p>
            <p>
              Our IAM platform helps organizations enforce granular access policies, streamline user provisioning and de-provisioning, and enhance security posture by reducing the risk of unauthorized access. We integrate seamlessly with your existing infrastructure, offering a comprehensive approach to identity governance, authentication, and authorization.
            </p>
            <p>
              By centralizing identity management, Verto Wave enables businesses to meet compliance requirements, improve user experience through single sign-on (SSO), and gain real-time visibility into access activities across hybrid and multi-cloud environments.
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1DB4D8]\">
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Strengthen Your Identity & Access Security?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's IAM solution can protect your organization from evolving identity threats and streamline access management.
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

export default IdentityAccessManagementPage

