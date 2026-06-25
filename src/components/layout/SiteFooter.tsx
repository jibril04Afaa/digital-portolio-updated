import { Mail } from "lucide-react";
import { CircuitStrip } from "../pixel/CircuitStrip";
import { ExternalLink } from "../ui/ExternalLink";
import { profile } from "../../config/profile";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-trace/15 bg-ink">
      <CircuitStrip />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black text-wafer">{profile.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{profile.roles.join(" · ")}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <ExternalLink href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={14} />
              {profile.email}
            </ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </div>
        </div>
        <div className="section-divider mt-8" aria-hidden="true" />
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. A firmware engineer&apos;s workshop.
        </p>
      </div>
    </footer>
  );
}
