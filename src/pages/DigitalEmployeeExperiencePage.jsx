import React from 'react'
import { ArrowRight, Activity, ShieldCheck, LayoutDashboard, MessageSquare, CheckCircle } from 'lucide-react'

const DigitalEmployeeExperiencePage = () => {
  const solutionName = "Digital Employee Experience"
  const categoryBadge = "Workforce Optimization"
  const heroDescription = "Empower your workforce with seamless, intuitive, and productive digital interactions. Verto Wave's Digital Employee Experience (DEX) solution optimizes every digital touchpoint, from device performance to application access, ensuring employees are engaged, efficient, and satisfied."
  const heroImage = "/images/digital-employee-experience-hero.png" // Placeholder, assuming an image will be generated or provided

  const overviewContent = "In today's fast-paced digital landscape, a superior Digital Employee Experience (DEX) is no longer a luxury but a necessity. It encompasses the sum of all digital interactions an employee has with their workplace technology, directly impacting productivity, engagement, and retention. Verto Wave's DEX solution provides a holistic approach to understanding, measuring, and improving these interactions, transforming potential frustrations into seamless workflows. By proactively identifying and resolving issues across devices, applications, and networks, we help organizations foster a more efficient, satisfied, and connected workforce."

  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Performance Monitoring",
      description: "Gain deep insights into device, application, and network performance across your entire IT ecosystem. Proactively identify bottlenecks and performance degradation before they impact employee productivity.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Proactive Issue Resolution",
      description: "Leverage AI-driven analytics to detect and diagnose potential issues automatically. Implement automated remediation actions to resolve common problems, reducing help desk tickets and downtime.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Personalized Digital Workspaces",
      description: "Provide employees with tailored access to the applications and resources they need, optimized for their role and preferences. Enhance usability and reduce cognitive load with intuitive interfaces.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Employee Sentiment & Feedback",
      description: "Integrate direct feedback mechanisms and sentiment analysis to understand employee perceptions of their digital tools. Combine qualitative insights with quantitative data for a comprehensive DEX view.",
    },
  ]

  const benefits = [
    {
      metric: "30%",
      description: "Reduction in IT Support Tickets by proactively identifying and resolving issues, freeing up IT resources.",
    },
    {
      metric: "15-20%",
      description: "Increase in Employee Productivity due to optimized digital environments and reduced downtime.",
    },
    {
      metric: "10-15%",
      description: "Improved Employee Retention as a positive digital experience contributes to higher job satisfaction.",
    },
    {
      metric: "25%",
      description: "Faster Onboarding for New Hires with streamlined access to necessary tools and resources.",
    },
  ]

  const technologies = [
    {
      category: "Digital Experience Monitoring (DEM)",
      tools: ["Nexthink", "ControlUp", "Lakeside Software"],
    },
    {
      category: "Endpoint Management",
      tools: ["Microsoft Intune", "VMware Workspace ONE"],
    },
    {
      category: "AI & Analytics",
      tools: ["Verto Wave AI Engine", "Elastic Stack"],
    },
    {
      category: "Collaboration Platforms",
      tools: ["Microsoft 365", "Google Workspace"],
    },
  ]

  const integrations = [
    {
      solution: "Verto Wave IT Service Management (ITSM)",
      benefit: "Seamlessly integrates with ITSM to automatically create tickets for unresolved issues, enrich existing tickets with DEX data, and provide IT with comprehensive context for faster resolution.",
    },
    {
      solution: "Verto Wave Unified Endpoint Management (UEM)",
      benefit: "Works in conjunction with UEM to enforce security policies, deploy software updates, and manage device configurations, ensuring a secure and optimized digital environment.",
    },
    {
      solution: "Verto Wave Cloud & Infrastructure Management",
      benefit: "Provides insights into how cloud services and underlying infrastructure impact employee experience, enabling proactive optimization of resources.",
    },
    {
      solution: "Verto Wave Security Operations (SecOps)",
      benefit: "Enhances security posture by identifying unusual digital activity patterns that might indicate security threats, correlating DEX data with security events.",
    },
  ]

  const deliverables = [
    "Comprehensive DEX Assessment Report",
    "Customized DEX Strategy & Roadmap",
    "Implementation & Integration Services",
    "Ongoing Monitoring & Optimization Support",
    "Employee Feedback & Analytics Dashboards",
    "Training & Adoption Programs",
  ]

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1DB4D8] to-[#1DB4D8]/80 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {categoryBadge}
            </span>
            <h1 className="text-5xl font-bold leading-tight mb-4 font-display">{solutionName}</h1>
            <p className="text-xl mb-8 opacity-90">
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                Download Solution Brief
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={heroImage}
              alt={`${solutionName} Hero`}
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Solution Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {overviewContent}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-display text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#1DB4D8]/10 rounded-lg flex items-center justify-center text-[#1DB4D8] mb-4 mx-auto">
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Elevate Your Digital Employee Experience?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how Verto Wave's Digital Employee Experience solution can transform your workplace, boost productivity, and enhance employee satisfaction. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#1DB4D8] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
              Download Solution Brief
            </button>
          </div>
        </div>
      </section>

      {/* Footer (Optional, based on ConfigurationManagementPage.jsx) */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Verto Wave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default DigitalEmployeeExperiencePage

