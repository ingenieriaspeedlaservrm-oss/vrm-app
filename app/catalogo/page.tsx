import Link from "next/link";
import { supabase } from "../../lib/supabase";
import CatalogoInteractivo from "./CatalogoInteractivo"; // Importamos el componente nuevo

// Recargar datos cada vez que se entra (0 caché)
export const revalidate = 0;

export default async function CatalogoPage() {
  // 1. Obtener datos de Supabase
  const { data: celosias, error } = await supabase
    .from('celosias')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) console.error("Error cargando celosias:", error);

  const listaCelosias = celosias || [];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="bg-slate-900 text-white p-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Catálogo de Diseños</h1>
        <p className="text-slate-400 text-lg">Selecciona un diseño, personaliza el material y cotiza al instante.</p>
        
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline mt-6 inline-block text-sm font-semibold transition">
          ← Volver al Inicio
        </Link>
      </div>

      {/* CUERPO PRINCIPAL */}
      <div className="container mx-auto py-12 px-4">
        
        {listaCelosias.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow border border-slate-100">
            <p className="text-xl text-slate-500 font-medium">Cargando catálogo...</p>
          </div>
        ) : (
          /* Aquí insertamos el componente interactivo con los datos */
          <CatalogoInteractivo celosias={listaCelosias} />
        )}
        
      </div>
    </main>
  );
}