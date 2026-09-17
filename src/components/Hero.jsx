export default function Hero() {
  return (
    <section className="pt-[110px] pb-[90px]">
      <div className="font-mono text-[13px] text-violet mb-[26px] opacity-0 animate-rise [animation-delay:.1s]">
        // desarrollo full stack — páginas web y sistemas a medida
      </div>

      <h1 className="font-disp font-semibold leading-[1.04] tracking-tight text-[38px] sm:text-[56px] lg:text-[76px] max-w-[820px] opacity-0 animate-rise [animation-delay:.22s]">
        Construyo software que factura, <span className="text-violet">no que decora.</span>
      </h1>

      <p className="mt-[26px] text-lg text-inkdim max-w-[520px] leading-relaxed opacity-0 animate-rise [animation-delay:.34s]">
        Diseño y desarrollo web y sistemas para negocios que necesitan resultados:
        más ventas, menos tareas manuales, procesos que funcionan solos.
      </p>

      {/* Tarjeta de datos personales */}
      <div className="mt-16 opacity-0 animate-rise [animation-delay:.46s]">
        <div className="border border-line bg-surface flex flex-col sm:flex-row">
          <div className="flex items-center gap-5 p-6 sm:border-r border-line">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center font-disp font-semibold text-xl bg-violet/10 border border-violetdim text-violet">
              SG
            </div>
            <div>
              <div className="font-disp font-semibold text-lg text-ink">Santino Garrone</div>
              <div className="text-sm text-inkdim">Desarrollador full stack</div>
              <div className="font-mono text-xs text-inkfaint mt-1">San Nicolás de los Arroyos, Argentina</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 p-6 flex-1">
            <a
              href="mailto:mlsolutions@gmail.com"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              mlsolutions@gmail.com
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              github.com/tu-usuario
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs px-3 py-2 border border-line text-inkdim hover:text-ink hover:border-violetdim transition-colors"
            >
              linkedin.com/in/tu-usuario
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
