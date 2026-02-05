/**
 * Tipos comunes utilizados en toda la aplicación
 */

// Usuario
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  tenantId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Roles del sistema
export enum UserRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  EMPLOYEE = "employee",
  WAREHOUSE = "warehouse",
  ACCOUNTANT = "accountant",
  AUDITOR = "auditor",
}

// Tenant (Ferretería)
export interface Tenant {
  id: string;
  name: string;
  nit: string;
  address: string;
  phone: string;
  email: string;
  planId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Respuestas de API
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
