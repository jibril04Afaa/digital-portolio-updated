import type { Project, ProjectTag } from "../types/project";

export function filterProjects(projects: Project[], query: string, activeTags: ProjectTag[]) {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [project.title, project.description, project.writeup, ...project.technologies, ...project.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesTags =
      activeTags.length === 0 || activeTags.every((tag) => project.tags.includes(tag));

    return matchesQuery && matchesTags;
  });
}

export function slugToProject(projects: Project[], slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
