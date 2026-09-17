import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Stack from "./components/Stack";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <>
      <div className="bg-glow" />
      <Navbar />
      <main className="page-frame min-h-screen px-5 sm:px-8 relative z-10">
        <Reveal direction="left">
          <Hero />
        </Reveal>
        <Reveal direction="right">
          <Servicios />
        </Reveal>
        <Reveal direction="left">
          <Proyectos />
        </Reveal>
        <Reveal direction="right">
          <Stack />
        </Reveal>
        <Reveal direction="left">
          <Contacto />
        </Reveal>
      </main>
      <Reveal direction="right">
        <Footer />
      </Reveal>
    </>
  );
}
