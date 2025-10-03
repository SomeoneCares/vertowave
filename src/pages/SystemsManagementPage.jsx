import { ArrowLeft, CheckCircle, TrendingUp, Shield, Zap, Users, Settings, Server, Cloud, HardDrive, Database, Network, GitBranch, Monitor, BarChart, Clock, RefreshCcw, BellRing, Package, FileText, Briefcase, Code, Link } from 'lucide-react'
import solutionSystemsManagement from '../assets/solution-infrastructure.png'

const SystemsManagementPage = () => {
  const keyFeatures = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Proactive Monitoring & Alerting",
      description: "Continuously monitor IT infrastructure for performance, availability, and security, with real-time alerts for critical events."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Automated Patch & Update Management",
      description: "Ensure all systems are up-to-date with the latest security patches and software updates, reducing vulnerabilities."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Resource Optimization & Capacity Planning",
      description: "Analyze resource utilization to optimize performance, forecast future needs, and prevent bottlenecks."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance Enforcement",
      description: "Implement and enforce security policies, manage access controls, and ensure compliance with industry regulations."
    }
  ]

  const benefits = [
    { metric: "30%", description: "Reduction in operational costs" },
    { metric: "99.9%", description: "Improvement in system uptime and availability" },
    { metric: "50%", description: "Faster incident resolution times" },
    { metric: "40%", description: "Decrease in security-related incidents" }
  ]

  const technologies = [
    { category: "Monitoring & APM", tools: ["Datadog", "Splunk", "New Relic", "Prometheus"] },
    { category: "Automation & Orchestration", tools: ["Ansible", "Puppet", "Chef", "Terraform"] },
    { category: "Cloud Management", tools: ["AWS Systems Manager", "Azure Arc", "Google Cloud Operations"] },
    { category: "Security & Compliance", tools: ["Tenable", "Qualys", "ServiceNow GRC"] }
  ]

  const integrations = [
    { solution: "Configuration Management", benefit: "Seamless deployment and maintenance of consistent system configurations." },
    { solution: "IT Service Management", benefit: "Streamlined incident, problem, and change management workflows." },
    { solution: "Observability & Dashboarding", benefit: "Centralized visibility into system health and performance metrics." },
    { solution: "Security Governance", benefit: "Enhanced security posture through integrated policy enforcement and threat detection." }
  ]

  const deliverables = [
    "Comprehensive IT infrastructure assessment and strategy",
    "Automated monitoring and alerting systems deployment",
    "Patch and update management policies and implementation",
    "Capacity planning reports and resource optimization recommendations",
    "Security baseline configurations and compliance audits",
    "Incident response playbooks and disaster recovery plans",
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
                IT Operations
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Systems Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ensure the reliability, performance, and security of your entire IT infrastructure with Verto Wave's comprehensive Systems Management solution.
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
                src={solutionSystemsManagement} 
                alt="Systems Management" 
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
              Verto Wave's Systems Management solution provides a holistic approach to managing and optimizing your IT environment. From servers and networks to applications and cloud resources, we ensure your critical systems operate efficiently, securely, and reliably.
            </p>
            <p>
              Our platform centralizes monitoring, automates routine tasks, and provides deep insights into your infrastructure's health, allowing your IT teams to proactively address issues, reduce downtime, and focus on strategic initiatives rather than reactive firefighting.
            </p>
            <p>
              By leveraging advanced analytics and automation, Verto Wave helps you maintain peak performance, enforce compliance, and scale your operations with confidence across hybrid and multi-cloud landscapes.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Optimize Your IT Operations?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's Systems Management solution can enhance your infrastructure's efficiency and resilience.
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

export default SystemsManagementPage

