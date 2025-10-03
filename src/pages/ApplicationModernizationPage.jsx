import { ArrowLeft, CheckCircle, Cloud, Code, RefreshCw, Rocket, Zap, Users, ArrowRight, Shield, TrendingUp } from 'lucide-react'
import solutionModernization from '../assets/solution-infrastructure.png' // Placeholder for a relevant image

const ApplicationModernizationPage = () => {
  const keyFeatures = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Legacy System Assessment",
      description: "Comprehensive analysis of existing applications to identify modernization opportunities and risks."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Transformation",
      description: "Re-architecting and re-platforming applications for optimal performance and scalability in cloud environments."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Microservices & API Development",
      description: "Breaking down monolithic applications into agile microservices and exposing functionality via robust APIs."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "DevOps & CI/CD Integration",
      description: "Implementing automated pipelines for continuous integration, delivery, and deployment to accelerate innovation."
    }
  ]

  const benefits = [
    { metric: "30%", description: "Reduction in operational costs" },
    { metric: "50%", description: "Faster time-to-market for new features" },
    { metric: "70%", description: "Improvement in application scalability and resilience" },
    { metric: "40%", description: "Increase in developer productivity" }
  ]

  const technologies = [
    { category: "Cloud Platforms", tools: ["AWS", "Azure", "Google Cloud Platform"] },
    { category: "Containerization", tools: ["Docker", "Kubernetes", "OpenShift"] },
    { category: "Microservices Frameworks", tools: ["Spring Boot", "Node.js", "Quarkus"] },
    { category: "DevOps Tools", tools: ["Jenkins", "GitLab CI", "Argo CD", "Terraform"] }
  ]

  const integrations = [
    { solution: "Cloud Migration", benefit: "Seamless transition of modernized applications to cloud infrastructure" },
    { solution: "Data Analytics", benefit: "Leveraging modern data platforms for enhanced insights from modernized apps" },
    { solution: "Cybersecurity", benefit: "Embedding advanced security measures into re-architected applications" },
    { solution: "Managed Services", benefit: "Ongoing support and optimization for modernized application portfolios" }
  ]

  const deliverables = [
    "Application modernization strategy and roadmap",
    "Cloud-native application architecture designs",
    "Microservices development and API integration",
    "DevOps and CI/CD pipeline implementation",
    "Legacy application re-platforming and re-hosting",
    "Performance optimization and scalability testing",
    "Team training and knowledge transfer for new technologies"
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
                Software Development
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Application Modernization
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your legacy applications into agile, scalable, and cloud-native solutions to drive innovation and business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#1DB4D8] text-white rounded-lg font-medium hover:bg-[#1DB4D8]/90 transition-colors">
                  Request Consultation
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                  Explore Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={solutionModernization} 
                alt="Application Modernization" 
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
              Verto Wave's Application Modernization solution helps organizations unlock the full potential of their existing software assets by transforming them into modern, resilient, and high-performing applications. We guide you through the journey of migrating from monolithic architectures to cloud-native microservices, leveraging the latest technologies and best practices.
            </p>
            <p>
              Our approach focuses on minimizing disruption while maximizing business value, enabling faster innovation, improved scalability, enhanced security, and reduced operational costs. We ensure your applications are future-proof and aligned with your strategic digital transformation goals.
            </p>
            <p>
              By adopting modern development methodologies like DevOps and integrating advanced cloud services, we empower your teams to deliver features more rapidly and respond to market demands with unprecedented agility.
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

      {/* Technologies & Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Technologies & Tools</h2>
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Modernize Your Applications?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how Verto Wave's Application Modernization solution can accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Download Solution Brief
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

export default ApplicationModernizationPage

