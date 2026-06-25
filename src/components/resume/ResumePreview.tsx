import { Download, FileText } from "lucide-react";
import { resume } from "../../config/resume";
import { PixelFrame } from "../pixel/PixelFrame";

export function ResumePreview() {
  return (
    <PixelFrame className="sticky top-24 overflow-hidden shadow-glow">
      <div className="flex items-center justify-between gap-4 border-b border-trace/15 bg-panelSoft p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border-2 border-trace/30 bg-panel text-trace">
            <FileText aria-hidden="true" size={16} />
          </span>
          <div>
            <h3 className="font-black text-wafer">Resume Preview</h3>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{resume.filename}</p>
          </div>
        </div>
        <a
          className="focus-ring inline-flex items-center gap-1.5 border-2 border-solder bg-solder px-3 py-2 font-mono text-xs font-black text-ink transition hover:bg-trace"
          href={resume.pdfPath}
          download
        >
          <Download aria-hidden="true" size={14} />
          PDF
        </a>
      </div>
      <object
        className="h-[480px] w-full bg-wafer sm:h-[560px]"
        data={resume.pdfPath}
        type="application/pdf"
        aria-label="Resume PDF preview"
      >
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-muted">
          <p>PDF preview unavailable in this browser.</p>
          <a className="font-mono text-sm font-bold text-trace hover:text-solder" href={resume.pdfPath}>
            Open the resume PDF
          </a>
        </div>
      </object>
      <p className="border-t border-trace/10 bg-panelSoft/50 px-4 py-3 font-mono text-[10px] text-muted">
        Replace public/resume/{resume.filename} to update this preview.
      </p>
    </PixelFrame>
  );
}
