import type { ReactNode } from "react";

type PixelFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PixelFrame({ children, className = "" }: PixelFrameProps) {
  return (
    <div className={`pixel-corners pixel-border bg-panel/95 ${className}`}>
      {children}
    </div>
  );
}
