import { useState } from 'react'
import { Search, Lightbulb, Rocket, TrendingUp, CheckCircle2, ArrowRight, X, Target, Shield, Eye, Scale, Activity } from 'lucide-react'

const Process = () => {
  const [selectedMaturity, setSelectedMaturity] = useState(null)
  const [selectedCapability, setSelectedCapability] = useState(null)

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Assess',
      description: 'We evaluate your current state, identify gaps, and understand your business objectives.'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Design',
      description: 'We architect the right solution tailored to your specific needs and industry requirements.'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implement',
      description: 'We deploy with minimal disruption, ensuring smooth transition and user adoption.'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimize',
      description: 'We continuously improve performance, monitor results, and adapt to your evolving needs.'
    }
  ]

  const maturityLevels = [
    {
      level: 1,
      name: 'Initial',
      description: 'Reactive',
      color: 'bg-red-500',
      fullDescription: 'At the Initial level, IT operations are reactive and ad-hoc. Processes are unpredictable, poorly controlled, and often chaotic. Success depends on individual heroics rather than proven processes.',
      characteristics: [
        'Reactive firefighting approach to IT issues',
        'No documented processes or procedures',
        'Success depends on individual knowledge',
        'Unpredictable outcomes and timelines',
        'High risk of service disruptions'
      ],
      challenges: [
        'Frequent outages and incidents',
        'Inconsistent service delivery',
        'Knowledge loss when staff leave',
        'Difficulty scaling operations'
      ],
      nextSteps: [
        'Document critical processes',
        'Establish basic monitoring',
        'Create incident response procedures',
        'Begin tracking key metrics'
      ]
    },
    {
      level: 2,
      name: 'Repeatable',
      description: 'Aware',
      color: 'bg-orange-500',
      fullDescription: 'At the Repeatable level, basic processes are established and documented. The organization is aware of IT issues and has begun to implement repeatable procedures, though they may not be consistently followed.',
      characteristics: [
        'Basic processes documented and followed',
        'Some discipline in tracking costs and schedules',
        'Previous successes can be repeated',
        'Processes may vary between teams',
        'Reactive but with some planning'
      ],
      challenges: [
        'Inconsistent process adoption',
        'Limited automation',
        'Siloed operations',
        'Manual, time-consuming tasks'
      ],
      nextSteps: [
        'Standardize processes across teams',
        'Implement change management',
        'Establish service level agreements',
        'Begin automation initiatives'
      ]
    },
    {
      level: 3,
      name: 'Defined',
      description: 'Proactive',
      color: 'bg-yellow-500',
      fullDescription: 'At the Defined level, processes are well-defined, documented, and standardized across the organization. The IT team takes a proactive approach to managing infrastructure and services.',
      characteristics: [
        'Standardized processes organization-wide',
        'Proactive monitoring and management',
        'Documented procedures and policies',
        'Regular process reviews and improvements',
        'Consistent service delivery'
      ],
      challenges: [
        'Process rigidity may slow innovation',
        'Limited integration between tools',
        'Manual reporting and analysis',
        'Reactive to business changes'
      ],
      nextSteps: [
        'Implement advanced automation',
        'Integrate monitoring and management tools',
        'Establish predictive analytics',
        'Align IT with business objectives'
      ]
    },
    {
      level: 4,
      name: 'Capable',
      description: 'Managed',
      color: 'bg-blue-500',
      fullDescription: 'At the Capable level, IT operations are quantitatively managed using metrics and analytics. The organization has achieved a high level of control and can predict outcomes with confidence.',
      characteristics: [
        'Quantitative management using metrics',
        'Predictable process performance',
        'Data-driven decision making',
        'Integrated tool ecosystem',
        'Proactive problem prevention'
      ],
      challenges: [
        'Maintaining metrics accuracy',
        'Balancing automation with flexibility',
        'Keeping pace with technology changes',
        'Continuous improvement fatigue'
      ],
      nextSteps: [
        'Implement AI/ML for predictions',
        'Establish continuous optimization',
        'Drive innovation initiatives',
        'Achieve transformational maturity'
      ]
    },
    {
      level: 5,
      name: 'Optimizing',
      description: 'Transformational',
      color: 'bg-green-500',
      fullDescription: 'At the Optimizing level, IT operations are continuously improved through innovation and optimization. The organization uses advanced analytics, AI, and automation to drive transformational business outcomes.',
      characteristics: [
        'Continuous process optimization',
        'AI-powered predictive capabilities',
        'Self-healing infrastructure',
        'Innovation-driven culture',
        'IT as strategic business enabler'
      ],
      challenges: [
        'Maintaining competitive advantage',
        'Managing rapid change',
        'Balancing innovation with stability',
        'Talent acquisition and retention'
      ],
      nextSteps: [
        'Lead industry innovation',
        'Share best practices externally',
        'Expand transformational initiatives',
        'Mentor other organizations'
      ]
    }
  ]

  const capabilityAreas = [
    {
      title: 'IT Availability',
      description: 'Ensure systems and services are accessible when needed',
      icon: Activity,
      emoji: '🔄',
      fullDescription: 'IT Availability ensures that your systems, applications, and services are accessible and operational when users need them. This capability encompasses monitoring, redundancy, failover, and disaster recovery.',
      importance: 'High availability is critical for business continuity, user productivity, and customer satisfaction. Downtime directly impacts revenue, reputation, and operational efficiency.',
      keyComponents: [
        'Uptime monitoring and alerting',
        'Redundant infrastructure and failover',
        'Disaster recovery and business continuity',
        'Capacity planning and scaling',
        'Performance optimization',
        'Incident response and resolution'
      ],
      maturityIndicators: [
        {
          level: 'Initial',
          description: 'Frequent unplanned outages, no monitoring, reactive response'
        },
        {
          level: 'Repeatable',
          description: 'Basic monitoring, documented recovery procedures'
        },
        {
          level: 'Defined',
          description: 'Proactive monitoring, tested DR plans, SLAs defined'
        },
        {
          level: 'Capable',
          description: 'Automated failover, predictive analytics, high availability'
        },
        {
          level: 'Optimizing',
          description: 'Self-healing systems, AI-powered predictions, 99.99%+ uptime'
        }
      ],
      benefits: [
        'Reduced downtime and business disruption',
        'Improved user productivity and satisfaction',
        'Enhanced customer experience',
        'Better resource utilization',
        'Competitive advantage through reliability'
      ]
    },
    {
      title: 'IT Control',
      description: 'Maintain governance and compliance across IT operations',
      icon: Target,
      emoji: '🎯',
      fullDescription: 'IT Control encompasses the governance, policies, and procedures that ensure IT operations align with business objectives, regulatory requirements, and industry standards.',
      importance: 'Strong IT control is essential for regulatory compliance, risk management, and operational consistency. It provides the framework for secure, efficient, and accountable IT operations.',
      keyComponents: [
        'Configuration management and standards',
        'Change management and approval workflows',
        'Compliance monitoring and reporting',
        'Policy enforcement and auditing',
        'Asset management and tracking',
        'Access control and authorization'
      ],
      maturityIndicators: [
        {
          level: 'Initial',
          description: 'No change control, undocumented configurations, compliance gaps'
        },
        {
          level: 'Repeatable',
          description: 'Basic change management, some documentation, reactive compliance'
        },
        {
          level: 'Defined',
          description: 'Standardized processes, configuration baselines, regular audits'
        },
        {
          level: 'Capable',
          description: 'Automated compliance checks, integrated CMDB, proactive governance'
        },
        {
          level: 'Optimizing',
          description: 'Continuous compliance, AI-powered policy enforcement, zero-touch governance'
        }
      ],
      benefits: [
        'Reduced compliance risk and audit findings',
        'Improved operational consistency',
        'Better change success rates',
        'Enhanced accountability and traceability',
        'Reduced configuration errors'
      ]
    },
    {
      title: 'IT Protection',
      description: 'Safeguard data and infrastructure from security threats',
      icon: Shield,
      emoji: '🛡️',
      fullDescription: 'IT Protection focuses on safeguarding your organization\'s data, systems, and infrastructure from security threats, data breaches, and cyberattacks through comprehensive security measures.',
      importance: 'In today\'s threat landscape, robust IT protection is non-negotiable. Security breaches can result in financial losses, regulatory penalties, reputation damage, and loss of customer trust.',
      keyComponents: [
        'Identity and access management',
        'Threat detection and response',
        'Data encryption and protection',
        'Vulnerability management',
        'Security monitoring and SIEM',
        'Backup and recovery'
      ],
      maturityIndicators: [
        {
          level: 'Initial',
          description: 'Basic antivirus, no security monitoring, reactive to breaches'
        },
        {
          level: 'Repeatable',
          description: 'Firewall and basic controls, some monitoring, incident response plan'
        },
        {
          level: 'Defined',
          description: 'Layered security, SIEM implementation, regular assessments'
        },
        {
          level: 'Capable',
          description: 'Advanced threat detection, automated response, zero trust architecture'
        },
        {
          level: 'Optimizing',
          description: 'AI-powered threat intelligence, predictive security, continuous adaptation'
        }
      ],
      benefits: [
        'Reduced risk of data breaches',
        'Improved regulatory compliance',
        'Enhanced customer trust',
        'Lower insurance premiums',
        'Faster threat detection and response'
      ]
    },
    {
      title: 'IT Visibility',
      description: 'Gain insights into IT performance and business impact',
      icon: Eye,
      emoji: '👁️',
      fullDescription: 'IT Visibility provides comprehensive insights into your IT infrastructure, applications, and services, enabling data-driven decisions and proactive management of IT resources.',
      importance: 'Without visibility, you\'re operating blind. IT visibility enables proactive problem resolution, optimized resource utilization, and alignment of IT investments with business outcomes.',
      keyComponents: [
        'Infrastructure and application monitoring',
        'Performance analytics and dashboards',
        'Business service mapping',
        'User experience monitoring',
        'Cost and usage tracking',
        'Predictive analytics'
      ],
      maturityIndicators: [
        {
          level: 'Initial',
          description: 'No monitoring, reactive to user complaints, no metrics'
        },
        {
          level: 'Repeatable',
          description: 'Basic monitoring tools, manual reporting, limited visibility'
        },
        {
          level: 'Defined',
          description: 'Comprehensive monitoring, automated dashboards, service mapping'
        },
        {
          level: 'Capable',
          description: 'Real-time analytics, business impact correlation, predictive insights'
        },
        {
          level: 'Optimizing',
          description: 'AI-powered observability, self-service analytics, prescriptive recommendations'
        }
      ],
      benefits: [
        'Faster problem identification and resolution',
        'Improved capacity planning',
        'Better resource optimization',
        'Enhanced user experience',
        'Data-driven IT investments'
      ]
    },
    {
      title: 'IT Governance',
      description: 'Align IT strategy with business objectives',
      icon: Scale,
      emoji: '⚖️',
      fullDescription: 'IT Governance ensures that IT strategy, investments, and operations are aligned with business goals, delivering maximum value while managing risks and optimizing resources.',
      importance: 'Effective IT governance transforms IT from a cost center to a strategic business enabler, ensuring technology investments deliver measurable business value and competitive advantage.',
      keyComponents: [
        'IT strategy and roadmap',
        'Portfolio and project management',
        'Financial management and budgeting',
        'Risk management and compliance',
        'Stakeholder communication',
        'Value realization and metrics'
      ],
      maturityIndicators: [
        {
          level: 'Initial',
          description: 'No IT strategy, ad-hoc projects, unclear priorities'
        },
        {
          level: 'Repeatable',
          description: 'Basic planning, project tracking, some business alignment'
        },
        {
          level: 'Defined',
          description: 'Strategic roadmap, portfolio management, defined governance'
        },
        {
          level: 'Capable',
          description: 'Business-aligned strategy, value-based prioritization, active governance'
        },
        {
          level: 'Optimizing',
          description: 'Continuous strategy evolution, innovation pipeline, IT-business fusion'
        }
      ],
      benefits: [
        'Better IT investment decisions',
        'Improved business-IT alignment',
        'Higher project success rates',
        'Optimized resource allocation',
        'Measurable business value'
      ]
    }
  ]

  // Close modal when clicking outside
  const handleBackdropClick = (e, closeFunction) => {
    if (e.target === e.currentTarget) {
      closeFunction(null)
    }
  }

  // Lock body scroll when modal is open
  useState(() => {
    if (selectedMaturity || selectedCapability) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedMaturity, selectedCapability])

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            How We Transform Your IT
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful IT transformation from assessment to optimization.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-verto-blue via-verto-blue to-verto-blue transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-full bg-verto-blue flex items-center justify-center relative z-10 shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-verto-blue animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-verto-blue font-display font-bold text-sm mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-verto-dark-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-verto-blue flex items-center justify-center shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                <div className="text-verto-blue font-display font-bold text-sm mb-2">
                  STEP {step.number}
                </div>
                <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IT Maturity Assessment Section */}
        <div className="mt-24 pt-20 border-t-2 border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-verto-blue/10 text-verto-blue text-sm font-display font-semibold rounded-full mb-4">
              Based on Gartner's Capability Model
            </div>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-verto-dark-gray mb-4">
              Benchmark Your IT Maturity
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive assessment evaluates your organization across five critical capability areas and five maturity levels to identify opportunities for improvement.
            </p>
          </div>

          {/* Maturity Levels Progression */}
          <div className="mb-16">
            <h4 className="font-display font-semibold text-xl text-verto-dark-gray mb-6 text-center">
              Five Maturity Levels
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {maturityLevels.map((level, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setSelectedMaturity(level)}
                    className="w-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center border-2 border-gray-100 hover:border-verto-blue cursor-pointer"
                  >
                    <div className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                      {level.level}
                    </div>
                    <h5 className="font-display font-bold text-lg text-verto-dark-gray mb-2">
                      {level.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {level.description}
                    </p>
                    <p className="text-xs text-verto-blue mt-3 font-semibold">
                      Click to learn more →
                    </p>
                  </button>
                  {index < maturityLevels.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capability Areas */}
          <div className="mb-16">
            <h4 className="font-display font-semibold text-xl text-verto-dark-gray mb-6 text-center">
              Five Capability Areas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {capabilityAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCapability(area)}
                  className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 rounded-xl p-6 hover:shadow-lg transition-all border border-verto-blue/20 cursor-pointer text-left"
                >
                  <div className="text-4xl mb-4 text-center">
                    {area.emoji}
                  </div>
                  <h5 className="font-display font-bold text-lg text-verto-dark-gray mb-3 text-center">
                    {area.title}
                  </h5>
                  <p className="text-sm text-gray-600 text-center leading-relaxed mb-3">
                    {area.description}
                  </p>
                  <p className="text-xs text-verto-blue text-center font-semibold">
                    Click to learn more →
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-2xl text-verto-dark-gray mb-6">
                  Why Assess Your IT Maturity?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Identify Gaps</p>
                      <p className="text-sm text-gray-600">Discover areas where your IT capabilities need improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Prioritize Investments</p>
                      <p className="text-sm text-gray-600">Focus resources on initiatives with the highest impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Benchmark Performance</p>
                      <p className="text-sm text-gray-600">Compare your IT maturity against industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-verto-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray mb-1">Create Roadmap</p>
                      <p className="text-sm text-gray-600">Develop a clear path to IT transformation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Assessment Process
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Questionnaire</p>
                      <p className="text-sm text-gray-600">Complete our comprehensive IT maturity questionnaire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Analysis</p>
                      <p className="text-sm text-gray-600">Our experts analyze your responses across all capability areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Report</p>
                      <p className="text-sm text-gray-600">Receive detailed maturity assessment report with scores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-verto-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-display font-semibold text-verto-dark-gray">Roadmap</p>
                      <p className="text-sm text-gray-600">Get personalized recommendations and transformation roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-verto-blue hover:bg-verto-blue-dark text-white font-display font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Your IT Maturity Assessment
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Complimentary assessment for qualified organizations
            </p>
          </div>
        </div>
      </div>

      {/* Maturity Level Modal */}
      {selectedMaturity && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => handleBackdropClick(e, setSelectedMaturity)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className={`${selectedMaturity.color} p-8 text-white relative`}>
              <button
                onClick={() => setSelectedMaturity(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {selectedMaturity.level}
                </div>
                <div>
                  <h3 className="font-display font-bold text-3xl mb-2">
                    Level {selectedMaturity.level}: {selectedMaturity.name}
                  </h3>
                  <p className="text-xl opacity-90">{selectedMaturity.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-3">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMaturity.fullDescription}
                </p>
              </div>

              {/* Characteristics */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Key Characteristics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedMaturity.characteristics.map((char, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-verto-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{char}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Common Challenges
                </h4>
                <div className="space-y-2">
                  {selectedMaturity.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">!</span>
                      </div>
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-verto-blue/5 to-verto-blue/10 p-6 rounded-xl">
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Path to Next Level
                </h4>
                <div className="space-y-3">
                  {selectedMaturity.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-verto-blue text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-verto-blue hover:bg-verto-blue-dark text-white font-display font-semibold px-6 py-3 rounded-lg transition-all"
                  onClick={() => setSelectedMaturity(null)}
                >
                  Request Maturity Assessment
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Capability Area Modal */}
      {selectedCapability && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => handleBackdropClick(e, setSelectedCapability)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-br from-verto-blue to-verto-teal p-8 text-white relative">
              <button
                onClick={() => setSelectedCapability(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-5xl">
                  {selectedCapability.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-3xl mb-2">
                    {selectedCapability.title}
                  </h3>
                  <p className="text-xl opacity-90">{selectedCapability.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-3">
                  What is {selectedCapability.title}?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedCapability.fullDescription}
                </p>
                <div className="bg-verto-blue/5 border-l-4 border-verto-blue p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong className="text-verto-dark-gray">Why it matters:</strong> {selectedCapability.importance}
                  </p>
                </div>
              </div>

              {/* Key Components */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Key Components
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCapability.keyComponents.map((component, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <selectedCapability.icon className="h-5 w-5 text-verto-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{component}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maturity Progression */}
              <div>
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Maturity Progression
                </h4>
                <div className="space-y-3">
                  {selectedCapability.maturityIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
                        index === 0 ? 'bg-red-500' :
                        index === 1 ? 'bg-orange-500' :
                        index === 2 ? 'bg-yellow-500' :
                        index === 3 ? 'bg-blue-500' : 'bg-green-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-verto-dark-gray mb-1">
                          {indicator.level}
                        </p>
                        <p className="text-sm text-gray-700">{indicator.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                <h4 className="font-display font-bold text-xl text-verto-dark-gray mb-4">
                  Benefits of Strong {selectedCapability.title}
                </h4>
                <div className="space-y-2">
                  {selectedCapability.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-verto-blue to-verto-teal hover:from-verto-blue-dark hover:to-verto-teal text-white font-display font-semibold px-6 py-3 rounded-lg transition-all"
                  onClick={() => setSelectedCapability(null)}
                >
                  Assess Your {selectedCapability.title}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Process
