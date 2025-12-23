"use client";
import { useState, useEffect } from "react";

// IMÁGENES INDUSTRIALES REALES
const slides = [
  {
    id: 1,
    // Foto de una máquina de corte láser trabajando (chispas azules/naranjas)
    src: "https://www.aqualaser.com.mx/wp-content/uploads/2025/05/corte-laser-blog-abril.jpg", 
    titulo: "Corte Láser de Alta Precisión",
    desc: "Tecnología de punta para acabados perfectos en acero y aluminio."
  },
  {
    id: 2,
    // Foto de texturas metálicas / celosías arquitectónicas
    src: "https://www.dwgautocad.com/uploads/8/3/4/5/8345765/ce03-bloques-cad-de-celosias-en-autocad-dwg-2d-cad-blocks_orig.webp", 
    titulo: "Diseño de Celosías",
    desc: "Personalización arquitectónica para interiores y fachadas modernas."
  },
  {
    id: 3,
    // Foto de soldadura industrial / taller
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop", 
    titulo: "Pailería Especializada",
    desc: "Soluciones robustas y manufactura para la industria pesada."
  },
  {
    id: 4,
    // Foto de una dobladora/plegadora CNC en acción
    src: "https://i.ytimg.com/vi/wK8jmLUsUBY/maxresdefault.jpg",
    titulo: "Doblez y Plegado CNC",
    desc: "Transformamos lámina plana en componentes complejos con alta precisión angular."
  }

];

export default function Carrusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Altura ajustada para que luzca más impactante
    <div className="relative w-full h-[600px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Capa oscura reforzada para que las letras blancas resalten sobre las chispas */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          
          <img 
            src={slide.src} 
            alt={slide.titulo} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wider uppercase drop-shadow-lg">
              {slide.titulo}
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light drop-shadow-md">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 scale-150" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}