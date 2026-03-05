"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Globe, Shield, Terminal, Star, User } from 'lucide-react';

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

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://zero-day-test-nine.vercel.app/api/public/leaderboard');
        const data = await response.json();
        
        if (data && Array.isArray(data.leaders)) {
          // আমরা টপ ৮ জনকে দেখাবো যাতে গ্রিড টা সুন্দর লাগে
          setLeaders(data.leaders.slice(0, 8));
        }
      } catch (error) {
        console.error("Leaderboard Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return (
    <div className="py-20 text-center font-mono text-green-500 animate-pulse">
      &gt; SYNCHRONIZING_RESEARCHER_DATABASE...
    </div>
  );

  if (leaders.length === 0) return null;

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
            Top <span className="text-green-500 font-mono italic">Researchers</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base font-light mt-4">
            We are constantly working to educate the elite researchers on our platform.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 bg-zinc-950/40 border border-white/5 rounded-[2rem] hover:border-green-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Rank Badge */}
              <div className={`absolute top-4 right-6 w-10 h-10 flex items-center justify-center rounded-full font-black text-xs border ${
                index === 0 ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 
                index === 1 ? 'bg-gray-400/20 border-gray-400 text-gray-400' :
                index === 2 ? 'bg-orange-800/20 border-orange-800 text-orange-800' :
                'bg-green-500/5 border-green-500/20 text-green-700'
              }`}>
                #{leader.rank}
              </div>

              {/* Profile Section */}
              <div className="flex flex-col items-center text-center">
                 <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-green-500/50 transition-all">
                       {leader.avatar ? (
                         <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                       ) : (
                         <User size={32} className="text-gray-700 group-hover:text-green-500 transition-colors" />
                       )}
                    </div>
                    {/* Pulsing Status Dot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-black border-2 border-zinc-900 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                    </div>
                 </div>

                 <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors truncate w-full px-2">
                   {leader.name}
                 </h3>
                 <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">
                   @{leader.username}
                 </p>

                 {/* Stats Row */}
                 <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                    <div className="text-center">
                       <p className="text-[8px] font-mono text-gray-500 uppercase">Country</p>
                       <p className="text-[10px] font-bold text-white flex items-center justify-center gap-1">
                          <Globe size={10} className="text-green-900" /> {leader.country || "Global"}
                       </p>
                    </div>
                    <div className="text-center border-l border-white/5">
                       <p className="text-[8px] font-mono text-gray-500 uppercase">Points</p>
                       <p className="text-[10px] font-bold text-green-500 flex items-center justify-center gap-1">
                          <Zap size={10} fill="currentColor" /> {leader.points}
                       </p>
                    </div>
                 </div>
              </div>

              {/* Background HUD Ornament */}
              <div className="absolute -bottom-2 -left-2 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                 <Shield size={120} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Style Note */}
        <div className="mt-16 flex justify-center">
           <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4 text-[10px] font-mono text-gray-600">
              <Terminal size={14} className="text-green-900" />
              <p>ACCESSING: PUBLIC_RECOGNITION_LEDGER... STATUS: <span className="text-green-500 animate-pulse">ACTIVE</span></p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Leaderboard;