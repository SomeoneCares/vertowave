import { useState } from 'react'
import { ChevronDown, ArrowRight, X, CheckCircle, TrendingUp, Users, Shield, Cloud, Zap, Activity, BarChart } from 'lucide-react'
import solutionInfrastructure from '../assets/solution-infrastructure.webp'
import solutionSecurity from '../assets/solution-security.webp'
import solutionAutomation from '../assets/solution-automation.webp'
import solutionCloud from '../assets/solution-cloud.webp'
import solutionInsights from '../assets/solution-insights.webp'

// Import partner logos
import stackxLogo from '../assets/partners/stackx.webp'
import devicexLogo from '../assets/partners/devicex.webp'
import paloaltoLogo from '../assets/partners/paloalto.webp'
import opentextLogo from '../assets/partners/opentext.webp'
import elasticLogo from '../assets/partners/elastic.webp'
import sasLogo from '../assets/partners/sas.webp'
import broadcomLogo from '../assets/partners/broadcom.webp'
import commvaultLogo from '../assets/partners/commvault.webp'
import microsoftLogo from '../assets/partners/microsoft.webp'
import vmwareLogo from '../assets/partners/vmware.webp'
import dellEmcLogo from '../assets/partners/dell-emc.webp'
import juniperLogo from '../assets/partners/juniper.webp'
import awsLogo from '../assets/partners/aws.webp'

