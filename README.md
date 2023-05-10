# Ejercicio de Grid
Crear una página html con dos inputs(filas y columnas) y un botón y un div de 400x400 px.
- Tiene que tener un script y una hoja de estilos.
- La página tiene que generar una cuadricula en el div.
### por ejemplo:
> Si ponemos 2, 2 y pulsamos creará 4 elementos, 2 por fila , de 200x200 px.
> Si ponemos 4, 2 y pulsamos creará 8, 4 por fila, de 100x200 px.
> Si ponemos 4, 4 y pulsamos creará 16, 4 por fila en 4 columnas, de 100x100 px.

# Parte 2:
- Ahora la aplicación contará desde que se pulsa el botón generar:
  - Encima de la grid saldrá un campo de tiempo que irá incrementando cada segundo
  - Este campo usará el método de javascript "setInterval(function () {ACCIONES}, MILISEGUNDOS);"
  -Ejemplo que hace un alert con un hola mundo cada 10 segundos: setInterval(function () {alert("Hello world")}, 10000);
- Ahora la aplicación aceptará solo un valor
- El valor tiene que ser un número par, en caso de no serlo mostrará un error y no hará nada
- Con el valor se intentará montar un grid lo más cuadrado posible, para ello se realizarán las siguientes operaciones:
  - Sus elementos internos deben medir todos lo mismo
  - Se calculará la raiz cuadrada del número sqrt()
  - La raiz cuadrada significará las filas y columnas que nos gustaría que ocupara la grid
  - En función del resto la grid tendrá que crecer en filas y columnas para que todos los elementos quepan
### por ejemplo:
>Si ponemos 8 se generará una grid de 3 x 3 con 8 elementos dentro y un hueco vacío al final
>Si ponemos 20 se generará una grid de 5 x 4 completamente llena
>Si ponemos 22 se generará una grid de 5 x 5 con tres huecos libres al final
