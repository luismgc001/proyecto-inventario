# Proyecto básico de gestión de inventario (Frontend + Backend)

Este proyecto es una versión básica de una aplicación web para la gestión de inventario.  
Está pensado como apoyo para la **Actividad 4 – Tecnología front-end en la construcción de una aplicación web II**.

La app está dividida en dos partes:

- `backend/` → API REST con Node.js y Express.
- `frontend/` → Aplicación React que consume la API.

---

## 1. Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior recomendada)
- npm (se instala junto con Node)
- Navegador web

Opcional:

- Git

---

## 2. Estructura del proyecto

```bash
proyecto-inventario/
  backend/
    server.js
    package.json
  frontend/
    package.json
    src/
```

---

## 3. Backend (API con Node + Express)

### Instalación

```bash
cd backend
npm install
```

### Ejecución

```bash
npm start
```

Visita:

```
http://localhost:3000/api/products
```

---

## 4. Frontend (React)

### Instalación

```bash
cd frontend
npm install
```

### Ejecución

```bash
npm run dev
```

Visita:

```
http://localhost:5173/products
```

---

## 5. Probar la app completa

1. Backend corriendo en `http://localhost:3000`
2. Frontend corriendo en `http://localhost:5173`
3. Abrir: `http://localhost:5173/products`

---

## 6. Tecnologías usadas

- Backend: Node.js, Express
- Frontend: React, React Router, Axios, Vite

---

## 7. Repositorio GitHub

Sube ambas carpetas más este README y tu documento Word al repositorio.

---

## 8. Notas finales

Este proyecto es una versión mínima funcional cuyo propósito es demostrar conceptos de front-end, back-end y comunicación REST.
