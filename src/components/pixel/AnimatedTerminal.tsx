import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type TerminalLine = {
  type: "command" | "output" | "success" | "info";
  text: string;
};

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "make flash TARGET=stm32" },
  { type: "output", text: "Building firmware image..." },
  { type: "output", text: "Flashing via SWD..." },
  { type: "success", text: "OK — firmware running on target" },
  { type: "command", text: "./diag --peripheral i2c" },
  { type: "output", text: "Scanning bus 0x48..." },
  { type: "success", text: "Sensor responding — status: ONLINE" }
];

const lineColors = {
  command: "text-solder",
  output: "text-muted",
  success: "text-trace",
  info: "text-wafer"
};

const pixelDot =
  "polygon(0 30%, 30% 30%, 30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%)";

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [typingText, setTypingText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const indexRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  }, []);

  const typeCommand = useCallback(
    (text: string, onComplete: () => void) => {
      setIsTyping(true);
      setTypingText("");
      let charIndex = 0;
      const interval = setInterval(() => {
        charIndex += 1;
        setTypingText(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setTypingText("");
          onComplete();
        }
      }, 38);
      timersRef.current.push(interval as unknown as ReturnType<typeof setTimeout>);
    },
    []
  );

  const runSequence = useCallback(() => {
    clearTimers();
    setVisibleLines([]);
    indexRef.current = 0;

    const processNext = () => {
      const line = terminalSequence[indexRef.current];
      if (!line) {
        schedule(() => runSequence(), 4000);
        return;
      }

      if (line.type === "command") {
        typeCommand(line.text, () => {
          setVisibleLines((prev) => [...prev, line]);
          indexRef.current += 1;
          schedule(processNext, 500);
        });
      } else {
        setVisibleLines((prev) => [...prev, line]);
        indexRef.current += 1;
        schedule(processNext, 400);
      }
    };

    schedule(processNext, 800);
  }, [clearTimers, schedule, typeCommand]);

  useEffect(() => {
    runSequence();
    return clearTimers;
  }, [runSequence, clearTimers]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-4 sm:bottom-4"
    >
      <div className="pixel-corners border-2 border-trace/30 bg-ink/92 p-3 shadow-inner-glow backdrop-blur-sm sm:p-4">
        <div className="mb-2 flex items-center gap-2 border-b border-trace/15 pb-2">
          <span className="h-2 w-2 bg-signal" style={{ clipPath: pixelDot }} aria-hidden="true" />
          <span className="h-2 w-2 bg-copper" style={{ clipPath: pixelDot }} aria-hidden="true" />
          <span className="h-2 w-2 bg-solder" style={{ clipPath: pixelDot }} aria-hidden="true" />
          <span className="ml-2 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
            firmware@workbench
          </span>
        </div>
        <div className="max-h-28 space-y-1 overflow-hidden font-mono text-[11px] leading-5 sm:max-h-32 sm:text-xs sm:leading-6" aria-live="polite">
          {visibleLines.map((line, i) => (
            <p className={lineColors[line.type]} key={`${line.text}-${i}`}>
              {line.type === "command" ? (
                <>
                  <span className="text-trace">$ </span>
                  {line.text}
                </>
              ) : (
                line.text
              )}
            </p>
          ))}
          {isTyping ? (
            <p className={lineColors.command}>
              <span className="text-trace">$ </span>
              {typingText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-solder`}>▊</span>
            </p>
          ) : (
            <p className="text-wafer">
              <span className="text-trace">$ </span>
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-solder`}>▊</span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
