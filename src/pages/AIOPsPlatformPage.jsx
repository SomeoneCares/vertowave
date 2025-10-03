import { ArrowLeft, BellRing, SearchCheck, TrendingUp, Filter, ArrowRight, CheckCircle } from 'lucide-react'
import solutionAIOps from '../assets/solution-infrastructure.png' // Placeholder for AIOps specific image

const AIOpsPlatformPage = () => {
  const keyFeatures = [
    {
      icon: <BellRing className="w-6 h-6" />,
      title: "Intelligent Anomaly Detection",
      description: "Proactively identify unusual patterns and deviations in system behavior using machine learning, preventing incidents before they impact services."
    },
    {
      icon: <SearchCheck className="w-6 h-6" />,
      title: "Automated Root Cause Analysis",
      description: "Accelerate problem resolution by automatically correlating events and logs across complex systems to precisely identify the underlying cause of issues."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Insights & Capacity Planning",
      description: "Utilize AI-driven forecasts to anticipate future resource needs and potential performance bottlenecks, enabling proactive optimization and scaling."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Event Correlation & Noise Reduction",
      description: "Consolidate and prioritize alerts from disparate monitoring tools, significantly reducing alert fatigue and allowing IT teams to focus on critical issues."
    }
  ]

  const benefits = [
    { metric: "60%", description: "Reduction in Mean Time To Resolution (MTTR)" },
    { metric: "40%", description: "Decrease in Operational Costs" },
    { metric: "80%", description: "Reduction in Alert Fatigue" },
    { metric: "99.9%", description: "Service Availability" }
  ]

  const technologies = [
    { category: "Data Ingestion & Processing", tools: ["StackX", "Elastic", "SAS", "Microsoft"] },
    { category: "Machine Learning Frameworks", tools: ["StackX", "SAS", "Microsoft", "Elastic"] },
    { category: "Monitoring & Observability", tools: ["StackX", "Elastic", "SAS", "DeviceX"] },
    { category: "Automation & Orchestration", tools: ["StackX", "Microsoft", "VMware", "OpenText"] }
  ]

  const integrations = [
    { solution: "IT Service Management (ITSM)", benefit: "Seamlessly integrate with ITSM platforms like ServiceNow and Jira for automated incident creation, change management, and workflow orchestration." },
    { solution: "Observability & Monitoring", benefit: "Connects with leading monitoring tools (e.g., Datadog, Prometheus, Splunk) to ingest comprehensive telemetry data for AI-driven analysis." },
    { solution: "Cloud Platforms", benefit: "Integrates with AWS, Azure, and Google Cloud to provide unified AIOps capabilities across hybrid and multi-cloud environments." },
    { solution: "Security Operations (SecOps)", benefit: "Enhances security posture by correlating security events with operational data, enabling faster detection and response to threats." }
  ]

  const deliverables = [
    "AIOps strategy and implementation roadmap",
    "Customized AI/ML models for anomaly detection and root cause analysis",
    "Integrated AIOps platform deployment and configuration",
    "Real-time operational dashboards and reporting",
    "Automated incident response playbooks",
    "Training and knowledge transfer for IT operations teams"
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
                Operations & Automation
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                AIOps Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Leverage artificial intelligence and machine learning to automate IT operations, predict issues, and optimize performance across your entire digital landscape.
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
                src={solutionAIOps} 
                alt="AIOps Platform" 
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
              Verto Wave's AIOps Platform revolutionizes IT operations by integrating artificial intelligence and machine learning to automate, optimize, and secure your digital infrastructure. Our platform ingests vast streams of operational data—including logs, metrics, and events—from diverse sources, applying advanced analytics to detect anomalies, predict outages, and pinpoint root causes with unprecedented speed and accuracy. By transforming reactive IT into a proactive, intelligent system, we empower organizations to reduce alert fatigue, enhance operational efficiency, and ensure superior service delivery across hybrid and multi-cloud environments.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Unlock the Power of Intelligent IT Operations with Verto Wave AIOps</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our AIOps Platform can help you achieve your IT operations goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Request a Demo
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

export default AIOpsPlatformPage

