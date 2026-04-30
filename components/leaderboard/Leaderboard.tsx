// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trophy, User, Zap, Terminal } from 'lucide-react';

// interface Leader {
//   rank: number;
//   name: string;
//   username: string;
//   avatar: string | null;
//   country: string | null; // API থেকে আসবে যেমন: "BD", "US"
//   points: number;
// }

// const Leaderboard = () => {
//   const [leaders, setLeaders] = useState<Leader[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         const response = await fetch('https://zt.zerodaytest.com/api/public/leaderboard');
//         const data = await response.json();
//         if (data && Array.isArray(data.leaders)) {
//           setLeaders(data.leaders);
//         }
//       } catch (error) {
//         console.error("Leaderboard Sync Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeaderboard();
//   }, []);

//   // কান্ট্রি কোড থেকে পতাকার ছবি বের করার ফাংশন
//   const getFlagURL = (code: string | null) => {
//     const countryCode = code ? code.toLowerCase() : "bd"; // ডিফল্ট বাংলাদেশ
//     return `https://flagcdn.com/w40/${countryCode}.png`;
//   };

//   // কান্ট্রি কোড থেকে নাম দেখানোর ফাংশন
//   const getCountryName = (code: string | null) => {
//     const countries: { [key: string]: string } = {
//       "BD": "Bangladesh",
//       "US": "United States",
//     };
//     return code ? (countries[code.toUpperCase()] || "Bangladesh") : "Bangladesh";
//   };

//   if (loading) return <div className="py-20 text-center font-mono text-green-500 animate-pulse">&gt; SYNCING_GLOBAL_NODES...</div>;
//   if (leaders.length === 0) return null;

//   const topThree = leaders.slice(0, 3);

//   return (
//     <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 min-h-[80vh]">
//       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* হেডার সেকশন */}
//         <div className="flex flex-col items-center text-center mb-16 relative">
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
//             <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
//           </motion.div>
          
//           <div className="relative inline-block">
//              <div className="absolute -top-6 -left-12 w-10 h-10 border border-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
//                 <div className="absolute inset-0 border-t border-green-500/40 rounded-full animate-spin"></div>
//              </div>
             
//              <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
//                 <span className="text-white">TOP</span> <span className="text-green-500 italic">RESEARCHERS</span>
//              </h2>
//           </div>
          
//           <p className="text-gray-500 text-sm md:text-xl font-light mt-6 max-w-2xl">
//             We are constantly working to educate the elite researchers on our platform.
//           </p>
//         </div>

//         {/* --- ১. টপ সেকশন: পোডিয়াম কার্ডস (আসল পতাকা সহ) --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {topThree.map((leader, index) => (
//             <motion.div
//               key={leader.rank}
//               className={`relative p-8 rounded-[2rem] border flex flex-col items-center text-center transition-all duration-500 ${
//                 index === 0 ? 'bg-zinc-900/20 border-green-500/40 shadow-2xl scale-105 z-10' : 'bg-zinc-950/40 border-white/5'
//               }`}
//             >
//               <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${index === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>
//                 {index === 0 ? '1ST' : index === 1 ? '2ND' : '3RD'}
//               </span>

//               <div className="relative mb-6">
//                  <div className={`w-24 h-24 rounded-full border-2 p-1 overflow-hidden ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
//                     <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
//                        {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" /> : <User size={40} className="text-gray-700" />}
//                     </div>
//                  </div>
//                  {index === 0 && <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-zinc-900"></div>}
//               </div>

//               {/* পতাকা এবং নাম - ছবির মতো ডিজাইন */}
//               <div className="flex items-center gap-2 mb-2">
//                  <img src={getFlagURL(leader.country)} alt="flag" className="w-4 h-3 object-cover rounded-sm shadow-sm" />
//                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
//               </div>
              
//               <h3 className="text-white font-bold text-lg mb-2">@{leader.username}</h3>
              
