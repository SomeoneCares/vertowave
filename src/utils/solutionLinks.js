// Map solution names to their URL slugs
export const getSolutionSlug = (solutionName) => {
  const slugMap = {
    'Configuration Management': 'configuration-management',
    'Systems Management': 'systems-management',
    'Network Management': 'network-management',
    'IT Asset Management': 'it-asset-management',
    'Identity & Access Management': 'identity-access-management',
    'Security Governance': 'security-governance',
    'Resilience & Backup': 'resilience-backup',
    'Zero Trust Frameworks': 'zero-trust-frameworks',
    'Data Protection & Privacy': 'data-protection-privacy',
    'IT Service Management': 'it-service-management',
    'Automation & Orchestration': 'automation-orchestration',
    'DevOps & CI/CD': 'devops-cicd',
    'Cloud Migration & Optimization': 'cloud-migration-optimization',
    'Business Service Mapping': 'business-service-mapping',
    'Observability & Dashboarding': 'observability-dashboarding',
    'Productivity Analytics': 'productivity-analytics',
    'AIOps Platform': 'aiops-platform'
  };
  
  return slugMap[solutionName] || solutionName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
};

export const getSolutionUrl = (solutionName) => {
  return `/solutions/${getSolutionSlug(solutionName)}.html`;
};
