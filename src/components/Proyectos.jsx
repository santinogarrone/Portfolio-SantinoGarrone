// Cada proyecto puede mostrarse de dos formas:
// 1) url: incrusta el sitio real en un iframe, con scroll propio del sitio.
// 2) preview: si aún no hay URL pública, se muestra un mock scrolleable.
// Reemplaza estos datos por tus proyectos reales.
import Reveal from "./Reveal";

const proyectos = [
  {
    cat: "e-commerce",
    year: "2026",
    title: "Página personal.",
    desc: "Página web para cliente con función personal, muestra de servicios y contacto.",
  },
  {
    cat: "sistema",
    year: "2025",
    title: "Estudio de abogados.",
    desc: "Página web profesional, aplicada a un estudio de abogados.",
    url: "",
  },
  {
    cat: "web",
    year: "2025",
    title: "Web para gimnasio.",
    desc: "Página web para mantener la presencia online de un gimnasio.",
    url: "https://gimnasio-landing-page.vercel.app/",
  },
];

function MockPreview() {
  return (
    <div className="demo-scroll h-full overflow-y-auto bg-[#0c0a13]">
      <div className="h-[220px] flex items-center px-8 bg-gradient-to-br from-surface2 to-bg border-b border-line">
        <div>
          <div className="h-3 w-40 bg-violet/30 mb-3" />
          <div className="h-6 w-64 bg-ink/20 mb-2" />
          <div className="h-6 w-48 bg-ink/10" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-28 border border-line bg-surface" />
        ))}
      </div>
      <div className="h-[180px] mx-8 mb-8 border border-line bg-surface" />
      <div className="h-[140px] border-t border-line flex items-center px-8 text-inkfaint text-xs font-mono">
        Sustituye este bloque por la URL real del proyecto (prop "url").
      </div>
    </div>
  );
}

function ProjectDemo({ p }) {
  return (
    <div className="border border-line bg-surface hover:border-violetdim transition-colors">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line">
        <div className="flex items-center gap-2">
          <span className="w-[9px] h-[9px] rounded-full bg-inkfaint/50" />
          <span className="w-[9px] h-[9px] rounded-full bg-inkfaint/50" />
          <span className="w-[9px] h-[9px] rounded-full bg-inkfaint/50" />
          <span className="ml-3 font-mono text-[11px] text-inkfaint">
            {p.url
              ? p.url.replace(/^https?:\/\//, "")
              : "vista previa · sin url aún"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11.5px] text-violet border border-violetdim px-[9px] py-1">
            {p.cat}
          </span>
          <span className="font-mono text-xs text-inkfaint">{p.year}</span>
        </div>
      </div>

      <div className="h-[460px]">
        {p.url ? (
          <iframe
            src={p.url}
            title={p.title}
            className="w-full h-full border-0"
            loading="lazy"
          />
        ) : (
          <MockPreview />
        )}
      </div>

      <div className="p-6">
        <h4 className="font-disp font-medium text-2xl">{p.title}</h4>
        <p className="text-inkdim text-[13.5px] mt-2">{p.desc}</p>
      </div>
    </div>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 border-t border-line">
      <div className="flex justify-between items-end mb-14 gap-6 flex-wrap">
        <div>
          <div className="font-mono text-[13px] text-violet">
            02 — proyectos
          </div>
          <h2 className="font-disp font-semibold text-[26px] sm:text-[38px] mt-2 max-w-[520px]">
            Trabajos recientes.
          </h2>
        </div>
        <p className="text-inkdim max-w-[340px] text-[14.5px]">
          Demo navegable de cada proyecto. Scrollea dentro del recuadro para ver
          el sitio completo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {proyectos.map((p, i) => (
          <Reveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
            <ProjectDemo p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