//               <p className="text-green-500 font-black text-3xl tracking-tighter">
//                 {leader.points} pts
//               </p>

//               {index === 0 && (
//                 <div className="mt-4 text-yellow-500">
//                    <Trophy size={48} strokeWidth={1.5} />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* --- ২. নিচের সেকশন: র‍্যাঙ্কিং লিস্ট (আসল পতাকা সহ) --- */}
//         <div className="bg-[#050505] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
//            <div className="p-6 md:p-10 border-b border-white/5 flex justify-between items-end">
//               <div>
//                  <h2 className="text-white text-xl font-black uppercase tracking-wider">Ranking</h2>
//                  <p className="text-gray-500 text-[10px] md:text-sm mt-1 font-light">
//                     Hunters ranked by points in Q1 2026 — {leaders.length} total
//                  </p>
//               </div>
//               <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Points</div>
//            </div>

//            <div className="p-4 md:p-6 space-y-3">
//               {leaders.map((leader) => (
//                 <div key={leader.rank} className="flex items-center justify-between p-4 md:px-8 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-green-500/20 transition-all group">
//                   <div className="flex items-center gap-6">
//                     <span className="text-gray-700 font-mono text-xs w-6">#{leader.rank}</span>
//                     <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5">
//                        {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" /> : <User size={18} className="text-gray-700" />}
//                     </div>
//                     <span className="text-gray-300 font-bold text-sm md:text-base">@{leader.username}</span>
//                   </div>

//                   {/* লিস্টের মাঝখানে পতাকা এবং দেশের নাম */}
//                   <div className="hidden md:flex items-center gap-3">
//                      <img src={getFlagURL(leader.country)} alt="flag" className="w-5 h-3.5 object-cover rounded-sm" />
//                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
//                   </div>

//                   <div className="text-right text-green-500 font-black text-sm md:text-lg">{leader.points} pts</div>
//                 </div>
//               ))}
//            </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Leaderboard;








// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trophy, User, Zap, Terminal } from 'lucide-react';

// interface Leader {
//   rank: number;
//   name: string;
//   username: string;
//   avatar: string | null;
//   country: string | null;
//   points: number;
// }

// const Leaderboard = () => {
//   const [leaders, setLeaders] = useState<Leader[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         const response = await fetch('https://zt.zerodaytest.com/api/public/leaderboard');
//         const data = await response.json();
//         if (data && Array.isArray(data.leaders)) {
//           setLeaders(data.leaders);
//         }
//       } catch (error) {
//         console.error("Leaderboard Sync Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeaderboard();
//   }, []);

//   const getFlagURL = (code: string | null) => {
//     const countryCode = code ? code.toLowerCase() : "bd";
//     return `https://flagcdn.com/w40/${countryCode}.png`;
//   };

//   const getCountryName = (code: string | null) => {
//     const countries: { [key: string]: string } = {
//       "BD": "Bangladesh",
//       "US": "United States",
//     };
//     return code ? (countries[code.toUpperCase()] || "Bangladesh") : "Bangladesh";
//   };

//   // ১. ফুটার লাফানো বন্ধ করতে মূল সেকশনটিকে সবসময় রিটার্ন করতে হবে
//   return (
//     <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 min-h-[80vh] flex flex-col justify-center">
//       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">
        
