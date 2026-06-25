# Jibril Afaa Embedded Systems Portfolio

Production-oriented personal portfolio for an embedded systems and firmware engineer. The site is built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive mobile-first layout
- Config-driven project system in `src/config/projects.ts`
- Search and category filtering for projects
- Project detail pages with overview, technologies, diagrams, challenges, lessons, and GitHub links
- Resume page with PDF preview and download
- Resume replacement through `public/resume/Jibril_Resume.pdf`
- Engineering content section managed from `src/config/social.ts`
- Pixel-art branding assets in `public/assets`
- SEO metadata and accessible navigation patterns

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add a Project

Edit `src/config/projects.ts` and add one object to the `projects` array:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "One-sentence value summary.",
  tags: ["Firmware", "Tools"],
  technologies: ["C", "UART", "Unit tests"],
  githubUrl: "https://github.com/username/repo",
  images: [{ src: "/assets/projects/my-project.svg", alt: "Project image description" }],
  diagrams: [{ src: "/assets/projects/architecture-placeholder.svg", alt: "Architecture diagram", caption: "Short diagram caption." }],
  lessonsLearned: ["Keep it short and specific."],
  technicalChallenges: ["Name real engineering tradeoffs."],
  writeup: "A concise explanation visitors can scan quickly."
}
```

No component changes are required.

## Replace Resume

Drop the new PDF into `public/resume/` and keep the filename as `Jibril_Resume.pdf`. If you want a different filename, update `src/config/resume.ts`.

## Documentation

- `docs/DEPLOYMENT.md`
- `docs/ACCESSIBILITY.md`
- `docs/FOLDER_STRUCTURE.md`
- `docs/PERFORMANCE.md`
