import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { BreakingNews } from './scenes/BreakingNews';
import { GlobalMap } from './scenes/GlobalMap';
import { NuclearTracker } from './scenes/NuclearTracker';
import { MilitaryAssets } from './scenes/MilitaryAssets';
import { CityInFlames } from './scenes/CityInFlames';
import { WarFootage } from './scenes/WarFootage';
import { WarRoom } from './scenes/WarRoom';
import { GlobalResponse } from './scenes/GlobalResponse';
import { UncertainFuture } from './scenes/UncertainFuture';
import { LeadersInterview } from './scenes/LeadersInterview';

const SCENE_DURATIONS = {
  breaking: 8000,
  map: 9000,
  nuclear: 11000,
  military: 9000,
  city: 10000,
  footage: 14000,
  warroom: 9000,
  leaders: 12000,
  response: 8000,
  future: 9000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: true
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="absolute inset-0 bg-noise z-[1]" />

      {/* Persistent Background Elements - Outide AnimatePresence */}
      <motion.div 
        className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] pointer-events-none z-[0] mix-blend-screen opacity-20"
        animate={{
          x: currentScene === 0 ? '-20vw' : currentScene === 3 ? '50vw' : currentScene === 6 ? '-10vw' : currentScene === 7 ? '0vw' : '10vw',
          y: currentScene === 1 ? '50vh' : currentScene === 4 ? '-20vh' : currentScene === 7 ? '0vh' : '20vh',
          backgroundColor: currentScene === 4 ? '#FF6B00' : currentScene === 7 ? '#3B82F6' : '#CC2200',
          scale: currentScene === 9 ? 0.2 : 1
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        {currentScene === 0 && <BreakingNews key="breaking" />}
        {currentScene === 1 && <GlobalMap key="map" />}
        {currentScene === 2 && <NuclearTracker key="nuclear" />}
        {currentScene === 3 && <MilitaryAssets key="military" />}
        {currentScene === 4 && <CityInFlames key="city" />}
        {currentScene === 5 && <WarFootage key="footage" />}
        {currentScene === 6 && <WarRoom key="warroom" />}
        {currentScene === 7 && <LeadersInterview key="leaders" />}
        {currentScene === 8 && <GlobalResponse key="response" />}
        {currentScene === 9 && <UncertainFuture key="future" />}
      </AnimatePresence>

      {/* Persistent Ticker */}
      <div className="absolute bottom-0 w-full h-[6vh] bg-primary text-bg-dark flex items-center overflow-hidden z-50 shadow-[0_-5px_20px_rgba(204,34,0,0.5)]">
        <div className="bg-bg-dark text-primary h-full flex items-center px-[2vw] font-bold font-mono tracking-widest z-10 border-r-2 border-bg-dark text-[1.5vw]">
          LIVE
        </div>
        <motion.div 
          className="whitespace-nowrap font-mono text-[1.5vw] tracking-wider flex-1 ml-[2vw]"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          // GLOBAL MOBILIZATION REACHES 85% // NUCLEAR LAUNCH DETECTED — 8 MISSILES INBOUND // ICBM TRACK CONFIRMED OVER ARCTIC // MISSILE DEFENSE SYSTEMS OVERWHELMED // DEFCON 1 DECLARED ALL NATO NATIONS // EVACUATION ORDERS ISSUED 47 CITIES // RAW WAR FOOTAGE RELEASED BY PENTAGON // CLASSIFIED COMBAT RECORDINGS DECLASSIFIED // CYBER ATTACKS KNOCK OUT MAJOR POWER GRIDS IN EU AND US // UN SECURITY COUNCIL MEETING EVACUATED // MARTIAL LAW DECLARED IN 14 NATIONS // STRATEGIC RESERVE ACTIVATED // MARKETS HALTED INDEFINITELY // BORDER CROSSINGS SEALED // COMMUNICATION LINES DISRUPTED ACROSS PACIFIC // WORLD LEADERS HOLD EMERGENCY SUMMIT // PRESIDENTS AND PMs ADDRESS THEIR NATIONS LIVE // EMERGENCY PARLIAMENT SESSIONS CALLED IN 22 COUNTRIES // DEFENSE READINESS CONDITION CRITICAL //
        </motion.div>
      </div>
    </div>
  );
}
