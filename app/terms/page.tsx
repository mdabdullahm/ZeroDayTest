"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, Gavel, UserCog, 
  Lock, Globe, Info, Scale, Fingerprint, 
  Terminal, AlertTriangle, Printer, ExternalLink,
  CheckCircle2
} from 'lucide-react';

const termSections = [
  { id: "definitions", title: "1. Definitions", icon: <Info size={16} /> },
  { id: "license", title: "2. Limited License", icon: <FileText size={16} /> },
  { id: "compliance", title: "3. Legal Compliance", icon: <Gavel size={16} /> },
  { id: "property", title: "4. Intellectual Property", icon: <Fingerprint size={16} /> },
  { id: "account", title: "5. Account Security", icon: <UserCog size={16} /> },
  { id: "platform", title: "6. Platform Use", icon: <Terminal size={16} /> },
  { id: "liability", title: "7. Liability Limits", icon: <AlertTriangle size={16} /> },
  { id: "general", title: "11. General Terms", icon: <Globe size={16} /> },
];

export default function TermsPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Matrix Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* Top Header Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-green-500/10 pb-6">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              <ShieldCheck size={14} /> [ SYSTEM_ACCESS_PROTOCOL_ENFORCED ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_PROTOCOL
           </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          
          {/* Left Side: Sticky Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protocol_Nodes</p>
            {termSections.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group"
              >
                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
              </a>
            ))}
          </aside>

          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl print:bg-white print:text-black print:p-0 print:border-none"
          >
            {/* Document Title */}
            <div className="text-center mb-16 space-y-4">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter print:text-black">
                 Terms & <span className="text-green-500 print:text-green-700">Conditions</span>
               </h1>
               <p className="text-green-600 font-mono text-xs uppercase tracking-[0.2em] font-bold">Byte Capsule IT Bug Bounty Platform</p>
               <div className="pt-4 flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <p>Last Updated: <span className="text-white print:text-black font-bold">February 09, 2026</span></p>
                  <p>Version: <span className="text-white print:text-black">2.4.0</span></p>
               </div>
            </div>

            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               {/* Introduction */}
               <p className="bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 italic print:bg-gray-100 print:text-black">
                 By accessing or using this Website, you agree to comply with these Terms & Conditions and all applicable laws of the People’s Republic of Bangladesh. If you do not agree, you must discontinue use immediately.
               </p>

               {/* Section 1 */}
               <div id="definitions" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 1. Definitions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
                     {[
                       { k: "Visitor", v: "Anyone browsing without an account." },
                       { k: "Member", v: "Registered user/Researcher." },
                       { k: "Customer", v: "Organizations engaging our services." },
                       { k: "Bounty Brief", v: "Scope & reward documentation." }
                     ].map((d, i) => (
                        <div key={i} className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group hover:border-green-500/30 transition-all">
                           <span className="text-green-500 block mb-1 uppercase tracking-widest">{d.k}</span>
                           <span className="text-gray-500 group-hover:text-gray-300">{d.v}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Section 3: Legal - Tactical Highlight */}
               <div id="compliance" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-[2.5rem] relative overflow-hidden print:bg-white print:border-black">
                  <Scale size={120} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 rotate-12" />
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black leading-none">
                    <ShieldCheck className="text-green-500" /> 3. Legal Compliance
                  </h3>
                  <p className="mb-6 text-sm">You agree to comply with the following statutory frameworks of Bangladesh:</p>
                  <div className="space-y-4">
                     <div className="flex gap-4 p-4 bg-black/40 rounded-xl border border-white/5 group hover:border-green-500/40 transition-all">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" />
                        <p className="text-xs leading-relaxed"><span className="text-white font-bold">CSA 2025:</span> Modern legal structure for digital security and national governance.</p>
                     </div>
                     <div className="flex gap-4 p-4 bg-black/40 rounded-xl border border-white/5 group hover:border-green-500/40 transition-all">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" />
                        <p className="text-xs leading-relaxed"><span className="text-white font-bold">DSA 2018:</span> Regulating digital security and preventing device-based offences.</p>
                     </div>
                  </div>
               </div>

               {/* Section 5: Account Security */}
               <div id="account" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 5. Account Security
                  </h3>
                  <p className="mb-4">Maintain the integrity of your access credentials:</p>
                  <ul className="grid md:grid-cols-2 gap-4 list-none text-xs font-mono">
                     <li className="flex gap-2 text-gray-500 italic group hover:text-green-400 transition-colors">
                        <Lock size={12} className="text-green-900 mt-1" /> Multi-Factor Authentication (2FA) is strongly recommended.
                     </li>
                     <li className="flex gap-2 text-gray-500 italic group hover:text-green-400 transition-colors">
                        <Lock size={12} className="text-green-900 mt-1" /> You are responsible for all activity under your node.
                     </li>
                  </ul>
               </div>

               {/* Section 7: Liability - Red Alert Style */}
               <div id="liability" className="scroll-mt-32 p-8 bg-red-950/10 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden print:bg-white print:border-black">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                     <AlertTriangle size={48} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-4 print:text-black">7. Limitation of Liability</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    ZeroDay Test provides services <span className="text-red-500 font-black">"AS-IS"</span>. Participation is at your own risk. Byte Capsule IT is not liable for technical malfunctions, data loss, or indirect damages resulting from testing activities.
                  </p>
               </div>

               {/* Final Acceptance Block */}
               <div className="mt-16 p-8 md:p-12 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-black rounded-lg">
                              <CheckCircle2 size={24} className="text-green-500" />
                           </div>
                           <h4 className="text-lg font-black uppercase tracking-tight leading-none">Binding Acknowledgement</h4>
                        </div>
                        <p className="text-xs md:text-sm font-bold leading-relaxed max-w-xl">
                           By using ZeroDay Test, you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions and all applicable laws of Bangladesh.
                        </p>
                     </div>
                     <div className="flex flex-col items-center md:items-end">
                        <ShieldCheck size={48} strokeWidth={1} />
                        <p className="text-[9px] font-mono uppercase font-black mt-2 tracking-widest">Protocol_Authorized</p>
                     </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta for Terms */}
        <div className="mt-12 text-center opacity-30 flex flex-col md:flex-row justify-center items-center gap-6">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              ZeroDay Test Lab | Terms of Service | v2.4
           </p>
           <div className="w-1 h-1 bg-gray-800 rounded-full hidden md:block"></div>
           <a href="mailto:support@bytecapsule.com" className="text-[9px] font-mono text-green-900 hover:text-green-500 transition-all uppercase tracking-widest flex items-center gap-2">
              <ExternalLink size={10} /> Report_Infringement
           </a>
        </div>

      </div>
    </div>
  );
}