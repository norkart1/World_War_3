import { motion } from 'framer-motion';

export const WarRoom = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-10 bg-bg-dark p-8 overflow-hidden"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(100% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 border-[1vw] border-bg-light z-0 opacity-50 m-[1vw]" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,34,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(204,34,0,0.1)_1px,transparent_1px)] bg-[size:3vw_3vw] pointer-events-none opacity-20" />

      <div className="h-full w-full flex flex-col relative z-10">
        <motion.header 
          className="flex justify-between items-start border-b-2 border-primary pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <h1 className="font-display text-[4vw] text-primary tracking-widest leading-none">OPERATION: IRON STORM</h1>
            <p className="font-mono text-accent/50 text-[1vw] mt-2">CLASSIFIED CLEARANCE LEVEL 5 REQUIRED</p>
          </div>
          <div className="text-right font-mono">
            <p className="text-secondary text-[2vw] font-bold animate-pulse leading-none">T-MINUS 04:22:19</p>
            <p className="text-accent/40 text-[1vw]">GLOBAL SYNC</p>
          </div>
        </motion.header>

        <div className="flex-1 grid grid-cols-3 gap-[2vw] pt-[2vh]">
          {/* Left Column - Docs */}
          <div className="col-span-1 space-y-[2vh]">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="bg-bg-light/40 p-[1.5vw] border-l-[0.3vw] border-primary relative overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (i * 0.2) }}
              >
                <div className="font-mono text-[1vw] text-secondary mb-[1vh]">INTELLIGENCE REPORT {i}0{i}</div>
                <div className="space-y-[1vh]">
                  <div className="h-[0.8vh] bg-accent/20 w-3/4 rounded" />
                  <div className="h-[0.8vh] bg-accent/20 w-full rounded" />
                  <div className="h-[0.8vh] bg-primary/40 w-1/2 rounded" /> {/* Redacted look */}
                  <div className="h-[0.8vh] bg-accent/20 w-5/6 rounded" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center/Right - Main Tactical Map */}
          <motion.div 
            className="col-span-2 border border-secondary/30 relative flex items-center justify-center bg-black/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <img src="/soldiers.png" className="absolute w-full h-full object-cover opacity-30 grayscale sepia mix-blend-screen" alt="Tactical" />
            
            <motion.div 
              className="w-full h-[0.3vh] bg-secondary/50 absolute z-20 shadow-[0_0_1vw_#FF6B00]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            
            <div className="relative z-10 w-[20vw] h-[20vw] border-2 border-primary rounded-full flex items-center justify-center">
               <div className="w-full h-[1px] bg-primary absolute" />
               <div className="h-full w-[1px] bg-primary absolute" />
               <motion.div 
                 className="w-[5vw] h-[5vw] border border-accent animate-ping absolute rounded-full"
               />
               <motion.div 
                 className="absolute right-[3vw] top-[3vw] font-mono text-primary text-[1vw]"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2 }}
               >
                 TARGET LOCKED
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
