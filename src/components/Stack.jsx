const groups = [
  {
    name: "Frontend",
    items: [
      { slug: "react", name: "React", color: "61DAFB" },
      { slug: "vite", name: "Vite", color: "646CFF" },
      { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4" },
      { slug: "typescript", name: "TypeScript", color: "3178C6" },
    ],
  },
  {
    name: "Backend",
    items: [
      { slug: "nodedotjs", name: "Node.js", color: "339933" },
      { slug: "postgresql", name: "PostgreSQL", color: "4169E1" },
      { slug: "express", name: "Express", color: "F3F0FA" },
    ],
  },
  {
    name: "Herramientas",
    items: [
      { slug: "git", name: "Git", color: "F05032" },
      { slug: "figma", name: "Figma", color: "F24E1E" },
      { slug: "docker", name: "Docker", color: "2496ED" },
    ],
  },
];

function SkillRow({ s }) {
  return (
    <div
      className="skill-row flex items-center gap-4 py-3 border-t border-line first:border-t-0"
      style={{ "--brand": `#${s.color}` }}
    >
      <div className="skill-frame relative w-10 h-10 shrink-0 border border-line bg-bg grid place-items-center">
        <img
          src={`https://cdn.simpleicons.org/${s.slug}/9A93B0`}
          alt=""
          className="skill-icon-mono absolute w-[18px] h-[18px]"
          loading="lazy"
        />
        <img
          src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
          alt={s.name}
          className="skill-icon-color absolute w-[18px] h-[18px]"
          loading="lazy"
        />
      </div>
      <span className="skill-name font-disp text-[15px] text-ink">
        {s.name}
      </span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-line">
      <div className="flex justify-between items-end mb-14 gap-6 flex-wrap">
        <div>
          <div className="font-mono text-[13px] text-violet">
            03 — habilidades
          </div>
          <h2 className="font-disp font-semibold text-[26px] sm:text-[38px] mt-2 max-w-[520px]">
            Habilidades principales y frameworks.
          </h2>
        </div>
        <p className="text-inkdim max-w-[340px] text-[14.5px]">
          Tecnologías que uso a diario, agrupadas por área. Pasa el cursor sobre
          cada logo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {groups.map((g, i) => (
          <div
            key={g.name}
            className={`p-9 ${i % 2 === 1 ? "bg-surface" : "bg-bg"}`}
          >
            <h5 className="font-mono text-xs text-inkfaint mb-5 lowercase">
              {g.name}
            </h5>
            <div>
              {g.items.map((s) => (
                <SkillRow key={s.slug} s={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
