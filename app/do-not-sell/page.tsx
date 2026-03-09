"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldOff, Share2, Lock, Scale, 
  Fingerprint, Terminal, UserCheck, 
  EyeOff, AlertCircle, FileLock, 
  Globe, Info, Printer, Mail 
} from 'lucide-react';

const navSections = [
  { id: "no-sale", title: "1. No Sale Policy", icon: <ShieldOff size={16} /> },
  { id: "disclosure", title: "2. Operational Use", icon: <Share2 size={16} /> },
  { id: "cookies", title: "3. Cookie Limits", icon: <EyeOff size={16} /> },
  { id: "laws", title: "4. Bangladesh Cyber Laws", icon: <Scale size={16} /> },
  { id: "rights", title: "5. Your Rights", icon: <UserCheck size={16} /> },
];

export default function DoNotSellPage() {
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
              <ShieldOff size={14} /> [ DATA_INTEGRITY_PROTECTION_v1.0 ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_DOC
           </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protection_Nodes</p>
            {navSections.map((item) => (
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

          {/* Main Document Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl print:bg-white print:text-black print:p-0 print:border-none"
          >
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter print:text-black leading-none">
                 Do Not <span className="text-green-500 print:text-green-700">Sell or Share</span> My Info
               </h1>
               <p className="text-green-600 font-mono text-xs uppercase tracking-[0.2em] font-bold">Privacy & Anti-Commercialization Policy</p>
               <div className="pt-4 flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <p>Platform: <span className="text-white print:text-black">ZeroDay Test</span></p>
                  <p>Effective Date: <span className="text-green-900 print:text-black font-bold">February 09, 2026</span></p>
               </div>
            </div>

            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 print:bg-gray-100 print:text-black">
                 Byte Capsule IT ensures that user data processed through ZeroDay Test is never treated as a commodity. We strictly prohibit the sale or commercial trading of personal information.
               </p>

               {/* Section 1: No Sale */}
               <div id="no-sale" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 1. No Sale of Information
                  </h3>
                  <div className="p-8 bg-zinc-900/50 border border-green-500/20 rounded-[2rem] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ShieldOff size={80} className="text-green-500" />
                     </div>
                     <p className="text-sm mb-4 leading-relaxed relative z-10">
                        Byte Capsule IT does not sell, rent, or commercially share personal information. Under the 
                        <span className="text-white"> CSA 2025</span>, <span className="text-white"> DSA 2018</span>, and 
                        <span className="text-white"> ICT Act 2006</span>, any unauthorized transfer or sale is strictly prohibited.
                     </p>
                     <div className="flex items-center gap-2 text-[10px] font-mono text-green-900 uppercase tracking-widest">
                        <CheckCircle2 size={12} /> Commercial_Trading: DISABLED
                     </div>
                  </div>
               </div>

               {/* Section 2: Operational Disclosure */}
               <div id="disclosure" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 2. Legitimate Disclosures
                  </h3>
                  <p className="mb-4">Data sharing occurs <span className="text-white font-bold">only</span> for operational necessity:</p>
                  <div className="grid md:grid-cols-1 gap-4">
                     {[
                       "Trusted Service Providers (Hosting, Identity verification)",
                       "Program Owners (Clients) strictly for bug bounty operations",
                       "Law Enforcement (Only when required by lawful request under Bangladesh Law)"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 p-4 bg-zinc-950 border border-white/5 rounded-xl text-xs font-mono text-gray-500">
                          <Terminal size={14} className="text-green-900" /> {item}
                       </div>
                     ))}
                  </div>
               </div>

               {/* Section 4: Law Compliance */}
               <div id="laws" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/10 rounded-[2.5rem] relative overflow-hidden print:bg-white print:border-black">
                  <Fingerprint size={120} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 rotate-12" />
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <Scale className="text-green-500" /> 4. Bangladesh Cyber Law Compliance
                  </h3>
                  <div className="space-y-4 relative z-10">
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0 mt-1 uppercase text-[10px] font-mono">CSA</div>
                        <p className="text-xs text-gray-500 leading-relaxed"><span className="text-white">Cyber Security Act 2025:</span> Modernized governance for protecting sensitive and personal data, ensuring operator accountability.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0 mt-1 uppercase text-[10px] font-mono">DSA</div>
                        <p className="text-xs text-gray-500 leading-relaxed"><span className="text-white">Digital Security Act 2018:</span> Covers digital data protection and penalties for unauthorized access or disclosure.</p>
                     </div>
                  </div>
               </div>

               {/* Section 5: Rights */}
               <div id="rights" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 5. Your Rights & Choices
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {["Access Info", "Correct Data", "Request Deletion", "Object Processing"].map((right, i) => (
                        <div key={i} className="p-4 bg-zinc-950 border border-white/5 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-green-500/30 transition-all group">
                           <UserCheck size={20} className="text-gray-700 group-hover:text-green-500 transition-colors" />
                           <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-300">{right}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Final Contact Node */}
               <div className="mt-16 p-10 bg-zinc-900 border border-green-500/20 rounded-[3rem] relative overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                     <div className="space-y-4">
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight">Exercise Your Rights</h4>
                        <p className="text-sm text-gray-400 max-w-md">
                           To request access, deletion, or correction of your data, please contact our centralized privacy uplink.
                        </p>
                     </div>
                     <div className="flex flex-col items-center md:items-end gap-3">
                        <a href="mailto:privacy@bytecapsule.com" className="px-10 py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] text-xs uppercase tracking-widest">
                           <Mail size={16} /> privacy@bytecapsule.com
                        </a>
                        <p className="text-[9px] font-mono text-gray-600 uppercase">Verification_required_for_requests</p>
                     </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 text-center opacity-30">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              ZeroDay Test Identity Safeguard | Protocol: ANTI-RESALE | Node: 0x9AF2
           </p>
        </div>

      </div>
    </div>
  );
}

// Helper আইকন
const CheckCircle2 = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);