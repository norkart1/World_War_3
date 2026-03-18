import { motion } from 'framer-motion';

export const BreakingNews = () => {
  const titleText = "WORLD WAR III";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Alert border */}
      <motion.div 
        className="absolute inset-[2vw] border-[0.5vw] border-primary/50 z-0"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      
      {/* Target Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[80vw] h-[80vh] border border-primary/30 rounded-full border-dashed" />
        <div className="absolute w-[90vw] h-[1px] bg-primary/30" />
        <div className="absolute w-[1px] h-[90vh] bg-primary/30" />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.5 }
          }
        }}
      >
        <motion.div 
          className="bg-primary text-bg-dark px-[2vw] py-[0.5vw] mb-[3vh] font-mono text-[2vw] tracking-widest uppercase font-bold"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          BREAKING NEWS ALERT
        </motion.div>

        <div className="flex overflow-hidden">
          {titleText.split('').map((char, i) => (
            <motion.span
              key={i}
              className="font-display text-[15vw] leading-none text-primary text-glow drop-shadow-2xl"
              variants={{
                hidden: { y: 200, opacity: 0, rotateX: -90, scale: 0.5 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  rotateX: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 10 }
                }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          className="mt-[4vh] font-mono text-[2vw] text-accent tracking-[0.5em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          GLOBAL DEFENSE CONDITION: CRITICAL
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
