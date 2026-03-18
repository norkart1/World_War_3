import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const CLIPS = [
  { src: '/explosion.mp4', text: 'DAY 1' },
  { src: '/missiles.mp4', text: 'LAUNCH CONFIRMED' },
  { src: '/burning_city.mp4', text: '47 CITIES DESTROYED' },
  { src: '/tanks.mp4', text: 'GROUND INVASION' },
  { src: '/jets.mp4', text: 'AIR SUPERIORITY LOST' }
];

export const WarFootage = () => {
  const [currentClip, setCurrentClip] = useState(0);
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClip((prev) => (prev + 1) % CLIPS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const ms = Math.floor((elapsed % 1000) / 10);
      const s = Math.floor((elapsed / 1000) % 60);
      const m = Math.floor((elapsed / 60000) % 60);
      setTime(`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-10 bg-bg-dark overflow-hidden"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentClip}
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.3, ease: 'circOut' }}
        >
          <video
            src={CLIPS[currentClip].src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-bg-dark/20 backdrop-blur-[1px]">
            <motion.div
              className="bg-primary/90 px-[4vw] py-[2vw] border-4 border-bg-dark shadow-[2vw_2vw_0_rgba(10,10,10,0.5)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <h2 className="font-display text-[10vw] leading-none text-bg-dark text-center tracking-tighter">
                {CLIPS[currentClip].text}
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={`flash-${currentClip}`}
          className="absolute inset-0 bg-primary z-20 pointer-events-none"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </AnimatePresence>

      <div className="absolute top-[3vw] right-[4vw] z-30 flex items-center gap-[1vw] bg-bg-dark/80 px-[1.5vw] py-[0.5vw] border border-primary/30">
        <motion.div
          className="w-[1vw] h-[1vw] rounded-full bg-primary"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <span className="font-mono text-primary text-[1.5vw] font-bold">REC</span>
        <span className="font-mono text-accent text-[1.5vw] ml-[1vw]">{time}</span>
      </div>

      <div className="absolute bottom-[8vh] left-[4vw] z-30">
        <div className="bg-bg-dark/80 px-[1vw] py-[0.5vw] border-l-4 border-primary">
          <span className="font-mono text-accent/70 text-[1vw] tracking-widest uppercase">
            CLASSIFIED WAR FOOTAGE — AUTHORIZED RELEASE
          </span>
        </div>
      </div>
    </motion.div>
  );
};