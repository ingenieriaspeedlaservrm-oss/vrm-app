import Image from "next/image";
import Link from "next/link";
import Carrusel from "./components/Carrusel"; 

export default function Home() {

  // GRUPO 1: VRM FABRICACIÓN
  const serviciosFabricacion = [
    { title: "Corte Láser Lámina y Tubo", src: "https://placehold.co/600x400/1e293b/FFF?text=Corte+Laser" },
    { title: "Corte Láser MDF y Acrílico", src: "https://placehold.co/600x400/1e293b/FFF?text=MDF+Acrilico" },
    { title: "Plegado de Lámina", src: "https://placehold.co/600x400/1e293b/FFF?text=Plegado" },
    { title: "Dibujo Mecánico", src: "https://placehold.co/600x400/1e293b/FFF?text=Dibujo+CAD" },
    { title: "Grabado Láser", src: "https://placehold.co/600x400/1e293b/FFF?text=Grabado" },
    { title: "Pailería Especializada", src: "https://placehold.co/600x400/1e293b/FFF?text=Paileria" },
    { title: "Sand Blast y Pintura", src: "https://placehold.co/600x400/1e293b/FFF?text=Sand+Blast" },
  ];

  // GRUPO 2: VRM INDUSTRIAL
  const serviciosIndustrial = [
    { title: "Análisis de Vibraciones", src: "https://placehold.co/600x400/2563eb/FFF?text=Vibraciones" },
    { title: "Balanceo Dinámico", src: "https://placehold.co/600x400/2563eb/FFF?text=Balanceo" },
    { title: "Alineación Láser", src: "https://placehold.co/600x400/2563eb/FFF?text=Alineacion" },
    { title: "Tubería y Ductería", src: "https://placehold.co/600x400/2563eb/FFF?text=Tuberia" },
    { title: "Suministro de Refacciones", src: "https://placehold.co/600x400/2563eb/FFF?text=Refacciones" },
    { title: "Cursos / Certificación DC3", src: "https://placehold.co/600x400/2563eb/FFF?text=Cursos+DC3" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-xl border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center h-24">
          
          {/* LOGO */}
          <div className="flex items-center">
             <Image 
               src="/logo-vrm.png" 
               alt="VRM Speed Laser Logo" 
               width={240} 
               height={90} 
               className="object-contain h-20 w-auto hover:scale-105 transition duration-300" 
               priority
             />
          </div>
          
          {/* MENÚ */}
          <ul className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-300 items-center">
            <li className="hover:text-blue-400 cursor-pointer transition border-b-2 border-transparent hover:border-blue-400 pb-1">Inicio</li>
            <li className="hover:text-blue-400 cursor-pointer transition border-b-2 border-transparent hover:border-blue-400 pb-1">Empresa</li>
            <li className="hover:text-blue-400 cursor-pointer transition border-b-2 border-transparent hover:border-blue-400 pb-1">Servicios</li>
            <li>
              <Link 
                href="/catalogo" 
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition shadow-[0_0_15px_rgba(37,99,235,0.5)] font-bold"
              >
                Catálogo
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO / CARRUSEL */}
      <section className="relative">
        <Carrusel />
        <div className="absolute bottom-24 left-0 right-0 z-30 text-center pointer-events-none">
           <Link 
            href="/catalogo" 
            className="pointer-events-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition shadow-2xl hover:shadow-blue-500/50 inline-block border-4 border-slate-900/50 backdrop-blur-sm"
          >
            Ver Catálogo de Diseños
          </Link>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS (TEXTOS ACTUALIZADOS) */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase text-slate-900 mb-4 tracking-tight">Ingeniería y Precisión</h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* TARJETA 1: QUIÉNES SOMOS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 border-slate-900 hover:border-blue-600 group relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-4 uppercase text-slate-900 group-hover:text-blue-600 transition">¿Quiénes Somos?</h3>
             <p className="text-slate-600 leading-relaxed text-sm text-justify">
               Somos una empresa especializada en brindar servicios metalmecánicos a la industria, con más de 15 años de experiencia en el ramo, nos enfocamos en trabajar de manera conjunta con nuestros clientes, atendiendo sus requerimientos. Ofrecemos servicios de mantenimiento y corte láser, con altos estándares de calidad que nos colocará como su primera opción.
             </p>
          </div>

          {/* TARJETA 2: MISIÓN */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 border-slate-900 hover:border-blue-600 group relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-4 uppercase text-slate-900 group-hover:text-blue-600 transition">Misión</h3>
             <p className="text-slate-600 leading-relaxed text-sm text-justify">
               Ofrecer soluciones innovadoras de corte láser en la industria metalmecánica, doblez y grabado con precisión y altos estándares de calidad, brindando a nuestros clientes la mejor experiencia en la fabricación y manufactura de sus productos, superando sus expectativas.
             </p>
          </div>

          {/* TARJETA 3: VISIÓN */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 border-slate-900 hover:border-blue-600 group relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-4 uppercase text-slate-900 group-hover:text-blue-600 transition">Visión</h3>
             <p className="text-slate-600 leading-relaxed text-sm text-justify">
               Ser líderes en el mercado de corte láser y manufactura en la industria metalmecánica, destacándonos por la excelencia en el servicio y la innovación constante. Buscamos expandir nuestro alcance y convertirnos en un referente en el diseño y fabricación de productos con tecnología láser.
             </p>
          </div>

        </div>
      </section>

      {/* --- NUEVA SECCIÓN: VIDEO CORPORATIVO --- */}
      <section className="w-full bg-slate-900 py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-2 uppercase">Tecnología en Acción</h2>
            <p className="text-slate-400 mb-10">Conoce nuestros procesos de manufactura avanzada</p>
            
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] border-4 border-slate-800 bg-black">
              {/* VIDEO TAG HTML5 */}
              <video 
                className="w-full h-auto object-cover"
                controls 
                autoPlay 
                muted 
                loop
                playsInline
                preload="metadata"
              >
                {/* IMPORTANTE: 
                   1. Guarda tu video en la carpeta 'public' de tu proyecto.
                   2. Nómbralo 'video-empresa.mp4' (o cambia el nombre abajo).
                   3. Si no tienes video, he puesto uno de stock industrial temporalmente.
                */}
                <source src="/video-empresa.mp4" type="video/mp4" />
                {/* Fallback por si no tienes el archivo local aún, uso un link de ejemplo */}
                <source src="https://videos.pexels.com/video-files/3840442/3840442-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
        </div>
      </section>

      {/* SECCIÓN CAPACIDADES TÉCNICAS (DIVIDIDA) */}
      <section className="bg-slate-100 py-20 px-4 border-t border-slate-200">
        <div className="container mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold uppercase text-slate-900">Capacidades Técnicas</h2>
            <p className="text-slate-500 mt-4 text-lg">Soluciones integrales</p>
          </div>
          
          {/* BLOQUE 1: FABRICACIÓN */}
          <div className="mb-16">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 bg-slate-900 rounded-full"></div>
                <h3 className="text-3xl font-bold uppercase text-slate-800">VRM Fabricación</h3>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviciosFabricacion.map((servicio, index) => (
                  <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-default border border-slate-200 flex flex-col">
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                       <img src={servicio.src} alt={servicio.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                       <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition duration-300"></div>
                    </div>
                    <div className="p-4 text-center bg-white flex-grow flex items-center justify-center">
                      <h4 className="font-bold text-slate-800 uppercase text-sm group-hover:text-blue-600 transition">{servicio.title}</h4>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* BLOQUE 2: INDUSTRIAL */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                <h3 className="text-3xl font-bold uppercase text-slate-800">VRM Industrial</h3>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviciosIndustrial.map((servicio, index) => (
                  <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-default border border-slate-200 flex flex-col">
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                       <img src={servicio.src} alt={servicio.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                       <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-600/10 transition duration-300"></div>
                    </div>
                    <div className="p-4 text-center bg-white flex-grow flex items-center justify-center">
                      <h4 className="font-bold text-slate-800 uppercase text-sm group-hover:text-blue-600 transition">{servicio.title}</h4>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 uppercase border-l-8 border-blue-600 pl-6">Nuestra Ubicación</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Visítanos en nuestras instalaciones para conocer más sobre cómo podemos ayudar en tu próximo proyecto.
            </p>
            <ul className="space-y-6 text-slate-300 text-lg">
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 text-blue-400 p-3 rounded-lg border border-blue-500/30">📍</span>
                <span>ANILLO VIAL II #10271, CUMBRES DE CONIN, BODEGA 11, 76246, EL MARQUÉS, QUERÉTARO</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 text-blue-400 p-3 rounded-lg border border-blue-500/30">📞</span>
                <span>442 499 4635</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 text-blue-400 p-3 rounded-lg border border-blue-500/30">✉️</span>
                <span>speedlaservrm@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full h-96 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 relative group">
             <div className="absolute inset-0 border-4 border-blue-500/0 group-hover:border-blue-500/50 transition duration-500 pointer-events-none z-10 rounded-xl"></div>
             {/* Usé un iframe genérico de El Marqués, Querétaro */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.4483950172353!2d-100.3197541!3d20.5771815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34314ca8467a7%3A0x1dbceea4d3a6d1e0!2sSPEED%20LASER%20VRM!5e1!3m2!1ses!2smx!4v1766526943248!5m2!1ses!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition duration-700"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-slate-500 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} VRM Speed Laser. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}