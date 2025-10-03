import { ArrowLeft, Cloud, Zap, BarChart2, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import solutionCloudMigration from '../assets/solution-infrastructure.png'

const CloudMigrationOptimizationPage = () => {
  const keyFeatures = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Strategic Migration Planning",
      description: "Develop a tailored migration roadmap, including workload assessment, dependency mapping, and risk analysis."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Migration Execution",
      description: "Utilize advanced tools and automation to accelerate data and application migration with minimal downtime."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Cost & Performance Optimization",
      description: "Implement FinOps strategies and continuous monitoring to optimize cloud spend and resource performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cloud Security & Compliance",
      description: "Ensure robust security posture and compliance with industry regulations throughout your cloud journey."
    }
  ]

  const benefits = [
    { metric: "40%", description: "Reduction in cloud operational costs" },
    { metric: "60%", description: "Faster time-to-market for new applications" },
    { metric: "99.9%", description: "Improved application availability and resilience" },
    { metric: "75%", description: "Enhanced security posture and compliance adherence" }
  ]

  const technologies = [
    { category: "Cloud Platforms", tools: ["AWS", "Azure", "Google Cloud Platform"] },
    { category: "Migration Tools", tools: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate for Compute Engine"] },
    { category: "Optimization & FinOps", tools: ["CloudHealth by VMware", "Apptio Cloudability", "Azure Cost Management"] },
    { category: "Containerization", tools: ["Docker", "Kubernetes", "OpenShift"] }
  ]

  const integrations = [
    { solution: "DevOps & Automation", benefit: "Streamlined CI/CD pipelines for cloud-native deployments" },
    { solution: "Data Analytics & AI", benefit: "Scalable data processing and machine learning in the cloud" },
    { solution: "Cybersecurity & Risk Management", benefit: "Integrated cloud security controls and threat detection" },
    { solution: "Managed Services", benefit: "24/7 expert support for your cloud infrastructure" }
  ]

  const deliverables = [
    "Cloud readiness assessment and migration strategy",
    "Detailed migration plan and execution roadmap",
    "Optimized cloud architecture and resource configurations",
    "Cost management and FinOps framework implementation",
    "Cloud security and compliance blueprints",
    "Post-migration support and continuous optimization services",
    "Knowledge transfer and training for your team"
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
                Cloud & Infrastructure
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Cloud Migration & Optimization
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Seamlessly transition your applications and data to the cloud, and continuously optimize your cloud resources for performance, cost, and security.
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
                src={solutionCloudMigration} 
                alt="Cloud Migration & Optimization" 
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
              Verto Wave's Cloud Migration & Optimization solution empowers organizations to confidently move their IT infrastructure to leading cloud platforms while ensuring maximum efficiency and cost-effectiveness. We provide end-to-end support, from initial assessment and planning to execution and post-migration optimization.
            </p>
            <p>
              Our approach minimizes disruption, mitigates risks, and accelerates time-to-value, allowing you to leverage the full potential of cloud computing. We focus on right-sizing resources, implementing FinOps best practices, and automating operations to drive continuous improvement.
            </p>
            <p>
              Whether you're looking for a lift-and-shift, re-platforming, or re-architecting strategy, our experts guide you through every step, ensuring a secure, scalable, and resilient cloud environment.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Accelerate Your Cloud Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Partner with Verto Wave to achieve a successful and optimized cloud transformation.
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

export default CloudMigrationOptimizationPage

