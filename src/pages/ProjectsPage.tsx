import { useMemo, useState } from "react";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { Seo } from "../components/seo/Seo";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../config/projects";
import { filterProjects } from "../lib/filters";
import type { ProjectTag } from "../types/project";

export function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<ProjectTag[]>([]);

  const visibleProjects = useMemo(
    () => filterProjects(projects, query, activeTags),
    [query, activeTags]
  );

  function toggleTag(tag: ProjectTag) {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]
    );
  }

  return (
    <>
      <Seo
        title="Projects"
        description="Firmware, embedded Linux, robotics, electronics, tools, and software projects by Jibril Afaa."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Built, debugged, and documented."
            description="Filter by discipline or search by keyword. Every project page follows the same structure — overview, architecture, challenges, and lessons."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <div className="mt-8">
            <ProjectFilters
              query={query}
              activeTags={activeTags}
              onQueryChange={setQuery}
              onToggleTag={toggleTag}
              onClear={() => {
                setQuery("");
                setActiveTags([]);
              }}
            />
          </div>
        </ScrollReveal>
        <p className="mt-6 font-mono text-xs text-muted" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        {visibleProjects.length === 0 ? (
          <div className="mt-10 pixel-corners border-2 border-trace/25 bg-panel p-8 text-center text-muted">
            No projects match those filters. Try clearing the search or tags.
          </div>
        ) : null}
      </section>
    </>
  );
}
