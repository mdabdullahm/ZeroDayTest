"use client";
import React from 'react';
import { BookText, Terminal, Code, FileCode, Shield } from 'lucide-react';

export default function HackerDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-3 text-green-500 font-mono text-xs mb-8 uppercase tracking-widest opacity-60">
          <Terminal size={14} /> <span>/root/docs/researcher_guidelines.md</span>
        </div>
        
        <h1 className="text-4xl lg:text-7xl font-black uppercase mb-12 tracking-tighter leading-none">
          Hacker <span className="text-green-500 italic">Documentation</span>
        </h1>
        
        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          
          {/* Sidebar Navigation */}
          <div className="space-y-4">
             <p className="text-[10px] font-mono text-green-900 uppercase tracking-[0.4em] mb-6">Documentation_Index</p>
             {['Getting Started', 'Reporting Rules', 'Bounty Tiers', 'Hall of Fame Info'].map((t) => (
               <div key={t} className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl text-gray-400 hover:text-green-500 hover:border-green-500/20 cursor-pointer transition-all text-xs font-bold uppercase tracking-wider">
                 {t}
               </div>
             ))}
          </div>

          {/* Main Documentation Content */}
          <div className="bg-zinc-950/50 border border-white/5 p-8 md:p-16 rounded-[3rem] space-y-10 font-light text-gray-400 backdrop-blur-sm relative overflow-hidden">
             
             {/* Decorative Background Icon */}
             <Shield size={200} className="absolute -right-20 -bottom-20 text-green-500 opacity-[0.02] -rotate-12" />

             <div className="space-y-6 relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase flex items-center gap-3 tracking-tight">
                  <Shield size={24} className="text-green-500" /> Researcher Code of Conduct
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  All researchers participating on the ZeroDay Test platform must strictly adhere to our ethical guidelines and the established 'Rules of Engagement'. Integrity is our primary directive.
                </p>
             </div>

             <div className="space-y-4 relative z-10">
                <h3 className="text-white font-bold uppercase text-xs tracking-widest">Standard Operating Procedure</h3>
                <div className="p-8 bg-black/80 rounded-3xl border border-white/5 font-mono text-xs leading-relaxed text-green-700/80 shadow-2xl">
                   <span className="text-green-900"># protocol_execution_flow</span> <br /><br />
                   <span className="text-gray-600">01.</span> Always maintain strict adherence to program scope. <br />
                   <span className="text-gray-600">02.</span> Do not perform tests that could disrupt service availability. <br />
                   <span className="text-gray-600">03.</span> Submit vulnerability reports immediately upon Proof-of-Concept. <br />
                   <span className="text-gray-600">04.</span> Maintain confidentiality until coordinated disclosure is authorized.
                </div>
             </div>

             <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.2em] pt-8 border-t border-white/5">
                Version: 1.0.4-stable | Last_Updated: 2026.03.09
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}