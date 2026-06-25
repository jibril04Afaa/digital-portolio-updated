import { Cpu, Layers, Terminal, Zap } from "lucide-react";
import { profile } from "../../config/profile";
import { PixelAvatar } from "../pixel/PixelAvatar";
import { PixelFrame } from "../pixel/PixelFrame";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Cpu, Layers, Terminal, Zap];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="about">
      <ScrollReveal>
        <SectionHeading
          eyebrow="About"
          title="Engineering curiosity, applied at the bench."
          description={profile.about.intro}
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
        <ScrollReveal delay={0.05}>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <PixelAvatar size="lg" />
            <div className="text-center lg:text-left">
              <p className="font-black text-wafer">{profile.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">{profile.location}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                <a
                  className="focus-ring font-mono text-xs font-bold text-trace transition hover:text-solder"
                  href={profile.social.tiktok.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.social.tiktok.handle}
                </a>
                <span className="text-muted" aria-hidden="true">
                  ·
                </span>
                <a
                  className="focus-ring font-mono text-xs font-bold text-copper transition hover:text-solder"
                  href={profile.social.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.social.instagram.handle}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              {profile.about.paragraphs.map((paragraph) => (
                <p className="text-base leading-7 text-muted" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.about.focusAreas.map((area, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <PixelFrame className="group p-4 transition hover:border-solder/50" key={area.label}>
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center border-2 border-trace/30 bg-panelSoft text-trace transition group-hover:border-solder group-hover:text-solder">
                        <Icon aria-hidden="true" size={16} />
                      </span>
                      <div>
                        <h3 className="font-mono text-sm font-black uppercase text-solder">{area.label}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted">{area.detail}</p>
                      </div>
                    </div>
                  </PixelFrame>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
