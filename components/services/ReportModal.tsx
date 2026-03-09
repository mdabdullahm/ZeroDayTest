"use client";

import React, { useState, useEffect } from "react"; // useEffect যোগ করা হয়েছে
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Lock, Zap, Terminal, ArrowLeft, FileText, Download, ShieldCheck, FileLock
} from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reports = [
  { name: "Client Non-Disclosure", id: "115_V1GBa4FWnbq_usT7sW7GEckGFyjhN", code: "NDA_CLN_01" },
  { name: "General Conditions", id: "1t-0c5JnfUwo4VdzBdO578IGWR9qpj6HZ", code: "GTC_GEN_02" },
  { name: "Hunter Non-Disclosure", id: "1mvbjSwbeWDJ-dXySFbqJN4rMEdVv2mmn", code: "NDA_HNT_03" },
  { name: "No Objection Certificate", id: "1f5w8oly8o8fKYktDR57InSqS-8yL0FaG", code: "NOC_AUTH_04" },
  { name: "Payment Services", id: "1WXTeYiufhC0v-Jak2L212WVRL2gKDec-", code: "PAY_SRV_05" },
  { name: "Standard Operations", id: "1u3fu4mfh0-1P7H9Fe654Tg62SOEObH0Z", code: "SOP_SEC_06" },
  { name: "Trust & Security Policy", id: "1ENcaiDIdlRq2Ba66tpeZ-2wxGxvLCVTe", code: "TSP_POL_07" },
  { name: "Vulnerability Disclosure", id: "1eitmtujPfNukZU1nEGVk_QH3C_HTcR5L", code: "VDP_PROC_08" },
  { name: "ZeroDay Test Policy", id: "1TdQ5_oCR_WvbxCofPtR1F6OHkYsPzfyR", code: "ZDT_POL_09" },
  { name: "Do Not Sell or Share Info", id: "1r0xQFMDhNNSoI0U3BPQJArKfs1mELGT4", code: "DNS_PRIV_10" },
];

const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);

  // --- ওস্তাদ, এই অংশটুকু নতুন যোগ করা হয়েছে (Body Scroll Lock) ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // পপআপ খুললে স্ক্রল বন্ধ
    } else {
      document.body.style.overflow = "unset"; // পপআপ বন্ধ হলে স্ক্রল চালু
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);
  // --------------------------------------------------------

  const handleClose = () => {
    setSelectedFileId(null);
    onClose();
  };

  const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
  const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

  return (
    <AnimatePresence>
      {isOpen && (
        /* z-index বাড়িয়ে [100000] করা হয়েছে যাতে সবকিছুর ওপরে থাকে */
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-2 md:p-6 overflow-hidden">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/98 backdrop-blur-2xl" // অপাসিটি বাড়ানো হয়েছে যাতে পেছনের কিছু না দেখা যায়
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative bg-zinc-950 border border-green-500/20 w-full max-w-7xl h-[90vh] rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col z-10"
          >
            {/* ... বাকি সব কোড আগের মতোই থাকবে ... */}
            <div className="p-6 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-green-500 text-black rounded-xl">
                        <FileLock size={22} />
                    </div>
                    <h3 className="text-white font-black uppercase text-sm md:text-xl">Secure Document Vault</h3>
                </div>
                <div className="flex items-center gap-4">
                    {selectedFileId && (
                        <button onClick={() => setSelectedFileId(null)} className="text-gray-400 hover:text-green-500 text-xs font-bold uppercase pr-4 border-r border-white/10">
                            Back_to_Grid
                        </button>
                    )}
                    <button onClick={handleClose} className="p-2 text-gray-500 hover:text-red-500 bg-white/5 rounded-full"><X size={20}/></button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-black">
                {selectedFileId ? (
                    <iframe src={getPreviewLink(selectedFileId)} className="w-full h-full border-none opacity-90" allow="autoplay"></iframe>
                ) : (
                    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reports.map((report, idx) => (
                            <div key={idx} className="group bg-zinc-950 border border-white/5 rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-green-500/30 transition-all">
                                <FileText size={40} className="mb-4 text-gray-700 group-hover:text-green-500" />
                                <h4 className="text-white text-[11px] font-bold mb-6 h-8 line-clamp-2 uppercase">{report.name}</h4>
                                <div className="flex gap-2 w-full mt-auto">
                                    <button onClick={() => setSelectedFileId(report.id)} className="flex-1 py-2 bg-zinc-900 text-gray-400 text-[10px] font-bold rounded-lg hover:text-white">View</button>
                                    <a href={getDownloadLink(report.id)} className="flex-1 py-2 bg-green-600 text-black text-[10px] font-bold rounded-lg flex items-center justify-center gap-1"><Download size={12}/> Save</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;