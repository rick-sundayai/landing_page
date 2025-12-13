import React from 'react';
import { Search, PenTool, Rocket, Repeat, Map } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <div className="relative flex flex-col items-start p-6 group">
    <div className="mb-6 relative">
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-full">
        0{number}
      </div>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Implementation Framework</h2>
          <p className="text-slate-500">
            We don't guess. We follow a rigorous, data-driven process to ensure your automation delivers tangible ROI from Day 1.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Step 
              number="1" 
              icon={Map}
              title="Process Mapping Analysis" 
              description="We visualize your entire workflow to identify hidden bottlenecks." 
            />
            <Step 
              number="2" 
              icon={PenTool}
              title="Architect" 
              description="Design secure, scalable automation flows." 
            />
            <Step 
              number="3" 
              icon={Rocket}
              title="Deploy & Test" 
              description="Rapid agile sprints to production." 
            />
            <Step 
              number="4" 
              icon={Repeat}
              title="Scale & Train" 
              description="Optimization and team enablement." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};