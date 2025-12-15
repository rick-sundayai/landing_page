export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      {/* Navigation Bar (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              NEXUS
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#A1A1AA] hover:text-[#EDEDED] transition-colors font-medium">Services</a>
              <a href="#methodology" className="text-[#A1A1AA] hover:text-[#EDEDED] transition-colors font-medium">Process</a>
              <a href="#results" className="text-[#A1A1AA] hover:text-[#EDEDED] transition-colors font-medium">Results</a>
              <button className="px-6 py-2 rounded-md border border-[#3B82F6]/30 text-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all font-medium">
                Get Started
              </button>
              <a href="/audit" className="px-6 py-2 rounded-md bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all font-medium">
                Readiness Assessment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Abstract 3D wave background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-black/20 backdrop-blur-sm text-green-400 px-4 py-2 rounded-full text-sm mb-8 border border-green-400/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Accepting New Clients for Q4 2024
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-[#EDEDED]">
            Turn Chaos into Code.
            <br />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Turn Reasoning into AI.</span>
          </h1>

          <p className="text-xl text-[#A1A1AA] max-w-4xl mx-auto mb-12 leading-relaxed">
            We map your manual processes to identify exactly what can be automated with code and what requires AI reasoning. You don&apos;t need AI for everything—we tell you exactly where it fits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a href="/audit" className="group px-8 py-4 rounded-md bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-[#3B82F6]/30 hover:scale-105 border-t border-white/20">
              Start Readiness Assessment
              <svg className="ml-2 w-5 h-5 inline transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button className="px-8 py-4 rounded-md border border-[#A1A1AA]/30 text-[#A1A1AA] hover:border-[#EDEDED]/50 hover:text-[#EDEDED] transition-all font-semibold text-lg backdrop-blur-sm">
              See Process Maps
            </button>
          </div>
        </div>
      </section>

      {/* Process Methodology Triage Framework */}
      <section id="methodology" className="py-24 bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#EDEDED] mb-4">The Triage Framework</h2>
            <p className="text-[#A1A1AA] text-xl max-w-3xl mx-auto">
              Architect solutions correctly. Optimize before automating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stage 1: Optimization */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 backdrop-blur-sm"></div>
                <span className="text-3xl relative z-10">🔧</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-4">1. Optimize</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Refine manual workflows first. Automating a flawed process only generates chaos faster.
                </p>
              </div>
            </div>

            {/* Stage 2: Automation */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 backdrop-blur-sm"></div>
                <span className="text-3xl relative z-10">⚙️</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-4">2. Automate</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Delegate rigid, repetitive tasks to deterministic code, APIs, and Webhooks.
                </p>
              </div>
            </div>

            {/* Stage 3: AI Integration */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 backdrop-blur-sm"></div>
                <span className="text-3xl relative z-10">🧠</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <h3 className="text-xl font-bold text-[#EDEDED] mb-4">3. Integrate</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Deploy LLMs exclusively where human-like reasoning, context, and creativity are required.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#A1A1AA] italic">
              &quot;The right tool for the right job. Not everything needs AI—but when it does, we implement it properly.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* The "Problem" Section */}
      <section id="problem" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Old Way */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold mb-6 border border-red-500/20">
                ⚠️ The Old Way
              </div>
              <h3 className="text-3xl font-bold text-[#EDEDED] mb-6">Manual Drudgery</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Endless Spreadsheets</p>
                    <p className="text-[#A1A1AA] text-sm">Data entry consuming hours daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Time Waste</p>
                    <p className="text-[#A1A1AA] text-sm">20+ hours weekly on repetitive tasks</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
                    <span className="text-2xl">😰</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Human Error</p>
                    <p className="text-[#A1A1AA] text-sm">Mistakes costing thousands in revenue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Nexus Way */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold mb-6 border border-green-500/20">
                ✨ The Nexus Way
              </div>
              <h3 className="text-3xl font-bold text-[#EDEDED] mb-6">AI Precision</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Growth Focus</p>
                    <p className="text-[#A1A1AA] text-sm">Free up time for strategic initiatives</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Lightning Speed</p>
                    <p className="text-[#A1A1AA] text-sm">Tasks completed in minutes, not hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <p className="text-[#EDEDED] font-medium">Intelligent Bots</p>
                    <p className="text-[#A1A1AA] text-sm">Automated data processing 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento Box Layout) */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#EDEDED] mb-4">Our Solutions</h2>
            <p className="text-[#A1A1AA] text-xl max-w-2xl mx-auto">
              Enterprise-grade automation tailored for growing businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: LLM Integration */}
            <div className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6 border-t border-white/20">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-4">LLM Integration</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Deploy intelligent chatbots for customer support, lead qualification, and internal knowledge management.
              </p>
            </div>

            {/* Card 2: Workflow Automation */}
            <div className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6 border-t border-white/20">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-4">Workflow Automation</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Connect your CRM, ERP, and tools with intelligent workflows that eliminate manual handoffs.
              </p>
            </div>

            {/* Card 3: Data Processing */}
            <div className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6 border-t border-white/20">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-[#EDEDED] mb-4">Data Processing</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Transform documents, emails, and unstructured data into clean, searchable databases automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Trust Battery) */}
      <section id="results" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tech Stack Bar */}
          <div className="text-center mb-16">
            <p className="text-[#A1A1AA] text-sm uppercase tracking-wide mb-8">
              POWERED BY BEST-IN-CLASS TECH
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[#A1A1AA]">
              <span className="text-lg font-medium hover:text-[#EDEDED] transition-colors">OpenAI</span>
              <span className="text-lg font-medium hover:text-[#EDEDED] transition-colors">Anthropic</span>
              <span className="text-lg font-medium hover:text-[#EDEDED] transition-colors">Supabase</span>
              <span className="text-lg font-medium hover:text-[#EDEDED] transition-colors">Next.js</span>
              <span className="text-lg font-medium hover:text-[#EDEDED] transition-colors">Python</span>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-[#EDEDED] mb-4">&quot;Nexus saved us 25 hours per week on data entry. Our team can finally focus on growth instead of spreadsheets.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full"></div>
                <div>
                  <p className="text-[#EDEDED] font-medium">Sarah Chen</p>
                  <p className="text-[#A1A1AA] text-sm">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-[#EDEDED] mb-4">&quot;ROI was immediate. We recovered the investment cost in the first month through time savings alone.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full"></div>
                <div>
                  <p className="text-[#EDEDED] font-medium">Marcus Rodriguez</p>
                  <p className="text-[#A1A1AA] text-sm">Operations Director, GrowthCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-[#EDEDED] mb-4">&quot;Customer satisfaction increased 40% with their AI support system. Game-changing implementation.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full"></div>
                <div>
                  <p className="text-[#EDEDED] font-medium">Jennifer Walsh</p>
                  <p className="text-[#A1A1AA] text-sm">Head of Customer Success, InnovateLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-[#EDEDED] mb-6">
            Ready to See Where AI Actually Fits?
            <br />
            <span className="text-[#A1A1AA] text-3xl">Get Your Strategic Roadmap</span>
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto">
            Limited Q4 readiness assessment slots. Start with our strategic intake to understand your automation opportunities.
          </p>
          <a href="/audit" className="group px-12 py-6 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold text-xl transition-all hover:shadow-2xl hover:shadow-[#3B82F6]/40 hover:scale-105 border-t border-white/20 inline-block">
            Begin AI Readiness Assessment
            <svg className="ml-3 w-6 h-6 inline transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
                NEXUS
              </div>
              <p className="text-[#A1A1AA] mb-6 max-w-md">
                Transforming business operations through intelligent automation and modern technology stacks.
              </p>
              <a href="https://linkedin.com/company/nexus" className="inline-flex items-center text-[#A1A1AA] hover:text-[#3B82F6] transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-[#EDEDED] mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-[#A1A1AA] hover:text-[#EDEDED] transition-colors">Services</a>
                <a href="#process" className="block text-[#A1A1AA] hover:text-[#EDEDED] transition-colors">Process</a>
                <a href="#results" className="block text-[#A1A1AA] hover:text-[#EDEDED] transition-colors">Results</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#EDEDED] mb-4">Contact</h4>
              <div className="space-y-2 text-[#A1A1AA]">
                <div>hello@nexus-consulting.com</div>
                <div>Book a free consultation</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-[#A1A1AA]">
            <p>&copy; 2024 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
