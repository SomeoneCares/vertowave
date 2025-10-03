import { ArrowLeft, ShieldCheck, CloudUpload, RefreshCcw, HardDrive, Database, Clock, Server, CheckCircle, ArrowRight } from 'lucide-react'
import solutionBDR from '../assets/solution-infrastructure.png' // Assuming a new image for BDR

const BackupDisasterRecoveryPage = () => {
  const keyFeatures = [
    {
      icon: <CloudUpload className="w-6 h-6" />,
      title: "Automated Data Backup",
      description: "Regular, automated backups of critical data across all environments to secure, offsite locations."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Rapid Recovery & Restoration",
      description: "Minimize downtime with swift data recovery and system restoration capabilities, ensuring business continuity."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Immutable Storage & Security",
      description: "Protect backups from ransomware and accidental deletion with immutable storage and advanced security protocols."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Comprehensive Disaster Recovery Planning",
      description: "Develop and implement robust disaster recovery plans tailored to your specific business needs and RTO/RPO objectives."
    }
  ]

  const benefits = [
    { metric: "99.9%", description: "Data availability during outages" },
    { metric: "80%", description: "Faster recovery times post-disaster" },
    { metric: "60%", description: "Reduction in data loss incidents" },
    { metric: "40%", description: "Lower operational costs for data protection" }
  ]

  const technologies = [
    { category: "Backup Solutions", tools: ["Veeam", "Commvault", "Rubrik", "Cohesity"] },
    { category: "Cloud Storage", tools: ["AWS S3", "Azure Blob Storage", "Google Cloud Storage"] },
    { category: "DR Orchestration", tools: ["Zerto", "VMware SRM", "Azure Site Recovery"] },
    { category: "Security & Compliance", tools: ["Immutable Storage", "Encryption", "Data Governance Tools"] }
  ]

  const integrations = [
    { solution: "Cloud Infrastructure Management", benefit: "Seamless backup of cloud-native applications and data." },
    { solution: "Cybersecurity Services", benefit: "Enhanced protection against cyber threats with integrated security measures." },
    { solution: "IT Service Management", benefit: "Streamlined incident response and recovery workflows." },
    { solution: "Data Analytics & Reporting", benefit: "Comprehensive insights into backup status and recovery performance." }
  ]

  const deliverables = [
    "Tailored Backup & DR Strategy and Playbook",
    "Automated Backup Configuration and Monitoring",
    "Disaster Recovery Site Setup and Testing",
    "Data Recovery and Restoration Procedures",
    "Immutable Storage Implementation",
    "Regular DR Drills and Performance Reports",
    "Team Training and Knowledge Transfer"
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
                Data Protection
              </div>
              <h1 className="text-5xl font-bold mb-6 font-display">
                Backup & Disaster Recovery
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Safeguard your critical data and ensure business continuity with robust backup solutions and rapid disaster recovery capabilities.
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
                src={solutionBDR} 
                alt="Backup & Disaster Recovery" 
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
              Verto Wave's Backup & Disaster Recovery (BDR) solution provides a comprehensive strategy to protect your organization's critical data and systems from unforeseen events. From natural disasters to cyberattacks, our BDR services ensure that your business operations can quickly resume with minimal data loss and downtime.
            </p>
            <p>
              We implement a multi-layered approach, combining automated, secure data backups with meticulously planned disaster recovery procedures. This includes immutable storage for ransomware protection, rapid recovery options, and continuous monitoring to ensure your data is always protected and recoverable.
            </p>
            <p>
              Our solution is designed to integrate seamlessly with your existing infrastructure, offering flexibility for on-premises, cloud, and hybrid environments, and aligning with your specific Recovery Time Objective (RTO) and Recovery Point Objective (RPO) requirements.
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
          <h2 className="text-4xl font-bold mb-6 font-display">Ready to Secure Your Business Future?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how Verto Wave's Backup & Disaster Recovery solution can protect your assets and ensure uninterrupted operations.
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

export default BackupDisasterRecoveryPage

