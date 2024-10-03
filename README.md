<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

Esta es una aplicación para la gestión de usuarios y tareas.

Las variables de `.env` son visibles solo para mostrar que fueron implementadas; esto nunca sucedería en la vida real. En un proyecto real, deberías copiar el archivo `.env.template` y configurarlo con tus variables de entorno correctas.

Se evitaron **code smells** y se implementaron los principios **SOLID**. No se incluyen demasiados comentarios para evitar redundancia, ya que se considera una [mala práctica](https://refactoring.guru/smells/comments). El mejor comentario es un buen nombre para métodos, atributos o clases.

> [!IMPORTANT]  
> Si estás en Linux/WSL, ejecuta: 
> ```bash
> mkdir mssql_data && sudo chown 10001:10001 mssql_data
> ```
> [Más detalles aquí](https://stackoverflow.com/a/77808783/15445661).  
> TL;DR: Esto es para mapear `/var/mssql-data` a la carpeta `mssql_data` en el proyecto.

## Configuración del proyecto

Primero, instala las dependencias:

```bash
$ pnpm install
```

### ¿Necesitas instalar `pnpm`?
```bash
npm install -g pnpm

# Verifica la instalación
pnpm -v
```

### ¿Por qué `pnpm`?
`pnpm` optimiza el espacio en disco y mejora la velocidad de instalación de paquetes al compartir dependencias entre proyectos.

## Ejecutar el proyecto localmente

Para compilar y ejecutar el proyecto localmente, usa los siguientes comandos:

```bash
# Modo desarrollo
pnpm run start

# Modo vigilancia (hot-reload)
pnpm run start:dev

# Modo producción
pnpm run start:prod
```

## Uso de Docker

Si prefieres correr la aplicación en Docker, sigue estos pasos:

### Construir la imagen Docker

```bash
docker build -t my-nestjs-app .
```

### Ejecutar el contenedor Docker

```bash
docker run -d -p 3000:3000 --name my-nestjs-container my-nestjs-app
```

Este comando ejecutará el contenedor en segundo plano y mapeará el puerto 3000 del contenedor al puerto 3000 de tu máquina local.

## Limpiar y resetear docker compose

Si necesitas hacer un full-clean del docker compose con la base de datos asociada, puedes usar el script `clean-compose.sh`. Este script es para entornos Linux/WSL, pero puedes adaptar una versión `.ps1` para PowerShell si es necesario en Windows.

> [!WARNING]  
> Esto eliminará la carpeta `mssql_data`, que contiene toda la información del contenedor. Después de eliminarla, necesitarás volver a aplicar el `chown`. 
```bash
# Solo la primera vez
sudo chmod +x clean-compose.sh

# Para ejecutarlo:
./clean-compose.sh
```

## Licencia

Este proyecto usa la licencia MIT. Si no especificas una licencia, se aplicará la licencia predeterminada de GitHub, o, en el peor de los casos, la que determine un juez.