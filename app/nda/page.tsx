"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, FileLock, Gavel, EyeOff, 
  Terminal, CheckCircle, Handshake, Info, 
  Printer, Scale, Fingerprint, Lock
} from 'lucide-react';

const ndaSections = [
  { id: "purpose", title: "1. Purpose", icon: <Info size={16} /> },
  { id: "confidential", title: "2. Confidential Info", icon: <EyeOff size={16} /> },
  { id: "obligations", title: "3. Client Obligations", icon: <Lock size={16} /> },
  { id: "disclosure", title: "4. Responsible Disclosure", icon: <Terminal size={16} /> },
  { id: "compliance", title: "5. Data Protection", icon: <ShieldAlert size={16} /> },
  { id: "ip", title: "6. Intellectual Property", icon: <Fingerprint size={16} /> },
  { id: "governing", title: "9. Governing Law", icon: <Gavel size={16} /> },
];

export default function NDAPage() {
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
        
        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              <FileLock size={14} /> [ CLIENT_NDA_ENFORCED ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_AGREEMENT
           </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Agreement_Nodes</p>
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
            className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl print:bg-white print:text-black print:p-0"
          >
            {/* Document Header */}
            <div className="text-center mb-16">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 print:text-black">
                 Client <span className="text-green-500 print:text-green-700">Non-Disclosure</span> Agreement
               </h1>
               <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <p>Platform Owner: <span className="text-white print:text-black">Zeroday Test – Byte Capsule IT</span></p>
                  <p>Location: <span className="text-white print:text-black">Dhaka, Bangladesh</span></p>
                  <p>Effective Date: <span className="text-green-900 print:text-black font-bold">February 09, 2026</span></p>
               </div>
            </div>

            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 print:bg-gray-100 print:text-black">
                 By registering as a Client, submitting a program, or clicking “I Agree,” you agree to be legally bound by this Agreement regarding confidentiality and data protection.
               </p>

               <div id="purpose" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 1. Purpose
                  </h3>
                  <p>This Agreement governs the protection of confidential information shared between the Client (Company), independent security researchers (“Hunters”), and Zeroday Test in connection with vulnerability disclosure and bug bounty programs.</p>
               </div>

               <div id="confidential" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 2. Confidential Information
                  </h3>
                  <p className="mb-4">Confidential Information includes but is not limited to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                     {[
                       "Vulnerability reports & exploit details",
                       "Proof-of-concept (PoC) data",
                       "Hunter identity & contact information",
                       "Internal assessments & platform comms"
                     ].map((info, i) => (
                       <div key={i} className="flex items-center gap-2 p-3 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-mono text-gray-400">
                          <CheckCircle size={12} className="text-green-500" /> {info}
                       </div>
                     ))}
                  </div>
               </div>

               <div id="obligations" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 3. Client Obligations
                  </h3>
                  <ul className="space-y-4 text-gray-400 print:text-gray-700 list-none">
                    <li className="flex gap-3"><span className="text-green-500 font-mono">01.</span> Keep all vulnerability reports strictly confidential and internal.</li>
                    <li className="flex gap-3"><span className="text-green-500 font-mono">02.</span> No public disclosure without written approval from Zeroday Test and the Hunter.</li>
                    <li className="flex gap-3"><span className="text-green-500 font-mono">03.</span> No legal action against Hunters acting within authorized scope.</li>
                    <li className="flex gap-3"><span className="text-green-500 font-mono">04.</span> Use information solely for remediation and security improvement.</li>
                  </ul>
               </div>

               <div id="compliance" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-3xl relative overflow-hidden print:bg-white print:border-black">
                  <Scale size={120} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 rotate-12" />
                  <h3 className="text-lg font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <ShieldAlert className="text-green-500" /> 5. Data Protection Compliance
                  </h3>
                  <p className="mb-6 text-sm">The Client agrees to comply with the legal framework of the People’s Republic of Bangladesh:</p>
                  <div className="flex flex-wrap gap-3">
                     {["Cyber Security Act 2025", "Digital Security Act 2018", "ICT Act 2006"].map((law, i) => (
                        <span key={i} className="px-4 py-2 bg-black border border-white/10 rounded-lg text-[10px] font-mono text-gray-500 print:border-black print:text-black">
                           {law}
                        </span>
                     ))}
                  </div>
               </div>

               <div id="ip" className="scroll-mt-32">
                  <h3 className="text-lg font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 6. Intellectual Property
                  </h3>
                  <p className="text-gray-400">Reports remain the intellectual property of the Hunter until reward payment is completed. Upon payment, remediation rights transfer to the Client. Platform tools remain the property of Zeroday Test.</p>
               </div>

               <div id="governing" className="scroll-mt-32 pt-8 border-t border-white/5">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                     <div className="space-y-2">
                        <h4 className="text-white font-bold uppercase text-xs">9. Governing Law</h4>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Jurisdiction: Bangladesh</p>
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-white font-bold uppercase text-xs">Validity</h4>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Effective for 5 years post-termination</p>
                     </div>
                  </div>
               </div>

               {/* Electronic Acceptance Block */}
               <div className="mt-16 p-10 bg-green-600 rounded-[2.5rem] text-black shadow-[0_0_40px_rgba(22,163,74,0.2)]">
                  <div className="flex items-start gap-5">
                     <div className="mt-1">
                        <div className="w-6 h-6 border-2 border-black rounded flex items-center justify-center">
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-black rounded-sm" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest">Electronic Acceptance Acknowledgement</h4>
                        <p className="text-xs font-bold leading-relaxed">
                           By clicking “I Agree,” you confirm that you have read and understood this Agreement and agree to be legally bound by its terms. Electronic consent constitutes a legally binding signature.
                        </p>
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