//         {/* লোডিং অবস্থায় যা দেখাবে */}
//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-40">
//             <motion.div 
//               animate={{ opacity: [0.4, 1, 0.4] }} 
//               transition={{ repeat: Infinity, duration: 1.5 }}
//               className="font-mono text-green-500 text-xl"
//             >
//               &gt; SYNCING_GLOBAL_NODES...
//             </motion.div>
//             <div className="w-48 h-1 bg-zinc-900 mt-4 rounded-full overflow-hidden">
//                <motion.div 
//                  className="h-full bg-green-500" 
//                  initial={{ x: "-100%" }} 
//                  animate={{ x: "100%" }} 
//                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//                />
//             </div>
//           </div>
//         ) : leaders.length === 0 ? (
//           // যদি ডাটা না থাকে তাও খালি জায়গা ধরে রাখবে
//           <div className="py-40 text-center text-gray-500 font-mono">
//             [ NO_DATA_AVAILABLE_IN_THE_DATABASE ]
//           </div>
//         ) : (
//           <>
//             {/* হেডার সেকশন */}
//             <div className="flex flex-col items-center text-center mb-16 relative">
//               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
//                 <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
//               </motion.div>
              
//               <div className="relative inline-block">
//                  <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
//                     <span className="text-white">TOP</span> <span className="text-green-500 italic">RESEARCHERS</span>
//                  </h2>
//               </div>
              
//               <p className="text-gray-500 text-sm md:text-xl font-light mt-6 max-w-2xl">
//                 We are constantly working to educate the elite researchers on our platform.
//               </p>
//             </div>

//             {/* পোডিয়াম কার্ডস */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {leaders.slice(0, 3).map((leader, index) => (
//                 <motion.div
//                   key={leader.rank}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className={`relative p-8 rounded-[2rem] border flex flex-col items-center text-center transition-all duration-500 ${
//                     index === 0 ? 'bg-zinc-900/20 border-green-500/40 shadow-2xl scale-105 z-10' : 'bg-zinc-950/40 border-white/5'
//                   }`}
//                 >
//                   <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${index === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>
//                     {index === 0 ? '1ST' : index === 1 ? '2ND' : '3RD'}
//                   </span>
//                   <div className="relative mb-6">
//                      <div className={`w-24 h-24 rounded-full border-2 p-1 overflow-hidden ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
//                         <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
//                            {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt={leader.username} /> : <User size={40} className="text-gray-700" />}
//                         </div>
//                      </div>
//                   </div>
//                   <div className="flex items-center gap-2 mb-2">
//                      <img src={getFlagURL(leader.country)} alt="flag" className="w-4 h-3 object-cover rounded-sm" />
//                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
//                   </div>
//                   <h3 className="text-white font-bold text-lg mb-2">@{leader.username}</h3>
//                   <p className="text-green-500 font-black text-3xl tracking-tighter">{leader.points} pts</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* র‍্যাঙ্কিং লিস্ট */}
//             <div className="bg-[#050505] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
//                <div className="p-4 md:p-6 space-y-3">
//                   {leaders.map((leader) => (
//                     <div key={leader.rank} className="flex items-center justify-between p-4 md:px-8 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-green-500/20 transition-all group">
//                       <div className="flex items-center gap-6">
//                         <span className="text-gray-700 font-mono text-xs w-6">#{leader.rank}</span>
//                         <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900">
//                            {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt={leader.username} /> : <User size={18} className="text-gray-700" />}
//                         </div>
//                         <span className="text-gray-300 font-bold text-sm md:text-base">@{leader.username}</span>
//                       </div>
//                       <div className="text-right text-green-500 font-black text-sm md:text-lg">{leader.points} pts</div>
//                     </div>
//                   ))}
//                </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Leaderboard;







"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, User, Loader2, AlertCircle } from 'lucide-react';

interface Leader {
  rank: number;
  name: string;
  username: string;
  avatar: string | null;
  country: string | null;
  points: number;
}

