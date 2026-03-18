import { motion } from 'framer-motion';

export const UncertainFuture = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-10 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(50px)' }}
      transition={{ duration: 2 }}
    >
      <div className="relative">
        <motion.div
          className="font-display text-[25vw] leading-none text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 1, filter: 'blur(0px)' }}
          animate={{ opacity: 0, filter: 'blur(40px)', scale: 1.2 }}
          transition={{ duration: 4, delay: 1 }}
        >
          WAR
        </motion.div>

        <motion.div
          className="font-display text-[15vw] leading-none text-accent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 4, delay: 4 }}
        >
          PEACE?
        </motion.div>
      </div>

      {/* Slow pulsing vignette */}
      <motion.div 
        className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10vw_rgba(0,0,0,1)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </motion.div>
  );
};
