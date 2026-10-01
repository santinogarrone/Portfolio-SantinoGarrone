import { useEffect, useState } from "react";

const frases = [
  "Desarrollador full stack.",
  "SQL Server - ASP.NET - C#.",
  "React - Tailwind - TypeScript.",
];

export default function Hero() {
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [textoVisible, setTextoVisible] = useState("");
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    const fraseActual = frases[indiceFrase];
    const movimientoReducido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (movimientoReducido) {
      setTextoVisible(fraseActual);
      return;
    }

    const fraseCompleta = textoVisible.length === fraseActual.length;
    const demora = borrando ? 35 : fraseCompleta ? 1500 : 65;
    const temporizador = window.setTimeout(() => {
      if (borrando) {
        if (textoVisible.length === 0) {
          setBorrando(false);
          setIndiceFrase((indice) => (indice + 1) % frases.length);
        } else {
          setTextoVisible((texto) => texto.slice(0, -1));
        }
      } else if (!fraseCompleta) {
        setTextoVisible(fraseActual.slice(0, textoVisible.length + 1));
      } else {
        setBorrando(true);
      }
    }, demora);

    return () => window.clearTimeout(temporizador);
  }, [borrando, indiceFrase, textoVisible]);

  return (
    <section className="pt-[110px] pb-[90px]">
      <div className="font-mono text-[25px] text-violet mb-[26px] opacity-0 animate-rise [animation-delay:.1s]">
        //
      </div>

      <h1 className="font-disp font-semibold leading-[1.04] tracking-tight text-[38px] sm:text-[56px] lg:text-[76px] max-w-[820px] opacity-0 animate-rise [animation-delay:.22s]">
        Hola, soy <br />
        Santino Garrone .
      </h1>

      <p
        className="mt-[26px] min-h-[4.875rem] max-w-[520px] font-mono text-[17px] text-violet leading-relaxed opacity-0 animate-rise [animation-delay:.34s]"
        aria-label={frases[indiceFrase]}
        aria-live="polite"
      >
        <span aria-hidden="true">{textoVisible}</span>
        <span className="typewriter-cursor" aria-hidden="true" />
      </p>

      {/* Tarjeta de datos personales */}
      <div className="mt-16 opacity-0 animate-rise [animation-delay:.46s]">
        <div className="border border-line bg-surface flex flex-col sm:flex-row">
          <div className="flex items-center gap-5 p-6 sm:border-r border-line">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center font-ui font-semibold text-xl bg-violet/10 border border-violetdim text-violet">
              SG
            </div>
            <div>
              <div className="font-ui font-semibold text-lg text-ink">
                Santino Garrone
              </div>
              <div className="font-mono text-xs text-inkfaint mt-1">
                San Nicolás de los Arroyos, Argentina
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 p-6 flex-1">
            <a
              href="mailto:mlsolutionsarg@gmail.com"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              santinogarronegg@gmail.com
            </a>
            <a
              href="https://github.com/santinogarrone"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              https://github.com/santinogarrone
            </a>
            <a
              href="https://www.linkedin.com/in/santino-garrone-0a6074274/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              linkedin.com/in/santinogarrone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
