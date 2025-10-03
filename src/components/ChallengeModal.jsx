import { useEffect } from 'react'

const ChallengeModal = ({ challenge, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!challenge) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="sticky top-0 p-4 sm:p-6 text-white z-20 shadow-lg"
          style={{
            background: 'linear-gradient(to right, #1DB4D8, #17A2B8)'
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <span 
                className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                {challenge.category}
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 break-words">
                {challenge.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg break-words" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {challenge.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 sm:p-2 rounded-full transition-colors"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Business Impact */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-verto-dark-gray">
                Business Impact
              </h3>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-lg">
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                {challenge.impacts.map((impact, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="break-words">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verto Wave Solution */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-verto-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-verto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-verto-dark-gray">
                How Verto Wave Solves This
              </h3>
            </div>
            <div className="bg-gradient-to-br from-verto-blue/5 to-verto-teal/5 border border-verto-blue/20 p-4 sm:p-6 rounded-lg">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 break-words">
                {challenge.solution}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {challenge.approach.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-verto-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-verto-dark-gray">
                Key Benefits & Outcomes
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {challenge.benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 border border-green-200 p-4 sm:p-5 rounded-lg text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-gray-700 font-medium text-sm sm:text-base break-words">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Solutions */}
          <div className="border-t pt-4 sm:pt-6">
            <h4 className="font-display font-semibold text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
              Related Solutions
            </h4>
            <div className="flex flex-wrap gap-2">
              {challenge.relatedSolutions.map((solution, index) => (
                <a
                  key={index}
                  href={`#${solution.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-verto-blue/10 text-verto-blue rounded-lg hover:bg-verto-blue hover:text-white transition-colors font-medium text-sm sm:text-base break-words"
                >
                  {solution}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div 
            className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl text-center"
            style={{
              background: 'linear-gradient(to right, #1DB4D8, #17A2B8)'
            }}
          >
            <h4 className="font-display font-bold text-lg sm:text-xl mb-2" style={{ color: 'white' }}>
              Ready to solve this challenge?
            </h4>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base break-words" style={{ color: 'white' }}>
              Let's discuss how Verto Wave can help transform your IT operations
            </p>
            <button className="bg-white text-verto-blue px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeModal
