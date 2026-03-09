"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Eye, Database, 
  Globe, UserCheck, FileText, Info, 
  Mail, Clock, AlertTriangle, Terminal,
  Fingerprint, Scale, ShieldAlert, Cookie, Users, Share2,
  Cpu
} from 'lucide-react';

const sections = [
  { id: "notice", title: "1. Notice at Collection", icon: <Info size={16} /> },
  { id: "scope", title: "2. Scope of Protocol", icon: <Globe size={16} /> },
  { id: "collection", title: "3. Information We Collect", icon: <Database size={16} /> },
  { id: "usage", title: "4. Data Usage", icon: <FileText size={16} /> },
  { id: "disclosure", title: "5. Data Disclosure", icon: <Share2 size={16} /> },
  { id: "transfer", title: "6. Int. Data Transfers", icon: <Globe size={16} /> },
  { id: "rights", title: "7. Subject Rights", icon: <UserCheck size={16} /> },
  { id: "retention", title: "8. Data Retention", icon: <Clock size={16} /> },
  { id: "children", title: "9. Children's Privacy", icon: <Users size={16} /> },
  { id: "contact", title: "11. Contact Info", icon: <Mail size={16} /> },
];

export default function PrivacyProtocolPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Matrix Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-green-500/10 pb-12 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center lg:justify-start gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
             <ShieldCheck size={14} /> [ SECURITY_DATA_PROTOCOL_v2.4 ]
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Privacy <span className="text-green-500">Protocol</span>
          </h1>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             <p>Operated by: <span className="text-white">Byte Capsule IT</span></p>
             <p>Last Updated: <span className="text-green-900 font-bold">February 09, 2026</span></p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* Left Side: Sticky Navigation */}
          <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protocol_Index</p>
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

          {/* Right Side: Detailed Content */}
          <div className="space-y-16 text-gray-400 leading-relaxed font-light">
            
            {/* Introduction Box */}
            <div className="p-8 bg-zinc-900/30 border border-green-500/10 rounded-3xl backdrop-blur-sm relative overflow-hidden">
               <Fingerprint size={100} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 -rotate-12" />
               <p className="text-sm md:text-base italic relative z-10 leading-relaxed">
                 This Privacy Protocol explains how Byte Capsule IT ("Byte Capsule", "we", "our", or "us") collects, uses, processes, stores, and discloses personal information in connection with ZeroDay Test. Prepared in accordance with the laws of Bangladesh, including the <span className="text-white">ICT Act 2006</span> and the <span className="text-white">Digital Security Act 2018</span>.
               </p>
            </div>

            {/* Section 1: Notice */}
            <div id="notice" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 1. Notice at Collection
               </h3>
               <p className="mb-4">At or before the time of collecting personal information, we inform individuals about:</p>
               <ul className="grid md:grid-cols-2 gap-4 list-none text-sm font-mono">
                  <li className="flex gap-2 text-gray-500"><Terminal size={14} className="text-green-900 mt-1" /> Categories of info collected</li>
                  <li className="flex gap-2 text-gray-500"><Terminal size={14} className="text-green-900 mt-1" /> Purposes of data usage</li>
                  <li className="flex gap-2 text-gray-500"><Terminal size={14} className="text-green-900 mt-1" /> Third-party sharing details</li>
                  <li className="flex gap-2 text-gray-500"><Terminal size={14} className="text-green-900 mt-1" /> Retention & User rights</li>
               </ul>
            </div>

            {/* Section 2: Scope with Disclaimer */}
            <div id="scope" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 2. Scope of Protocol
               </h3>
               <p className="mb-6 leading-relaxed">
                 This Protocol applies to all personal information processed through the ZeroDay Test platform, including our website, researcher portal, client dashboards, training modules, and communications.
               </p>
               <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <div className="flex items-center gap-2 text-red-500 mb-2 font-mono text-xs uppercase font-bold">
                     <AlertTriangle size={14} /> Customer Data Disclaimer
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    Personal information submitted by organizations using ZeroDay Test for bug bounty programs, penetration testing, or security assessments ("Customer Data") are processed strictly on behalf of those organizations. All requests regarding Customer Data must be directed to the relevant customer.
                  </p>
               </div>
            </div>

            {/* Section 3: Data Collection */}
            <div id="collection" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 3. Information Collection
               </h3>
               <div className="space-y-10">
                  <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl">
                    <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest mb-4">3.1 Information You Provide Directly</h4>
                    <ul className="space-y-4 text-sm">
                      <li className="flex gap-3"><span className="text-white font-bold">Account Info:</span> Name, username, email, certifications, and research history.</li>
                      <li className="flex gap-3"><span className="text-white font-bold">Identity Verification:</span> Government-issued ID details (where legally required).</li>
                      <li className="flex gap-3"><span className="text-white font-bold">Applications:</span> CVs, portfolio links, and materials included in vulnerability reports.</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                           <Cpu size={16} /> 3.2 Automated Logs
                        </h4>
                        <p className="text-xs text-gray-500 font-mono italic">IP address, approximate location, browser type, and security logs for integrity maintenance.</p>
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                           <Cookie size={16} /> 3.3 Cookies
                        </h4>
                        <p className="text-xs text-gray-500 font-mono italic">We use cookies to ensure core functionality, improve user experience, and monitor security events.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 4: How We Use Data */}
            <div id="usage" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 4. How We Use Information
               </h3>
               <p className="mb-6">We use personal information for legitimate business and security purposes, including:</p>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Platform Operations", "Account Management", "Triage & Validation", 
                    "Identity Verification", "Security Notices", "Service Improvement", 
                    "Legal Obligations"
                  ].map((u, i) => (
                    <div key={i} className="px-4 py-2 border border-white/10 rounded-lg text-[10px] font-mono uppercase text-gray-600">
                       &gt; {u}
                    </div>
                  ))}
               </div>
            </div>

            {/* Section 5: Disclosure */}
            <div id="disclosure" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 5. Disclosure of Information
               </h3>
               <p className="mb-6">Byte Capsule IT does not sell personal information. We disclose data only in these circumstances:</p>
               <div className="grid gap-4">
                 <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-2xl">
                   <p className="text-sm text-gray-400"><span className="text-white font-bold uppercase text-xs mr-2">Service Providers:</span> Trusted vendors assisting with security, analytics, and identity verification.</p>
                 </div>
                 <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-2xl">
                   <p className="text-sm text-gray-400"><span className="text-white font-bold uppercase text-xs mr-2">Program Owners:</span> Research reports and identifiers shared during bug bounty operations.</p>
                 </div>
                 <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-2xl">
                   <p className="text-sm text-gray-400"><span className="text-white font-bold uppercase text-xs mr-2">Legal Requirements:</span> When required by law or lawful request from authorities in Bangladesh.</p>
                 </div>
               </div>
            </div>

            {/* Section 6: International Transfers */}
            <div id="transfer" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 6. International Transfers
               </h3>
               <p className="text-sm leading-relaxed">
                 Information may be processed or stored on secure servers located outside Bangladesh, including cloud infrastructure. We implement technical safeguards to ensure data protection consistent with applicable laws.
               </p>
            </div>

            {/* Section 7: Subject Rights HUD */}
            <div id="rights" className="scroll-mt-32 p-10 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(34,197,94,0.3)]">
               <div className="flex items-center gap-3 mb-6">
                  <Scale size={32} />
                  <h3 className="text-3xl font-black uppercase tracking-tight">7. Data Subject Rights</h3>
               </div>
               <p className="font-bold mb-6 italic text-sm">Subject to Bangladeshi law, you have the right to:</p>
               <div className="grid md:grid-cols-2 gap-4 text-xs font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Request Access</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Correction of Data</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Request Deletion</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Object to Processing</div>
               </div>
               <p className="mt-8 text-xs font-black font-mono">Submit to: mail@bytecapsuleit.com</p>
            </div>

            {/* Section 8 & 9 */}
            <div className="grid md:grid-cols-2 gap-8">
               <div id="retention" className="scroll-mt-32">
                  <h4 className="text-white font-bold uppercase text-xs mb-4 flex items-center gap-2"><Clock size={16} className="text-green-500" /> 8. Data Retention</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">We retain information only for as long as necessary to provide services, maintain security, and comply with legal obligations. Expired data is securely deleted.</p>
               </div>
               <div id="children" className="scroll-mt-32">
                  <h4 className="text-white font-bold uppercase text-xs mb-4 flex items-center gap-2"><Users size={16} className="text-green-500" /> 9. Children’s Privacy</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Not intended for individuals under 13. We do not knowingly collect personal information from minors.</p>
               </div>
            </div>

            {/* Final Contact Node */}
            <div id="contact" className="scroll-mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
               <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-xl mb-2">11. Contact Uplink</h4>
                  <p className="text-xs text-gray-600 font-mono">BYTE CAPSULE IT | DHAKA, BANGLADESH</p>
               </div>
               <a href="mailto:mail@bytecapsuleit.com" className="px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 transition-all hover:bg-green-500 shadow-xl text-xs uppercase tracking-widest">
                  <Mail size={16} /> mail@bytecapsuleit.com
               </a>
            </div>

          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-24 text-center opacity-30">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              ZeroDay Test Intelligence Guard | Node: 0x9AF2 | Protocol: ACTIVE
           </p>
        </div>

      </div>
    </div>
  );
}