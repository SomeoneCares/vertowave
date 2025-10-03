import { ArrowLeft, CheckCircle, Activity, Lightbulb, GitBranch, BarChart2, ArrowRight } from 'lucide-react'
import solutionITServiceIntelligence from '../assets/solution-infrastructure.png'

const ITServiceIntelligencePage = () => {
  const keyFeatures = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Service Monitoring",
      description: "Gain a unified view of service health with real-time monitoring across all IT components and dependencies."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI-Powered Anomaly Detection",
      description: "Automatically detect deviations from normal behavior and predict potential service disruptions before they impact users."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Root Cause Analysis",
      description: "Accelerate problem resolution with intelligent correlation of events and automated root cause identification."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Identify performance bottlenecks and optimize resource utilization to ensure optimal service delivery."
    }
  ]

  const benefits = [
    { metric: "40%", description: "Reduction in critical incidents" },
    { metric: "60%", description: "Faster mean time to resolution (MTTR)" },
    { metric: "25%", description: "Improvement in IT operational efficiency" },
    { metric: "30%", description: "Increase in end-user satisfaction" }
  ]

  const technologies = [
    { category: "Monitoring Platforms", tools: ["Splunk ITSI", "Dynatrace", "AppDynamics", "New Relic"] },
    { category: "AIOps & Analytics", tools: ["Moogsoft", "BigPanda", "LogicMonitor"] },
    { category: "Cloud Observability", tools: ["AWS CloudWatch", "Azure Monitor", "Google Cloud Operations"] },
    { category: "Data Visualization", tools: ["Grafana", "Tableau"] }
  ]

  const integrations = [
    { solution: "IT Service Management", benefit: "Automated incident creation and service request fulfillment based on service intelligence." },
    { solution: "Configuration Management", benefit: "Correlate service performance with configuration changes for faster root cause analysis." },
    { solution: "Observability & Dashboarding", benefit: "Enhanced dashboards and unified views of IT service health and performance." },
    { solution: "Security Governance", benefit: "Identify security-related anomalies impacting service availability and performance." }
  ]

  const deliverables = [
    "IT Service Intelligence strategy and roadmap",
    "Unified service monitoring dashboards and alerts",
    "AI-powered anomaly detection and predictive analytics models",
    "Automated root cause analysis workflows",
    "Performance optimization recommendations and reports",
    "Integration with existing ITSM and monitoring tools",
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
                Operations & Analytics
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                IT Service Intelligence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Proactively monitor, analyze, and optimize your IT services to ensure peak performance, reliability, and user satisfaction.
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
                src={solutionITServiceIntelligence} 
                alt="IT Service Intelligence" 
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
              Verto Wave's IT Service Intelligence solution provides a comprehensive platform for monitoring, analyzing, and optimizing the performance and availability of your critical IT services. By leveraging advanced analytics, machine learning, and real-time data correlation, we empower organizations to move beyond reactive incident response to proactive problem prevention and service optimization.
            </p>
            <p>
              Our solution unifies data from various IT domains, including infrastructure, applications, and user experience, to provide a holistic view of service health. This enables IT teams to quickly identify root causes, predict potential issues, and make data-driven decisions to enhance service quality and operational efficiency.
            </p>
            <p>
              With Verto Wave IT Service Intelligence, you can ensure that your IT services consistently meet business demands, improve user satisfaction, and drive better business outcomes."
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Elevate Your IT Service Performance?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's IT Service Intelligence can transform your IT operations from reactive to proactive.
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

export default ITServiceIntelligencePage

