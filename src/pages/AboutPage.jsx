import { Users, Target, Award, Globe, CheckCircle } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-verto-blue-dark to-verto-teal-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About Verto Wave
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted partner in IT transformation, delivering comprehensive solutions that drive digital innovation and business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower organizations with cutting-edge IT solutions that transform their infrastructure, enhance security, and accelerate digital innovation. We believe in delivering technology that not only meets today's needs but prepares businesses for tomorrow's challenges.
              </p>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-verto-blue" />
                <span className="font-display font-semibold text-verto-dark-gray">Transforming IT, Empowering Business</span>
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the leading provider of comprehensive IT transformation solutions, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology seamlessly enables business growth and operational excellence.
              </p>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-verto-blue" />
                <span className="font-display font-semibold text-verto-dark-gray">Global IT Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, ensuring their success is our primary focus and measure of achievement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-verto-blue/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-verto-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with the highest ethical standards, building trust through transparency and honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional IT transformation solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-verto-blue mb-2">100+</div>
              <div className="text-gray-600 font-medium">Organizations Transformed</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-verto-blue mb-2">50+</div>
              <div className="text-gray-600 font-medium">Expert Consultants</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-verto-blue mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-verto-blue mb-2">99%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-verto-dark-gray mb-6">
              Why Choose Verto Wave?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real value.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-600">From infrastructure to security, we provide end-to-end IT transformation services.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Proven Expertise</h3>
                  <p className="text-gray-600">Our team brings decades of experience across multiple industries and technologies.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Strategic Partnership</h3>
                  <p className="text-gray-600">We work as an extension of your team, not just a vendor.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Measurable Results</h3>
                  <p className="text-gray-600">We deliver quantifiable improvements in performance, security, and efficiency.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-verto-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-verto-dark-gray mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Our relationship doesn't end with implementation - we're here for the long term.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-verto-blue-dark to-verto-teal-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how Verto Wave can help you achieve your IT transformation goals and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-verto-blue hover:bg-gray-100 font-display font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
              </a>
              <a
                href="#solutions"
                className="border-2 border-white text-white hover:bg-white hover:text-verto-blue font-display font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
