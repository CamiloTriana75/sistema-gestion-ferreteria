import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilidad para combinar clases de Tailwind CSS
 * Permite usar clsx y tailwind-merge juntos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
