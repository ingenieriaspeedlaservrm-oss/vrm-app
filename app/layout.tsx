import type { Metadata, Viewport } from "next"; // Importamos Viewport
import "./globals.css";

// 1. Configuración del Viewport (Para móviles)
export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Se siente más como app nativa
};

// 2. Metadatos PWA
export const metadata: Metadata = {
  title: "VRM Speed Laser",
  description: "Soluciones en Corte Láser e Ingeniería",
  manifest: "/manifest.json",
  icons: {
    apple: "/logo-vrm.png", // Ícono para iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}