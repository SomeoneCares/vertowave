import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ConfigurationManagementPage from './pages/ConfigurationManagementPage'
import SystemsManagementPage from './pages/SystemsManagementPage'
import NetworkManagementPage from './pages/NetworkManagementPage'
import ITAssetManagementPage from './pages/ITAssetManagementPage'
import IdentityAccessManagementPage from './pages/IdentityAccessManagementPage'
import SecurityGovernancePage from './pages/SecurityGovernancePage'
import BackupDisasterRecoveryPage from './pages/BackupDisasterRecoveryPage'
import ZeroTrustSecurityPage from './pages/ZeroTrustSecurityPage'
import ComplianceManagementPage from './pages/ComplianceManagementPage'
import ITServiceManagementPage from './pages/ITServiceManagementPage'
import WorkflowAutomationPage from './pages/WorkflowAutomationPage'
import DevOpsCICDPage from './pages/DevOpsCICDPage'
import CloudMigrationOptimizationPage from './pages/CloudMigrationOptimizationPage'
import ApplicationModernizationPage from './pages/ApplicationModernizationPage'
import AIOPsPlatformPage from './pages/AIOPsPlatformPage'
import ITServiceIntelligencePage from './pages/ITServiceIntelligencePage'
import DigitalEmployeeExperiencePage from './pages/DigitalEmployeeExperiencePage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/solutions/configuration-management" element={<ConfigurationManagementPage />} />
        <Route path="/solutions/systems-management" element={<SystemsManagementPage />} />
        <Route path="/solutions/network-management" element={<NetworkManagementPage />} />
        <Route path="/solutions/it-asset-management" element={<ITAssetManagementPage />} />
        <Route path="/solutions/identity-access-management" element={<IdentityAccessManagementPage />} />
        <Route path="/solutions/security-governance" element={<SecurityGovernancePage />} />
        <Route path="/solutions/backup-disaster-recovery" element={<BackupDisasterRecoveryPage />} />
        <Route path="/solutions/zero-trust-security" element={<ZeroTrustSecurityPage />} />
        <Route path="/solutions/compliance-management" element={<ComplianceManagementPage />} />
        <Route path="/solutions/it-service-management" element={<ITServiceManagementPage />} />
        <Route path="/solutions/workflow-automation" element={<WorkflowAutomationPage />} />
        <Route path="/solutions/devops-cicd" element={<DevOpsCICDPage />} />
        <Route path="/solutions/cloud-migration-optimization" element={<CloudMigrationOptimizationPage />} />
        <Route path="/solutions/application-modernization" element={<ApplicationModernizationPage />} />
        <Route path="/solutions/aiops-platform" element={<AIOPsPlatformPage />} />
        <Route path="/solutions/it-service-intelligence" element={<ITServiceIntelligencePage />} />
        <Route path="/solutions/digital-employee-experience" element={<DigitalEmployeeExperiencePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
