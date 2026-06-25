import { Search, X } from "lucide-react";
import { projectTags } from "../../data/projectTags";
import type { ProjectTag } from "../../types/project";
import { TagPill } from "../ui/TagPill";

type ProjectFiltersProps = {
  query: string;
  activeTags: ProjectTag[];
  onQueryChange: (query: string) => void;
  onToggleTag: (tag: ProjectTag) => void;
  onClear: () => void;
};

export function ProjectFilters({
  query,
  activeTags,
  onQueryChange,
  onToggleTag,
  onClear
}: ProjectFiltersProps) {
  return (
    <section className="pixel-corners border-2 border-trace/30 bg-panel/86 p-4 shadow-glow" aria-label="Project filters">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" size={18} />
        <label className="sr-only" htmlFor="project-search">
          Search projects
        </label>
        <input
          id="project-search"
          className="focus-ring w-full border-2 border-trace/30 bg-ink py-3 pl-11 pr-4 font-mono text-sm text-wafer placeholder:text-muted"
          type="search"
          value={query}
          placeholder="Search firmware, Linux, robotics..."
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {projectTags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={activeTags.includes(tag)}
            onClick={() => onToggleTag(tag)}
          />
        ))}
      </div>

      {query || activeTags.length > 0 ? (
        <button
          className="focus-ring mt-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-muted transition hover:text-trace"
          type="button"
          onClick={onClear}
        >
          <X aria-hidden="true" size={16} />
          Clear filters
        </button>
      ) : null}
    </section>
  );
}