const Solutions = () => {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedSolution, setSelectedSolution] = useState(null)

  // Partner logo mapping
  const partnerLogos = {
    'StackX': stackxLogo,
    'DeviceX': devicexLogo,
    'Palo Alto Networks': paloaltoLogo,
    'OpenText': opentextLogo,
    'Elastic': elasticLogo,
    'SAS': sasLogo,
    'Broadcom': broadcomLogo,
    'Commvault': commvaultLogo,
    'Microsoft': microsoftLogo,
    'VMware': vmwareLogo,
    'Dell EMC': dellEmcLogo,
    'Juniper Networks': juniperLogo,
    'AWS': awsLogo
  }

  // Comprehensive solution data
  const solutionData = {
    'Configuration Management': {
      icon: Activity,
      tagline: 'Automate and standardize configuration across your infrastructure',
      overview: 'Maintain consistent, compliant configurations across your entire IT infrastructure with automated discovery, change tracking, and real-time compliance monitoring.',
      features: [
        { title: 'Automated Discovery', description: 'Automatically discover and catalog all configuration items across your infrastructure' },
        { title: 'Change Tracking', description: 'Track all configuration changes with complete audit trails and rollback capabilities' },
        { title: 'Compliance Monitoring', description: 'Continuous compliance checking against industry standards and internal policies' },
        { title: 'Version Control', description: 'Maintain configuration versions with Git-like version control and branching' }
      ],
      benefits: [
        { metric: '70%', description: 'Reduction in configuration errors' },
        { metric: '50%', description: 'Faster change implementation' },
        { metric: '90%', description: 'Compliance adherence rate' },
        { metric: '60%', description: 'Reduction in security vulnerabilities' }
      ],
      technologies: ['StackX', 'Microsoft', 'OpenText', 'Elastic'],
      integrations: ['Systems Management', 'IT Service Management', 'Security Governance']
    },
    'Systems Management': {
      icon: Cloud,
      tagline: 'Comprehensive server and endpoint management',
      overview: 'Centrally manage, monitor, and maintain all servers and endpoints with automated patch management, performance optimization, and proactive monitoring.',
      features: [
        { title: 'Patch Management', description: 'Automated patching across all systems with scheduling and rollback capabilities' },
        { title: 'Performance Monitoring', description: 'Real-time monitoring of system performance with predictive analytics' },
        { title: 'Remote Management', description: 'Secure remote access and management of all systems from a single console' },
        { title: 'Inventory Tracking', description: 'Complete hardware and software inventory with automatic updates' }
      ],
      benefits: [
        { metric: '80%', description: 'Reduction in manual patching time' },
        { metric: '65%', description: 'Faster issue resolution' },
        { metric: '95%', description: 'System uptime' },
        { metric: '40%', description: 'Reduction in security incidents' }
      ],
      technologies: ['StackX', 'Microsoft', 'OpenText', 'Elastic'],
      integrations: ['Configuration Management', 'Network Management', 'AIOps Platform']
    },
    'Network Management': {
      icon: Activity,
      tagline: 'Optimize network performance and reliability',
      overview: 'Monitor, manage, and optimize your network infrastructure with real-time visibility, automated troubleshooting, and capacity planning.',
      features: [
        { title: 'Network Monitoring', description: 'Real-time monitoring of network devices, bandwidth, and performance' },
        { title: 'Topology Mapping', description: 'Automatic discovery and visualization of network topology' },
        { title: 'Traffic Analysis', description: 'Deep packet inspection and traffic pattern analysis' },
        { title: 'Capacity Planning', description: 'Predictive analytics for network capacity and growth planning' }
      ],
      benefits: [
        { metric: '75%', description: 'Reduction in network downtime' },
        { metric: '60%', description: 'Faster problem resolution' },
        { metric: '50%', description: 'Improvement in network performance' },
        { metric: '45%', description: 'Reduction in bandwidth costs' }
      ],
      technologies: ['StackX', 'Juniper Networks', 'VMware', 'OpenText'],
      integrations: ['Systems Management', 'IT Service Intelligence', 'AIOps Platform']
    },
    'IT Asset Management': {
      icon: BarChart,
      tagline: 'Track and optimize your IT assets',
      overview: 'Gain complete visibility into all IT assets with automated discovery, lifecycle management, and cost optimization across hardware, software, and cloud resources.',
      features: [
        { title: 'Asset Discovery', description: 'Automatic discovery of all hardware, software, and cloud assets' },
        { title: 'Lifecycle Management', description: 'Track assets from procurement through retirement with automated workflows' },
        { title: 'License Compliance', description: 'Monitor software licenses and ensure compliance with vendor agreements' },
        { title: 'Cost Optimization', description: 'Identify underutilized assets and optimize spending' }
      ],
      benefits: [
        { metric: '35%', description: 'Reduction in IT asset costs' },
        { metric: '90%', description: 'License compliance rate' },
        { metric: '50%', description: 'Faster asset procurement' },
        { metric: '60%', description: 'Reduction in unused licenses' }
      ],
      technologies: ['StackX', 'OpenText', 'Microsoft', 'Elastic'],
      integrations: ['Configuration Management', 'Systems Management', 'IT Service Management']
    },
    'Identity & Access Management': {
      icon: Shield,
      tagline: 'Secure identity and access control',
      overview: 'Implement zero-trust security with comprehensive identity governance, single sign-on, multi-factor authentication, and role-based access controls.',
      features: [
        { title: 'Single Sign-On (SSO)', description: 'Unified authentication across all applications and services' },
        { title: 'Multi-Factor Authentication', description: 'Enhanced security with multiple authentication factors' },
        { title: 'Role-Based Access Control', description: 'Granular access controls based on user roles and responsibilities' },
        { title: 'Identity Governance', description: 'Automated access reviews and compliance reporting' }
      ],
      benefits: [
        { metric: '50%', description: 'Reduction in data breach risk' },
        { metric: '70%', description: 'Faster user provisioning' },
        { metric: '85%', description: 'Compliance adherence' },
        { metric: '60%', description: 'Reduction in helpdesk tickets' }
      ],
      technologies: ['StackX', 'Microsoft', 'Palo Alto Networks', 'Broadcom'],
      integrations: ['Security Governance', 'Zero Trust Security', 'IT Service Management']
    },
    'Security Governance': {
      icon: Shield,
      tagline: 'Comprehensive security policy management',
      overview: 'Establish and maintain robust security governance with policy management, risk assessment, vulnerability management, and compliance automation.',
      features: [
        { title: 'Policy Management', description: 'Centralized creation, distribution, and enforcement of security policies' },
        { title: 'Risk Assessment', description: 'Continuous risk assessment and threat modeling' },
        { title: 'Vulnerability Management', description: 'Automated vulnerability scanning and remediation tracking' },
        { title: 'Compliance Automation', description: 'Automated compliance checking and reporting for multiple frameworks' }
      ],
      benefits: [
        { metric: '65%', description: 'Reduction in security incidents' },
        { metric: '80%', description: 'Faster compliance reporting' },
        { metric: '55%', description: 'Reduction in vulnerabilities' },
        { metric: '90%', description: 'Policy compliance rate' }
      ],
      technologies: ['StackX', 'Palo Alto Networks', 'Microsoft', 'Broadcom'],
      integrations: ['Identity & Access Management', 'Compliance Management', 'Zero Trust Security']
    },
    'Resilience & Backup': {
      icon: Shield,
      tagline: 'Protect your data and ensure business continuity',
      overview: 'Implement comprehensive backup and disaster recovery solutions with automated backups, rapid recovery, and business continuity planning.',
      features: [
        { title: 'Automated Backups', description: 'Scheduled backups with retention policies and deduplication' },
        { title: 'Disaster Recovery', description: 'Comprehensive DR planning and testing with automated failover' },
        { title: 'Rapid Recovery', description: 'Fast recovery with granular restore capabilities' },
        { title: 'Business Continuity', description: 'Business impact analysis and continuity planning' }
      ],
      benefits: [
        { metric: '95%', description: 'Data recovery success rate' },
        { metric: '75%', description: 'Faster recovery time' },
        { metric: '60%', description: 'Reduction in storage costs' },
        { metric: '99.9%', description: 'Data availability' }
      ],
      technologies: ['StackX', 'Commvault', 'Dell EMC', 'Microsoft'],
      integrations: ['Systems Management', 'Cloud Migration & Optimization', 'Security Governance']
    },
    'Zero Trust Frameworks': {
      icon: Shield,
      tagline: 'Implement zero-trust security architecture',
      overview: 'Deploy zero-trust security principles with microsegmentation, continuous verification, least privilege access, and assume breach mentality.',
      features: [
        { title: 'Microsegmentation', description: 'Network segmentation to limit lateral movement' },
        { title: 'Continuous Verification', description: 'Continuous authentication and authorization for all access' },
        { title: 'Least Privilege Access', description: 'Minimal access rights for users and applications' },
        { title: 'Threat Detection', description: 'Real-time threat detection and automated response' }
      ],
      benefits: [
        { metric: '70%', description: 'Reduction in breach impact' },
        { metric: '80%', description: 'Faster threat detection' },
        { metric: '60%', description: 'Reduction in attack surface' },
        { metric: '85%', description: 'Improved security posture' }
      ],
      technologies: ['StackX', 'Palo Alto Networks', 'Juniper Networks', 'Microsoft', 'DeviceX'],
      integrations: ['Identity & Access Management', 'Security Governance', 'Network Management']
    },
    'Data Protection & Privacy': {
      icon: Shield,
      tagline: 'Ensure data privacy and regulatory compliance',
      overview: 'Protect sensitive data with encryption, data loss prevention, privacy management, and compliance with GDPR, CCPA, and other regulations.',
      features: [
        { title: 'Data Encryption', description: 'End-to-end encryption for data at rest and in transit' },
        { title: 'Data Loss Prevention', description: 'Prevent unauthorized data exfiltration and leakage' },
        { title: 'Privacy Management', description: 'Manage data subject requests and privacy compliance' },
        { title: 'Compliance Reporting', description: 'Automated compliance reporting for multiple regulations' }
      ],
      benefits: [
        { metric: '90%', description: 'Reduction in data breaches' },
        { metric: '75%', description: 'Faster compliance response' },
        { metric: '85%', description: 'Data privacy compliance' },
        { metric: '60%', description: 'Reduction in compliance costs' }
      ],
      technologies: ['StackX', 'Broadcom', 'Microsoft', 'OpenText'],
      integrations: ['Security Governance', 'Compliance Management', 'Identity & Access Management']
    },
    'IT Service Management': {
      icon: Users,
      tagline: 'ITIL-aligned service management',
      overview: 'Streamline IT service delivery with ITIL-aligned incident, problem, change, and service request management with self-service portals and automation.',
      features: [
        { title: 'Incident Management', description: 'Rapid incident detection, triage, and resolution with SLA tracking' },
        { title: 'Problem Management', description: 'Root cause analysis and permanent problem resolution' },
        { title: 'Change Management', description: 'Controlled change processes with approval workflows and rollback' },
        { title: 'Self-Service Portal', description: 'User-friendly portal for service requests and knowledge base' }
      ],
      benefits: [
        { metric: '65%', description: 'Faster incident resolution' },
        { metric: '50%', description: 'Reduction in repeat incidents' },
        { metric: '70%', description: 'Improved user satisfaction' },
        { metric: '45%', description: 'Reduction in support costs' }
      ],
      technologies: ['StackX', 'OpenText', 'Microsoft'],
      integrations: ['Workflow Automation', 'IT Service Intelligence', 'Configuration Management']
    },
    'Automation & Orchestration': {
      icon: Zap,
      tagline: 'Automate repetitive IT tasks',
      overview: 'Eliminate manual work with intelligent automation and orchestration across infrastructure, applications, and business processes.',
      features: [
        { title: 'Process Automation', description: 'Automate repetitive tasks and workflows with no-code/low-code tools' },
        { title: 'Orchestration', description: 'Coordinate complex multi-system processes and workflows' },
        { title: 'Integration Hub', description: 'Pre-built integrations with 500+ applications and services' },
        { title: 'RPA Integration', description: 'Robotic process automation for legacy system integration' }
      ],
      benefits: [
        { metric: '80%', description: 'Reduction in manual tasks' },
        { metric: '70%', description: 'Faster process execution' },
        { metric: '90%', description: 'Reduction in human errors' },
        { metric: '55%', description: 'Improvement in productivity' }
      ],
      technologies: ['StackX', 'Microsoft', 'OpenText'],
      integrations: ['IT Service Management', 'DevOps & CI/CD', 'AIOps Platform']
    },
    'DevOps & CI/CD': {
      icon: Zap,
      tagline: 'Accelerate software delivery',
      overview: 'Implement DevOps practices with continuous integration, continuous deployment, infrastructure as code, and automated testing.',
      features: [
        { title: 'CI/CD Pipelines', description: 'Automated build, test, and deployment pipelines' },
        { title: 'Infrastructure as Code', description: 'Version-controlled infrastructure provisioning and management' },
        { title: 'Automated Testing', description: 'Comprehensive automated testing including unit, integration, and security tests' },
        { title: 'Release Management', description: 'Controlled release processes with blue-green and canary deployments' }
      ],
      benefits: [
        { metric: '75%', description: 'Faster deployment frequency' },
        { metric: '60%', description: 'Reduction in deployment failures' },
        { metric: '70%', description: 'Faster mean time to recovery' },
        { metric: '50%', description: 'Improvement in code quality' }
      ],
      technologies: ['StackX', 'Microsoft', 'AWS', 'VMware'],
      integrations: ['Automation & Orchestration', 'Cloud Migration & Optimization', 'AIOps Platform']
    },
    'Cloud Migration & Optimization': {
      icon: Cloud,
      tagline: 'Seamless cloud transformation',
      overview: 'Plan and execute cloud migration with assessment, migration, optimization, and ongoing management of multi-cloud environments.',
      features: [
        { title: 'Cloud Assessment', description: 'Comprehensive assessment of applications for cloud readiness' },
        { title: 'Migration Planning', description: 'Detailed migration strategy and execution planning' },
        { title: 'Cost Optimization', description: 'Continuous cost optimization with rightsizing and reserved instances' },
        { title: 'Multi-Cloud Management', description: 'Unified management across AWS, Azure, and Google Cloud' }
      ],
      benefits: [
        { metric: '40%', description: 'Reduction in IT costs' },
        { metric: '3x', description: 'Faster deployment speed' },
        { metric: '50%', description: 'Improvement in scalability' },
        { metric: '35%', description: 'Reduction in cloud waste' }
      ],
      technologies: ['StackX', 'AWS', 'Microsoft', 'VMware'],
      integrations: ['Application Modernization', 'DevOps & CI/CD', 'Resilience & Backup']
    },
    'Business Service Mapping': {
      icon: Activity,
      tagline: 'Map IT services to business impact',
      overview: 'Discover and map relationships between IT infrastructure, applications, and business services to understand business impact of IT changes.',
      features: [
        { title: 'Service Discovery', description: 'Automatic discovery of services and dependencies' },
        { title: 'Dependency Mapping', description: 'Visual mapping of service dependencies and relationships' },
        { title: 'Impact Analysis', description: 'Understand business impact of IT changes and incidents' },
        { title: 'Service Health', description: 'Real-time service health monitoring and alerting' }
      ],
      benefits: [
        { metric: '70%', description: 'Faster impact assessment' },
        { metric: '60%', description: 'Reduction in change-related incidents' },
        { metric: '80%', description: 'Improved change planning' },
        { metric: '55%', description: 'Faster problem resolution' }
      ],
      technologies: ['StackX', 'OpenText', 'Elastic', 'Microsoft'],
      integrations: ['IT Service Intelligence', 'Configuration Management', 'AIOps Platform']
    },
    'Observability & Dashboarding': {
      icon: BarChart,
      tagline: 'Gain complete IT visibility',
      overview: 'Achieve full-stack observability with metrics, logs, traces, and custom dashboards for real-time insights into IT performance.',
      features: [
        { title: 'Metrics Collection', description: 'Collect and aggregate metrics from all infrastructure and applications' },
        { title: 'Log Management', description: 'Centralized log collection, search, and analysis' },
        { title: 'Distributed Tracing', description: 'End-to-end transaction tracing across microservices' },
        { title: 'Custom Dashboards', description: 'Build custom dashboards for different stakeholders' }
      ],
      benefits: [
        { metric: '75%', description: 'Faster problem identification' },
        { metric: '60%', description: 'Reduction in MTTR' },
        { metric: '85%', description: 'Improvement in visibility' },
        { metric: '50%', description: 'Reduction in alert fatigue' }
      ],
      technologies: ['StackX', 'Elastic', 'SAS', 'Microsoft'],
      integrations: ['AIOps Platform', 'IT Service Intelligence', 'Systems Management']
    },
    'Productivity Analytics': {
      icon: TrendingUp,
      tagline: 'Measure and improve employee productivity',
      overview: 'Gain insights into employee productivity with digital experience monitoring, application usage analytics, and productivity scoring.',
      features: [
        { title: 'Digital Experience Monitoring', description: 'Monitor end-user experience across all applications and devices' },
        { title: 'Application Analytics', description: 'Track application usage patterns and adoption rates' },
        { title: 'Productivity Scoring', description: 'Calculate productivity scores based on multiple factors' },
        { title: 'Insights & Recommendations', description: 'AI-powered recommendations to improve productivity' }
      ],
      benefits: [
        { metric: '35%', description: 'Improvement in productivity' },
        { metric: '50%', description: 'Reduction in application issues' },
        { metric: '70%', description: 'Better resource allocation' },
        { metric: '60%', description: 'Improved user satisfaction' }
      ],
      technologies: ['StackX', 'Microsoft', 'SAS', 'Elastic'],
      integrations: ['Digital Employee Experience', 'IT Service Intelligence', 'AIOps Platform']
    },
    'AIOps Platform': {
      icon: Zap,
      tagline: 'AI-powered IT operations',
      overview: 'Leverage artificial intelligence and machine learning for predictive analytics, anomaly detection, automated remediation, and intelligent insights.',
      features: [
        { title: 'Predictive Analytics', description: 'Predict incidents before they occur with ML-powered analytics' },
        { title: 'Anomaly Detection', description: 'Automatically detect anomalies and unusual patterns' },
        { title: 'Automated Remediation', description: 'Self-healing systems with automated incident remediation' },
        { title: 'Intelligent Insights', description: 'AI-powered insights and recommendations for optimization' }
      ],
      benefits: [
        { metric: '60%', description: 'Reduction in MTTR' },
        { metric: '75%', description: 'Reduction in false alerts' },
        { metric: '80%', description: 'Faster root cause analysis' },
        { metric: '50%', description: 'Reduction in incidents' }
      ],
      technologies: ['StackX', 'Elastic', 'OpenText', 'DeviceX'],
      integrations: ['Observability & Dashboarding', 'IT Service Intelligence', 'Automation & Orchestration']
    }
  }

  const categories = [
    {
      image: solutionInfrastructure,
      name: 'Infrastructure & Operations',
      count: 4,
      description: 'Modernize and optimize your IT infrastructure for peak performance and reliability.',
      solutions: [
        'Configuration Management',
        'Systems Management',
        'Network Management',
        'IT Asset Management'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      image: solutionSecurity,
      name: 'Security & Compliance',
      count: 5,
      description: 'Protect your organization with comprehensive security and compliance solutions.',
      solutions: [
        'Identity & Access Management',
        'Security Governance',
        'Resilience & Backup',
        'Zero Trust Frameworks',
        'Data Protection & Privacy'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      image: solutionAutomation,
      name: 'Service Delivery & Automation',
      count: 3,
      description: 'Accelerate service delivery and automate workflows for maximum efficiency.',
      solutions: [
        'IT Service Management',
        'Automation & Orchestration',
        'DevOps & CI/CD'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      image: solutionCloud,
      name: 'Cloud & Modernization',
      count: 2,
      description: 'Transform your IT with cloud-native solutions and modern architectures.',
      solutions: [
        'Cloud Migration & Optimization',
        'Business Service Mapping'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      image: solutionInsights,
      name: 'Insights & Intelligence',
      count: 3,
      description: 'Gain actionable insights with advanced analytics and AI-powered intelligence.',
      solutions: [
        'Observability & Dashboarding',
        'Productivity Analytics',
        'AIOps Platform'
      ],
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  const handleSolutionClick = (solutionName) => {
    setSelectedSolution(solutionName)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedSolution(null)
    document.body.style.overflow = 'unset'
  }

  const solution = selectedSolution ? solutionData[selectedSolution] : null
  const SolutionIcon = solution?.icon

  // Function to find which category a solution belongs to
  const getSolutionCategory = (solutionName) => {
    return categories.find(category => 
      category.solutions.includes(solutionName)
    )
  }

  // Function to extract base color from gradient for buttons
  const getCategoryBaseColor = (category) => {
    if (!category?.color) return 'blue'
    // Extract color from gradient like "from-blue-500 to-blue-600"
    const match = category.color.match(/from-(\w+)-(\d+)/)
    return match ? match[1] : 'blue'
  }

  const solutionCategory = selectedSolution ? getSolutionCategory(selectedSolution) : null
  const categoryBaseColor = solutionCategory ? getCategoryBaseColor(solutionCategory) : 'blue'

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions for Every IT Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            17 solutions organized across 5 strategic categories to transform your IT infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
              onMouseEnter={() => setExpandedCategory(index)}
              onMouseLeave={() => setExpandedCategory(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold mb-1">{category.count} Solutions</div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className={`transition-all duration-300 ${expandedCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-semibold mb-3 text-gray-800">Solutions:</h4>
                    <ul className="space-y-2">
                      {category.solutions.map((solution, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleSolutionClick(solution)}
                            className="text-verto-blue hover:text-verto-blue-dark hover:underline text-left w-full"
                          >
                            • {solution}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href="#solutions"
                  className="inline-flex items-center text-verto-blue hover:text-verto-blue-dark font-semibold mt-4"
                >
                  Explore Category
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Modal */}
      {selectedSolution && solution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={`sticky top-0 bg-gradient-to-r ${solutionCategory?.color || 'from-verto-blue to-verto-blue-dark'} text-white p-6 rounded-t-2xl z-10`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                {SolutionIcon && (
                  <SolutionIcon className="w-8 h-8 text-white" />
                )}
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedSolution}</h2>
                  <p className="text-white text-opacity-90">{solution.tagline}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Overview</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{solution.overview}</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-verto-blue flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quantified Benefits</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${solutionCategory?.color || 'from-verto-blue to-verto-blue-dark'} text-white p-4 rounded-lg text-center`}>
                      <div className="text-3xl font-bold mb-2">{benefit.metric}</div>
                      <div className="text-sm">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Technologies & Partners</h3>
                <div className="flex flex-wrap gap-4">
                  {solution.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow min-w-[120px] h-20">
                      <img 
                        src={partnerLogos[tech]} 
                        alt={`${tech} logo`}
                        className="max-h-12 max-w-[100px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className={`bg-gradient-to-r ${solutionCategory?.color || 'from-verto-blue to-verto-teal'} p-6 rounded-xl mb-8`}>
                <h3 className="text-2xl font-bold mb-4 text-white">Integrates With</h3>
                <div className="flex flex-wrap gap-3">
                  {solution.integrations.map((integration, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedSolution(integration)
                      }}
                      className="bg-black bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-full font-medium transition-colors border border-white border-opacity-50"
                    >
                      {integration}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`bg-gradient-to-r ${solutionCategory?.color || 'from-verto-blue to-verto-teal'} p-6 rounded-xl text-center`}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'white' }}>Ready to Transform Your IT?</h3>
                <p className="mb-4" style={{ color: 'white' }}>Let's discuss how {selectedSolution} can help your organization</p>
                <button className={`bg-white text-${categoryBaseColor}-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors`}>
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Solutions
