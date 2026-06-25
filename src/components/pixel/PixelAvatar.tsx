import { motion } from "framer-motion";
import { profile } from "../../config/profile";

type PixelAvatarProps = {
  size?: "sm" | "md" | "lg";
  showOrbs?: boolean;
};

const sizeClasses = {
  sm: "h-24 w-24 sm:h-28 sm:w-28",
  md: "h-32 w-32 sm:h-36 sm:w-36",
  lg: "h-44 w-44 sm:h-52 sm:w-52"
};

const orbColors = ["bg-trace", "bg-solder", "bg-copper", "bg-signal"];

const floatingOrbs = [
  { color: 0, x: "-18%", y: "8%", delay: 0, duration: 3.2 },
  { color: 1, x: "92%", y: "-12%", delay: 0.4, duration: 3.8 },
  { color: 2, x: "-14%", y: "78%", delay: 0.8, duration: 4.1 },
  { color: 3, x: "88%", y: "72%", delay: 1.2, duration: 3.5 }
];

export function PixelAvatar({ size = "sm", showOrbs = true }: PixelAvatarProps) {
  return (
    <motion.div
      className="relative shrink-0"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.04, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
      {showOrbs
        ? floatingOrbs.map((orb, i) => (
            <motion.span
              key={i}
              className={`absolute h-2.5 w-2.5 ${orbColors[orb.color]} avatar-pixel-dot`}
              style={{ left: orb.x, top: orb.y }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
          ))
        : null}

      <div className="avatar-gradient-ring relative p-[3px]">
        <div className="pixel-corners relative overflow-hidden bg-ink p-1 shadow-glow">
          <img
            className={`${sizeClasses[size]} object-cover object-top`}
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={size === "lg" ? 208 : size === "md" ? 144 : 112}
            height={size === "lg" ? 208 : size === "md" ? 144 : 112}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-trace/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 avatar-scanline" aria-hidden="true" />
        </div>
      </div>

      <motion.span
        className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center border-2 border-ink bg-solder font-mono text-[8px] font-black text-ink"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        ✓
      </motion.span>
      </motion.div>
    </motion.div>
  );
}
