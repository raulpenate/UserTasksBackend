<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

Esta es una aplicación para la gestión de usuarios y tareas. Se usaron `UUID` para las llaves primarias de ambas tablas.

Las variables de `.env` son visibles solo para mostrar que fueron implementadas; esto nunca sucedería en la vida real. En un proyecto real, deberías copiar el archivo `.env.template` y configurarlo con tus variables de entorno correctas.

Se evitaron **code smells** y se implementaron los principios **SOLID**. No se incluyen demasiados comentarios para evitar redundancia, ya que se considera una [mala práctica](https://refactoring.guru/smells/comments). El mejor comentario es un buen nombre para métodos, atributos o clases.

> [!IMPORTANT]  
> Si estás en Linux/WSL, ejecuta: 
> ```bash
> mkdir mssql_data && sudo chown 10001:10001 mssql_data
> ```
> [Más detalles aquí](https://stackoverflow.com/a/77808783/15445661).  
> TL;DR: Esto es para mapear `/var/mssql-data` a la carpeta `mssql_data` en el proyecto.

> [!IMPORTANT]  
> Si estas en Windows:
> Puede que ser necesario crear la carpeta `mssql_data` si te lo pide.

# Endpoints

# Documentación de Swagger
Accede a Swagger UI en `http://localhost:3000/api-docs`

## Endpoints de Usuario

### POST `/api/user`
- **Descripción**: Crear un nuevo usuario.

### GET `/api/user`
- **Descripción**: Obtener todos los usuarios.
```json
{
  "firstName": "Tomas",
  "lastName": "Ra",
  "age": 20,
  "id": "E9F1423E-F36B-1410-8A51-0032650D1446"
}
```

### GET `/api/user/{id}`
- **Descripción**: Obtener un usuario por su ID.

### PATCH `/api/user/{id}`
- **Descripción**: Actualizar los detalles de un usuario por su ID.

### DELETE `/api/user/{id}`
- **Descripción**: Eliminar un usuario por su ID.


## Endpoints de Tarea

### POST `/api/task`
- **Descripción**: Crear una nueva tarea.
```json
{
  "title": "Tarea nueva",
  "description": "Haciendo cosas",
  "completed": false,
  "userId": "E1F1423E-F36B-1410-8A51-0032650D1446"
}
```

### GET `/api/task`
- **Descripción**: Obtener todas las tareas.

### GET `/api/task/{id}`
- **Descripción**: Obtener una tarea por su ID.

### PATCH `/api/task/{id}`
- **Descripción**: Actualizar el estado de una tarea por su ID.

### DELETE `/api/task/{id}`
- **Descripción**: Eliminar una tarea por su ID.

### GET `/api/task/user/{id}`
- **Descripción**: Obtener tareas por el ID del usuario.


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

### Correr db local
Para ejecutar la base de datos mssql necesitas usar correr `docker-compose.yaml`, usa el siguiente comando:
```bash
docker-compose up
```

Si necesita hacerle un cambio al archivo `docker-compose.yaml`:
```bash
docker-compose up --force-recreate   
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