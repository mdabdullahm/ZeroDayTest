"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, EyeOff, ShieldCheck, Ban, 
  Trophy, Gavel, Terminal, Fingerprint, 
  FileSignature, Printer, Info, CheckCircle2,
  AlertTriangle, Briefcase
} from 'lucide-react';

const ndaSections = [
  { id: "purpose", title: "1. Purpose", icon: <Info size={16} /> },
  { id: "confidential", title: "2. Confidential Info", icon: <EyeOff size={16} /> },
  { id: "obligations", title: "3. Hunter Obligations", icon: <ShieldCheck size={16} /> },
  { id: "prohibited", title: "4. Prohibited Actions", icon: <Ban size={16} /> },
  { id: "disclosure", title: "5. Responsible Disclosure", icon: <Terminal size={16} /> },
  { id: "employment", title: "6. No Employment", icon: <Briefcase size={16} /> },
  { id: "rewards", title: "7. Rewards & Ownership", icon: <Trophy size={16} /> },
  { id: "breach", title: "8. Breach Consequences", icon: <AlertTriangle size={16} /> },
  { id: "governing", title: "9. Governing Law", icon: <Gavel size={16} /> },
];

export default function HunterNDAPage() {
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
        
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-green-500/10 pb-6">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              <Fingerprint size={14} /> [ HUNTER_NDA_PROTOCOL_v1.0 ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_CONTRACT
           </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Agreement_Index</p>
            {ndaSections.map((item) => (
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
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter print:text-black leading-none">
                 Hunter <span className="text-green-500 print:text-green-700">NDA</span> & Confidentiality
               </h1>
               <p className="text-green-600 font-mono text-xs uppercase tracking-[0.2em] font-bold">Authorized Researcher Agreement</p>
               <div className="pt-4 flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <p>Effective Date: <span className="text-white print:text-black">February 09, 2026</span></p>
                  <p>Version: <span className="text-white print:text-black">1.0</span></p>
               </div>
            </div>

            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 print:bg-gray-100 print:text-black">
                 This Agreement governs the confidentiality and authorized security testing conducted through Zeroday Test, an asset of Byte Capsule, Dhaka, Bangladesh.
               </p>

               {/* Section 2 */}
               <div id="confidential" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 2. Confidential Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                     {[
                       "Client systems, APIs, source code",
                       "Internal security documentation",
                       "User data & access records",
                       "Unreleased vulnerability details",
                       "Platform internal logic"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-xs font-mono text-gray-400 group hover:border-green-500/30 transition-all">
                          <Lock size={14} className="text-green-900 group-hover:text-green-500" /> {item}
                       </div>
                     ))}
                  </div>
               </div>

               {/* Section 3 & 4 */}
               <div className="grid md:grid-cols-2 gap-8">
                  <div id="obligations" className="p-8 bg-green-500/5 border border-green-500/10 rounded-[2rem]">
                     <h4 className="text-green-500 font-bold uppercase text-xs mb-6 flex items-center gap-2">
                        <ShieldCheck size={18} /> 3. Hunter Obligations
                     </h4>
                     <ul className="text-xs space-y-4 text-gray-400 font-mono list-none">
                        <li className="flex gap-2 underline decoration-green-900/50 underline-offset-4">&gt; Test only within approved scope.</li>
                        <li className="flex gap-2 underline decoration-green-900/50 underline-offset-4">&gt; No data modification beyond PoC.</li>
                        <li className="flex gap-2 underline decoration-green-900/50 underline-offset-4">&gt; Exclusive reporting via Platform.</li>
                        <li className="flex gap-2 underline decoration-green-900/50 underline-offset-4">&gt; Maintain strict data silence.</li>
                     </ul>
                  </div>
                  <div id="prohibited" className="p-8 bg-red-500/5 border border-red-500/10 rounded-[2rem]">
                     <h4 className="text-red-500 font-bold uppercase text-xs mb-6 flex items-center gap-2">
                        <Ban size={18} /> 4. Prohibited Actions
                     </h4>
                     <ul className="text-xs space-y-4 text-gray-400 font-mono list-none">
                        <li className="flex gap-2 text-red-900/80">[!] Denial-of-Service attacks.</li>
                        <li className="flex gap-2 text-red-900/80">[!] Accessing personal data of others.</li>
                        <li className="flex gap-2 text-red-900/80">[!] Unauthorized Social Engineering.</li>
                        <li className="flex gap-2 text-red-900/80">[!] Use of banned automated tools.</li>
                     </ul>
                  </div>
               </div>

               {/* Section 7 */}
               <div id="rewards" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 7. Reward & Ownership
                  </h3>
                  <p className="text-gray-400">
                    Hunters retain ownership of findings until reward validation. Upon payment, all remediation rights transfer to the Client. Zeroday Test retains all platform rights.
                  </p>
               </div>

               {/* Section 8 */}
               <div id="breach" className="scroll-mt-32 p-8 bg-red-950/20 border border-red-500/10 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <AlertTriangle size={60} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-6 print:text-black">8. Breach & Consequences</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                     {["Account Termination", "Forfeiture of Rewards", "Legal Proceedings", "Criminal Liability"].map((c, i) => (
                        <div key={i} className="p-3 bg-black/40 border border-red-500/10 rounded-xl text-[10px] font-mono text-red-900 uppercase">
                           {c}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Section 9 */}
               <div id="governing" className="scroll-mt-32 pt-8 border-t border-white/5">
                  <h4 className="text-white font-bold uppercase text-xs mb-2">9. Governing Law</h4>
                  <p className="text-xs text-gray-500 font-mono tracking-widest">
                    JURISDICTION: PEOPLE’S REPUBLIC OF BANGLADESH
                  </p>
               </div>

               {/* Acceptance Block */}
               <div className="mt-16 p-10 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-black rounded-lg">
                              <FileSignature size={24} className="text-green-500" />
                           </div>
                           <h4 className="text-lg font-black uppercase tracking-tight leading-none">Electronic Acceptance</h4>
                        </div>
                        <p className="text-xs md:text-sm font-bold leading-relaxed max-w-xl">
                           By clicking “I Agree,” you confirm that you have read, understood, and agree to be legally bound by this Hunter Non-Disclosure Agreement.
                        </p>
                     </div>
                     <div className="text-right flex flex-col items-center md:items-end">
                        <ShieldCheck size={48} strokeWidth={1} />
                        <p className="text-[9px] font-mono uppercase font-black mt-2">Authenticated_Digital_ID</p>
                     </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 text-center opacity-30">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              ZeroDay Test Lab | Global Operational Directive | Node: 0x9AF2
           </p>
        </div>

      </div>
    </div>
  );
}