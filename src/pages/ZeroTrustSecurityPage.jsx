import { ArrowLeft, ShieldCheck, Lock, Network, Monitor, Database, ArrowRight, CheckCircle } from 'lucide-react'
import solutionZeroTrust from '../assets/solution-zero-trust.png'

const ZeroTrustSecurityPage = () => {
  const keyFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Strong Identity Verification",
      description: "Verify every user and device with multi-factor authentication and adaptive access policies."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Least Privilege Access",
      description: "Grant users and devices only the minimum access required to perform their tasks."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Micro-segmentation",
      description: "Isolate workloads and applications to limit lateral movement of threats within the network."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Continuous Monitoring & Analytics",
      description: "Monitor all access attempts and network activity in real-time for anomalies and threats."
    }
  ]

  const benefits = [
    { metric: "90%", description: "Reduction in unauthorized access attempts" },
    { metric: "75%", description: "Faster detection and response to breaches" },
    { metric: "60%", description: "Improvement in regulatory compliance posture" },
    { metric: "50%", description: "Decrease in data exfiltration risks" }
  ]

  const technologies = [
    { category: "Identity & Access Management", tools: ["Okta", "Azure AD", "Ping Identity"] },
    { category: "Network Security", tools: ["Palo Alto Networks", "Cisco Secure", "Zscaler"] },
    { category: "Endpoint Security", tools: ["CrowdStrike", "SentinelOne", "Microsoft Defender"] },
    { category: "Data Security", tools: ["Varonis", "Forcepoint", "Netskope"] }
  ]

  const integrations = [
    { solution: "Security Operations Center (SOC)", benefit: "Enhanced threat intelligence and incident response" },
    { solution: "Cloud Security Posture Management (CSPM)", benefit: "Consistent security policies across cloud environments" },
    { solution: "Data Loss Prevention (DLP)", benefit: "Prevent sensitive data exfiltration with granular controls" },
    { solution: "Managed Detection and Response (MDR)", benefit: "24/7 expert monitoring and proactive threat hunting" }
  ]

  const deliverables = [
    "Zero Trust architecture design and implementation roadmap",
    "Identity and access management (IAM) integration",
    "Micro-segmentation strategy and deployment",
    "Continuous monitoring and analytics dashboards",
    "Policy enforcement and automation workflows",
    "Security awareness training for employees",
    "Documentation and operational runbooks"
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
                Cybersecurity & Compliance
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Zero Trust Security
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Implement a robust Zero Trust framework to secure your enterprise, ensuring every access request is verified, regardless of origin.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#1DB4D8] text-white rounded-lg font-medium hover:bg-[#1DB4D8]/90 transition-colors">
                  Request Demo
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                  Download Whitepaper
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={solutionZeroTrust} 
                alt="Zero Trust Security" 
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
              Verto Wave's Zero Trust Security solution redefines enterprise security by eliminating implicit trust and continuously validating every stage of digital interaction. In today's complex threat landscape, traditional perimeter-based security is no longer sufficient. Our framework ensures that no user, device, or application is trusted by default, regardless of whether they are inside or outside the network.
            </p>
            <p>
              We help organizations implement a comprehensive Zero Trust model that encompasses identity verification, device posture assessment, least privilege access, micro-segmentation, and continuous monitoring. This proactive approach minimizes the attack surface, prevents unauthorized access, and limits the impact of potential breaches.
            </p>
            <p>
              By integrating advanced security technologies and intelligent analytics, Verto Wave empowers your business to operate securely in any environment, from on-premises data centers to multi-cloud infrastructures, without compromising agility or user experience.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Fortify Your Defenses with Zero Trust?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to learn how Verto Wave can help you implement a robust Zero Trust Security framework.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Explore Use Cases
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

export default ZeroTrustSecurityPage

