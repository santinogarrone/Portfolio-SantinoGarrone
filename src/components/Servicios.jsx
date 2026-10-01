import { useEffect, useRef, useState } from "react";
import webImage from "../assets/web.png";
import sistemasImage from "../assets/sistemas.png";
import automatizacionImage from "../assets/automatizaciones.jpg";

const slides = [
  {
    title: "Páginas web",
    badge: "web",
    text: "Sitios rápidos, responsive y pensados para convertir visitas en clientes.",
    image: webImage,
    items: [
      { label: "Landing de producto o servicio" },
      { label: "Web corporativa multi-página" },
      { label: "Tienda online", time: "3–4 sem" },
      { label: "Migración y rediseño" },
    ],
  },
  {
    title: "Sistemas a medida",
    badge: "sistemas",
    text: "Herramientas internas para gestionar lo que hoy haces a mano o en Excel.",
    image: sistemasImage,
    items: [
      { label: "Gestión de stock y pedidos" },
      { label: "Paneles de administración" },
      { label: "Integraciones y automatizaciones" },
    ],
  },
  {
    title: "Automatizaciones",
    badge: "automatizaciones",
    text: "Conecto tus herramientas para eliminar tareas repetitivas y agilizar tus procesos.",
    image: automatizacionImage,
    items: [
      { label: "Flujos automáticos entre aplicaciones" },
      { label: "Notificaciones y tareas programadas" },
      { label: "Sincronización de datos" },
      { label: "Procesos de aprobación" },
    ],
  },
];

const N = slides.length;
const BASE_TOP = 220; // px: donde queda la primera tarjeta dentro del bloque fijo
const STEP = 56; // px que asoma la cabecera de la tarjeta anterior
const VH_PER_STEP = 90; // scroll (en vh) que dura cada transición
const FINAL_HOLD_VH = 18;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function Servicios() {
  const outerRef = useRef(null);
  // g va de 0 a N-1. Cuando g pasa de i-1 a i, la tarjeta i entra y tapa a la i-1.
  const [g, setG] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = outerRef.current;
      if (!el) return;
      const scrolled = -el.getBoundingClientRect().top;
      const scrollPerSlide = window.innerHeight * (VH_PER_STEP / 100);
      const next = clamp(scrolled / scrollPerSlide, 0, N - 1);
      setG((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="servicios" className="border-t border-line">
      {/* Recorrido de scroll: mientras dura, el bloque de dentro queda fijo */}
      <div
        ref={outerRef}
        style={{
          height: `calc(100vh + ${(N - 1) * VH_PER_STEP + FINAL_HOLD_VH}vh)`,
        }}
      >
        <div
          className="sticky top-0 overflow-hidden pt-24"
          style={{ height: "100vh" }}
        >
          <div className="font-ui text-[17px] text-violet">01 — servicios</div>
          <h2 className="font-disp font-semibold text-[22px] sm:text-[28px] lg:text-[38px] mt-2">
            Las formas de trabajar juntos.
          </h2>

          {slides.map((s, i) => {
            const entering = i === 0 ? 1 : clamp(g - (i - 1), 0, 1);
            const leaving = i === N - 1 ? 0 : clamp(g - i, 0, 1);
            const scale = (0.95 + 0.05 * entering) * (1 - 0.06 * leaving);

            return (
              <article
                key={s.title}
                className="absolute left-0 right-0 border border-line bg-surface overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.75)] will-change-transform"
                style={{
                  top: BASE_TOP + i * STEP,
                  zIndex: i + 1,
                  transform: `translateY(${(1 - entering) * 110}vh) scale(${scale})`,
                  transformOrigin: "center top",
                  filter: `blur(${4 * leaving}px) brightness(${1 - 0.5 * leaving})`,
                }}
              >
                <header
                  className="flex items-center justify-between border-b border-line px-5"
                  style={{ height: STEP }}
                >
                  <div className="flex items-center gap-3 font-mono text-sm">
                    <span className="h-2 w-2 rounded-full bg-violet" />
                    {s.title}
                  </div>
                  <span className="font-mono text-[11px] text-violet border border-line px-2 py-1">
                    {s.badge}
                  </span>
                </header>

                <div className="grid md:grid-cols-2 gap-8 p-8 min-h-[380px]">
                  <div className="relative min-h-[200px] border border-line bg-bg overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain object-center p-4"
                    />
                  </div>

                  <div className="pt-12">
                    <h3 className="font-ui font-semibold text-2xl mb-4">
                      {s.title}
                    </h3>
                    <p className="text-inkdim text-[15px] mb-7 max-w-[380px]">
                      {s.text}
                    </p>
                    <ul>
                      {s.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex justify-between gap-5 text-[14.5px] py-3 border-t border-line last:border-b"
                        >
                          <span>{item.label}</span>
                          <b className="font-mono text-xs font-normal text-inkfaint whitespace-nowrap">
                            {item.time}
                          </b>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
