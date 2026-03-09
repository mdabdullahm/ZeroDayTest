"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Bug, Scale, Gavel, 
  Terminal, Lock, Zap, Trophy, 
  AlertTriangle, Info, FileText, 
  Cpu, Globe, Mail, Phone, Clock,
  CheckCircle2, AlertCircle, List
} from 'lucide-react';

const sections = [
  { id: "overview", title: "1. Overview", icon: <Info size={16} /> },
  { id: "eligibility", title: "2. Eligibility", icon: <CheckCircle2 size={16} /> },
  { id: "scope", title: "3. Scope", icon: <Globe size={16} /> },
  { id: "severity", title: "4. Severity Ratings", icon: <AlertTriangle size={16} /> },
  { id: "safeharbor", title: "5. Safe Harbor", icon: <ShieldCheck size={16} /> },
  { id: "rules", title: "6. Rules of Engagement", icon: <Lock size={16} /> },
  { id: "submission", title: "7. Submission", icon: <Terminal size={16} /> },
  { id: "sla", title: "8. Response SLAs", icon: <Clock size={16} /> },
  { id: "recognition", title: "9. Recognition", icon: <Trophy size={16} /> },
  { id: "disclosure", title: "10. Disclosure", icon: <FileText size={16} /> },
  { id: "legal", title: "14. Compliance", icon: <Gavel size={16} /> },
  { id: "contact", title: "19. Contact", icon: <Mail size={16} /> },
];

