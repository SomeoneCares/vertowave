import challengeServiceMapping from '../assets/challenge-service-mapping.webp'
import challengeLegacy from '../assets/challenge-legacy.webp'
import challengeSecurity from '../assets/challenge-security.webp'
import challengeCloud from '../assets/challenge-cloud-migration.webp'
import challengeObservability from '../assets/challenge-observability.webp'
import challengeAutomation from '../assets/challenge-automation.webp'
import challengeAssets from '../assets/challenge-asset-management.webp'
import challengeServiceDesk from '../assets/challenge-service-desk.webp'
import challengeBackup from '../assets/challenge-backup.webp'
import challengeNetwork from '../assets/challenge-network.webp'
import challengeDevOps from '../assets/challenge-devops.webp'
import challengeZeroTrust from '../assets/challenge-zerotrust.webp'
import challengeAIOps from '../assets/challenge-aiops.webp'
import challengeCompliance from '../assets/challenge-compliance.webp'
import challengeProductivity from '../assets/challenge-productivity.webp'

export const challengesData = [
  {
    image: challengeServiceMapping,
    title: 'Business Service Dependencies Unknown?',
    description: 'Unclear impact of IT changes on business services. Difficulty planning maintenance windows.',
    link: 'Business Service Mapping',
    category: 'Cloud & Modernization',
    impacts: [
      'Unplanned outages due to unknown service dependencies',
      'Inability to assess change impact on business operations',
      'Extended maintenance windows affecting business productivity',
      'Difficulty prioritizing IT investments based on business value'
    ],
    solution: 'Verto Wave implements comprehensive Business Service Mapping solutions that provide complete visibility into your IT infrastructure and its relationship to business services. We create dynamic service maps that automatically discover and document dependencies, enabling proactive change management and minimizing business disruption.',
    approach: [
      'Automated discovery of application and infrastructure dependencies',
      'Real-time service topology mapping and visualization',
      'Impact analysis for planned changes and incidents',
      'Integration with ITSM and CMDB platforms'
    ],
    benefits: [
      { metric: '75%', description: 'Reduction in unplanned outages' },
      { metric: '60%', description: 'Faster change implementation' },
      { metric: '90%', description: 'Improved change success rate' }
    ],
    relatedSolutions: ['Business Service Mapping', 'Configuration Management', 'IT Service Management']
  },
  {
    image: challengeLegacy,
    title: 'Legacy Systems Holding You Back?',
    description: 'Outdated infrastructure hindering growth and innovation. Maintenance costs skyrocketing while performance declines.',
    link: 'Configuration Management',
    category: 'Infrastructure & Operations',
    impacts: [
      'High maintenance costs consuming IT budget',
      'Inability to support modern applications and workloads',
      'Security vulnerabilities in unsupported systems',
      'Difficulty attracting and retaining IT talent'
    ],
    solution: 'Verto Wave specializes in modernizing legacy infrastructure through strategic configuration management and automation. We help organizations transition from manual, error-prone processes to automated, standardized configurations that improve reliability while reducing costs.',
    approach: [
      'Infrastructure assessment and modernization roadmap',
      'Automated configuration management with Ansible/Puppet',
      'Standardized configuration templates and policies',
      'Continuous compliance monitoring and remediation'
    ],
    benefits: [
      { metric: '70%', description: 'Reduction in configuration errors' },
      { metric: '50%', description: 'Lower maintenance costs' },
      { metric: '3x', description: 'Faster deployment cycles' }
    ],
    relatedSolutions: ['Configuration Management', 'Systems Management', 'Automation & Orchestration']
  },
  {
    image: challengeSecurity,
    title: 'Security Threats Keeping You Up?',
    description: 'Increasing cyber risks and compliance requirements. Data breaches and vulnerabilities threatening your business.',
    link: 'Security Solutions',
    category: 'Security & Compliance',
    impacts: [
      'Risk of data breaches and financial losses',
      'Non-compliance with regulatory requirements',
      'Damage to brand reputation and customer trust',
      'Increasing cyber insurance premiums'
    ],
    solution: 'Verto Wave delivers comprehensive security solutions including Identity & Access Management, Security Governance, and Zero Trust frameworks. We implement defense-in-depth strategies that protect your organization from evolving cyber threats while ensuring regulatory compliance.',
    approach: [
      'Zero Trust security architecture implementation',
      'Identity and access management (IAM) solutions',
      'Security governance and compliance automation',
      'Continuous security monitoring and threat detection'
    ],
    benefits: [
      { metric: '80%', description: 'Reduction in security incidents' },
      { metric: '50%', description: 'Lower breach risk' },
      { metric: '100%', description: 'Compliance achievement' }
    ],
    relatedSolutions: ['Identity & Access Management', 'Security Governance', 'Zero Trust Frameworks']
  },
  {
    image: challengeCloud,
    title: 'Cloud Migration Feels Overwhelming?',
    description: 'Complex cloud transformation with unclear ROI. Managing multi-cloud environments and optimizing costs.',
    link: 'Cloud Migration & Optimization',
    category: 'Cloud & Modernization',
    impacts: [
      'Unclear cloud migration strategy and ROI',
      'Unexpected cloud costs and budget overruns',
      'Application performance issues in cloud',
      'Vendor lock-in and limited flexibility'
    ],
    solution: 'Verto Wave provides end-to-end cloud migration and optimization services that ensure successful cloud adoption. We help organizations develop cloud strategies, migrate workloads efficiently, and continuously optimize cloud environments for cost and performance.',
    approach: [
      'Cloud readiness assessment and strategy development',
      'Phased migration planning and execution',
      'Multi-cloud architecture design and implementation',
      'Continuous cost optimization and FinOps practices'
    ],
    benefits: [
      { metric: '40%', description: 'Reduction in IT costs' },
      { metric: '3x', description: 'Faster time to market' },
      { metric: '99.9%', description: 'Application availability' }
    ],
    relatedSolutions: ['Cloud Migration & Optimization', 'Configuration Management', 'DevOps & CI/CD']
  },
  {
    image: challengeObservability,
    title: "Can't See What's Happening in Your IT?",
    description: 'Lack of visibility across distributed infrastructure. Reactive problem-solving instead of proactive monitoring.',
    link: 'Observability & Dashboarding',
    category: 'Insights & Intelligence',
    impacts: [
      'Slow incident detection and extended downtime',
      'Inability to identify root causes quickly',
      'Poor user experience due to performance issues',
      'Wasted resources on manual troubleshooting'
    ],
    solution: 'Verto Wave implements comprehensive observability solutions that provide real-time visibility into your entire IT infrastructure. We deploy advanced monitoring, logging, and analytics platforms that enable proactive issue detection and rapid resolution.',
    approach: [
      'Unified observability platform deployment',
      'Custom dashboards for business and technical metrics',
      'Real-time alerting and anomaly detection',
      'Integration with incident management systems'
    ],
    benefits: [
      { metric: '70%', description: 'Faster issue detection' },
      { metric: '60%', description: 'Reduced MTTR' },
      { metric: '90%', description: 'Improved visibility' }
    ],
    relatedSolutions: ['Observability & Dashboarding', 'AIOps Platform', 'IT Service Management']
  },
  {
    image: challengeAutomation,
    title: 'Manual Processes Slowing You Down?',
    description: 'Repetitive manual tasks consuming valuable time. Inconsistent service delivery and human errors.',
    link: 'Automation & Orchestration',
    category: 'Service Delivery & Automation',
    impacts: [
      'High operational costs due to manual effort',
      'Inconsistent service delivery and quality',
      'Human errors causing incidents and outages',
      'IT staff burnout from repetitive tasks'
    ],
    solution: 'Verto Wave delivers intelligent automation and orchestration solutions that eliminate manual toil and accelerate service delivery. We implement workflow automation, self-service portals, and orchestration platforms that improve efficiency and consistency.',
    approach: [
      'Process automation opportunity assessment',
      'Workflow automation with modern orchestration tools',
      'Self-service portal implementation',
      'Integration with existing ITSM platforms'
    ],
    benefits: [
      { metric: '80%', description: 'Reduction in manual tasks' },
      { metric: '5x', description: 'Faster service delivery' },
      { metric: '90%', description: 'Improved consistency' }
    ],
    relatedSolutions: ['Automation & Orchestration', 'IT Service Management', 'DevOps & CI/CD']
  },
  {
    image: challengeAssets,
    title: 'IT Assets Out of Control?',
    description: 'Unknown or unmanaged devices on your network. Software license compliance risks and wasted spend.',
    link: 'IT Asset Management',
    category: 'Infrastructure & Operations',
    impacts: [
      'Security risks from unknown devices',
      'Software license compliance violations',
      'Wasted spending on unused licenses',
      'Inability to plan hardware refresh cycles'
    ],
    solution: 'Verto Wave implements comprehensive IT Asset Management (ITAM) solutions that provide complete visibility and control over your IT assets. We help organizations discover, track, and manage hardware and software assets throughout their lifecycle.',
    approach: [
      'Automated asset discovery and inventory',
      'Software license optimization and compliance',
      'Hardware lifecycle management',
      'Integration with procurement and finance systems'
    ],
    benefits: [
      { metric: '30%', description: 'Reduction in software costs' },
      { metric: '100%', description: 'License compliance' },
      { metric: '50%', description: 'Better asset utilization' }
    ],
    relatedSolutions: ['IT Asset Management', 'Configuration Management', 'Security Governance']
  },
  {
    image: challengeServiceDesk,
    title: 'Struggling with IT Service Requests?',
    description: 'Overwhelming ticket volumes and long resolution times. Poor user experience with IT support.',
    link: 'IT Service Management',
    category: 'Service Delivery & Automation',
    impacts: [
      'Low employee productivity due to IT issues',
      'Poor user satisfaction with IT services',
      'High IT support costs',
      'Difficulty measuring and improving service quality'
    ],
    solution: 'Verto Wave implements modern IT Service Management (ITSM) solutions that transform IT support from reactive to proactive. We deploy ServiceNow and other leading ITSM platforms with best-practice workflows, self-service capabilities, and automation.',
    approach: [
      'ITSM platform implementation and optimization',
      'Self-service portal and knowledge base',
      'Automated ticket routing and resolution',
      'SLA management and reporting'
    ],
    benefits: [
      { metric: '60%', description: 'Faster ticket resolution' },
      { metric: '40%', description: 'Reduction in ticket volume' },
      { metric: '85%', description: 'User satisfaction score' }
    ],
    relatedSolutions: ['IT Service Management', 'Automation & Orchestration', 'Observability & Dashboarding']
  },
  {
    image: challengeBackup,
    title: 'Data Loss Keeping You Up at Night?',
    description: 'Inadequate backup and disaster recovery plans. Risk of ransomware and data corruption.',
    link: 'Resilience & Backup',
    category: 'Security & Compliance',
    impacts: [
      'Risk of permanent data loss',
      'Extended downtime during disasters',
      'Ransomware vulnerability',
      'Non-compliance with data protection regulations'
    ],
    solution: 'Verto Wave delivers comprehensive resilience and backup solutions that protect your critical data and ensure business continuity. We implement modern backup technologies, disaster recovery plans, and ransomware protection strategies.',
    approach: [
      'Backup and disaster recovery strategy development',
      'Modern backup solution implementation',
      'Ransomware protection and immutable backups',
      'Regular DR testing and validation'
    ],
    benefits: [
      { metric: '99.9%', description: 'Data protection SLA' },
      { metric: '4 hours', description: 'Recovery time objective' },
      { metric: '100%', description: 'Ransomware resilience' }
    ],
    relatedSolutions: ['Resilience & Backup', 'Security Governance', 'Configuration Management']
  },
  {
    image: challengeNetwork,
    title: 'Network Performance Issues?',
    description: 'Slow network speeds affecting productivity. Frequent outages and connectivity problems.',
    link: 'Network Management',
    category: 'Infrastructure & Operations',
    impacts: [
      'Poor application performance and user experience',
      'Frequent network outages and disruptions',
      'Difficulty troubleshooting network issues',
      'Inability to support modern applications'
    ],
    solution: 'Verto Wave provides comprehensive network management solutions that ensure optimal network performance and reliability. We implement network monitoring, optimization, and automation tools that proactively identify and resolve network issues.',
    approach: [
      'Network assessment and optimization',
      'Advanced network monitoring and analytics',
      'Network automation and orchestration',
      'SD-WAN and modern networking solutions'
    ],
    benefits: [
      { metric: '50%', description: 'Improved network performance' },
      { metric: '80%', description: 'Reduction in outages' },
      { metric: '70%', description: 'Faster troubleshooting' }
    ],
    relatedSolutions: ['Network Management', 'Observability & Dashboarding', 'Configuration Management']
  },
  {
    image: challengeDevOps,
    title: 'DevOps Pipeline Bottlenecks?',
    description: 'Slow release cycles and deployment failures. Lack of automation in CI/CD pipelines.',
    link: 'DevOps & CI/CD',
    category: 'Service Delivery & Automation',
    impacts: [
      'Slow time to market for new features',
      'Frequent deployment failures and rollbacks',
      'Poor collaboration between Dev and Ops teams',
      'Inability to scale application delivery'
    ],
    solution: 'Verto Wave implements modern DevOps practices and CI/CD pipelines that accelerate software delivery while improving quality. We help organizations adopt DevOps culture, tools, and automation to achieve continuous delivery.',
    approach: [
      'DevOps maturity assessment and roadmap',
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (IaC) adoption',
      'DevSecOps and automated security testing'
    ],
    benefits: [
      { metric: '10x', description: 'Faster deployment frequency' },
      { metric: '90%', description: 'Deployment success rate' },
      { metric: '50%', description: 'Faster time to market' }
    ],
    relatedSolutions: ['DevOps & CI/CD', 'Automation & Orchestration', 'Cloud Migration & Optimization']
  },
  {
    image: challengeZeroTrust,
    title: 'Zero Trust Security Gaps?',
    description: 'Traditional perimeter security no longer sufficient. Need for identity-based access controls.',
    link: 'Zero Trust Frameworks',
    category: 'Security & Compliance',
    impacts: [
      'Inadequate protection against insider threats',
      'Vulnerability to lateral movement attacks',
      'Difficulty securing remote workforce',
      'Compliance risks with data access controls'
    ],
    solution: 'Verto Wave implements Zero Trust security frameworks that eliminate implicit trust and verify every access request. We deploy identity-based access controls, micro-segmentation, and continuous authentication to protect your organization.',
    approach: [
      'Zero Trust architecture design and roadmap',
      'Identity and access management implementation',
      'Network micro-segmentation',
      'Continuous authentication and authorization'
    ],
    benefits: [
      { metric: '70%', description: 'Reduction in breach risk' },
      { metric: '90%', description: 'Improved access control' },
      { metric: '100%', description: 'Compliance achievement' }
    ],
    relatedSolutions: ['Zero Trust Frameworks', 'Identity & Access Management', 'Security Governance']
  },
  {
    image: challengeAIOps,
    title: 'IT Incidents Impacting Business?',
    description: 'Slow incident detection and resolution. Lack of predictive insights to prevent outages.',
    link: 'AIOps Platform',
    category: 'Insights & Intelligence',
    impacts: [
      'Extended downtime affecting business operations',
      'Reactive incident management',
      'Alert fatigue from false positives',
      'Inability to predict and prevent incidents'
    ],
    solution: 'Verto Wave implements AI-powered AIOps platforms that transform IT operations from reactive to predictive. We deploy machine learning algorithms that analyze vast amounts of operational data to detect anomalies, predict failures, and automate remediation.',
    approach: [
      'AIOps platform selection and implementation',
      'Machine learning model training and tuning',
      'Automated incident detection and correlation',
      'Predictive analytics and proactive remediation'
    ],
    benefits: [
      { metric: '60%', description: 'Reduction in MTTR' },
      { metric: '80%', description: 'Fewer incidents' },
      { metric: '90%', description: 'Improved availability' }
    ],
    relatedSolutions: ['AIOps Platform', 'Observability & Dashboarding', 'IT Service Management']
  },
  {
    image: challengeCompliance,
    title: 'Compliance and Governance Concerns?',
    description: 'Difficulty meeting regulatory requirements. Lack of visibility into security and compliance posture.',
    link: 'Security Governance',
    category: 'Security & Compliance',
    impacts: [
      'Risk of regulatory fines and penalties',
      'Failed compliance audits',
      'Lack of visibility into compliance status',
      'Manual compliance processes consuming resources'
    ],
    solution: 'Verto Wave delivers comprehensive security governance solutions that automate compliance monitoring and reporting. We implement GRC platforms and processes that ensure continuous compliance with regulatory requirements.',
    approach: [
      'Compliance framework assessment and gap analysis',
      'GRC platform implementation and automation',
      'Continuous compliance monitoring',
      'Automated audit reporting and evidence collection'
    ],
    benefits: [
      { metric: '100%', description: 'Compliance achievement' },
      { metric: '70%', description: 'Faster audit preparation' },
      { metric: '80%', description: 'Reduced compliance costs' }
    ],
    relatedSolutions: ['Security Governance', 'Identity & Access Management', 'Data Protection & Privacy']
  },
  {
    image: challengeProductivity,
    title: 'Employee Productivity Unclear?',
    description: 'No visibility into how technology impacts workforce efficiency. Difficulty identifying improvement areas.',
    link: 'Productivity Analytics',
    category: 'Insights & Intelligence',
    impacts: [
      'Inability to measure technology ROI',
      'Poor user experience affecting productivity',
      'Difficulty identifying process bottlenecks',
      'Lack of data-driven decision making'
    ],
    solution: 'Verto Wave implements productivity analytics solutions that provide insights into how technology impacts workforce efficiency. We deploy analytics platforms that measure user experience, identify bottlenecks, and enable data-driven optimization.',
    approach: [
      'Digital experience monitoring implementation',
      'User productivity metrics and dashboards',
      'Application performance analytics',
      'AI-powered insights and recommendations'
    ],
    benefits: [
      { metric: '30%', description: 'Improvement in productivity' },
      { metric: '50%', description: 'Better user experience' },
      { metric: '40%', description: 'Faster issue resolution' }
    ],
    relatedSolutions: ['Productivity Analytics', 'Observability & Dashboarding', 'AIOps Platform']
  }
]
