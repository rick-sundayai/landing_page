'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AuditPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    companySize: '',
    industry: '',
    currentTech: [],
    hasSops: null,
    usesProjectManagement: null,
    biggestBottleneck: '',
    painPointDescription: ''
  })

  const handleInputChange = (field: string, value: string | string[] | boolean | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    // Here we would submit to Supabase
    console.log('Submitting assessment data:', formData)
    // Redirect to calendar booking or thank you page
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              NEXUS
            </Link>
            <Link href="/" className="text-[#A1A1AA] hover:text-[#EDEDED] transition-colors">← Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-black/20 backdrop-blur-sm text-blue-400 px-4 py-2 rounded-full text-sm mb-8 border border-blue-400/20">
            <span className="text-2xl mr-2">🎯</span>
            Strategic Assessment
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-[#EDEDED]">
            Is Your Business
            <br />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Ready for AI?</span>
          </h1>

          <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto mb-12 leading-relaxed">
            We map your manual processes to identify exactly what can be automated with code and what requires AI reasoning. Get a complete architectural roadmap of your automation opportunities.
          </p>

          {/* Visual Diagram */}
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-red-500/10 rounded-xl border border-red-500/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🌪️</span>
              </div>
              <p className="text-[#A1A1AA] text-sm">Current State<br/>(Tangled Process)</p>
            </div>
            <div className="flex-1 max-w-48">
              <svg className="w-full h-8" viewBox="0 0 200 20" fill="none">
                <path d="M10 10 Q50 2 90 10 T190 10" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500/10 rounded-xl border border-green-500/20 flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <p className="text-[#A1A1AA] text-sm">Future State<br/>(Structured Flow)</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Triage Framework (Educational Section) */}
      <section className="py-16 bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDED] mb-4">Our Assessment Framework</h2>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
              We evaluate your processes through three distinct lenses to recommend the right solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4 border border-yellow-500/30">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-3">Optimization</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                First, we refine your manual process. Bad processes automated are just faster chaos.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-3">Automation</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                We apply code (APIs, Webhooks) to rigid, repetitive tasks that follow clear rules.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-3">AI Integration</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                We apply LLMs only where human-like reasoning, context, and creativity are needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDED] mb-4">What You&apos;ll Receive</h2>
            <p className="text-[#A1A1AA] text-lg">
              A comprehensive strategic roadmap, not just a sales pitch.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#EDEDED] mb-2">Full Architectural Map</h3>
                <p className="text-[#A1A1AA]">A visual diagram of your current workflows with bottleneck identification and optimization opportunities.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#EDEDED] mb-2">Green-Yellow-Red Feasibility Report</h3>
                <p className="text-[#A1A1AA]">Honest assessment of what should be automated now, later, or not at all based on ROI and complexity.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#EDEDED] mb-2">Tech Stack Recommendations</h3>
                <p className="text-[#A1A1AA]">Specific tools, platforms, and architectures tailored to your business size and technical capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Intake Form */}
      <section className="py-16 bg-black/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDED] mb-4">Strategic Intake Assessment</h2>
            <p className="text-[#A1A1AA] text-lg">
              Step {currentStep} of 3 - Help us understand your current operational maturity
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-[#A1A1AA]">Company Info</span>
              <span className="text-sm text-[#A1A1AA]">Process Maturity</span>
              <span className="text-sm text-[#A1A1AA]">Pain Points</span>
            </div>
            <div className="w-full bg-black/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-6">Company Topology</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#EDEDED] text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-[#EDEDED] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-[#EDEDED] text-sm font-medium mb-2">Work Email</label>
                    <input
                      type="email"
                      className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-[#EDEDED] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all"
                      placeholder="you@company.com"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#EDEDED] text-sm font-medium mb-2">Company Size</label>
                    <select
                      className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-[#EDEDED] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all"
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#EDEDED] text-sm font-medium mb-2">Industry</label>
                    <select
                      className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-[#EDEDED] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                    >
                      <option value="">Select industry</option>
                      <option value="SaaS">SaaS/Technology</option>
                      <option value="Ecommerce">E-commerce</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-6">Process Maturity Assessment</h3>
                
                <div>
                  <label className="block text-[#EDEDED] text-sm font-medium mb-4">Do you currently have written Standard Operating Procedures (SOPs)?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'yes', label: 'Yes, comprehensive SOPs', icon: '✅' },
                      { value: 'partial', label: 'Some documentation', icon: '⚠️' },
                      { value: 'no', label: 'Mostly tribal knowledge', icon: '❌' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange('hasSops', option.value)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.hasSops === option.value
                            ? 'border-[#3B82F6] bg-[#3B82F6]/10'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <span className="text-2xl block mb-2">{option.icon}</span>
                        <span className="text-[#EDEDED] font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#EDEDED] text-sm font-medium mb-4">Do you use project management or workflow tools?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'advanced', label: 'Yes (Notion, Jira, Asana, etc.)', icon: '🛠️' },
                      { value: 'basic', label: 'Basic tools (Spreadsheets, Email)', icon: '📧' },
                      { value: 'none', label: 'No formal tools', icon: '🤷' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange('usesProjectManagement', option.value)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.usesProjectManagement === option.value
                            ? 'border-[#3B82F6] bg-[#3B82F6]/10'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <span className="text-2xl block mb-2">{option.icon}</span>
                        <span className="text-[#EDEDED] font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-6">Pain Point Identification</h3>
                
                <div>
                  <label className="block text-[#EDEDED] text-sm font-medium mb-4">What&apos;s your biggest operational bottleneck?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'data-entry', label: 'Data Entry & Processing', icon: '📊' },
                      { value: 'customer-support', label: 'Customer Support', icon: '💬' },
                      { value: 'content-generation', label: 'Content Generation', icon: '✍️' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange('biggestBottleneck', option.value)}
                        className={`p-4 rounded-lg border text-center transition-all ${
                          formData.biggestBottleneck === option.value
                            ? 'border-[#3B82F6] bg-[#3B82F6]/10'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <span className="text-3xl block mb-2">{option.icon}</span>
                        <span className="text-[#EDEDED] font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#EDEDED] text-sm font-medium mb-2">
                    Describe the specific task you hate doing the most (be detailed)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-[#EDEDED] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all resize-none"
                    placeholder="e.g., Every Monday I spend 3 hours copying data from our CRM into spreadsheets to create weekly reports for the team. It's manual, error-prone, and prevents me from focusing on strategy..."
                    value={formData.painPointDescription}
                    onChange={(e) => handleInputChange('painPointDescription', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 1
                    ? 'text-[#A1A1AA] cursor-not-allowed'
                    : 'text-[#EDEDED] hover:bg-white/5 border border-white/20'
                }`}
              >
                Previous
              </button>

              <div className="text-[#A1A1AA] text-sm">
                Step {currentStep} of 3
              </div>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-medium hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-medium hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all"
                >
                  Complete Assessment
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
            NEXUS
          </div>
          <p className="text-[#A1A1AA] text-sm">
            Strategic AI Implementation & Process Optimization
          </p>
        </div>
      </footer>
    </div>
  )
}