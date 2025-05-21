# API Sandbox

API backend para la gestión de usuarios y autenticación, construida con NestJS. Ideal como base para nuevos proyectos o para experimentar con las funcionalidades de NestJS en un entorno de pruebas.

## Tecnologías Utilizadas

*   **Framework:** [NestJS](https://nestjs.com/)
*   **Base de Datos:** MongoDB (a través de [Mongoose](https://mongoosejs.com/))
*   **Autenticación:** JWT (JSON Web Tokens) con PassportJS
*   **Documentación API:** [Swagger](https://swagger.io/) (OpenAPI)
*   **Lenguaje:** TypeScript
*   **Validación:** class-validator, class-transformer
*   **Variables de Entorno:** @nestjs/config

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

*   [Node.js](https://nodejs.org/) (se recomienda la última versión LTS)
*   npm (usualmente viene con Node.js) o yarn
*   Una instancia de MongoDB en ejecución (local o remota).

## Configuración del Entorno

Este proyecto utiliza variables de entorno para la configuración de la base de datos y otros parámetros. Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:

```env
# Puerto en el que correrá la aplicación
PORT=3000

# URI de conexión a MongoDB
DATABASE_HOST=mongodb://localhost:27017 

# Nombre de la base de datos
DATABASE_NAME=api_sandbox_db

# (Opcional) Secret para JWT - si no se provee, se usará uno por defecto pero es recomendable cambiarlo
# JWT_SECRET=tuSecretSeguroAqui 
```

**Nota:** Puedes copiar el archivo `.env.example` (si existe) a `.env` y modificar los valores.

## Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd nombre-del-directorio-del-proyecto
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    O si usas yarn:
    ```bash
    yarn install
    ```

## Ejecución de la Aplicación

### Modo de Desarrollo

Para iniciar la aplicación en modo de desarrollo con recarga automática:

```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:PUERTO` (donde `PUERTO` es el valor que configuraste en el archivo `.env`, por defecto 3000).

### Modo Producción

1.  **Compila la aplicación:**
    ```bash
    npm run build
    ```

2.  **Inicia la aplicación en modo producción:**
    ```bash
    npm run start:prod
    ```

## Scripts Disponibles

Este proyecto incluye los siguientes scripts (definidos en `package.json`):

*   `npm run build`: Compila el proyecto TypeScript a JavaScript (en el directorio `dist`).
*   `npm run format`: Formatea el código usando Prettier.
*   `npm run start`: Inicia la aplicación (usualmente después de un `build`).
*   `npm run start:dev`: Inicia la aplicación en modo desarrollo con `nodemon`.
*   `npm run start:debug`: Inicia la aplicación en modo debug.
*   `npm run start:prod`: Inicia la aplicación en modo producción (desde el directorio `dist`).
*   `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
*   `npm run test`: Ejecuta las pruebas unitarias con Jest.
*   `npm run test:watch`: Ejecuta las pruebas unitarias en modo "watch".
*   `npm run test:cov`: Genera un reporte de cobertura de pruebas.
*   `npm run test:e2e`: Ejecuta las pruebas end-to-end.

## Funcionalidades Principales de la API

La API proporciona las siguientes funcionalidades:

*   **Autenticación:**
    *   Registro de nuevos usuarios.
    *   Login de usuarios existentes (obteniendo un token JWT).
*   **Gestión de Usuarios (CRUD):**
    *   Crear nuevos usuarios (acceso protegido o público, según configuración).
    *   Obtener listado de todos los usuarios.
    *   Obtener detalles de un usuario específico por su ID.
    *   Actualizar información de un usuario.
    *   Eliminar un usuario.

## Documentación de la API (Swagger)

La documentación detallada de todos los
endpoints de la API, incluyendo parámetros, cuerpos de solicitud y respuestas esperadas, está disponible a través de Swagger UI.

Una vez que la aplicación esté en ejecución, puedes acceder a la documentación en la siguiente ruta:

`http://localhost:[PORT]/apidocs`

(Reemplaza `[PORT]` con el puerto que estés utilizando, por defecto 3000).

Para la versión desplegada, la documentación se encuentra en:
`https://api-sandbox-f3ei.onrender.com/apidocs`
