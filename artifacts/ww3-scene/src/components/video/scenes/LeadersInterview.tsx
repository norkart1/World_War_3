import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { charVariants, charContainerVariants } from '@/lib/video/animations';

const LEADERS = [
  { name: "J. BIDEN", title: "PRESIDENT", country: "UNITED STATES", flag: "🇺🇸", quote: "This unprovoked aggression will not go unanswered. Our NATO allies stand united.", alignment: "left", accentColor: "#FF6B00" },
  { name: "V. PUTIN", title: "PRESIDENT", country: "RUSSIA", flag: "🇷🇺", quote: "The West has crossed a red line. Russia will defend its sovereignty by any means necessary.", alignment: "right", accentColor: "#CC2200" },
  { name: "XI JINPING", title: "GENERAL SECRETARY", country: "CHINA", flag: "🇨🇳", quote: "China calls for immediate de-escalation. All parties must exercise maximum restraint.", alignment: "left", accentColor: "#CC2200" },
  { name: "E. MACRON", title: "PRESIDENT", country: "FRANCE / EU", flag: "🇫🇷", quote: "Europe faces its darkest hour. We are activating all NATO Article 5 protocols immediately.", alignment: "right", accentColor: "#FF6B00" },
  { name: "R. SUNAK", title: "PRIME MINISTER", country: "UNITED KINGDOM", flag: "🇬🇧", quote: "Britain stands shoulder to shoulder with our allies. Parliament has been recalled urgently.", alignment: "left", accentColor: "#FF6B00" },
  { name: "N. MODI", title: "PRIME MINISTER", country: "INDIA", flag: "🇮🇳", quote: "India urges both sides to return to the negotiating table. Nuclear war is not an option.", alignment: "right", accentColor: "#3B82F6" }
];

export const LeadersInterview = () => {
  const [currentLeader, setCurrentLeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % LEADERS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const leader = LEADERS[currentLeader];

  return (
    <motion.div
      className="absolute inset-0 z-10 bg-bg-dark overflow-hidden flex flex-col"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ clipPath: 'inset(0 0 0 100%)' }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise z-0 opacity-20" />
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30" 
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)' }} 
      />

      {/* Watermarks */}
      <div className="absolute top-[2vh] left-[2vw] z-20 font-mono text-[1vw] text-accent opacity-20">CNN WORLD</div>
      <div className="absolute top-[2vh] right-[2vw] z-20 font-mono text-[1vw] text-accent opacity-20">HD LIVE</div>

      {/* Top Title */}
      <div className="absolute top-[5vh] left-[5vw] z-20 flex items-center gap-[1vw]">
        <motion.div 
          className="w-[1vw] h-[1vw] bg-primary rounded-full"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <h2 className="font-display text-[3vw] text-accent tracking-wider">WORLD LEADERS RESPOND</h2>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 flex items-center justify-center pt-[10vh] pb-[8vh]">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentLeader}
            className={`w-[90vw] h-[60vh] flex ${leader.alignment === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center`}
            initial={{ clipPath: leader.alignment === 'left' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0% 0 0%)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            {/* Silhouette Portrait (Left ~40%) */}
            <div className="w-[40%] h-full relative flex flex-col items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 blur-[5vw] rounded-full scale-150"
                style={{ backgroundColor: leader.accentColor }}
              />
              <div 
                className="w-[10vw] h-[10vw] rounded-full flex items-center justify-center relative z-10"
                style={{ backgroundColor: leader.accentColor, opacity: 0.3 }}
              >
                <span className="text-[4vw] opacity-100">{leader.flag}</span>
              </div>
              <div 
                className="w-[18vw] h-[15vw] mt-[1vh] relative z-10"
                style={{ 
                  backgroundColor: leader.accentColor, 
                  opacity: 0.2,
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
                }}
              />
              <div className="absolute bottom-0 text-[5vw] floating opacity-50">{leader.flag}</div>
            </div>

            {/* Text Panel (Right ~60%) */}
            <div className={`w-[60%] flex flex-col justify-center ${leader.alignment === 'right' ? 'items-end text-right' : 'items-start text-left'} px-[4vw]`}>
              <div className="font-mono text-[1vw] tracking-[0.3em] text-accent/60 mb-[1vh]">
                EMERGENCY ADDRESS
              </div>
              
              <motion.div 
                className="font-display text-[6vw] leading-none mb-[1vh]"
                style={{ color: leader.accentColor }}
                variants={charContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {leader.name.split('').map((char, i) => (
                  <motion.span key={i} variants={charVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
              
              <div className="font-mono text-[1.2vw] text-secondary/70 border-t border-secondary/30 pt-[1vh] mb-[4vh]">
                {leader.title} // {leader.country}
              </div>
              
              <motion.div 
                className={`font-body italic text-[1.8vw] text-accent/90 border-accent pl-[2vw] ${leader.alignment === 'right' ? 'border-r-2 pr-[2vw] pl-0' : 'border-l-2'}`}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1.5, ease: "linear", delay: 0.2 }}
              >
                "{leader.quote}"
              </motion.div>
              
              <div 
                className="mt-[4vh] font-mono text-[1vw] px-[1vw] py-[0.5vh] border"
                style={{ color: leader.accentColor, borderColor: leader.accentColor }}
              >
                LIVE TRANSLATION
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lower Third */}
      <div className="absolute bottom-[6vh] w-full h-[8vh] bg-black/80 backdrop-blur-md border-t border-primary/30 flex justify-between items-center px-[4vw] z-30">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`lt-${currentLeader}`}
            className="flex items-center gap-[2vw]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[3vw]">{leader.flag}</span>
            <div className="flex flex-col">
              <span className="font-display text-[2.5vw] text-accent leading-none">{leader.name}</span>
              <span className="font-mono text-[1vw] text-accent/60">{leader.title}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex items-center gap-[1vw] font-mono text-[1vw] text-accent">
          <span>LIVE FROM {leader.country}</span>
          <motion.div 
            className="w-[0.8vw] h-[0.8vw] bg-primary rounded-full"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        </div>
      </div>

      {/* Broadcast Cut Effect */}
      <AnimatePresence>
        <motion.div
          key={`flash-${currentLeader}`}
          className="absolute inset-0 bg-white z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};
