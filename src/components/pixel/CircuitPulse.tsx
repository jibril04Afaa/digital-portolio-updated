import { motion } from "framer-motion";

type CircuitPulseProps = {
  className?: string;
};

export function CircuitPulse({ className = "" }: CircuitPulseProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
        <motion.path
          d="M 0 150 L 80 150 L 80 80 L 160 80 L 160 220 L 240 220 L 240 150 L 320 150 L 320 100 L 400 100"
          fill="none"
          stroke="rgba(123, 223, 242, 0.15)"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 0 200 L 60 200 L 60 260 L 140 260 L 140 180 L 220 180 L 220 240 L 300 240 L 300 200 L 400 200"
          fill="none"
          stroke="rgba(217, 249, 157, 0.1)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {[
        { top: "18%", left: "12%", delay: 0 },
        { top: "42%", left: "78%", delay: 0.8 },
        { top: "72%", left: "35%", delay: 1.6 },
        { top: "28%", left: "55%", delay: 2.2 }
      ].map((node) => (
        <motion.span
          key={`${node.top}-${node.left}`}
          className="absolute h-2 w-2 bg-trace"
          style={{
            top: node.top,
            left: node.left,
            clipPath:
              "polygon(0 25%, 25% 25%, 25% 0, 75% 0, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0 75%)"
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
