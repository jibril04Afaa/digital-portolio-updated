# Performance Optimization Notes

- Vite provides fast local development and optimized production bundles.
- Static SVG placeholder assets keep the first version lightweight.
- Project card images use lazy loading.
- Framer Motion animations are short and viewport-triggered.
- The app avoids runtime content fetching, so pages render from local TypeScript config.
- Tailwind removes unused CSS during production builds through the configured content paths.

## Future Improvements

- Replace SVG placeholders with optimized WebP or AVIF images for real project photos.
- Add a generated sitemap when the production URL is final.
- Use route-level code splitting if the project list grows significantly.
- Audit with Lighthouse after real project media is added.
