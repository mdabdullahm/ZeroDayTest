"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Lock, Zap, Terminal } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* ১. ওভারলে ব্যাকগ্রাউন্ড */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* ২. মেইন পপআপ কার্ড */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-zinc-950 border border-green-500/30 w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden"
          >
            {/* ক্লোজ বাটন */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-green-500 transition-colors bg-white/5 rounded-full z-20"
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
               {/* টেকটিক্যাল ব্যাজ */}
               <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-6 uppercase tracking-widest">
                  <Lock size={12} /> [ SECURE_DATA_RETRIEVAL ]
               </div>

               {/* হেডলাইন */}
               <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Sample <span className="text-green-500">Report</span> Access
               </h3>

               {/* ক্যাপশন */}
               <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                  Click the link below to download a sample of our Penetration Coding Code. This file can give you a clear idea of ​​our in-depth and concise description.
               </p>

               {/* এনক্রিপশন স্ট্যাটাস নোট */}
               <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-green-700 uppercase mb-1">
                     <Zap size={10} /> Status: Decryption_Ready
                  </div>
                  <p className="text-[11px] text-gray-600 font-mono italic leading-tight uppercase">
                     The following link provides access to real-world redacted vulnerability data.
                  </p>
               </div>

               {/* ৩. আপনার দেওয়া সেই লিঙ্ক বাটন */}
               <a 
                href="https://tinyurl.com/shvpxwr8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all active:scale-95 text-xs uppercase tracking-widest"
               >
                 ACCESS_SAMPLE_FILE <ExternalLink size={16} />
               </a>
            </div>

            {/* ডেকোরেশন আইকন */}
            <div className="absolute -bottom-10 -right-10 opacity-5">
               <Terminal size={150} className="text-green-500" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;