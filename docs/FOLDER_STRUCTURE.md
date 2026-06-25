# Folder Structure

```text
public/
  resume/                Resume PDF replacement target
  assets/
    pixel/               Brand-level pixel art
    projects/            Project images and diagrams
src/
  app/                   App shell and routes
  components/
    layout/              Header and footer
    pixel/               Pixel-art presentation primitives
    projects/            Project cards and filters
    resume/              Resume preview, education, skills
    seo/                 Document metadata component
    social/              Engineering content section
    ui/                  Reusable small UI primitives
  config/                Editable content and SEO config
  data/                  Shared static data such as tag lists
  lib/                   Filtering and metadata helpers
  pages/                 Route-level pages
  styles/                Tailwind entry and global CSS
  types/                 Shared TypeScript contracts
docs/                    Deployment, accessibility, performance, and structure docs
```

## Content Ownership

- Add projects in `src/config/projects.ts`.
- Edit social links and featured posts in `src/config/social.ts`.
- Edit resume metadata, education, and skills in `src/config/resume.ts`.
- Replace pixel and project assets in `public/assets`.
