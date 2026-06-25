import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  to: string;
  href?: never;
  download?: never;
};

type ButtonAsAnchor = ButtonBaseProps & {
  href: string;
  to?: never;
  download?: boolean;
};

type ButtonAsButton = ButtonBaseProps & {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-solder bg-solder text-ink shadow-pixel hover:bg-trace hover:border-trace hover:shadow-glow",
  secondary:
    "border-trace/40 bg-panel text-trace hover:border-solder hover:text-solder hover:shadow-pixel-sm",
  ghost: "border-transparent bg-transparent text-muted hover:text-trace hover:border-trace/30"
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 border-2 px-5 py-3 font-mono text-sm font-black transition-all duration-200";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link className={classes} to={props.to}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const isMailto = props.href.startsWith("mailto:");
    return (
      <a
        className={classes}
        href={props.href}
        download={props.download}
        target={isMailto || props.download ? undefined : "_blank"}
        rel={isMailto || props.download ? undefined : "noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={props.type ?? "button"} onClick={props.onClick}>
      {children}
    </button>
  );
}
