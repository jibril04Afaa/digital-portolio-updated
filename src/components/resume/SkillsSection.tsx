import { resume } from "../../config/resume";
import { TagPill } from "../ui/TagPill";

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-solder">Toolbox</p>
        <h2 className="mt-2 text-2xl font-black text-wafer">Technical skills</h2>
        <p className="mt-2 text-sm text-muted">
          Firmware, hardware, Linux, and the software tools that support the full development cycle.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {resume.skills.map((skillGroup) => (
          <article
            className="pixel-corners border-2 border-trace/20 bg-panel/80 p-5 transition hover:border-trace/35"
            key={skillGroup.group}
          >
            <h3 className="mb-4 font-mono text-xs font-black uppercase tracking-wider text-solder">
              {skillGroup.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <TagPill key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
