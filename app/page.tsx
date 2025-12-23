import Image from "next/image";
import Link from "next/link";
import Carrusel from "./components/Carrusel"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* NAVBAR OSCURO (RESTAURADO) */}
      <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-xl border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center h-24"> {/* Aumenté altura del navbar */}
          
          {/* Logo SIN borde blanco y MÁS GRANDE */}
          <div className="flex items-center">
             <Image 
               src="/logo-vrm.png" 
               alt="VRM Speed Laser Logo" 
               width={240} // Aumentado de 180 a 240
               height={90} // Aumentado de 60 a 90
               // 'brightness-0 invert' hace que si el logo es negro, se vuelva blanco para verse en fondo oscuro. 
               // Si tu logo tiene colores (azul), quita 'brightness-0 invert' y deja solo el resto.
               className="object-contain h-20 w-auto hover:scale-105 transition duration-300" 
               priority
             />
          </div>
          
          {/* MENÚ DE NAVEGACIÓN */}
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

      {/* SECCIÓN HERO (CARRUSEL) */}
      <section className="relative">
        <Carrusel />
        
        {/* Botón flotante grande sobre el carrusel */}
        <div className="absolute bottom-24 left-0 right-0 z-30 text-center pointer-events-none">
           <Link 
            href="/catalogo" 
            className="pointer-events-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition shadow-2xl hover:shadow-blue-500/50 inline-block border-4 border-slate-900/50 backdrop-blur-sm"
          >
            Ver Catálogo de Diseños
          </Link>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase text-slate-900 mb-4 tracking-tight">Ingeniería y Precisión</h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "¿Quiénes Somos?", text: "Especialistas en servicios metalmecánicos con más de 15 años de experiencia, trabajando conjuntamente con nuestros clientes." },
            { title: "Misión", text: "Ofrecer soluciones innovadoras de corte láser, doblez y grabado con precisión y altos estándares de calidad." },
            { title: "Visión", text: "Ser líderes en el mercado de manufactura, destacándonos por la excelencia, servicio e innovación constante." }
          ].map((card, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 border-slate-900 hover:border-blue-600 group relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 uppercase text-slate-900 group-hover:text-blue-600 transition">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{card.text}</p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-full group-hover:bg-blue-50 transition -z-10"></div>
            </div>
          ))}
        </div>
      </section>

      {/* LISTA DETALLADA DE SERVICIOS */}
      <section className="bg-slate-100 py-20 px-4 border-t border-slate-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase text-slate-900">Capacidades Técnicas</h2>
            <p className="text-slate-500 mt-2">Soluciones integrales para cada necesidad industrial</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Corte láser lámina y tubo",
              "Corte láser MDF y acrílico",
              "Plegado de lámina (Doblez)",
              "Dibujo mecánico CAD",
              "Grabado láser",
              "Pailería especializada",
              "Sand blast y Pintura",
              "Análisis de vibraciones",
              "Balanceo Dinámico",
              "Alineación láser",
              "Tubería y Ductería",
              "Cursos / Certificación DC3"
            ].map((servicio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-center h-28 hover:shadow-md hover:border-blue-500 hover:text-blue-600 transition duration-300 cursor-default group">
                <span className="font-bold text-slate-700 text-sm md:text-base group-hover:text-blue-600 uppercase">
                  {servicio}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN Y MAPA */}
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
                {/* TUS DATOS REALES */}
                <span>ANILLO VIAL II #10271, CUMBRES DE CONIN, BODEGA 11, 76246, EL MARQUÉS, QUERÉTARO</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 text-blue-400 p-3 rounded-lg border border-blue-500/30">📞</span>
                {/* TUS DATOS REALES */}
                <span>442 499 4635</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 text-blue-400 p-3 rounded-lg border border-blue-500/30">✉️</span>
                {/* TUS DATOS REALES */}
                <span>speedlaservrm@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full h-96 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 relative group">
             <div className="absolute inset-0 border-4 border-blue-500/0 group-hover:border-blue-500/50 transition duration-500 pointer-events-none z-10 rounded-xl"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.4483950172353!2d-100.3197541!3d20.5771815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34314ca8467a7%3A0x1dbceea4d3a6d1e0!2sSPEED%20LASER%20VRM!5e1!3m2!1ses!2smx!4v1766447900441!5m2!1ses!2smx" 
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