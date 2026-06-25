import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1116",
        panel: "#171b22",
        panelSoft: "#202632",
        trace: "#7bdff2",
        solder: "#d9f99d",
        copper: "#f59e0b",
        signal: "#f97316",
        wafer: "#e8edf3",
        muted: "#aab4c3"
      },
      boxShadow: {
        pixel: "6px 6px 0 #0e1116",
        "pixel-sm": "4px 4px 0 #0e1116",
        glow: "0 0 0 1px rgba(123, 223, 242, 0.24), 0 24px 70px rgba(0, 0, 0, 0.28)",
        "glow-solder": "0 0 0 1px rgba(217, 249, 157, 0.2), 0 16px 48px rgba(0, 0, 0, 0.32)",
        "inner-glow": "inset 0 1px 0 rgba(123, 223, 242, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(123, 223, 242, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 223, 242, 0.06) 1px, transparent 1px)",
        "grid-dense":
          "linear-gradient(rgba(123, 223, 242, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 223, 242, 0.04) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(123, 223, 242, 0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(217, 249, 157, 0.06), transparent 50%)"
      },
      animation: {
        "circuit-pulse": "circuit-pulse 2.4s ease-in-out infinite",
        "circuit-flow": "circuit-flow 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.5s ease-out forwards"
      },
      keyframes: {
        "circuit-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" }
        },
        "circuit-flow": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      transitionTimingFunction: {
        workshop: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
} satisfies Config;
