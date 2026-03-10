"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Zap, ShieldCheck, Terminal } from 'lucide-react';

export default function CrowdSourcedPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 font-mono text-xs tracking-[0.5em] mb-4 uppercase">
            [ GLOBAL_CROWD_PROTOCOL ]
          </motion.div>
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-6">
            Crowd<span className="text-green-500">Sourced</span> Security
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Harness the collective intelligence of thousands of top-tier ethical hackers to make your digital infrastructure impenetrable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "25K+ Researchers", 
              icon: <Users />, 
              desc: "Connect with a global community of vetted security researchers and bug bounty hunters." 
            },
            { 
              title: "Global Intelligence", 
              icon: <Globe />, 
              desc: "Real-time threat intelligence streaming from distributed nodes across the globe." 
            },
            { 
              title: "Rapid Identification", 
              icon: <Zap />, 
              desc: "What automated tools miss, our specialized crowd identifies in seconds for a rapid response." 
            }
          ].map((box, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                {box.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{box.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}