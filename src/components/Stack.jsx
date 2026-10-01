const groups = [
  {
    name: "Frontend",
    items: [
      { slug: "react", name: "React" },
      { slug: "vite", name: "Vite" },
      { slug: "tailwindcss", name: "Tailwind CSS" },
      { slug: "typescript", name: "TypeScript" },
    ],
  },
  {
    name: "Backend",
    items: [
      {
        slug: "csharp",
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
      },
      { slug: "dotnet", name: "ASP.NET" },
      { slug: "nodedotjs", name: "Node.js" },
    ],
  },
  {
    name: "Herramientas",
    items: [
      { slug: "git", name: "Git" },
      { slug: "figma", name: "Figma" },
      { slug: "docker", name: "Docker" },
    ],
  },
];

function SkillRow({ s }) {
  return (
    <div className="skill-row flex items-center gap-4 py-3 border-t border-line first:border-t-0">
      <div className="skill-frame relative w-10 h-10 shrink-0 border border-line bg-bg grid place-items-center">
        <img
          src={s.icon ?? `https://cdn.simpleicons.org/${s.slug}/00D2FF`}
          alt={s.name}
          className={`skill-icon-mono absolute w-[18px] h-[18px] ${
            s.slug === "csharp" ? "skill-icon-celeste" : ""
          }`}
          loading="lazy"
        />
      </div>
      <span className="skill-name font-ui text-[15px] text-ink">{s.name}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-line">
      <div className="flex justify-between items-end mb-14 gap-6 flex-wrap">
        <div>
          <div className="font-ui text-[17px] text-violet">
            03 — habilidades
          </div>
          <h2 className="font-disp font-semibold text-[14px] sm:text-[20px] md:text-[28px] xl:text-[38px] mt-2 whitespace-nowrap">
            Habilidades y frameworks principales.
          </h2>
        </div>
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
