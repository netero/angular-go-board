# angular-go-board

Proyecto creado con Angular CLI version 1.0.4. La intención es desarrollar un tablero de Go y generar una directiva que permita desplegarlo

## Servidor de desarrollo

Corre `ng serve` para iniciar el servidor de desarrollo. Ingresa en `http://localhost:4200/`.

## Build

Ejecuta `ng build` para construir el proyecto. Se generará una carpeta llamada `dist/`. Usa la opción `-prod` para construir una versión preparada para el ambiente productivo.

## Versión 1.0 (30/06/2017)

Las siguientes caracteristicas serán soportadas durante la versión 1.0 de la aplicación:

* Generar directiva con opciones para desplegar un tablero de go en un sitio web.
* Lectura/Escritura de archivos SGF.
* Modos de tablero:
    * game: El tablero inicia vacio y el modo de piedras será alternado.
    * review: El tablero inicia con una partida (Lectura de SGF) y será no editable.
    * study: El tablero puede o no iniciar vacio dependiendo de si le fue entregada una partida en formato SGF.
* Modos de piedras:
    * Blanca.
    * Negra.
    * Alternado.
* Herramientas:
    * Normal: Ninguna herramienta seleccionada. Herramienta por defecto en el modo review.
    * Marcadores de piedras:
        * Letras (A,B,C...).
        * Números (1,2,3...).
    * Insertar piedras: Herramienta por defecto en el modo study.