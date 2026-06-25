import { motion } from "framer-motion";
import { Github } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "../app/routes";
import { CircuitStrip } from "../components/pixel/CircuitStrip";
import { PixelFrame } from "../components/pixel/PixelFrame";
import { Seo } from "../components/seo/Seo";
import { ExternalLink } from "../components/ui/ExternalLink";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { TagPill } from "../components/ui/TagPill";
import { projects } from "../config/projects";
import { slugToProject } from "../lib/filters";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slugToProject(projects, slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-wafer">Project not found</h1>
        <Link className="mt-6 inline-block font-mono font-bold text-trace" to={routes.projects}>
          Back to projects
        </Link>
      </section>
    );
  }

  const heroImage = project.images[0];

  return (
    <>
      <Seo title={project.title} description={project.description} image={heroImage.src} />
      <article>
        <header className="relative overflow-hidden bg-hero-radial">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[length:32px_32px] opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              className="focus-ring inline-flex font-mono text-sm font-black text-trace transition hover:text-solder"
              to={routes.projects}
            >
              ← Back to projects
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <h1 className="mt-4 text-3xl font-black leading-tight text-wafer sm:text-4xl lg:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-muted">{project.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <PixelFrame className="overflow-hidden shadow-glow">
                  <img className="aspect-[16/10] w-full object-cover" src={heroImage.src} alt={heroImage.alt} />
                </PixelFrame>
              </motion.div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <ScrollReveal>
            <DetailSection number="01" title="Overview">
              <p className="text-base leading-7 text-muted">{project.writeup}</p>
            </DetailSection>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <DetailSection number="02" title="Technologies Used">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <TagPill key={technology} label={technology} />
                ))}
              </div>
            </DetailSection>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DetailSection number="03" title="Architecture Diagram">
              <div className="space-y-6">
                {project.diagrams.map((diagram) => (
                  <PixelFrame className="overflow-hidden" key={diagram.src}>
                    <img className="aspect-video w-full object-cover" src={diagram.src} alt={diagram.alt} />
                    <p className="border-t border-trace/15 bg-panelSoft/50 p-4 text-sm leading-6 text-muted">
                      {diagram.caption}
                    </p>
                  </PixelFrame>
                ))}
              </div>
            </DetailSection>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <ProjectList number="04" title="Technical Challenges" items={project.technicalChallenges} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ProjectList number="05" title="Lessons Learned" items={project.lessonsLearned} accent="solder" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <section className="mt-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs font-black text-trace/60">06</span>
                <h2 className="font-mono text-sm font-black uppercase tracking-wider text-solder">
                  Repository
                </h2>
              </div>
              <PixelFrame className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-black text-wafer">Source code and documentation</p>
                  <p className="mt-1 text-sm text-muted">
                    Full implementation, build instructions, and architecture notes on GitHub.
                  </p>
                </div>
                <ExternalLink href={project.githubUrl}>
                  <Github aria-hidden="true" size={16} />
                  Open repository
                </ExternalLink>
              </PixelFrame>
            </section>
          </ScrollReveal>
        </div>

        <CircuitStrip />
      </article>
    </>
  );
}

function DetailSection({
  number,
  title,
  children
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs font-black text-trace/60">{number}</span>
        <h2 className="font-mono text-sm font-black uppercase tracking-wider text-solder">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProjectList({
  number,
  title,
  items,
  accent = "trace"
}: {
  number: string;
  title: string;
  items: string[];
  accent?: "trace" | "solder";
}) {
  const borderColor = accent === "solder" ? "border-solder/40" : "border-trace/40";

  return (
    <section className="pixel-corners h-full border-2 border-trace/20 bg-panel/80 p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs font-black text-trace/60">{number}</span>
        <h2 className="font-mono text-sm font-black uppercase tracking-wider text-solder">{title}</h2>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li className={`border-l-2 ${borderColor} pl-4 text-sm leading-6 text-muted`} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
