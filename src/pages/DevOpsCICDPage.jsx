import { ArrowLeft, GitBranch, Rocket, ShieldCheck, Gauge, Users, Cloud, Code, Settings, CheckCircle, ArrowRight } from 'lucide-react'
import solutionDevOps from '../assets/solution-infrastructure.png' // Placeholder for a relevant image

const DevOpsCICDPage = () => {
  const keyFeatures = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Automated Code Integration",
      description: "Continuously integrate code changes from multiple developers into a shared repository, reducing conflicts and ensuring code quality."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Accelerated Deployment Pipelines",
      description: "Automate the build, test, and deployment processes to deliver software faster and more reliably to production."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Continuous Testing & Quality Gates",
      description: "Implement automated testing at every stage of the pipeline, ensuring high-quality releases and early defect detection."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Monitoring & Feedback",
      description: "Integrate real-time monitoring and feedback loops to continuously optimize application performance and user experience."
    }
  ]

  const benefits = [
    { metric: "50%", description: "Faster time-to-market for new features and updates" },
    { metric: "70%", description: "Reduction in deployment failures and rollbacks" },
    { metric: "60%", description: "Improvement in developer productivity and collaboration" },
    { metric: "40%", description: "Decrease in operational costs through automation" }
  ]

  const technologies = [
    { category: "CI/CD Platforms", tools: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps"] },
    { category: "Containerization", tools: ["Docker", "Kubernetes"] },
    { category: "Version Control", tools: ["Git", "SVN"] },
    { category: "Cloud Providers", tools: ["AWS", "Azure", "Google Cloud"] }
  ]

  const integrations = [
    { solution: "Cloud Infrastructure Management", benefit: "Seamless deployment to scalable cloud environments" },
    { solution: "Application Performance Monitoring", benefit: "End-to-end visibility into application health and performance" },
    { solution: "Security Governance", benefit: "Automated security scanning and policy enforcement within pipelines" },
    { solution: "IT Service Management", benefit: "Automated incident creation and change management for deployments" }
  ]

  const deliverables = [
    "Customized CI/CD pipeline design and implementation",
    "Automated build, test, and deployment scripts",
    "Containerization strategies and Dockerfile optimization",
    "Infrastructure as Code (IaC) templates for environment provisioning",
    "Continuous monitoring and alerting configurations",
    "DevOps best practices training and workshops",
    "Documentation for pipeline operations and maintenance"
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
                Software Delivery
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                DevOps & CI/CD
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Automate and streamline your software development lifecycle from code commit to production deployment, ensuring rapid, reliable, and high-quality releases.
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
                src={solutionDevOps} 
                alt="DevOps & CI/CD" 
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
              Verto Wave's DevOps & CI/CD solution empowers organizations to achieve unparalleled agility and efficiency in software delivery. By integrating development and operations teams and automating the entire software release process, we help you accelerate innovation and maintain a competitive edge.
            </p>
            <p>
              Our approach focuses on continuous integration, continuous delivery, and continuous deployment, enabling frequent, small, and reliable code changes. This minimizes risks, improves collaboration, and ensures that your applications are always ready for production.
            </p>
            <p>
              We provide the tools, processes, and expertise to transform your software delivery pipeline, from initial code commit to monitoring in production, fostering a culture of continuous improvement and operational excellence.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Accelerate Your Software Delivery?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our DevOps & CI/CD solution can transform your development and operations workflows.
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

export default DevOpsCICDPage

