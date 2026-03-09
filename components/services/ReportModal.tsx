"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Zap, Terminal, ArrowLeft, Loader2, ExternalLink } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  const [viewPDF, setViewPDF] = useState(false);
  const [loading, setLoading] = useState(true);

  // এই লিঙ্কটি এম্বেড করার জন্য বিশেষভাবে তৈরি
const pdfUrl = "https://drive.google.com/embeddedfolderview?id=17oPdb8HHcw0tiuAddX4bpdjI-JR3V5Ts#grid";

  const handleClose = () => {
    setViewPDF(false);
    onClose();
    setLoading(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative bg-zinc-950 border border-green-500/30 w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.1)] transition-all duration-500 ${
              viewPDF ? 'max-w-6xl h-[90vh]' : 'max-w-lg'
            }`}
          >
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-gray-500 hover:text-green-500 transition-colors bg-white/5 rounded-full z-50"
            >
              <X size={20} />
            </button>

            {!viewPDF ? (
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-6 uppercase tracking-widest">
                  <Lock size={12} /> [ SECURE_INTEL_UPLINK ]
                </div>

                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Sample <span className="text-green-500">Report</span> Access
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                  Click the button below to access the sample report within the system. The drive folder will be decrypted and loaded directly.
                </p>

                <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-green-700 uppercase mb-1">
                    <Zap size={10} /> Sync_Status: Verified
                  </div>
                  <p className="text-[11px] text-gray-600 font-mono italic leading-tight uppercase">
                    Establishing connection to secure file storage node...
                  </p>
                </div>

                <button 
                  onClick={() => setViewPDF(true)}
                  className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all active:scale-95 text-xs uppercase tracking-widest"
                >
                  INITIALIZE_VIEWER <Terminal size={16} />
                </button>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col">
                <div className="p-4 border-b border-white/5 bg-black flex items-center justify-between">
                   <button 
                    onClick={() => setViewPDF(false)}
                    className="flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-green-500 transition-colors"
                   >
                     <ArrowLeft size={14} /> TERMINATE_VIEWER
                   </button>
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-green-900 uppercase tracking-[0.3em] hidden md:block">
                        Stream_Identity: Verified
                      </span>
                      <a href="https://drive.google.com/embeddedfolderview?id=17oPdb8HHcw0tiuAddX4bpdjI-JR3V5Ts#grid" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </a>
                   </div>
                </div>

                <div className="flex-1 bg-black relative">
                   {loading && (
                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-green-500 font-mono bg-black z-10">
                        <Loader2 size={32} className="animate-spin" />
                        <span className="text-[10px] uppercase tracking-widest">Accessing_Cloud_Node...</span>
                     </div>
                   )}
                   {/* Google Drive Folder Embed */}
                   <iframe 
                    src={pdfUrl}
                    className="w-full h-full border-none opacity-80 hover:opacity-100 transition-opacity"
                    onLoad={() => setLoading(false)}
                    allow="autoplay"
                   ></iframe>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;