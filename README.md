# 📦 Sistema Integral de Gestión para Ferreterías (SaaS)

![Backend CI](https://github.com/tu-usuario/sistema-gestion-ferreteria/workflows/Backend%20CI/badge.svg)
![Frontend CI](https://github.com/tu-usuario/sistema-gestion-ferreteria/workflows/Frontend%20CI/badge.svg)
![CI/CD Pipeline](https://github.com/tu-usuario/sistema-gestion-ferreteria/workflows/CI%2FCD%20Pipeline/badge.svg)

Sistema completo de gestión para ferreterías, diseñado como producto SaaS escalable, multi-empresa y preparado para integrar facturación electrónica por API.

## 🎯 Características Principales

- Gestión centralizada de operaciones de ferretería
- Control de inventarios en tiempo real
- Gestión de ventas, compras y clientes
- Cumplimiento normativo fiscal (facturación electrónica)
- Soporte multi-tenant (múltiples ferreterías)
- Sistema de roles y permisos (RBAC)

## 📋 Roles del Sistema

1. **Super Administrador (SaaS)** - Gestión global del producto
2. **Administrador de Ferretería** - Gestión de la ferretería
3. **Empleado / Vendedor** - Operaciones de venta
4. **Encargado de Inventario** - Control de inventario y bodega
5. **Contador** - Área financiera
6. **Auditor** - Auditoría y reportes (opcional)

## �️ Stack Tecnológico

### Backend
- **FastAPI** - Framework web moderno y rápido
- **SQLAlchemy 2.0** - ORM para PostgreSQL
- **Alembic** - Migraciones de base de datos
- **Pydantic 2.0** - Validación de datos
- **Python 3.11+**

### Frontend
- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes UI (próximamente)
- **TanStack Query** - Gestión de estado del servidor (próximamente)

### Base de Datos & Auth
- **Supabase** - PostgreSQL gestionado + Autenticación
- **JWT** - Tokens de autenticación

## 🚀 Inicio Rápido

### Setup Automático (Recomendado)

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### Setup Manual

#### Prerrequisitos

- Node.js 18.17+
- Python 3.11+
- PostgreSQL (o cuenta de Supabase)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Deibyd07/sistema-gestion-ferreteria.git
cd sistema-gestion-ferreteria
```

### 2. Configurar Backend

```bash
# Navegar a la carpeta backend
cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
copy .env.example .env
# Editar .env con tus credenciales

# Ejecutar servidor de desarrollo
uvicorn app.main:app --reload
```

Backend disponible en: http://localhost:8000
Documentación API: http://localhost:8000/api/docs

### 3. Configurar Frontend

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
copy .env.example .env.local
# Editar .env.local con tus credenciales

# Ejecutar servidor de desarrollo
npm run dev
```

Frontend disponible en: http://localhost:3000

### 4. Configurar Supabase

Para configurar Supabase (base de datos y autenticación), sigue la guía detallada:

📘 **[Guía de Configuración de Supabase](SUPABASE_SETUP.md)**

Esta guía incluye:
- Creación del proyecto en Supabase
- Obtención de credenciales
- Configuración de autenticación
- Configuración de storage (opcional)
- Verificación de la conexión

## 📁 Estructura del Proyecto

```
sistema-gestion-ferreteria/
├── backend/                    # API Backend (FastAPI)
│   ├── app/
│   │   ├── api/               # Endpoints
│   │   ├── core/              # Configuración
│   │   ├── db/                # Base de datos
│   │   ├── models/            # Modelos SQLAlchemy
│   │   ├── schemas/           # Schemas Pydantic
│   │   ├── services/          # Lógica de negocio
│   │   └── main.py           # Punto de entrada
│   ├── tests/                 # Tests
│   ├── requirements.txt       # Dependencias Python
│   └── README.md
│
├── frontend/                   # Aplicación Frontend (Next.js)
│   ├── src/
│   │   ├── app/              # App Router (páginas)
│   │   ├── components/       # Componentes React
│   │   ├── lib/              # Utilidades
│   │   ├── services/         # API clients
│   │   └── types/            # Tipos TypeScript
│   ├── package.json
│   └── README.md
│
├── docs/                       # Documentación (próximamente)
├── ISSUES.md                   # Listado de issues del proyecto
├── sistema_gestion_ferreteria_completo.md  # Documentación completa
└── README.md                   # Este archivo
```

## � CI/CD y Calidad de Código

Este proyecto implementa un pipeline completo de CI/CD con GitHub Actions:

- ✅ **Linting automático**: Black, Ruff, ESLint
- ✅ **Verificación de tipos**: MyPy, TypeScript
- ✅ **Pruebas automáticas**: pytest, Jest
- ✅ **Análisis de seguridad**: Bandit, Safety
- ✅ **Auto-formateo** de código en PRs
- ✅ **Despliegue automático** a producción

### 📚 Guías de CI/CD

- **[⚡ Quick Start CI/CD](QUICK_START_CI.md)** - Configuración en 10 minutos
- **[📖 Guía Completa CI/CD](CI_CD_GUIDE.md)** - Documentación detallada
- **[🔧 Setup Scripts](setup.sh)** - Scripts de configuración automática

### 🧪 Ejecutar Tests Localmente

**Backend:**
```bash
cd backend
pytest                          # Ejecutar tests
pytest --cov=app                # Con cobertura
black . && ruff check .         # Linting y formateo
```

**Frontend:**
```bash
cd frontend
npm test                        # Ejecutar tests
npm run lint                    # Linting
npm run format                  # Formateo
```

## �📝 Documentación

- **[⚡ Quick Start CI/CD](QUICK_START_CI.md)** - Configuración rápida de CI/CD
- **[📖 Guía Completa CI/CD](CI_CD_GUIDE.md)** - Pipeline y despliegues
- **Documentación Completa**: [sistema_gestion_ferreteria_completo.md](sistema_gestion_ferreteria_completo.md)
- **Issues y Roadmap**: [ISSUES.md](ISSUES.md)
- **Backend README**: [backend/README.md](backend/README.md)
- **Frontend README**: [frontend/README.md](frontend/README.md)
- **Configuración Supabase**: [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
- **Estrategia de Branching**: [BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md)

## 🚦 Fase Actual: MVP Core (Fase 1)

Actualmente trabajando en:
- ✅ Configuración inicial del proyecto (Issue #1)
- ✅ Configuración de Supabase (Issue #2)
- ⏳ Modelos de base de datos
- ⏳ Sistema de autenticación
- ⏳ Gestión básica de productos
- ⏳ POS básico
- ⏳ Inventario básico

Por favor lee [CI_CD_GUIDE.md](CI_CD_GUIDE.md) para detalles sobre el proceso de desarrollo y cómo hacer contribuciones.

### Flujo de Trabajo

1. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Hacer cambios y commits: `git commit -m 'feat: nueva funcionalidad'`
3. Formatear código: Ver comandos en la sección de CI/CD
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request (el CI se ejecutará automáticamente)
6. Esperar aprobación y merge
1. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commits descriptivos: `git commit -m 'Add: nueva funcionalidad'`
3. Push a la rama: `git push origin feature/nueva-funcionalidad`
4. Crear Pull Request

## 📄 Licencia

Por definir
