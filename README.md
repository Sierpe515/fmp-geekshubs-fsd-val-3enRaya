#### fmp-geekshubs-fsd-val-3enRaya

#Tic Tac Toe

![12](https://user-images.githubusercontent.com/121863208/219944283-e94de545-38d5-44a4-9572-cabbb1d95829.JPG)

***

#### Índice

- [Cómo se lanza](#cómo-se-lanza)
- [Qué es](#qué-es)
- [Manejo](#manejo)
- [Cómo se juega](#como-se-juega)
- [Cómo se ha hecho](#cómo-se-ha-hecho)
- [Ambientación](#ambientacion)
- [Diseño](#diseño)
- [Licencia](#licencia)
- [Problemas conocidos](#problemas-conocidos)
- [Futuras mejoras](#futuras-mejoras)
- [Créditos](#créditos)

***

### Cómo se lanza

El lanzamiento de este tic tac toe es muy sencillo. Puedes acceder a él traves del enlace: https://sierpe515.github.io/fmp-geekshubs-fsd-val-3enRaya/.
También se puede reproducir, asegurando un mejor funcionamiento, descargando los archivos de la página de GitHub: https://github.com/Sierpe515/fmp-geekshubs-fsd-val-3enRaya y ejecutando el archivo index.HTML.

***

### Qué es

Se trata de un juego digital jugable. Una versión del clásico juego tic tac toe, tres en raya o tres en línea, realizada a través de HTML5, usando las tecnologías de Bootstrap, CSS, pero sobretodo Javascript.
Cabe decir que este proyecto se ha desarrollado en un ámbito educativo con fines didácticos para la Academía GeeksHubs.
Para dicho proyecto se nos pedía que desarrollásemos un programa que nos permitiera jugar al tres en raya, poniendo en práctica el uso de los conocimientos adquiridos en materia de las herramientas mencionadas.

![6](https://user-images.githubusercontent.com/121863208/219943424-666cb7c4-e1dd-4ae8-a5eb-59b90188cd73.JPG)
![5](https://user-images.githubusercontent.com/121863208/219943429-59f94d94-167c-414e-88b3-385cca4af881.JPG)

Los requisitos para este proyecto era hacer un juego funcional, que nos permitiese, entre otras cosas: 
  - avanzar y retroceder entre varias páginas, 
  - que el usuario pudiera customizar su nombre antes de iniciar la partida y que este se conservase en las páginas siguientes,
  - que el usuario pueda iniciar una nueva partida,
  - y que cuando el jugador logre su objetivo de posicionar tres fichas en línea, el juego detecte la combinación ganadora y reconozca la victoria.
 
 Pero como se puede ver una vez accedemos a nuestra aplicación, hemos ido más haya, introduciendo muchos más elementos que los requeridos, como que se puedan robar fichas, la opción de jugar contra una cpu, ...
 =>

Mi idea ha sido crear un tres en raya diferente, con una ambientación única, de la que hablaremos más adelante, para que el usuario/jugador sintiese una inmersión mayor y diferenciada del resto de juegos de tres en raya.

***

### Manejo

Se utiliza como cualquier otra web. Tan sólo hay que acceder a ella mediante las instrucciones indicadas en la sección "Cómo se lanza" y moverse a través de ella mediante los botones:

![13](https://user-images.githubusercontent.com/121863208/219944434-cf0b7a54-f0af-4000-9ca6-6e895cd889c6.JPG)


Siempre y cuando hayamos rellenado o seleccionado las opciones que se nos requieren. Esperamos que dicho proceso resulte todo lo intuitivo posible y el usuario pueda servirse de los mensajes flotantes que aparecerán cuando sea necesario que seleccione alguna opción para poder acceder al juego.

![17](https://user-images.githubusercontent.com/121863208/219944258-aa04e514-f362-4ac5-9cae-b84a6a497c94.JPG)

Una vez se haya accedido a la pantalla del tablero de juego, habrá que seguir las normas descritas en la siguiente sección. 
Dentro de las diversas páginas que componen, el jugador encontrará botonos que le permitirán regresar al menú, reiniciar las opciones o reiniciar el juego.

### Cómo se juega

Una vez se accede al juego, el jugador deberá rellenar los campos destinados a los nombres de los dos personajes. Del mismo modo, deberá seleccionar un tipo de jugador para cada una de las partes, pudiendo jugar jugador vs jugador, jugador vs cpu y cpu vs jugador. También tendrá que seleccionar el tipo de ficha que quiere usar durante la partida.

![4](https://user-images.githubusercontent.com/121863208/219944866-93ab4bf5-52c2-4e68-9785-b0efff37a84e.JPG)

Una vez todos estos campos, que requiere el juego para acceder al tablero, estén rellenos, el botón Play Game nos permitirá acceder al tablero y se podrá empezar a jugar.

![13](https://user-images.githubusercontent.com/121863208/219944959-2e32032c-cdf4-4b3d-9584-d83dbb98e3df.JPG)

EL objetivo del juego es logar situar en el tablero tres fichas en línea antes que tu rival, ya sea línea vertical, horizontal o diagonal.
Cada jugador elige una ficha o token y, en su turno, deberá poner una única ficha.

En otras versiones del tres en raya, se ponen fichas hasta que todos los espacios del tablero quedan ocupados, momento en el que se termina el juego, haya ganador o no.
Pero en esta versión, se permite robar ficha, por lo que la partida no finaliza hasta que uno de los dos bandos logra su objetivo.
Por lo tanto, cada jugador dispone de tres fichas. Cuando todas estén sobre el tablero, entonces habrá que retirar una para volverla a posicionar en una casilla distinta.


### Cómo se ha hecho

La aplicación se ha desarrollado utilizando HTML5, maquetado gracias a Bootstrap y CSS, pero toda la mecánica y la lógica se la debemos al uso de Javascript.
Al utilizar la tecnología de bootstrap se ha dado formato mediante sus reglas y lenguaje, lo que resulta de gran ayuda para que el resultado sea mucho más escalable y responsive.
Gracias al uso de JS, nos encontramos ante una aplicación web que nos permite interactuar con ella. Ya no estamos ante una simple web que sólo nos permite navegar y ver la información que nos muestre. Estamos ante una aplicación que nos permite desatar eventos e incluso jugar en ella, sirviéndose de una lógica.

Hemos querido ser bastante ambiciosos en este, nuestro primer proyecto utilizando la tecnología JS, y hemos metido una buena cantidad de mecánicas.
...
...
...
=>

Una de las mayores diferencias con respecto a CSS es la forma de orgarnizar el marcado de la web. Mientras en CSS podíamos ordenar los contenedores mediante el uso del display flex y del grid, en Bootstrap se utiliza una organización de grid mediante filas, las cuales engloban columnas, muy distintas que nos obligan a diseñar la web teniendo en cuenta esto.

![WhatsApp Image 2023-01-30 at 21 07 34](https://user-images.githubusercontent.com/121863208/215604403-05130ab1-4dab-476a-bef4-f0180974a3d7.jpeg)
![WhatsApp Image 2023-01-30 at 21 08 02](https://user-images.githubusercontent.com/121863208/215604419-a6c87291-8c85-45b7-8161-894481dc41f2.jpeg)

Como se aprecia en las imágenes, se han realizado bocetos de cada página antes de desarrollarla. Pero debido, entre otras cosas, a nuestra inexperiencia, finalmente se acaban modificando para que el resultado final se ajuste mejor a nuestra idea conceptual.

***

### Licencia

La licencia utilizada es una Creative Commons Legal Code.
Para la realización de este trabajo académico se han utilizado imagenes pertenecientes a "World of Warcraft" y "Hearthstone", propiedad de Blizzar Entertaiment.
Además de imágenes para la decoración de la web, también se han extraido las fotos de las cartas y recetas de "El libro de Cocina de World of Warcraft".
Del mismo modo se ha dotado a las distintas páginas con un audio que reproduce la canción propia de la taverna de Hearthstone.

***

### Problemas conocidos

Al ajustar las páginas a ciertos tamaños muy estrechos, algunos elementos pueden montarse sobre otros debido a las dimensiones mínimas ajustables, sobretodo en imágenes. En cualquier caso, se ha procurado que no quede inutilizado ninguno de los elementos esenciales de las páginas que permiten navegar entre páginas o enviar formularios.

***

### Créditos

Este proyecto ha sido realizado únicamente por mí, Fernando Martínez Pardo, estudiante de la edición de Enero de 2023 de GeeksHubs Academy.
