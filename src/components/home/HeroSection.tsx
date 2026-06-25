import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { routes } from "../../app/routes";
import { profile } from "../../config/profile";
import { resume } from "../../config/resume";
import { PixelAvatar } from "../pixel/PixelAvatar";
import { WorkshopScene } from "../pixel/WorkshopScene";
import { Button } from "../ui/Button";
import { StatusIndicator } from "../ui/StatusIndicator";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[length:32px_32px] opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={item} className="mb-6 flex items-center gap-5">
              <PixelAvatar size="md" />
              <StatusIndicator label={profile.availability} status="online" />
            </motion.div>

            <motion.div variants={item} className="space-y-1">
              {profile.roles.map((role) => (
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-trace sm:text-sm" key={role}>
                  {role}
                </p>
              ))}
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-wafer sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {profile.personalStatement}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to={routes.projects}>
                View Projects
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={resume.pdfPath} download variant="secondary">
                <Download aria-hidden="true" size={18} />
                Download Resume
              </Button>
              <Button href={`mailto:${profile.email}`} variant="secondary">
                <Mail aria-hidden="true" size={18} />
                Contact
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <WorkshopScene />
          </motion.div>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
