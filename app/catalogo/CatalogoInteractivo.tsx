"use client";
import { useState } from "react";

// Opciones disponibles
const MATERIALES = [
  "Acero al Carbón (A36)",
  "Acero Inoxidable",
  "Aluminio",
  "Lámina Galvanizada",
  "MDF",
  "Acrílico"
];

const ESPESORES = [
  "Calibre 24 (0.6mm)",
  "Calibre 22 (0.75mm)",
  "Calibre 20 (0.9mm)",
  "Calibre 18 (1.2mm)",
  "Calibre 16 (1.5mm)",
  "Calibre 14 (1.9mm)",
  "Calibre 12 (2.6mm)",
  "Calibre 10 (3.4mm)",
  "1/8 pulgada (3.1mm)",
  "3/16 pulgada (4.7mm)",
  "1/4 pulgada (6.3mm)",
  "3/8 pulgada (9.5mm)",
  "1/2 pulgada (12.7mm)",
  "3/4 pulgada (19mm)",
  "1 pulgada (25.4mm)"
];

export default function CatalogoInteractivo({ celosias }: { celosias: any[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  
  // Estados del formulario
  const [material, setMaterial] = useState(MATERIALES[0]);
  const [espesor, setEspesor] = useState(ESPESORES[3]); // Default Cal 18

  // Abrir modal y resetear valores por defecto
  const abrirVisor = (item: any) => {
    setSelectedDesign(item);
    setMaterial(MATERIALES[0]); // Resetear a default
    setEspesor(ESPESORES[3]);   // Resetear a default
    setModalOpen(true);
  };

  const enviarWhatsApp = () => {
    if (!selectedDesign) return;

    const mensaje = `Hola VRM Speed Laser. Me interesa cotizar el siguiente proyecto:
    
🆔 *Diseño:* ${selectedDesign.nombre}
🧱 *Material:* ${material}
📏 *Espesor:* ${espesor}
🔗 *Imagen:* ${selectedDesign.imagen_url || "N/A"}
    
¿Me podrían dar precio y tiempo de entrega? Gracias.`;

    const url = `https://wa.me/5214424994635?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    // Opcional: setModalOpen(false); // Si quieres que se cierre al enviar
  };

  return (
    <>
      {/* --- GRID DE PRODUCTOS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {celosias.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 flex flex-col group cursor-pointer"
            onClick={() => abrirVisor(item)} // Clic en toda la tarjeta abre el visor
          >
            
            {/* Imagen en tarjeta */}
            <div className="h-64 bg-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                {item.imagen_url ? (
                  <img 
                    src={item.imagen_url} 
                    alt={item.nombre}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">Sin Imagen</div>
                )}
              </div>
              
              {/* Etiqueta flotante "Ver Detalle" */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Ver Detalle
                </span>
              </div>
            </div>

            {/* Info rápida */}
            <div className="p-6 flex-grow flex flex-col justify-between bg-white relative z-10">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-1 rounded-full">
                  {item.categoria || "General"}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-3">{item.nombre}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- VISOR GRANDE (MODAL) --- */}
      {modalOpen && selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          
          {/* Contenedor Principal: Ahora es más ancho (max-w-5xl) y usa Grid */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scaleIn relative">
            
            {/* Botón Cerrar Flotante (Móvil y Desktop) */}
            <button 
              onClick={() => setModalOpen(false)} 
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* COLUMNA IZQUIERDA: VISOR DE IMAGEN */}
            <div className="w-full md:w-3/5 bg-slate-100 flex items-center justify-center p-8 relative">
              {/* Patrón de fondo sutil para dar contexto de ingeniería */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <img 
                src={selectedDesign.imagen_url} 
                className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500" 
                alt="Detalle Diseño" 
              />
            </div>

            {/* COLUMNA DERECHA: DATOS Y FORMULARIO */}
            <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-white flex flex-col">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-1 rounded-full">
                   {selectedDesign.categoria || "Corte Láser"}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-3 leading-tight">{selectedDesign.nombre}</h2>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  {selectedDesign.descripcion || "Diseño de alta precisión listo para corte en diversos materiales. Ideal para proyectos arquitectónicos o industriales."}
                </p>
              </div>

              <div className="border-t border-slate-100 my-4"></div>

              {/* Formulario de Cotización */}
              <div className="flex-grow">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="bg-slate-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Configura tu Pieza
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Material</label>
                    <select 
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50 font-medium text-slate-700"
                    >
                      {MATERIALES.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Espesor / Calibre</label>
                    <select 
                      value={espesor}
                      onChange={(e) => setEspesor(e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50 font-medium text-slate-700"
                    >
                      {ESPESORES.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Botón de Acción */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={enviarWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                  </svg>
                  <span>Solicitar Cotización</span>
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Te responderemos con el precio exacto vía WhatsApp.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}