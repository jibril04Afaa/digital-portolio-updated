import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../app/routes";
import { AboutSection } from "../components/home/AboutSection";
import { HeroSection } from "../components/home/HeroSection";
import { EngineeringContent } from "../components/social/EngineeringContent";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Seo } from "../components/seo/Seo";
import { ExternalLink } from "../components/ui/ExternalLink";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../config/profile";
import { projects } from "../config/projects";

export function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <Seo />
      <HeroSection />
      <AboutSection />

      <section className="bg-panel/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Projects"
              title="Real firmware. Real hardware. Real tradeoffs."
              description="Each project includes architecture notes, technical challenges, and lessons from actually building and debugging the system."
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} featured />
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                className="focus-ring inline-flex items-center gap-2 font-mono text-sm font-black text-trace transition hover:text-solder"
                to={routes.projects}
              >
                Browse all projects
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <ExternalLink href={profile.github}>
                <Github aria-hidden="true" size={16} />
                View on GitHub
              </ExternalLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-4 md:grid-cols-3">
              {profile.highlights.map((highlight) => (
                <div
                  className="pixel-corners border-2 border-trace/20 bg-panel/60 p-5 transition hover:border-trace/40"
                  key={highlight}
                >
                  <p className="font-mono text-sm font-bold leading-6 text-wafer">{highlight}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <EngineeringContent />
    </>
  );
}
