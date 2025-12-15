import React from 'react';
import { Bot, Workflow, Share2, Map, Database, ArrowUpRight, MessageSquareHeart } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  title: string, 
  description: string,
  className?: string 
}) => (
  <div className={`bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group ${className}`}>
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-50">
        <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Holistic Automation <br/>
              <span className="text-slate-400">for Modern Business</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We move beyond simple scripts. Our architecture combines deep process analysis with the agility of modern intelligent automation.
            </p>
          </div>
          <a href="#contact" className="group text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 transition-colors duration-300">
            Explore All Services <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          <ServiceCard 
            icon={Workflow}
            title="Intelligent Automation"
            description="End-to-end orchestration connecting your ERP, CRM, and internal tools to create self-driving business processes."
            className="md:col-span-2 bg-slate-50"
          />
          <ServiceCard 
            icon={MessageSquareHeart}
            title="Customer Service & Support"
            description="Deploy 24/7 AI agents that handle inquiries, resolve tickets, and delight users instantly."
            className="bg-blue-50/50"
          />
          <ServiceCard 
            icon={Share2}
            title="Marketing & Social Automations"
            description="Automate content creation, social scheduling, and lead nurturing campaigns at scale."
            className="bg-slate-50"
          />
          <ServiceCard 
            icon={Map}
            title="Process Mapping Analysis"
            description="Deep-dive operational audits to visualize bottlenecks and architect efficient, error-free workflows before a single line of code is written."
            className="md:col-span-2 bg-slate-50"
          />
          <ServiceCard 
            icon={Database}
            title="Data Infrastructure"
            description="Clean, structured data pipelines ready for LLM consumption."
            className="bg-slate-50"
          />
           <ServiceCard 
            icon={Bot}
            title="AI Strategic Consulting"
            description="Executive advisory on AI adoption and roadmap planning."
            className="md:col-span-2 bg-slate-900 !text-white hover:!bg-slate-800"
          />
        </div>
      </div>
    </section>
  );
};