# Clon de Mercado Libre

Este proyecto es un clon básico de la interfaz de usuario de Mercado Libre, desarrollado con React, TypeScript y Vite.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- Node.js (versión 14.0 o superior)
- npm (normalmente viene con Node.js)

## Cómo descargar y ejecutar el proyecto

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```
   git clone https://github.com/DemcCode/clon-mercadolibre.git
   cd clon-mercadolibre
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abre tu navegador y visita `http://localhost:5173` (o el puerto que Vite indique en la consola).

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
- `npm run preview`: Sirve la compilación de producción localmente.

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes de React reutilizables.
  - `App.tsx`: Componente principal de la aplicación.
  - `main.tsx`: Punto de entrada de la aplicación.
- `public/`: Archivos estáticos que se sirven directamente.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Contribuir

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función: `git checkout -b nueva-funcion`
3. Haz tus cambios y realiza commits: `git commit -m 'Agrega nueva función'`
4. Empuja tus cambios a tu fork: `git push origin nueva-funcion`
5. Crea un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.