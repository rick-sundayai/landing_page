import React from 'react';
import { Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
              Get in touch
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's build your future.</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Ready to stop wasting time on manual tasks? Book a free 15-minute architectural review with our senior engineers.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hello@nexus-consulting.com" className="flex items-start group hover:bg-slate-50 p-4 -m-4 rounded-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-blue-600 mr-5 shadow-sm group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Email us</p>
                  <p className="text-slate-500">hello@nexus-consulting.com</p>
                </div>
              </a>
              
              <a href="tel:+15551234567" className="flex items-start group hover:bg-slate-50 p-4 -m-4 rounded-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-blue-600 mr-5 shadow-sm group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Call us</p>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Work Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Project Brief</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group">
                Request Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};