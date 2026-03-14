"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Loader2, FileText, Download, Eye, Zap } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
  const [viewPDF, setViewPDF] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // ১. মাউন্ট চেক (Next.js SSR এর জন্য)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // ২. বডি স্ক্রল লক এবং ওভারল্যাপ ফিক্স
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; 
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const fileId = "1YUxTMtXN_4THyQLHn5SWDX0qUfsURukv";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&confirm=t&id=${fileId}`;

  const handleClose = () => {
    setViewPDF(false);
    setLoading(true);
    onClose();
  };

  // ৩. মডাল ডিজাইন
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        /* 
           z-index: 5000 রাখা হয়েছে যাতে এটি সেকশনগুলোর ওপরে থাকে, 
           কিন্তু মাউস কার্সরের (যা সাধারণত ৯৯৯৯৯ হয়) নিচে থাকে। 
        */
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 overflow-hidden">
          
          {/* কালো ধোঁয়াটে ব্যাকগ্রাউন্ড (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          {/* মেইন কার্ড */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className={`relative bg-zinc-950 border border-green-500/20 w-full rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] transition-all duration-500 z-10 ${
              viewPDF ? "max-w-6xl h-[90vh]" : "max-w-lg"
            }`}
          >
            {/* ক্লোজ বাটন */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-gray-500 hover:text-red-500 transition-colors bg-white/5 rounded-full z-[110]"
            >
              <X size={20} />
            </button>

            {!viewPDF ? (
              /* প্রথম ধাপ: অপশনস */
              <div className="p-8 md:p-12 text-center relative z-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                  Security <span className="text-green-500">Audit</span> Report
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 font-light">
                  This report contains the latest security audit and compliance data from our platform.
                </p>
                <div className="flex flex-col gap-4">
                  <button onClick={() => setViewPDF(true)} className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-green-500 font-bold rounded-xl border border-green-500/20 transition-all uppercase text-[10px] tracking-widest shadow-xl">
                    <Eye size={16} /> View_Inside_Portal
                  </button>
                  <button onClick={() => window.open(downloadUrl, "_blank")} className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all uppercase text-[10px] tracking-widest">
                    <Download size={16} /> Download_Archive
                  </button>
                </div>
              </div>
            ) : (
              /* দ্বিতীয় ধাপ: PDF ভিউয়ার */
              <div className="w-full h-full flex flex-col bg-black">
                <div className="p-4 border-b border-white/5 bg-zinc-950 flex items-center justify-between px-6">
                  <button onClick={() => { setViewPDF(false); setLoading(true); }} className="flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-green-500 transition-colors uppercase tracking-widest">
                    <ArrowLeft size={14} /> Back_to_Intel
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                    <span className="text-[10px] font-mono text-green-700 uppercase tracking-[0.3em] hidden md:block">Status: Decrypted_and_Isolated</span>
                  </div>
                </div>
                <div className="flex-1 relative bg-zinc-900">
                  {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-green-500 font-mono bg-black z-10">
                      <Loader2 size={32} className="animate-spin" />
                      <span className="text-[10px] uppercase tracking-widest">Decoding_Data_Stream...</span>
                    </div>
                  )}
                  <iframe src={previewUrl} className="w-full h-full border-none opacity-90" onLoad={() => setLoading(false)} allow="autoplay" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // ৪. সরাসরি বডিতে রেন্ডার করা (এটিই ওভারল্যাপ বন্ধ করবে)
  return createPortal(modalContent, document.body);
};

export default AuditModal;