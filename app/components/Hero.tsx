import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-slate-50/50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:border-blue-200 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Intelligent Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Automate the <br />
              <span className="text-blue-600">Impossible.</span>
            </h1>
            
            <p className="mt-4 text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Nexus transforms your operations through deep process mapping analysis, autonomous customer support agents, and scalable marketing automations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#demo" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1">
                Start Process Map
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <Play className="mr-2 h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                View Solutions
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span>SOC2 Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Side Graphic - Modern Abstract Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 transition-transform duration-700 ease-out hover:scale-105">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                <span className="text-4xl font-bold text-white">98%</span>
              </div>
              
              <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                {/* Mockup Header */}
                <div className="h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mockup Content */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                      <div className="h-3 w-20 bg-slate-100 rounded"></div>
                    </div>
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-blue-100 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-green-400/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
                        </div>
                        <div className="h-3 w-24 bg-slate-200 rounded"></div>
                      </div>
                      <div className="h-3 w-12 bg-green-100 rounded text-green-600 text-xs font-bold flex items-center justify-center">Active</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-blue-100 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                        </div>
                        <div className="h-3 w-32 bg-slate-200 rounded"></div>
                      </div>
                      <div className="h-3 w-16 bg-blue-100 rounded text-blue-600 text-xs font-bold flex items-center justify-center">Processing</div>
                    </div>
                  </div>

                  <div className="h-32 bg-slate-900 rounded-lg p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 transition-opacity group-hover:opacity-90"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                       <div className="text-slate-400 text-xs font-mono">AI Analysis Running...</div>
                       <div className="flex gap-1 items-end h-12">
                          <div className="w-2 bg-blue-500 h-4 rounded-t animate-pulse"></div>
                          <div className="w-2 bg-blue-500 h-8 rounded-t animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 bg-blue-500 h-6 rounded-t animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          <div className="w-2 bg-blue-500 h-10 rounded-t animate-pulse" style={{animationDelay: '0.6s'}}></div>
                          <div className="w-2 bg-blue-500 h-7 rounded-t animate-pulse" style={{animationDelay: '0.8s'}}></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};