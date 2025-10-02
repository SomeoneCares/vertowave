const Partners = () => {
  const partners = [
    'ServiceNow', 'Microsoft', 'AWS', 'Azure', 'Google Cloud',
    'Datadog', 'Dynatrace', 'Splunk', 'Okta', 'CyberArk',
    'Palo Alto Networks', 'Red Hat', 'VMware', 'HashiCorp', 'Ansible'
  ]

  return (
    <section className="py-20 lg:py-28 bg-verto-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-verto-dark-gray mb-4">
            Powered by Industry-Leading Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with the world's best technology vendors to deliver exceptional solutions
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-verto-blue/10 to-verto-blue/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 rounded bg-verto-blue/20"></div>
                  </div>
                  <p className="font-display font-medium text-sm text-gray-700 group-hover:text-verto-blue transition-colors">
                    {partner}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Certified partnerships and deep technical expertise across all major platforms
          </p>
          <a
            href="#partners"
            className="text-verto-blue hover:text-verto-blue-dark font-display font-medium inline-flex items-center group"
          >
            View All Partnerships
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners
