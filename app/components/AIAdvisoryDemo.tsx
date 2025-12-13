'use client'
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, CheckCircle, BarChart3, Settings, User } from 'lucide-react';

interface StrategyResult {
  title: string;
  summary: string;
  steps: string[];
  tools: string[];
  estimatedTimeSaved: string;
}

export const AIAdvisoryDemo = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);
  const [error, setError] = useState('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult: StrategyResult = {
        title: "Customer Support Automation Strategy",
        summary: "Implement an AI-powered support system to handle common inquiries and reduce manual workload.",
        steps: [
          "Analyze existing support ticket patterns and frequently asked questions",
          "Design conversational AI flows with natural language processing",
          "Integrate with existing CRM and ticketing systems",
          "Deploy chatbot with escalation protocols for complex issues",
          "Train team on new workflows and monitor performance metrics"
        ],
        tools: ["OpenAI GPT-4", "Zapier", "Intercom", "Slack", "Google Analytics"],
        estimatedTimeSaved: "15-20 hours"
      };
      
      setResult(mockResult);
    } catch (err) {
      setError("We couldn't generate a strategy right now. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wide mb-6">
            <Sparkles className="w-3 h-3 mr-2 text-blue-400" />
            Interactive Demo
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Instant Workflow Analysis
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Experience our advisory capabilities. Describe a bottleneck, and our AI will generate a preliminary architecture for you.
          </p>
        </div>

        {/* Browser / App Window Container */}
        <div className="bg-slate-50 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Fake Sidebar */}
          <div className="w-full md:w-64 bg-white border-r border-slate-200 p-6 hidden md:flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8 text-slate-900 font-bold">
                <div className="w-6 h-6 bg-blue-600 rounded shadow-md shadow-blue-200"></div>
                Nexus AI
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium cursor-pointer">
                  <BarChart3 className="w-4 h-4" /> Analysis
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                  <Settings className="w-4 h-4" /> Configuration
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-sm hover:text-slate-900 transition-colors cursor-pointer">
                <User className="w-4 h-4" /> Guest User
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8">
              <span className="font-semibold text-slate-700">New Automation Strategy</span>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-200 hover:bg-red-400 transition-colors"></span>
                <span className="w-3 h-3 rounded-full bg-slate-200 hover:bg-yellow-400 transition-colors"></span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 p-6 md:p-10 bg-slate-50 overflow-y-auto">
              {!result ? (
                <div className="max-w-2xl mx-auto">
                   <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Input your challenge</h3>
                      <form onSubmit={handleAudit} className="space-y-4">
                        <textarea
                          rows={4}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
                          placeholder="e.g. We spend 10 hours a week answering the same customer support questions..."
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                          type="submit"
                          disabled={isLoading || !input}
                          className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-slate-900/20 hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:hover:translate-y-0 group"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Processing Logic...
                            </>
                          ) : (
                            <>
                              Generate Blueprint <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                      {error && <p className="mt-4 text-red-500 text-sm bg-red-50 p-3 rounded">{error}</p>}
                   </div>
                   
                   {/* Empty State / Prompt Suggestions */}
                   <div className="mt-8 grid grid-cols-2 gap-4">
                      {['Auto-resolve support tickets', 'Generate social media content', 'Map out sales onboarding'].map((suggestion, i) => (
                        <button key={i} onClick={() => setInput(suggestion)} className="text-left p-4 bg-white border border-slate-100 rounded-lg text-sm text-slate-500 hover:border-blue-200 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          "{suggestion}..."
                        </button>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                     <div>
                       <button onClick={() => setResult(null)} className="text-xs text-slate-500 hover:text-blue-600 mb-2 transition-colors flex items-center gap-1">← Start Over</button>
                       <h2 className="text-2xl font-bold text-slate-900">{result.title}</h2>
                       <p className="text-slate-500 mt-1">{result.summary}</p>
                     </div>
                     <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 text-blue-700 font-bold shadow-sm">
                        {result.estimatedTimeSaved} <span className="text-xs font-normal text-blue-600 block">Time Saved / Week</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><BarChart3 className="w-4 h-4"/> Implementation Flow</h4>
                        <div className="space-y-4">
                          {result.steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold mt-0.5 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                {idx + 1}
                              </div>
                              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Settings className="w-4 h-4"/> Tools Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.tools.map((tool, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
                                {tool}
                              </span>
                            ))}
                          </div>
                       </div>
                       
                       <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-500/30">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Nexus Insight</h4>
                          <p className="text-blue-100 text-xs leading-relaxed">
                            This architecture is typical for high-growth firms. We can deploy a pilot version of this in less than 2 weeks.
                          </p>
                          <a href="#contact" className="mt-4 inline-block text-xs font-bold bg-white text-blue-600 px-3 py-2 rounded hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform">
                            Book Implementation
                          </a>
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};