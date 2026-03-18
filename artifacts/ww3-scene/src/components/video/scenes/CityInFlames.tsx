import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CityInFlames = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, delay: number, size: number}>>([]);

  useEffect(() => {
    const p = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 4 + 2
    }));
    setParticles(p);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-10 overflow-hidden bg-bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image / Video Stand-in */}
      <motion.div 
        className="absolute inset-0 opacity-80"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <img src="/burning_city.png" className="w-full h-full object-cover mix-blend-screen" alt="Burning City" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-bg-dark/50 to-bg-dark" />
      </motion.div>

      {/* Fire Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 bg-secondary rounded-full"
          style={{ 
            left: `${p.x}vw`, 
            width: `${p.size}vw`, 
            height: `${p.size}vw`,
            boxShadow: '0 0 1vw #FF6B00'
          }}
          animate={{ 
            y: ['0vh', '-100vh'],
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 3, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-[5vw] z-20">
        <motion.div 
          className="font-display text-[12vw] leading-none text-accent text-center drop-shadow-2xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
        >
          CIVILIAN EVACUATION
        </motion.div>
        
        <motion.div 
          className="bg-primary text-bg-dark px-[4vw] py-[1vw] mt-[2vh] font-mono text-[4vw] font-bold tracking-[0.2em]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "circOut" }}
        >
          ORDERED EFFECTIVE IMMEDIATELY
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[10vh] w-[60vw] max-w-4xl text-center font-mono text-[2vw] text-accent/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="h-[1px] w-full bg-secondary/50 mb-4" />
          CASUALTY REPORTS CLASSIFIED. SEEK IMMEDIATE SHELTER.
          <div className="h-[1px] w-full bg-secondary/50 mt-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};
