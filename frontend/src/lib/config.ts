/**
 * Configuración centralizada de la aplicación frontend
 */

export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "Sistema de Gestión de Ferretería",
    version: process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
    version: process.env.NEXT_PUBLIC_API_VERSION || "v1",
    get url() {
      return `${this.baseUrl}/api/${this.version}`;
    },
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
} as const;
