import { motion } from "framer-motion";
import { AnimatedTerminal } from "./AnimatedTerminal";
import { CircuitPulse } from "./CircuitPulse";

export function WorkshopScene() {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="pixel-corners pixel-border relative overflow-hidden bg-panel shadow-glow">
        <CircuitPulse />
        <img
          className="relative z-[1] h-full min-h-72 w-full object-cover image-rendering-pixelated sm:min-h-80"
          src="/assets/pixel/workshop-scene.svg"
          alt="Pixel-art engineering workstation with monitors, oscilloscope, and circuit boards"
        />
        <AnimatedTerminal />

        <div className="absolute right-3 top-3 z-10 hidden sm:block">
          <div className="pixel-corners border border-trace/30 bg-ink/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-solder">
              ● Bench online
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
