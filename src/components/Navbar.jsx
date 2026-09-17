export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-8 py-[18px]">
        <div className="font-disp font-bold text-[15px] flex items-center gap-[10px]">
          <span className="w-2 h-2 rounded-full bg-violet shadow-[0_0_10px_#A855F7]" />
          SANTINO GARRONE
        </div>

        <div className="hidden md:flex gap-9 text-sm text-inkdim">
          <a href="#proyectos" className="navbar-link">
            Proyectos
          </a>
          <a href="#servicios" className="navbar-link">
            Formas de trabajar juntos
          </a>
          <a href="#contacto" className="navbar-link">
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-inkdim border border-line px-3 py-[7px]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#4ADE80] animate-pulse-dot" />
          Disponible para proyectos
        </div>
      </nav>
    </header>
  );
}
