export default function Contacto() {
  return (
    <section id="contacto" className="py-24 pb-[70px] border-t border-line">
      <div className="relative overflow-hidden border border-line bg-gradient-to-br from-surface to-surface2 p-11 sm:p-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10">
        <div className="absolute -right-16 -top-16 w-56 h-56 bg-violet/25 blur-3xl rounded-full pointer-events-none" />

        <div>
          <h2 className="font-disp font-semibold text-[28px] sm:text-[44px] leading-tight max-w-[560px]">
            Cuéntame qué necesitas construir.
          </h2>
          <p className="text-inkdim mt-4 max-w-[420px] text-[15px]">
            Respondo en menos de 24h con presupuesto y plazo estimado.
          </p>
        </div>

        <a
          href="mailto:mlsolutions@gmail.com"
          className="font-mono text-sm text-bg bg-violet px-6 py-4 border border-violet whitespace-nowrap font-medium hover:bg-transparent hover:text-violet transition-colors"
        >
          mlsolutions@gmail.com
        </a>
      </div>
    </section>
  );
}
