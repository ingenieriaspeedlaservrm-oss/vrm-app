import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",      // Dónde guardará los archivos de la PWA
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,      // Importante: Déjalo en false para que funcione siempre
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA({
  // Aquí puedes poner otras config de next si las tuvieras
});