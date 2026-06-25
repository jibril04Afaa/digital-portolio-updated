type StatusIndicatorProps = {
  label: string;
  status?: "online" | "busy" | "idle";
};

const statusColors = {
  online: "bg-solder shadow-[0_0_8px_rgba(217,249,157,0.6)]",
  busy: "bg-signal shadow-[0_0_8px_rgba(249,115,22,0.5)]",
  idle: "bg-trace shadow-[0_0_8px_rgba(123,223,242,0.5)]"
};

export function StatusIndicator({ label, status = "online" }: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-muted">
      <span
        className={`h-2 w-2 animate-circuit-pulse ${statusColors[status]}`}
        style={{ clipPath: "polygon(0 25%, 25% 25%, 25% 0, 75% 0, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0 75%)" }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
