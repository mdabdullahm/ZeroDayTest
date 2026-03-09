"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, FileSignature, Gavel, Ban, 
  Target, CheckSquare, Fingerprint, Globe, 
  Clock, AlertCircle, Terminal, Printer
} from 'lucide-react';

const sections = [
  { id: "purpose", title: "1. Purpose", icon: <Target size={16} /> },
  { id: "scope", title: "2. Scope of Auth", icon: <Globe size={16} /> },
  { id: "permitted", title: "3. Permitted Acts", icon: <CheckSquare size={16} /> },
  { id: "prohibited", title: "4. Prohibited Acts", icon: <Ban size={16} /> },
  { id: "safeharbor", title: "5. Legal Safe Harbor", icon: <Gavel size={16} /> },
  { id: "governing", title: "9. Governing Law", icon: <FileSignature size={16} /> },
];

export default function NOCPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              <ShieldCheck size={14} /> [ NOC_AUTHORIZATION_AUTHORIZED ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_DOCUMENT
           </button>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Document_Index</p>
            {sections.map((item) => (
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

          {/* Main Document Body */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
          >
            {/* Document Header */}
            <div className="text-center mb-16 space-y-4">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter print:text-black">
                 No Objection <span className="text-green-500 print:text-green-700">Certificate</span> (NOC)
               </h1>
               <p className="text-green-600 font-mono text-xs uppercase tracking-[0.2em] font-bold">Authorization for Security Testing</p>
               <div className="pt-4 flex flex-col items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
                  <p>Platform: <span className="text-white print:text-black">Zeroday Test – Byte Capsule</span></p>
                  <p>Effective Date: <span className="text-green-900 print:text-black font-bold">February 09, 2026</span></p>
               </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 print:bg-gray-100 print:border-black">
                 This Authorization for Security Testing (“Authorization” or “NOC”) is issued by the organization registering a program on Zeroday Test (“Client”) in favor of Zeroday Test, Dhaka, Bangladesh.
               </p>

               <div id="purpose" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-2 print:text-black">
                    <Target className="text-green-500" size={20} /> 1. Purpose
                  </h3>
                  <p>This Authorization grants Zeroday Test and its approved independent security researchers (“Hunters”) permission to perform controlled security testing activities strictly within the defined scope of the Client’s program.</p>
               </div>

               <div id="scope" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-2 print:text-black">
                    <Globe className="text-green-500" size={20} /> 2. Scope of Authorization
                  </h3>
                  <ul className="space-y-2 list-disc pl-5 text-gray-400 print:text-gray-700">
                    <li>Domains, subdomains, IP addresses, applications, and APIs listed in the approved program scope.</li>
                    <li>Testing activities permitted under the Client’s published program rules.</li>
                    <li>Activities conducted in accordance with Zeroday Test Responsible Disclosure Policy.</li>
                  </ul>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  <div id="permitted" className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl print:border-black">
                     <h4 className="text-green-500 font-bold uppercase text-xs mb-4 flex items-center gap-2">
                        <CheckSquare size={16} /> 3. Permitted Activities
                     </h4>
                     <ul className="text-xs space-y-2 font-mono text-gray-500">
                        <li>&gt; Vulnerability Assessment</li>
                        <li>&gt; Penetration Testing</li>
                        <li>&gt; Misconfiguration Analysis</li>
                        <li>&gt; Non-destructive PoC Exploitation</li>
                     </ul>
                  </div>
                  <div id="prohibited" className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl print:border-black">
                     <h4 className="text-red-500 font-bold uppercase text-xs mb-4 flex items-center gap-2">
                        <Ban size={16} /> 4. Prohibited Activities
                     </h4>
                     <ul className="text-xs space-y-2 font-mono text-gray-500">
                        <li>[!] DoS / DDoS Attacks</li>
                        <li>[!] Data Destruction / Alteration</li>
                        <li>[!] Physical Attacks</li>
                        <li>[!] Social Engineering</li>
                     </ul>
                  </div>
               </div>

               <div id="safeharbor" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-3xl relative overflow-hidden print:bg-white print:border-black">
                  <Fingerprint size={120} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 rotate-12 print:hidden" />
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-2 print:text-black">
                    <Gavel className="text-green-500" size={20} /> 5. Legal Safe Harbor
                  </h3>
                  <p className="mb-4">The Client confirms that Zeroday Test and its authorized Hunters will not face legal action for testing acting in good faith and within scope. This Authorization constitutes formal consent under:</p>
                  <div className="flex flex-wrap gap-2">
                     {["Cyber Security Act 2025", "Digital Security Act 2018", "ICT Act 2006"].map((tag, i) => (
                       <span key={i} className="px-2 py-1 bg-black border border-white/10 rounded text-[9px] font-mono text-gray-500 print:border-black print:text-black">{tag}</span>
                     ))}
                  </div>
               </div>

               <div id="governing" className="scroll-mt-32 pt-8 border-t border-white/10 print:border-black">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-2 print:text-black">
                    <FileSignature className="text-green-500" size={20} /> 9. Governing Law
                  </h3>
                  <p className="text-xs text-gray-500">This Authorization is governed by the laws of the People’s Republic of Bangladesh. Disputes resolved through binding international arbitration under ICC Rules (Seat: Dhaka).</p>
               </div>

               {/* Section 10: Digital Signature/Acceptance Area */}
               <div className="mt-16 p-8 md:p-12 bg-green-500 rounded-[2rem] text-black">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 border-2 border-black rounded flex items-center justify-center">
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-black rounded-sm" />
                           </div>
                           <span className="text-xs font-black uppercase tracking-widest">10. Electronic Acceptance</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold leading-tight max-w-md">
                          I confirm that I am authorized to represent my organization and I grant Zeroday Test and its approved security researchers permission to conduct security testing.
                        </p>
                     </div>
                     <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-black/20 pt-6 md:pt-0 md:pl-8">
                        <p className="text-[10px] font-mono uppercase opacity-60 mb-2">Authenticated_Stamp</p>
                        <ShieldCheck size={48} className="mx-auto md:ml-auto" />
                        <p className="text-[9px] font-mono mt-2 font-bold uppercase tracking-widest">Digital_ID: NOC-AUTH-0x9AF2</p>
                     </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}