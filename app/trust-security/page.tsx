"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Gavel, Lock, Cpu, 
  Server, Zap, Eye, ShieldAlert, 
  Terminal, FileSearch, Globe, Mail, 
  CheckCircle, Database, LifeBuoy
} from 'lucide-react';

const securitySections = [
  { id: "legal", title: "Legal Framework", icon: <Gavel size={16} /> },
  { id: "compliance", title: "Compliance by Design", icon: <ShieldCheck size={16} /> },
  { id: "technical", title: "Technical Controls", icon: <Cpu size={16} /> },
  { id: "encryption", title: "Encryption Protocols", icon: <Lock size={16} /> },
  { id: "lifecycle", title: "Secure Lifecycle", icon: <Server size={16} /> },
  { id: "incident", title: "Incident Response", icon: <Zap size={16} /> },
];

export default function TrustSecurityPage() {
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
             <ShieldAlert size={14} /> [ TRUST_AND_SECURITY_INFRASTRUCTURE_v2.4 ]
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Trust & <span className="text-green-500">Security</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg max-w-3xl font-light leading-relaxed">
            Security, Legal Compliance & Data Protection are not just checkboxes for us—they are the core of Byte Capsule IT. We build digital fortresses that are resilient, transparent, and law-aligned.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* Sidebar Index */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Security_Nodes</p>
            {securitySections.map((item) => (
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
            
            {/* Legal Framework Section */}
            <div id="legal" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                  <Gavel className="text-green-500" /> Legal Framework in Bangladesh
               </h3>
               <div className="grid gap-6">
                  {[
                    { title: "CSA 2025 (Cyber Security Act)", desc: "Establishes a modern legal structure for digital security, prevention, and prosecution. Defines mechanisms for investigation and national governance." },
                    { title: "DSA 2018 (Digital Security Act)", desc: "Regulates digital security and curbs harmful content. Note: Portions have been superseded by CSA 2025 to align with modern standards." },
                    { title: "ICT Act 2006", desc: "The foundational statutory framework governing ICT activities, electronic transactions, and cyber offences in Bangladesh." }
                  ].map((law, i) => (
                    <div key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-green-500/20 transition-all">
                       <h4 className="text-green-500 font-bold text-sm mb-2 uppercase tracking-wide">{law.title}</h4>
                       <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{law.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Technical Controls Grid */}
            <div id="technical" className="scroll-mt-32">
               <h3 className="text-2xl font-black text-white uppercase mb-8">Technical & Operational Security</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  {/* Infrastructure Box */}
                  <div className="p-8 bg-zinc-950/50 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Server size={80} className="text-green-500" />
                     </div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                        <Terminal size={18} className="text-green-500" /> Data Governance
                     </h4>
                     <ul className="space-y-3 text-xs text-gray-500 font-mono list-none">
                        <li className="flex gap-2">&gt; Multi-layer Firewall Protection</li>
                        <li className="flex gap-2">&gt; Network Segmentation</li>
                        <li className="flex gap-2">&gt; Default Deny-All Access Policy</li>
                        <li className="flex gap-2">&gt; Continuous SIEM Monitoring</li>
                     </ul>
                  </div>
                  {/* Access Control Box */}
                  <div className="p-8 bg-zinc-950/50 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ShieldCheck size={80} className="text-green-500" />
                     </div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                        <Eye size={18} className="text-green-500" /> Access Control
                     </h4>
                     <ul className="space-y-3 text-xs text-gray-500 font-mono list-none">
                        <li className="flex gap-2">&gt; Two-Factor Authentication (2FA)</li>
                        <li className="flex gap-2">&gt; Role-Based Access Control (RBAC)</li>
                        <li className="flex gap-2">&gt; Least Privilege Enforcement</li>
                        <li className="flex gap-2">&gt; Secure Session Management</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Encryption & Data Section */}
            <div id="encryption" className="scroll-mt-32 p-10 bg-green-500/5 border border-green-500/20 rounded-[3rem] relative overflow-hidden">
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-10 -bottom-10 opacity-5">
                  <Lock size={200} className="text-green-500" />
               </motion.div>
               <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <Lock className="text-green-500" /> Encryption & Data Protection
               </h3>
               <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  <div className="space-y-2">
                     <p className="text-green-500 font-bold text-xs uppercase">Transmission</p>
                     <p className="text-gray-400 text-xs font-mono">TLS Encryption for all platform comms.</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-green-500 font-bold text-xs uppercase">Storage</p>
                     <p className="text-gray-400 text-xs font-mono">AES-256 for stored data & backups.</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-green-500 font-bold text-xs uppercase">Credentials</p>
                     <p className="text-gray-400 text-xs font-mono">Salted and Hashed password storage.</p>
                  </div>
               </div>
            </div>

            {/* Systems Resilience & Customer Control */}
            <div className="grid md:grid-cols-2 gap-12">
               <div id="lifecycle">
                  <h4 className="text-white font-bold uppercase text-sm mb-4 flex items-center gap-2">
                    <Database size={16} className="text-green-500" /> Systems Resilience
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Scheduled penetration tests by qualified providers and daily encrypted backups across multiple secure locations to ensure business continuity and zero data loss.
                  </p>
               </div>
               <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-4 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" /> Data Ownership
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Clients retain 100% ownership of their data. We provide permissioned role management and separate encryption key protection for sensitive audit reports.
                  </p>
               </div>
            </div>

            {/* Our Commitment CTA */}
            <div className="mt-16 p-12 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)] text-center relative overflow-hidden">
               <Terminal size={150} className="absolute -top-10 -left-10 opacity-10 rotate-12" />
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our Commitment</h3>
                  <p className="text-sm md:text-base font-bold max-w-2xl mx-auto leading-relaxed mb-8">
                    We commit to aligning with Bangladesh’s cyber security legal framework and global best practices to deliver trusted, transparent, and resilient digital services.
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <a href="mailto:pentest@bytecapsuleit.com" className="flex items-center gap-3 px-8 py-4 bg-black text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all">
                        <Mail size={16} /> Contact Security Team
                     </a>
                     <div className="text-[10px] font-mono font-black uppercase tracking-widest opacity-60">
                        Node_Active: secure_communication_uplink
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-20 text-center opacity-30">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              Security_Hardened_Document | Byte Capsule IT | Dhaka, BD | v2.4.0
           </p>
        </div>

      </div>
    </div>
  );
}