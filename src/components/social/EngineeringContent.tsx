import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Music2, Play } from "lucide-react";
import { featuredContent, socialProfiles } from "../../config/social";
import { PixelFrame } from "../pixel/PixelFrame";
import { ExternalLink } from "../ui/ExternalLink";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TagPill } from "../ui/TagPill";

const icons = {
  TikTok: Music2,
  Instagram,
  GitHub: Github,
  LinkedIn: Linkedin
};

const platformColors: Record<string, string> = {
  TikTok: "text-signal",
  Instagram: "text-copper",
  GitHub: "text-trace",
  LinkedIn: "text-solder"
};

export function EngineeringContent() {
  return (
    <section className="border-t border-trace/10 bg-panel/20 py-20" id="content">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Engineering content"
            title="I teach what I'm building."
            description="Short-form videos, visual notes, and open-source repos — all focused on firmware, embedded Linux, and hardware integration."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialProfiles.map((profile, index) => {
            const Icon = icons[profile.label as keyof typeof icons];
            const color = platformColors[profile.label] ?? "text-trace";
            return (
              <ScrollReveal delay={index * 0.06} key={profile.label}>
                <PixelFrame className="group h-full p-5 transition hover:border-solder/50">
                  <Icon className={`mb-3 ${color}`} aria-hidden="true" size={22} />
                  <h3 className="font-black text-wafer">{profile.label}</h3>
                  <p className="mt-0.5 font-mono text-xs text-solder">{profile.handle}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{profile.description}</p>
                  <ExternalLink className="mt-4 text-xs" href={profile.url}>
                    Visit profile
                  </ExternalLink>
                </PixelFrame>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.1}>
          <h3 className="mt-16 font-mono text-sm font-black uppercase tracking-wider text-solder">
            Featured work
          </h3>
        </ScrollReveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredContent.map((item, index) => (
            <ScrollReveal delay={index * 0.05} key={item.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col border-2 border-trace/20 bg-ink/50 p-5 transition hover:border-trace/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[10px] font-black uppercase tracking-wider text-solder">
                    {item.platform}
                  </p>
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-trace/20 bg-panelSoft text-trace transition group-hover:border-solder group-hover:text-solder">
                    <Play aria-hidden="true" size={12} />
                  </span>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase text-muted">{item.metric}</p>
                <h4 className="mt-3 text-lg font-black leading-snug text-wafer group-hover:text-solder">
                  {item.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.focus.map((focus) => (
                    <TagPill key={focus} label={focus} />
                  ))}
                </div>
                <ExternalLink className="mt-5 text-xs" href={item.url}>
                  View content
                </ExternalLink>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