export default function VDPPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Matrix Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-green-500/10 pb-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
             <ShieldCheck size={14} /> [ VULNERABILITY_DISCLOSURE_PROTOCOL_v1.0 ]
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            VDP <span className="text-green-500">Policy</span>
          </h1>
          <div className="flex flex-wrap gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             <p>Owner: <span className="text-white">Byte Capsule IT</span></p>
             <p>Effective: <span className="text-green-900">Feb 09, 2026</span></p>
             <p className="text-red-500 animate-pulse">[ NON-REWARD_PROGRAM ]</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* Sidebar Index */}
          <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Policy_Index</p>
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

          {/* Main Content Area */}
          <div className="space-y-20 text-sm md:text-base leading-relaxed font-light">
            
            {/* Section 1: Overview */}
            <div id="overview" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 1. Program Overview
               </h3>
               <div className="p-8 bg-zinc-900/30 border border-green-500/10 rounded-3xl space-y-4">
                  <p><span className="text-green-500 font-bold uppercase mr-2">Purpose:</span> Provides a clear framework for Security Researcher to report vulnerabilities responsibly.</p>
                  <p><span className="text-green-500 font-bold uppercase mr-2">Scope:</span> Applies to all companies (Bangladeshi and international) launching VDP on our platform.</p>
                  <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl flex items-center gap-3">
                     <AlertCircle size={20} className="text-red-500" />
                     <p className="text-xs font-bold text-gray-400 italic">Important: This is a non-reward program. Researchers participate for recognition, not monetary compensation.</p>
                  </div>
               </div>
            </div>

            {/* Section 3: Scope */}
            <div id="scope" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 3. Scope Definition
               </h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
                     <h4 className="text-green-500 font-bold text-xs mb-4 uppercase">3.1 In-Scope Assets</h4>
                     <ul className="text-xs space-y-2 text-gray-400 font-mono">
                        <li>&gt; Domains & Wildcards (*.example.com)</li>
                        <li>&gt; IP address ranges</li>
                        <li>&gt; Mobile Apps (iOS/Android)</li>
                        <li>&gt; AI Models & Source Code</li>
                     </ul>
                  </div>
                  <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                     <h4 className="text-red-500 font-bold text-xs mb-4 uppercase">3.2 Out-of-Scope</h4>
                     <ul className="text-xs space-y-2 text-gray-400 font-mono">
                        <li>[!] Social Engineering / Phishing</li>
                        <li>[!] Denial of Service (DoS/DDoS)</li>
                        <li>[!] Physical security testing</li>
                        <li>[!] Third-party integrations</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Section 4: Severity Ratings - Tactical HUD Style */}
            <div id="severity" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 4. Severity Ratings (CVSS 3.1)
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { level: "Critical", score: "9.0-10.0", color: "text-red-500", bg: "bg-red-500/10", details: "RCE, Auth Bypass, SQLi" },
                    { level: "High", score: "7.0-8.9", color: "text-orange-500", bg: "bg-orange-500/10", details: "PII Exposure, SSRF, XXE" },
                    { level: "Medium", score: "4.0-6.9", color: "text-yellow-500", bg: "bg-yellow-500/10", details: "CSRF, IDOR, Subdomain Takeover" },
                    { level: "Low", score: "0.1-3.9", color: "text-blue-500", bg: "bg-blue-500/10", details: "Minor Info Leakage" },
                    { level: "Informational", score: "0.0", color: "text-gray-500", bg: "bg-gray-500/10", details: "Security Hygiene Suggestions" },
                  ].map((s, i) => (
                    <div key={i} className={`p-6 ${s.bg} border border-white/5 rounded-2xl transition-all hover:border-white/20`}>
                       <div className="flex justify-between items-center mb-2">
                          <span className={`font-black uppercase text-sm ${s.color}`}>{s.level}</span>
                          <span className="text-[10px] font-mono text-gray-500">{s.score}</span>
                       </div>
                       <p className="text-xs text-gray-400 font-light">{s.details}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Section 5: Safe Harbor */}
            <div id="safeharbor" className="scroll-mt-32 p-10 bg-zinc-900 border border-green-500/20 rounded-[3rem] relative overflow-hidden">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -bottom-20 opacity-5">
                  <ShieldCheck size={300} className="text-green-500" />
               </motion.div>
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3 relative z-10">
                  <Scale className="text-green-500" /> 5. Safe Harbor
               </h3>
               <p className="text-sm md:text-base leading-relaxed relative z-10 mb-6">
                 Hunters acting in good faith, staying within scope, and following responsible disclosure will NOT face legal action. We will actively defend researchers acting within these guidelines.
               </p>
               <div className="flex flex-wrap gap-3 relative z-10">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg text-[10px] font-mono text-green-500 uppercase tracking-widest">
                     Legal_Shield: Active
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-lg text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                     Status: Protected
                  </span>
               </div>
            </div>

            {/* Section 8: SLAs Table */}
            <div id="sla" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div> 8. Response & Remediation SLAs
               </h3>
               <div className="overflow-x-auto rounded-2xl border border-white/5">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-zinc-900 text-green-500 font-mono text-[10px] uppercase tracking-widest">
                           <th className="p-4 border-b border-white/5">Severity</th>
                           <th className="p-4 border-b border-white/5">First Response</th>
                           <th className="p-4 border-b border-white/5">Triage</th>
                           <th className="p-4 border-b border-white/5">Resolution</th>
                        </tr>
                     </thead>
                     <tbody className="text-xs md:text-sm font-light">
                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                           <td className="p-4 text-red-500 font-bold">Critical</td>
                           <td className="p-4">24 hours</td>
                           <td className="p-4">3 days</td>
                           <td className="p-4">14 days</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                           <td className="p-4 text-orange-500 font-bold">High</td>
                           <td className="p-4">2 days</td>
                           <td className="p-4">5 days</td>
                           <td className="p-4">30 days</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                           <td className="p-4 text-yellow-500 font-bold">Medium</td>
                           <td className="p-4">3 days</td>
                           <td className="p-4">7 days</td>
                           <td className="p-4">60 days</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Section 19: Contact */}
            <div id="contact" className="scroll-mt-32 p-10 bg-zinc-950 border border-green-500/10 rounded-[3rem]">
               <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                  <Mail className="text-green-500" /> 19. Contact & Support
               </h3>
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <div>
                        <p className="text-[10px] font-mono text-gray-600 uppercase mb-2">General Inquiries</p>
                        <p className="text-white font-bold">pentest@bytecapsuleit.com</p>
                        <p className="text-gray-500 text-xs mt-1">+8801319919694</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-mono text-gray-600 uppercase mb-2">Legal Inquiries</p>
                        <p className="text-white font-bold">kaniz@bytecapsuleit.com</p>
                     </div>
                  </div>
                  <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                     <p className="text-red-500 font-black uppercase text-xs mb-3 flex items-center gap-2">
                        <AlertTriangle size={14} /> 24/7 Emergency Hotline
                     </p>
                     <p className="text-white font-mono text-lg font-black">+8801319919694</p>
                     <p className="text-xs text-gray-500 mt-2">Critical security issues only</p>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-24 pt-12 border-t border-white/5 text-center opacity-30 flex flex-col md:flex-row items-center justify-center gap-8">
           <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">ZeroDay Test | VDP Protocol 1.0</p>
           <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">Node: Dhaka_Core_0x9A</p>
        </div>

      </div>
    </div>
  );
}