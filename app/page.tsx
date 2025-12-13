export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-400">NEXUS</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#ai-audit" className="text-gray-300 hover:text-white transition-colors">AI Audit</a>
          <a href="#process" className="text-gray-300 hover:text-white transition-colors">Process</a>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <div className="text-center py-20">
          <div className="inline-flex items-center bg-slate-800 text-green-400 px-4 py-2 rounded-full text-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Accepting New Clients for Q4 2024
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Automate the Boring.
            <br />
            <span className="text-blue-400">Scale the Brilliant.</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            We help small and mid-sized businesses replace manual drudgery with 
            intelligent automation. Leverage LLMs, modern stacks, and custom 
            workflows to cut costs and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              Try Free AI Audit
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Services
            </button>
          </div>

          <div className="mt-32">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-8">
              POWERED BY MODERN TECHNOLOGY
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <span className="text-lg font-medium">OpenAI</span>
              <span className="text-lg font-medium">Google Gemini</span>
              <span className="text-lg font-medium">Next.js</span>
              <span className="text-lg font-medium">Python</span>
              <span className="text-lg font-medium">AWS</span>
              <span className="text-lg font-medium">Vercel</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
