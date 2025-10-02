import stackxLogo from '../assets/partners/stackx.webp'
import devicexLogo from '../assets/partners/devicex.webp'
import broadcomLogo from '../assets/partners/broadcom.webp'
import opentextLogo from '../assets/partners/opentext.webp'
import elasticLogo from '../assets/partners/elastic.webp'
import sasLogo from '../assets/partners/sas.webp'
import commvaultLogo from '../assets/partners/commvault.webp'
import paloaltoLogo from '../assets/partners/paloalto.webp'
import microsoftLogo from '../assets/partners/microsoft.webp'
import vmwareLogo from '../assets/partners/vmware.webp'
import dellEmcLogo from '../assets/partners/dell-emc.webp'
import juniperLogo from '../assets/partners/juniper.webp'
import awsLogo from '../assets/partners/aws.webp'

const Partners = () => {
  // Strategic Partners - Top tier strategic partners
  const strategicPartners = [
    { 
      name: 'StackX', 
      category: 'Unified Intelligent Operations', 
      description: 'AI-powered unified operations platform',
      logo: stackxLogo
    },
    { 
      name: 'DeviceX', 
      category: 'Edge Computing', 
      description: 'Branch-in-a-box edge platform',
      logo: devicexLogo
    }
  ]

  // Partners of Focus - Premium tier strategic partners
  const partnersOfFocus = [
    { name: 'Palo Alto Networks', category: 'Cybersecurity', logo: paloaltoLogo },
    { name: 'OpenText', category: 'Information Management', logo: opentextLogo },
    { name: 'Elastic', category: 'Search & Observability', logo: elasticLogo },
    { name: 'SAS', category: 'Analytics & AI', logo: sasLogo }
  ]

  // Core Partners - Key technology partners
  const corePartners = [
    { name: 'Broadcom', category: 'Enterprise Software', logo: broadcomLogo },
    { name: 'Commvault', category: 'Data Protection', logo: commvaultLogo },
    { name: 'Microsoft', category: 'Cloud & Enterprise', logo: microsoftLogo },
    { name: 'VMware', category: 'Virtualization', logo: vmwareLogo },
    { name: 'Dell EMC', category: 'Infrastructure', logo: dellEmcLogo },
    { name: 'Juniper Networks', category: 'Networking', logo: juniperLogo },
    { name: 'AWS', category: 'Cloud Services', logo: awsLogo }
  ]

  return (
    <section className="py-20 lg:py-28 bg-verto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Powered by Industry-Leading Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with the world's best technology vendors to deliver exceptional solutions
          </p>
        </div>

        {/* Strategic Partners */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-verto-dark-gray text-center mb-8">
            Strategic Partners
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all group border-2 border-verto-blue/20 hover:border-verto-blue min-h-[200px]"
                >
                  <div className="text-center">
                    <div className="h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-16 max-w-[200px] object-contain"
                      />
                    </div>
                    <p className="font-display font-bold text-xl text-gray-800 mb-2 group-hover:text-verto-blue transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold mb-1">{partner.category}</p>
                    <p className="text-xs text-gray-500">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners of Focus */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-verto-dark-gray text-center mb-8">
            Partners of Focus
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partnersOfFocus.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all group border-2 border-verto-blue/20 hover:border-verto-blue min-h-[180px]"
                >
                  <div className="text-center">
                    <div className="h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-12 max-w-[140px] object-contain"
                      />
                    </div>
                    <p className="font-display font-bold text-base text-gray-800 mb-1 group-hover:text-verto-blue transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-500">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-verto-dark-gray text-center mb-8">
            Our Partners
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {corePartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow group min-h-[140px]"
                >
                  <div className="text-center">
                    <div className="h-14 mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-10 max-w-[120px] object-contain"
                      />
                    </div>
                    <p className="font-display font-semibold text-sm text-gray-700 mb-1 group-hover:text-verto-blue transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-500">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Certified partnerships and deep technical expertise across all major platforms
          </p>
          <div className="inline-flex items-center gap-2 text-verto-blue font-display font-medium">
            <span className="w-2 h-2 bg-verto-blue rounded-full animate-pulse"></span>
            13 Strategic Technology Partners
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
