import { motion } from 'framer-motion';

export const GlobalResponse = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-10 bg-bg-dark overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="flex-1 flex border-b border-primary/20">
        {/* Split Screen Leaders */}
        {[
          { color: 'bg-primary/20', delay: 0.2 },
          { color: 'bg-secondary/20', delay: 0.4 },
          { color: 'bg-accent/10', delay: 0.6 },
          { color: 'bg-bg-light/50', delay: 0.8 }
        ].map((panel, i) => (
          <motion.div 
            key={i}
            className={`flex-1 ${panel.color} border-r border-primary/20 relative overflow-hidden flex items-end p-4`}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ delay: panel.delay, duration: 0.8, ease: "circOut" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '4vw 4vw' }}
            />
            {/* Abstract Silhouette */}
            <motion.div 
              className="w-[80%] h-[60%] bg-black mx-auto rounded-t-[50vw] opacity-80"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: panel.delay + 0.4, duration: 0.8 }}
            />
            <div className="absolute top-[2vh] left-[1vw] font-mono text-[1vw] text-accent bg-black/80 px-[1vw] py-[0.5vh]">
              CAM 0{i+1}
            </div>
            {i === 1 && (
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-mono font-bold text-[2vw] border-[0.2vw] border-primary px-[2vw] py-[1vw] rotate-12"
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
              >
                SIGNAL LOST
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="h-[15vh] bg-primary flex items-center justify-center relative overflow-hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-noise opacity-30" />
        <h2 className="font-display text-[6vw] text-bg-dark tracking-wide relative z-10">
          EMERGENCY SUMMIT CONVENED
        </h2>
      </motion.div>

    </motion.div>
  );
};
