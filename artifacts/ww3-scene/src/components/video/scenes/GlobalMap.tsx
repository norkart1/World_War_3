import { motion } from 'framer-motion';

const countries = [
  { id: 'RU', label: 'RUSSIA', cx: 700, cy: 130, r: 28, color: '#CC2200', type: 'aggressor', delay: 0.2 },
  { id: 'CN', label: 'CHINA', cx: 760, cy: 210, r: 24, color: '#CC2200', type: 'aggressor', delay: 0.4 },
  { id: 'NK', label: 'NORTH KOREA', cx: 830, cy: 170, r: 14, color: '#CC2200', type: 'aggressor', delay: 0.6 },
  { id: 'IR', label: 'IRAN', cx: 595, cy: 235, r: 16, color: '#CC2200', type: 'aggressor', delay: 0.8 },
  { id: 'US', label: 'USA', cx: 180, cy: 175, r: 26, color: '#FF6B00', type: 'nato', delay: 0.3 },
  { id: 'EU', label: 'NATO/EUROPE', cx: 460, cy: 145, r: 22, color: '#FF6B00', type: 'nato', delay: 0.5 },
  { id: 'UK', label: 'UK', cx: 440, cy: 110, r: 14, color: '#FF6B00', type: 'nato', delay: 0.7 },
  { id: 'IN', label: 'INDIA', cx: 648, cy: 278, r: 18, color: '#3B82F6', type: 'allied', delay: 0.9 },
  { id: 'JP', label: 'JAPAN', cx: 845, cy: 165, r: 14, color: '#3B82F6', type: 'allied', delay: 1.0 },
  { id: 'SK', label: 'S.KOREA', cx: 820, cy: 205, r: 12, color: '#3B82F6', type: 'allied', delay: 1.1 },
  { id: 'AU', label: 'AUSTRALIA', cx: 815, cy: 430, r: 16, color: '#3B82F6', type: 'allied', delay: 1.2 },
  { id: 'IL', label: 'ISRAEL', cx: 548, cy: 228, r: 10, color: '#3B82F6', type: 'allied', delay: 1.3 },
  { id: 'PK', label: 'PAKISTAN', cx: 628, cy: 240, r: 12, color: '#9CA3AF', type: 'contested', delay: 1.4 },
  { id: 'TR', label: 'TURKEY', cx: 505, cy: 178, r: 12, color: '#FF6B00', type: 'nato', delay: 1.5 },
];

const connections = [
  { from: 'RU', to: 'CN', color: '#CC2200', dash: '0', delay: 1.5 },
  { from: 'RU', to: 'IR', color: '#CC2200', dash: '8 4', delay: 1.7 },
  { from: 'US', to: 'UK', color: '#FF6B00', dash: '0', delay: 1.6 },
  { from: 'US', to: 'EU', color: '#FF6B00', dash: '0', delay: 1.8 },
  { from: 'US', to: 'JP', color: '#3B82F6', dash: '8 4', delay: 2.0 },
  { from: 'US', to: 'SK', color: '#3B82F6', dash: '8 4', delay: 2.1 },
  { from: 'IN', to: 'PK', color: '#CC2200', dash: '4 4', delay: 2.2 },
  { from: 'IR', to: 'IL', color: '#CC2200', dash: '8 4', delay: 2.3 },
  { from: 'CN', to: 'NK', color: '#CC2200', dash: '8 4', delay: 2.4 },
];

export const GlobalMap = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10 overflow-hidden bg-bg-dark"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-accent/20" />
        ))}
      </div>

      <div className="absolute top-[4vh] left-[4vw] z-20 flex flex-col gap-[1vh]">
        <motion.div className="font-mono text-[1.5vw] text-accent" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5}}>
          ACTIVE CONFLICT ZONES: <span className="text-secondary font-bold">23</span>
        </motion.div>
        <motion.div className="font-mono text-[1.5vw] text-accent" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.7}}>
          NATIONS MOBILIZED: <span className="text-secondary font-bold">47</span>
        </motion.div>
        <motion.div 
          className="font-mono text-[1.5vw] text-primary font-bold"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          NUCLEAR ALERT: CRITICAL
        </motion.div>
      </div>

      <div className="absolute bottom-[4vh] left-[4vw] z-20 border border-secondary/30 bg-bg-light/80 p-[1.5vw] backdrop-blur-sm">
        <div className="font-mono text-[1.2vw] text-accent mb-[1vh] border-b border-secondary/30 pb-[0.5vh]">THREAT CLASSIFICATION</div>
        <div className="flex flex-col gap-[1vh] font-mono text-[1vw]">
          <div className="flex items-center gap-[1vw]"><div className="w-[1vw] h-[1vw] rounded-full bg-[#CC2200]" /> AGGRESSOR BLOC</div>
          <div className="flex items-center gap-[1vw]"><div className="w-[1vw] h-[1vw] rounded-full bg-[#FF6B00]" /> NATO COMMAND</div>
          <div className="flex items-center gap-[1vw]"><div className="w-[1vw] h-[1vw] rounded-full bg-[#3B82F6]" /> ALLIED FORCES</div>
          <div className="flex items-center gap-[1vw]"><div className="w-[1vw] h-[1vw] rounded-full bg-[#9CA3AF]" /> CONTESTED REGION</div>
        </div>
      </div>

      <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((conn, i) => {
          const fromNode = countries.find(c => c.id === conn.from);
          const toNode = countries.find(c => c.id === conn.to);
          if (!fromNode || !toNode) return null;
          return (
            <motion.line
              key={`conn-${i}`}
              x1={fromNode.cx}
              y1={fromNode.cy}
              x2={toNode.cx}
              y2={toNode.cy}
              stroke={conn.color}
              strokeWidth="2"
              strokeDasharray={conn.dash}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: conn.delay, ease: "easeInOut" }}
            />
          );
        })}

        {countries.map((c, i) => (
          <g key={c.id}>
            <motion.circle
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill="none"
              stroke={c.color}
              strokeWidth="2"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, delay: c.delay }}
            />
            <motion.circle
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill={`${c.color}33`}
              stroke={c.color}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: c.delay }}
            />
            <motion.text
              x={c.cx}
              y={c.cy + c.r + 15}
              fill={c.color}
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: c.delay + 0.5 }}
            >
              {c.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
};
