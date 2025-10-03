import { ArrowLeft, Activity, ShieldCheck, Settings, BarChart2, CheckCircle, ArrowRight } from 'lucide-react'
import solutionNetwork from '../assets/solution-infrastructure.png' // Assuming a relevant image for network management

const NetworkManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Network Monitoring",
      description: "Continuous monitoring of network devices, traffic, and application performance across all environments."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Advanced Security Analytics",
      description: "Detect and respond to network threats with AI-powered anomaly detection and behavioral analysis."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automated Configuration & Provisioning",
      description: "Streamline network device configuration, updates, and policy enforcement with intelligent automation."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Identify bottlenecks, optimize traffic flow, and ensure high availability for critical business applications."
    }
  ]

  const benefits = [
    { metric: "30%", description: "Reduction in network downtime" },
    { metric: "40%", description: "Faster incident resolution" },
    { metric: "25%", description: "Improvement in network security posture" },
    { metric: "20%", description: "Lower operational costs" }
  ]

  const technologies = [
    { category: "Network Monitoring", tools: ["Cisco DNA Center", "SolarWinds", "PRTG Network Monitor"] },
    { category: "Security & Analytics", tools: ["Palo Alto Networks", "Fortinet", "Splunk Enterprise Security"] },
    { category: "Cloud Networking", tools: ["AWS Transit Gateway", "Azure Virtual WAN", "Google Cloud VPC"] },
    { category: "Automation & Orchestration", tools: ["Ansible Network", "Puppet Enterprise", "Chef Infra"] }
  ]

  const integrations = [
    { solution: "Configuration Management", benefit: "Synchronized network device configurations and policies" },
    { solution: "IT Service Management", benefit: "Automated incident creation and change requests based on network events" },
    { solution: "Observability & Dashboarding", benefit: "Unified view of network health alongside application and infrastructure metrics" },
    { solution: "Security Governance", benefit: "Consistent application of network security policies and compliance checks" }
  ]

  const deliverables = [
    "Comprehensive network assessment and strategy report",
    "Deployment and configuration of network monitoring tools",
    "Implementation of automated network provisioning workflows",
    "Customized network security policies and threat detection rules",
    "Performance optimization recommendations and traffic shaping configurations",
    "Training and knowledge transfer for network operations teams",
    "Ongoing support and maintenance services"
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
                Network & Connectivity
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Network Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Gain complete visibility and control over your network infrastructure with Verto Wave's advanced Network Management solution, ensuring optimal performance, security, and reliability.
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
                src={solutionNetwork} 
                alt="Network Management Dashboard" 
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
              Verto Wave's Network Management solution provides a unified platform for monitoring, managing, and optimizing your entire network infrastructure. From on-premises data centers to multi-cloud environments, our solution offers real-time insights into network performance, security posture, and device health.
            </p>
            <p>
              Leveraging AI-driven analytics and automation, we help organizations proactively identify and resolve network issues, reduce downtime, and enhance user experience. Our comprehensive approach covers everything from device configuration and traffic analysis to security policy enforcement and compliance reporting.
            </p>
            <p>
              By integrating with your existing IT ecosystem, Verto Wave enables seamless orchestration of network operations, empowering your teams to manage complex networks with greater efficiency and precision.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Master Your Network Infrastructure?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's Network Management solution can bring clarity, control, and efficiency to your complex network environment.
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

export default NetworkManagementPage

