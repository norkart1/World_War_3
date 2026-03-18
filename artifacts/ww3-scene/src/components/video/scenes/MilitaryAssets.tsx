import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const MilitaryAssets = () => {
  const [troops, setTroops] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [cities, setCities] = useState(0);
  const [nukes, setNukes] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 24000;
      if (current > 2400000) current = 2400000;
      setTroops(current);
      if (current >= 2400000) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentStrikes = 0;
    const intervalStrikes = setInterval(() => {
      currentStrikes += 33; // ~4847 over 3s
      if (currentStrikes > 4847) currentStrikes = 4847;
      setStrikes(currentStrikes);
      if (currentStrikes >= 4847) clearInterval(intervalStrikes);
    }, 20);

    let currentCities = 0;
    const intervalCities = setInterval(() => {
      currentCities += 1; // ~127 over 2.5s
      if (currentCities > 127) currentCities = 127;
      setCities(currentCities);
      if (currentCities >= 127) clearInterval(intervalCities);
    }, 20);

    let currentNukes = 0;
    const intervalNukes = setInterval(() => {
      currentNukes += 1; // ~23 over 4s
      if (currentNukes > 23) currentNukes = 23;
      setNukes(currentNukes);
      if (currentNukes >= 23) clearInterval(intervalNukes);
    }, 173);

    return () => {
      clearInterval(intervalStrikes);
      clearInterval(intervalCities);
      clearInterval(intervalNukes);
    };
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-10 flex flex-col p-[4vw] overflow-hidden"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex-1 grid grid-cols-2 gap-[2vw] relative z-10">
        
        {/* Data Panel Left */}
        <motion.div 
          className="border border-secondary/30 bg-bg-light/80 p-[3vw] flex flex-col justify-center relative overflow-hidden backdrop-blur-sm"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-primary to-transparent" />
          <h3 className="font-mono text-[2vw] text-accent mb-[2vh] uppercase tracking-widest">Force Deployment</h3>
          <div className="font-display text-[8vw] leading-none text-primary mb-[1vh]">
            {(troops / 1000000).toFixed(2)}M
          </div>
          <div className="font-mono text-secondary text-[1.5vw] tracking-widest uppercase">
            Active Personnel Mobilized
          </div>
          
          <div className="mt-[4vh] space-y-[2vh] grid grid-cols-1">
            <div className="flex gap-[2vw]">
              <div className="flex-1">
                <div className="font-mono text-[1.2vw] text-accent/80 mb-[0.5vh]">STRIKES EXECUTED:</div>
                <div className="font-display text-[4vw] leading-none text-[#FF6B00]">{Math.floor(strikes)}</div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-[1.2vw] text-accent/80 mb-[0.5vh]">CITIES UNDER ATTACK:</div>
                <div className="font-display text-[4vw] leading-none text-[#FF6B00]">{Math.floor(cities)}</div>
              </div>
            </div>
            <div>
              <div className="font-mono text-[1.2vw] text-accent/80 mb-[0.5vh]">NUCLEAR WARHEADS LAUNCHED:</div>
              <div className="font-display text-[4vw] leading-none text-[#FF6B00]">{Math.floor(nukes)}</div>
            </div>
          </div>
          
          <div className="mt-[4vh] space-y-[2vh]">
            {['AIR ASSETS', 'NAVAL FLEET', 'GROUND ARMOR'].map((item, i) => (
              <div key={item} className="flex items-center justify-between font-mono text-[1.5vw]">
                <span className="text-accent/60">{item}</span>
                <div className="flex-1 mx-4 h-[1px] bg-secondary/20" />
                <motion.span 
                  className="text-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + (i * 0.2) }}
                >
                  DEPLOYED
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Panel Right */}
        <motion.div 
          className="border border-primary/30 p-[3vw] relative overflow-hidden flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {/* Mock image integration point */}
          <div className="absolute inset-0 bg-bg-dark/50 z-0" />
          <img src="/missile_trails.png" className="absolute w-full h-full object-cover opacity-60 mix-blend-screen" alt="Missiles" />
          
          {/* Radar Sweep */}
          <motion.div 
            className="w-[30vw] h-[30vw] rounded-full border border-accent/20 relative z-10 flex items-center justify-center"
          >
            <motion.div 
              className="absolute w-1/2 h-full bg-gradient-to-r from-transparent to-primary/20 origin-right rounded-r-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ left: 0 }}
            />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="absolute border border-accent/10 rounded-full" style={{ width: `${(i+1)*30}%`, height: `${(i+1)*30}%` }} />
            ))}
            
            {/* Blips */}
            <motion.div 
              className="absolute w-[1vw] h-[1vw] bg-secondary rounded-full shadow-[0_0_15px_#FF6B00]"
              style={{ top: '30%', left: '60%' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            />
            <motion.div 
              className="absolute w-[1vw] h-[1vw] bg-primary rounded-full shadow-[0_0_15px_#CC2200]"
              style={{ top: '70%', left: '40%' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2.5 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};
