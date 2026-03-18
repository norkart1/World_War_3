import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const missiles = [
  { id: 'M-01', origin: 'RUSSIA', dest: 'WASHINGTON', path: 'M 700 100 Q 500 -50 170 170', destX: 170, destY: 170, delay: 0.4 },
  { id: 'M-02', origin: 'CHINA', dest: 'TOKYO', path: 'M 790 180 Q 820 120 855 155', destX: 855, destY: 155, delay: 0.8 },
  { id: 'M-03', origin: 'USA', dest: 'MOSCOW', path: 'M 170 170 Q 400 20 650 90', destX: 650, destY: 90, delay: 1.2 },
  { id: 'M-04', origin: 'N.KOREA', dest: 'SEOUL', path: 'M 840 170 Q 835 200 820 210', destX: 820, destY: 210, delay: 1.6 },
  { id: 'M-05', origin: 'IRAN', dest: 'TEL AVIV', path: 'M 590 230 Q 560 210 550 225', destX: 550, destY: 225, delay: 2.0 },
];

export const NuclearTracker = () => {
  const [countdown, setCountdown] = useState(12 * 60 + 34);
  const [progressVals, setProgressVals] = useState<number[]>(missiles.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressVals((prev) =>
        prev.map((val, i) => {
          // Stagger start based on delay
          const target = 100;
          const increment = Math.random() * 2 + 1;
          return val < target ? Math.min(val + increment, target) : target;
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col z-10 overflow-hidden bg-bg-dark"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)] z-50" />
      
      {/* Pulsing Border */}
      <motion.div
        className="absolute inset-[1vw] border-[0.3vw] border-primary pointer-events-none z-50"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Header */}
      <div className="relative w-full p-[2vw] flex justify-between items-start z-20">
        <motion.div
          className="font-mono text-[3vw] text-primary font-bold tracking-widest text-glow"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          NUCLEAR LAUNCH DETECTED — TRACKING LIVE
        </motion.div>
        
        <motion.div
          className="border-4 border-primary text-primary px-[1vw] py-[0.5vw] font-display text-[2vw] transform rotate-12"
          initial={{ rotate: 45, scale: 2, opacity: 0 }}
          animate={{ rotate: 12, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
        >
          TOP SECRET / CLASSIFIED
        </motion.div>
      </div>

      <div className="flex-1 flex px-[2vw] pb-[2vw] gap-[2vw] relative z-20 mt-[2vh]">
        {/* Map Area */}
        <div className="flex-[2] relative border border-primary/30 bg-primary/5">
          <svg viewBox="0 0 1000 600" className="w-full h-full">
            {/* Landmasses */}
            {[
              { id: 'NA', x: 80, y: 60, w: 200, h: 280 },
              { id: 'SA', x: 130, y: 360, w: 130, h: 220 },
              { id: 'EU', x: 420, y: 70, w: 100, h: 180 },
              { id: 'AF', x: 420, y: 240, w: 140, h: 250 },
              { id: 'RU-AS', x: 520, y: 45, w: 380, h: 260 },
              { id: 'IN', x: 610, y: 250, w: 70, h: 140 },
              { id: 'CH', x: 650, y: 120, w: 170, h: 150 },
              { id: 'AU', x: 730, y: 370, w: 170, h: 150 },
              { id: 'JP', x: 840, y: 130, w: 25, h: 60 },
              { id: 'ME', x: 540, y: 200, w: 90, h: 100 },
            ].map((rect) => (
              <rect
                key={rect.id}
                x={rect.x}
                y={rect.y}
                width={rect.w}
                height={rect.h}
                fill="#222"
                stroke="#CC2200"
                strokeWidth="2"
                strokeOpacity="0.4"
              />
            ))}

            {/* Trajectories */}
            {missiles.map((m, i) => (
              <g key={m.id}>
                <motion.path
                  d={m.path}
                  fill="none"
                  stroke="#CC2200"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: m.delay, ease: "easeOut" }}
                />
                <motion.circle
                  cx={m.destX}
                  cy={m.destY}
                  r="6"
                  fill="#FF6B00"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 2, 1, 2] }}
                  transition={{ delay: m.delay + 1.3, duration: 1, repeat: Infinity }}
                  style={{ filter: 'drop-shadow(0 0 8px #CC2200)' }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Side Panel */}
        <div className="flex-1 flex flex-col gap-[2vh]">
          <div className="bg-primary/20 border border-primary p-[1.5vw] text-center mb-[2vh]">
            <div className="font-mono text-[1.2vw] text-accent mb-[1vh]">ESTIMATED IMPACT</div>
            <div className="font-display text-[4vw] text-primary text-glow leading-none">
              {formatTime(countdown)}
            </div>
          </div>

          <div className="space-y-[1.5vh] flex-1 overflow-hidden">
            {missiles.map((m, i) => (
              <div key={m.id} className="border border-secondary/30 p-[1vw] bg-bg-light/50 relative">
                <div className="flex justify-between font-mono text-[1vw] text-accent mb-[1vh]">
                  <span>[{m.id}] {m.origin} ➔ {m.dest}</span>
                  <span className="text-secondary">{Math.floor(progressVals[i])}%</span>
                </div>
                
                <div className="w-full h-[1vh] border border-secondary/50 bg-bg-dark">
                  <motion.div 
                    className="h-full bg-primary"
                    style={{ width: `${progressVals[i]}%` }}
                  />
                </div>

                {m.origin === 'N.KOREA' && (
                  <motion.div 
                    className="absolute inset-0 border-[2px] border-primary flex items-center justify-center bg-primary/20 backdrop-blur-sm z-10 font-mono text-[1.5vw] font-bold text-primary"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                  >
                    IMPACT IMMINENT
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
