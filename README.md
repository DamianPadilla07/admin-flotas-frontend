#  Panel de Administración MVC - Frontend (Angular)

**Autor:** Damián Padilla  
**Módulo:** Interfaz de Alimentación de Datos (Frontend)  
**Materia:** Ingeniería Web  

---

##  Descripción del Proyecto
Este repositorio contiene la arquitectura Frontend (Single Page Application) del **Sistema Multi-Cliente de Gestión y Auditoría de Flotas**. Funciona como el panel de administración central (MVC) donde los jefes y administradores ingresan los datos operativos y financieros (Instituciones, Aseguradoras, Pólizas y Vehículos) que posteriormente son evaluados por el **Motor Core de Rentabilidad**.

---

##  Cumplimiento de la Rúbrica y Decisiones Arquitectónicas

### 1. Integridad Referencial Estricta (Dropdowns Dinámicos) 
Tal como se exige en las especificaciones, la interfaz restringe el ingreso manual de claves foráneas para evitar datos huérfanos. 
- **Implementación:** Los formularios de creación de Pólizas y Vehículos utilizan elementos `<select>` (Dropdowns) que consumen los endpoints del Backend mediante `HttpClient`. 
- **Impacto:** El usuario no puede inventar o tipear el ID de una institución o aseguradora; está obligado a seleccionar entidades que ya existen en la base de datos de SQL Server, garantizando la integridad de las relaciones (1:N) de forma visual e intuitiva antes de enviar la petición (POST).

### 2. Preparación para Validación de Datos Sensibles 
El formulario captura el **Umbral de Depreciación** del vehículo. Aunque la interfaz guía al usuario, la arquitectura delega la validación estricta de este dato crítico (mínimo $1000.00) directamente al servidor (Spring Boot) para evitar saltos de seguridad en el navegador (JavaScript) que puedan vulnerar la fórmula matemática del Core.

### 3. Arquitectura SPA Optimizada (Sin SSR) 
- **Decisión Técnica:** Se deshabilitó intencionalmente el *Server-Side Rendering* (SSR) nativo de las versiones recientes de Angular.
- **Justificación:** Al tratarse de un Panel Administrativo Interno (Dashboard corporativo) y no de una página pública (como un blog o e-commerce), el SEO no es un requerimiento. La aplicación corre al 100% del lado del cliente (Client-Side Rendering), lo cual aligera la carga del servidor y respeta el estándar de diseño de sistemas de back-office.

---

##  Stack Tecnológico
- **Framework:** Angular 18
- **Arquitectura de Componentes:** Standalone Components (sin dependencias de `ngModules`)
- **Estilos y Estructura:** HTML5, CSS3, TypeScript
- **Comunicación HTTP:** `HttpClient` nativo de Angular

---

##  Instrucciones de Ejecución Local

1. **Requisitos Previos:** Node.js y Angular CLI instalados.
2. **Instalación:** Ejecutar `npm install` en la raíz del proyecto para restaurar los módulos de Node.
3. **Servidor de Desarrollo:** Ejecutar el comando `ng serve`.
4. **Acceso:** Abrir el navegador web en `http://localhost:4200`. *(Es indispensable asegurarse de que el Backend de Spring Boot esté corriendo simultáneamente en el puerto `8080` para evitar errores de CORS y permitir la carga de los Dropdowns).*