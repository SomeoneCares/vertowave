import { ArrowLeft, CheckCircle, Zap, GitFork, Eye, Repeat, ArrowRight } from 'lucide-react'
import solutionWorkflowAutomation from '../assets/solution-infrastructure.png'

const WorkflowAutomationPage = () => {
  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intelligent Process Orchestration",
      description: "Automate complex, multi-step workflows across various departments and systems with smart routing and decision logic."
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      title: "Seamless System Integration",
      description: "Connect and synchronize data across your existing applications, databases, and cloud services without custom coding."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring & Analytics",
      description: "Gain complete visibility into workflow performance with dashboards, alerts, and actionable insights to identify bottlenecks."
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Adaptive Workflow Design",
      description: "Easily design, modify, and deploy workflows using intuitive drag-and-drop interfaces and pre-built templates."
    }
  ]

  const benefits = [
    { metric: "60%", description: "Reduction in manual effort and operational costs" },
    { metric: "85%", description: "Improvement in process completion speed" },
    { metric: "40%", description: "Decrease in human errors and rework" },
    { metric: "75%", description: "Increase in employee productivity and satisfaction" }
  ]

  const technologies = [
    { category: "BPM Suites", tools: ["Appian", "Pega Systems", "Bonitasoft"] },
    { category: "RPA Platforms", tools: ["UiPath", "Automation Anywhere", "Blue Prism"] },
    { category: "Integration Platforms", tools: ["MuleSoft", "Dell Boomi", "Zapier"] },
    { category: "AI/ML Services", tools: ["Google AI Platform", "AWS SageMaker", "Azure Machine Learning"] }
  ]

  const integrations = [
    { solution: "Configuration Management", benefit: "Automate configuration changes triggered by workflow events." },
    { solution: "IT Service Management", benefit: "Streamline service request fulfillment and incident resolution." },
    { solution: "Data Analytics & Reporting", benefit: "Feed automated process data for deeper insights and compliance." },
    { solution: "Security Governance", benefit: "Enforce security policies and access controls within automated workflows." }
  ]

  const deliverables = [
    "Workflow assessment and optimization strategy",
    "Custom workflow design and implementation",
    "Integration with existing enterprise systems",
    "Automated process monitoring and alerting",
    "Performance analytics and reporting dashboards",
    "User training and documentation",
    "Ongoing support and maintenance"
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
                Operations & Efficiency
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Workflow Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline repetitive tasks, improve operational efficiency, and accelerate business processes with intelligent workflow automation.
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
                src={solutionWorkflowAutomation} 
                alt="Workflow Automation" 
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
              Verto Wave's Workflow Automation solution empowers organizations to design, automate, and optimize their critical business processes. By eliminating manual bottlenecks and orchestrating tasks across systems and teams, we help you achieve significant gains in efficiency, accuracy, and speed.
            </p>
            <p>
              Our platform leverages advanced automation technologies to connect disparate applications, manage data flows, and ensure compliance, allowing your workforce to focus on strategic initiatives rather than repetitive administrative duties.
            </p>
            <p>
              From IT operations to customer service and HR, our solution adapts to your unique needs, providing a scalable and flexible approach to digital transformation.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Automate Your Business Workflows?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's Workflow Automation can transform your operations and drive efficiency.
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

export default WorkflowAutomationPage

