// "use client";

// import React, { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Clock, Calendar, ShieldCheck, Share2, Printer, Loader2 } from 'lucide-react';

// const BASE_URL = "";

// export default function BlogDetailPage() {
//   const { slug } = useParams();
//   const router = useRouter();
//   const [post, setPost] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetail = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/public/blogs/${slug}`);
//         const data = await res.json();
//         setPost(data.post);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (slug) fetchDetail();
//   }, [slug]);

//   if (loading) return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//         <Loader2 className="text-green-500 animate-spin" size={40} />
//     </div>
//   );

//   if (!post) return <div className="text-white text-center pt-40 uppercase font-mono">Protocol Not Found (404)</div>;

//   return (
//     <div className="min-h-screen bg-black text-gray-300 pb-20 pt-10">
//       <div className="max-w-[1000px] mx-auto px-6">
        
//         {/* Back Button */}
//         <button 
//           onClick={() => router.back()}
//           className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors"
//         >
//           <ArrowLeft size={14} /> RETURN_TO_FEED
//         </button>

//         <article className="space-y-12">
//             {/* Meta */}
//             <header className="space-y-6">
//                 <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
//                     {post.title}
//                 </h1>
//                 <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono text-gray-500 uppercase border-y border-white/10 py-6">
//                     <span className="flex items-center gap-2 text-green-500"><ShieldCheck size={14} /> Authored_by_BC_Labs</span>
//                     <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString()}</span>
//                     <span className="flex items-center gap-2"><Clock size={14} /> Updated_Live</span>
//                 </div>
//             </header>

//             {/* Featured Image */}
//             {post.coverImage && (
//                 <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-video">
//                     <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
//                 </div>
//             )}

//             {/* Markdown Content */}
//             <div className="prose prose-invert prose-green max-w-none font-mono text-sm leading-relaxed
//                 prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter
//                 prose-p:text-gray-400 prose-strong:text-green-500 prose-code:text-green-400 prose-code:bg-green-500/10 prose-code:px-2 prose-code:rounded">
//                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
//             </div>

//             {/* Footer Actions */}
//             <footer className="pt-20 border-t border-white/5 flex justify-between items-center">
//                 <div className="text-[9px] font-mono text-gray-600 uppercase">
//                     Byte_Capsule_ID: {post.id}
//                 </div>
//                 <div className="flex gap-4">
//                     <button className="p-3 bg-white/5 rounded-full hover:text-green-500 transition-colors"><Share2 size={16} /></button>
//                     <button onClick={() => window.print()} className="p-3 bg-white/5 rounded-full hover:text-green-500 transition-colors"><Printer size={16} /></button>
//                 </div>
//             </footer>
//         </article>
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Share2, Printer, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// এপিআই ইউআরএল (প্রয়োজন হলে আপনার পোর্টে পরিবর্তন করুন)
const BASE_URL = ""; 

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/public/blogs/${slug}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchDetail();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="text-green-500 animate-spin" size={40} />
    </div>
  );

  if (!post) return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
        <h1 className="text-2xl mb-4">PROTOCOL_NOT_FOUND (404)</h1>
        <button onClick={() => router.back()} className="text-green-500 hover:underline">RETURN_TO_BASE</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 pb-20 pt-10 selection:bg-green-500 selection:text-black">
      <div className="max-w-full mx-auto px-6">
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> RETURN_TO_FEED
        </motion.button>

        <article className="space-y-12">
            {/* Header / Meta */}
            <header className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]"
                >
                    {post.title}
                </motion.h1>
                
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono text-gray-500 uppercase border-y border-white/10 py-6">
                    <span className="flex items-center gap-2 text-green-500">
                        <ShieldCheck size={14} /> Authored_by_BC_Labs
                    </span>
                    <span className="flex items-center gap-2">
                        <Calendar size={14} /> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'STARDATE_UNKNOWN'}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock size={14} /> SECURITY_LEVEL: ALPHA
                    </span>
                </div>
            </header>

            {/* Featured Image */}
            {post.coverImage && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video relative group"
                >
                    <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>
            )}

            {/* Markdown Content Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-green max-w-none 
                font-mono text-sm leading-relaxed
                prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter
                prose-p:text-gray-400 prose-p:mb-6
                prose-strong:text-green-500 prose-strong:font-bold
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:text-gray-400 prose-li:my-1
                prose-blockquote:border-l-green-500 prose-blockquote:bg-green-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                prose-code:text-green-400 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/10"
            >
               <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
               </ReactMarkdown>
            </motion.div>

            {/* Footer Actions */}
            <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                    Byte_Capsule_Secure_Link: {post.id || "N/A"}
                </div>
                <div className="flex gap-4">
                    <button 
                        title="Share Protocol"
                        className="p-4 bg-white/5 rounded-full hover:text-green-500 hover:bg-white/10 transition-all border border-white/5"
                    >
                        <Share2 size={18} />
                    </button>
                    <button 
                        onClick={() => window.print()} 
                        title="Print Decrypted Log"
                        className="p-4 bg-white/5 rounded-full hover:text-green-500 hover:bg-white/10 transition-all border border-white/5"
                    >
                        <Printer size={18} />
                    </button>
                </div>
            </footer>
        </article>
      </div>
    </div>
  );
}