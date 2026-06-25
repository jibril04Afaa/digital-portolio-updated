type TagPillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function TagPill({ label, active = false, onClick }: TagPillProps) {
  const className = `focus-ring inline-flex min-h-9 items-center border-2 px-3 py-1 font-mono text-xs font-bold uppercase transition ${
    active
      ? "border-solder bg-solder text-ink"
      : "border-trace/40 bg-panelSoft text-trace hover:border-solder hover:text-solder"
  }`;

  if (onClick) {
    return (
      <button className={className} type="button" onClick={onClick} aria-pressed={active}>
        {label}
      </button>
    );
  }

  return <span className={className}>{label}</span>;
}
