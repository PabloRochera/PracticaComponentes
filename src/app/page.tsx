"use client";
import { BentoGridGalleryDemo } from "@/componentes/blocks/code.demo";
import { HeroGeometric } from "../componentes/ui/shape-landing-hero"; // Ruta corregida
import { HeaderDemo } from "../componentes/ui/header-demo";
import { Footer2Demo } from "../componentes/ui/footer-demo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Fijado Arriba */}
      <HeaderDemo />

      {/* Contenedor Principal sin Espacios en Blanco */}
      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center min-h-screen">
          <HeroGeometric 
            badge="Pablo Rochera"
            title1="PRACTICA COMPONENTES"
          />
        </section>
        <section className="flex flex-col items-center justify-center min-h-screen">
          <BentoGridGalleryDemo />  {/* ✅ Se agregó el Bento Gallery */}
        </section>
      </main>

      {/* Footer - Fijado Abajo */}
      <Footer2Demo />
    </div>
  );
}
