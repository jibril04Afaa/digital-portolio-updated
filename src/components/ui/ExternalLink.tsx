import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  return (
    <a
      className={`focus-ring inline-flex items-center gap-2 font-mono text-sm font-bold text-trace transition hover:text-solder ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
