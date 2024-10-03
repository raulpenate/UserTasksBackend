<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Descripción

Esta es una aplicación para usuarios y tareas.

Las variables de `.env` son visibles solo para mostrar que fueron implementadas; esto nunca sucedería en la vida real. En la vida real se debería copiar `.env.template` y cambiarlo a las variables de entorno.

> [!IMPORTANT]  
> Si estás en Linux/WSL, ejecuta: 
> ```bash
> sudo chown 10001:10001 mssql
> ```
> [Click aquí para explicación.](https://stackoverflow.com/a/77808783/15445661)
> TL;DR: Para poder mapear `/var/mssql-data` a la carpeta llamada `mssql` en el proyecto.

## Configuración del proyecto

```bash
$ pnpm install
```

## ¿Necesitas instalar `pnpm`?
```bash
npm install -g pnpm

# si funciono podrás usar
pnpm -v
```

## ¿Por qué `pnpm`?
Para optimizar el espacio en disco y mejorar la velocidad de instalación de paquetes al compartir dependencias/librerias entre proyectos.

## Compilar y ejecutar el proyecto

```bash
# modo desarrollo
pnpm run start

# modo vigilancia
pnpm run start:dev

# modo producción
pnpm run start:prod
```


## Uso
Si deseas hacer cambios en `docker-compose.yml`, puedes usar `clean-compose.sh` para limpiarlo. Al ser `bash` se necesita Linux/WSL para correrse, pero se puede agregar su versión `.ps1` para usuarios Windows si llegara a ser necesario.

> [!WARNING]  
> Esto eliminará la carpeta `mssql` donde esta toda la data del contenedor y, dado que se borro, se volverá  a aplicar el `chown`. 
```bash
# Solo la primera vez
sudo chmod +x clean-compose.sh

# Para ejecutarlo:
./clean-compose.sh
```

## Licencia
Agregué la licencia MIT como ejemplo. Un dato curioso es que si no se especifica una licencia, se aplicará la que GitHub nos hace firmar en sus políticas, en el peor de los casos, la que determine un juez.