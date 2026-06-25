import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../app/routes";
import { profile } from "../../config/profile";
import { resume } from "../../config/resume";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: routes.projects },
  { label: "Resume", href: routes.resume },
  { label: "Content", href: "/#content" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-trace/15 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink className="focus-ring flex items-center gap-3" to={routes.home}>
          <span className="grid h-10 w-10 place-items-center border-2 border-trace bg-panel font-mono text-sm font-black text-solder shadow-pixel-sm transition hover:border-solder">
            JA
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black text-wafer">{profile.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
              Firmware · Embedded
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `focus-ring px-4 py-2 font-mono text-sm font-bold transition ${
                  isActive ? "text-solder" : "text-muted hover:text-trace"
                }`
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="focus-ring ml-2 inline-flex items-center gap-1.5 border-2 border-solder/60 bg-solder/10 px-3 py-1.5 font-mono text-xs font-black text-solder transition hover:bg-solder hover:text-ink"
            href={resume.pdfPath}
            download
          >
            <Download aria-hidden="true" size={14} />
            Resume
          </a>
        </nav>

        <button
          className="focus-ring grid h-10 w-10 place-items-center border-2 border-trace/40 bg-panelSoft text-trace lg:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-trace/15 bg-ink lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  className="focus-ring block rounded px-3 py-3 font-mono text-sm font-bold text-muted transition hover:bg-panelSoft hover:text-trace"
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                className="focus-ring mt-2 flex items-center gap-2 border-2 border-solder bg-solder px-4 py-3 font-mono text-sm font-black text-ink"
                href={resume.pdfPath}
                download
                onClick={() => setOpen(false)}
              >
                <Download aria-hidden="true" size={16} />
                Download Resume
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
