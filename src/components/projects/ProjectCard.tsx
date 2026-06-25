import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../../app/routes";
import type { Project } from "../../types/project";
import { PixelFrame } from "../pixel/PixelFrame";
import { TagPill } from "../ui/TagPill";

type ProjectCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
};

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const primaryImage = project.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <PixelFrame className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-solder/60 hover:shadow-glow-solder">
        <Link className="focus-ring relative block overflow-hidden" to={routes.project(project.slug)}>
          <img
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            src={primaryImage.src}
            alt={primaryImage.alt}
            loading="lazy"
          />
          {featured ? (
            <span className="absolute left-3 top-3 border-2 border-solder bg-ink/90 px-2 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-solder backdrop-blur-sm">
              Featured
            </span>
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex flex-wrap gap-2" aria-label={`${project.title} categories`}>
            {project.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-black text-wafer transition group-hover:text-solder sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.description}</p>
          </div>

          <p className="border-t border-trace/10 pt-4 font-mono text-[10px] font-medium uppercase tracking-wide text-trace/70" aria-label={`${project.title} technologies`}>
            {project.technologies.slice(0, 5).join(" · ")}
            {project.technologies.length > 5 ? ` · +${project.technologies.length - 5}` : ""}
          </p>

          <div className="flex items-center justify-between gap-3 pt-1">
            <Link
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-sm font-bold text-trace transition hover:text-solder"
              to={routes.project(project.slug)}
            >
              Read write-up
              <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <a
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs font-bold text-muted transition hover:text-trace"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github aria-hidden="true" size={14} />
              Repo
            </a>
          </div>
        </div>
      </PixelFrame>
    </motion.article>
  );
}
