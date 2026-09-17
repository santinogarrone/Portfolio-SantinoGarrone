const webItems = [
  { label: "Landing de producto o servicio", time: "1–2 sem" },
  { label: "Web corporativa multi-página", time: "2–3 sem" },
  { label: "Tienda online", time: "3–4 sem" },
  { label: "Migración y rediseño", time: "1–2 sem" },
];

const sysItems = [
  { label: "Gestión de stock y pedidos", time: "a medida" },
  { label: "Paneles de administración", time: "a medida" },
  { label: "Integraciones y automatizaciones", time: "a medida" },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 border-t border-line">
      <div className="flex justify-between items-end mb-14 gap-6 flex-wrap">
        <div>
          <div className="font-mono text-[13px] text-violet">01 — servicios</div>
          <h2 className="font-disp font-semibold text-[26px] sm:text-[38px] mt-2 max-w-[520px]">
            Dos formas de trabajar juntos.
          </h2>
        </div>
        <p className="text-inkdim max-w-[340px] text-[14.5px]">
          Elige según lo que necesitas: presencia online o un sistema que resuelva un proceso interno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-px bg-line border border-line">
        <div className="bg-bg p-11">
          <h3 className="font-disp font-semibold text-2xl mb-4">Páginas web</h3>
          <p className="text-inkdim text-[15px] mb-7 max-w-[380px]">
            Sitios rápidos, responsive y pensados para convertir visitas en clientes.
          </p>
          <ul>
            {webItems.map((item, i) => (
              <li
                key={i}
                className="flex justify-between gap-5 text-[14.5px] py-3 border-t border-line last:border-b"
              >
                <span>{item.label}</span>
                <b className="font-mono text-xs font-normal text-inkfaint whitespace-nowrap">{item.time}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface p-11">
          <h3 className="font-disp font-semibold text-2xl mb-4">Sistemas a medida</h3>
          <p className="text-inkdim text-[15px] mb-7 max-w-[380px]">
            Herramientas internas para gestionar lo que hoy haces a mano o en Excel.
          </p>
          <ul>
            {sysItems.map((item, i) => (
              <li
                key={i}
                className="flex justify-between gap-5 text-[14.5px] py-3 border-t border-line last:border-b"
              >
                <span>{item.label}</span>
                <b className="font-mono text-xs font-normal text-inkfaint whitespace-nowrap">{item.time}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
