import { resume } from "../../config/resume";

export function EducationSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-solder">Education</p>
        <h2 className="mt-2 text-2xl font-black text-wafer">Academic foundation</h2>
      </div>
      <div className="grid gap-4">
        {resume.education.map((item) => (
          <article
            className="pixel-corners border-l-4 border-trace bg-panel/70 p-5 transition hover:border-solder"
            key={item.school}
          >
            <h3 className="text-lg font-black text-wafer">{item.school}</h3>
            <p className="mt-1 font-semibold text-solder">{item.credential}</p>
            <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {item.notes.map((note) => (
                <li className="flex gap-2" key={note}>
                  <span className="mt-2 h-1 w-1 shrink-0 bg-trace" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