const Leaderboard = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        // রিরাইট পাথ ব্যবহার করা হচ্ছে (CORS সমাধান)
        const response = await fetch('/api/public/leaderboard', {
          cache: 'no-store'
        });

        if (!response.ok) throw new Error("Mainframe connection lost.");

        const data = await response.json();
        
        if (data && Array.isArray(data.leaders)) {
          setLeaders(data.leaders);
        }
      } catch (err: any) {
        console.error("Leaderboard Error:", err);
        setError(err.message || "Failed to sync nodes.");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  const getFlagURL = (code: string | null) => {
    const countryCode = code ? code.toLowerCase() : "bd";
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  const getCountryName = (code: string | null) => {
    const countries: { [key: string]: string } = { "BD": "Bangladesh", "US": "USA" };
    return code ? (countries[code.toUpperCase()] || "Global") : "Bangladesh";
  };

  return (
    <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 min-h-[80vh] flex flex-col justify-center selection:bg-green-500 selection:text-black">
      
      {/* Background Matrix Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">
        
        {loading ? (
          /* লোডিং স্টেট - যা লেআউট ঠিক রাখবে */
          <div className="flex flex-col items-center justify-center py-40">
            <Loader2 className="text-green-500 animate-spin mb-4" size={40} />
            <p className="font-mono text-green-900 text-xs uppercase tracking-[0.5em]">Syncing_Global_Hunters...</p>
          </div>
        ) : error ? (
          /* এরর স্টেট */
          <div className="py-40 text-center flex flex-col items-center gap-4">
             <AlertCircle className="text-red-500/50" size={48} />
             <p className="text-red-500 font-mono text-xs uppercase tracking-widest">{error}</p>
             <button onClick={() => window.location.reload()} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase hover:text-green-500 transition-all">Retry_Connection</button>
          </div>
        ) : (
          <>
            {/* হেডার */}
            <div className="flex flex-col items-center text-center mb-16 relative">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
              </motion.div>
              <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white">
                TOP <span className="text-green-500 italic">RESEARCHERS</span>
              </h2>
            </div>

            {/* টপ ৩ রিসার্চার (Podium) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
              {leaders.slice(0, 3).map((leader, index) => (
                <motion.div
                  key={leader.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
                    index === 0 ? 'bg-zinc-900/20 border-green-500/40 shadow-2xl scale-105 z-10' : 'bg-zinc-950/40 border-white/5'
                  }`}
                >
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] mb-6 block ${index === 0 ? 'text-yellow-500' : 'text-gray-600'}`}>
                    {index === 0 ? 'RANK_01' : index === 1 ? 'RANK_02' : 'RANK_03'}
                  </span>
                  
                  <div className="relative mb-6 mx-auto w-24 h-24">
                     <div className={`w-full h-full rounded-full border-2 p-1 overflow-hidden ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                           {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt={leader.username} /> : <User size={40} className="text-gray-700" />}
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-3">
                     <img src={getFlagURL(leader.country)} alt="flag" className="w-4 h-3 object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all" />
                     <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1">@{leader.username}</h3>
                  <p className="text-green-500 font-black text-3xl tracking-tighter">{leader.points} <span className="text-[10px] text-green-900 uppercase">pts</span></p>
                </motion.div>
              ))}
            </div>

            {/* বাকি লিডারবোর্ড লিস্ট */}
            <div className="bg-zinc-950/30 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-md">
               <div className="p-6 md:p-8 space-y-3">
                  {leaders.map((leader) => (
                    <div key={leader.rank} className="flex items-center justify-between p-4 md:px-8 bg-black/40 border border-white/5 rounded-2xl hover:border-green-500/20 transition-all group">
                      <div className="flex items-center gap-6">
                        <span className="text-zinc-800 font-mono text-xs w-6 italic">#{leader.rank < 10 ? `0${leader.rank}` : leader.rank}</span>
                        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5">
                           {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt={leader.username} /> : <User size={18} className="text-gray-700" />}
                        </div>
                        <span className="text-gray-300 font-bold text-sm md:text-base group-hover:text-green-500 transition-colors">@{leader.username}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                         <img src={getFlagURL(leader.country)} alt="flag" className="w-4 h-2.5 object-cover rounded-sm opacity-50" />
                         <div className="text-right text-green-500 font-black text-sm md:text-lg tabular-nums">{leader.points} PTS</div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Leaderboard;