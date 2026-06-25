import { Download } from "lucide-react";
import { EducationSection } from "../components/resume/EducationSection";
import { ResumePreview } from "../components/resume/ResumePreview";
import { SkillsSection } from "../components/resume/SkillsSection";
import { Seo } from "../components/seo/Seo";
import { Button } from "../components/ui/Button";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { resume } from "../config/resume";

export function ResumePage() {
  return (
    <>
      <Seo title="Resume" description="Resume, education, and skills for Jibril Afaa." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-solder">Resume</p>
            <h1 className="mt-3 text-3xl font-black text-wafer sm:text-4xl lg:text-5xl">
              Firmware engineer, ready to ship.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">{resume.summary}</p>
            <Button href={resume.pdfPath} download className="mt-6">
              <Download aria-hidden="true" size={18} />
              Download Resume
            </Button>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-12">
            <ScrollReveal delay={0.05}>
              <EducationSection />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <SkillsSection />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <ResumePreview />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
