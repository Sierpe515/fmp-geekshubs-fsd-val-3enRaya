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
 
Pero como se puede ver una vez accedemos a nuestra aplicación, hemos ido más haya, introduciendo muchos más elementos de los requeridos, como que se puedan robar fichas, la opción de jugar contra una cpu que es capaz de evitar jugadas ganadoras y hacer las suyas propias, la posibilidad de elegir el token con el que se quiere jugar y que este tenga el color correspondiente a cada jugador. Así como que sucedan eventos en los que los personajes interactuen cuando representan a la cpu, etc.

Mi idea ha sido crear un tres en raya diferente, con una ambientación única, de la que hablaremos más adelante, para que el usuario/jugador sintiese una inmersión mayor y diferenciada del resto de juegos de tres en raya.

***

### Manejo

Se utiliza como cualquier otra web. Tan sólo hay que acceder a ella mediante las instrucciones indicadas en la sección "Cómo se lanza" y moverse a través de ella mediante los botones:

![13](https://user-images.githubusercontent.com/121863208/219944434-cf0b7a54-f0af-4000-9ca6-6e895cd889c6.JPG)


Siempre y cuando hayamos rellenado o seleccionado las opciones que se nos requieren. Esperamos que dicho proceso resulte todo lo intuitivo posible y el usuario pueda servirse de los mensajes flotantes que aparecerán cuando sea necesario que seleccione alguna opción para poder acceder al juego.

![17](https://user-images.githubusercontent.com/121863208/219944258-aa04e514-f362-4ac5-9cae-b84a6a497c94.JPG)

Una vez se haya accedido a la pantalla del tablero de juego, habrá que seguir las normas descritas en la siguiente sección. 
Dentro de las diversas páginas que componen, el jugador encontrará botonos que le permitirán regresar al menú, reiniciar las opciones o reiniciar el juego.

***

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

***

### Cómo se ha hecho

La aplicación se ha desarrollado utilizando HTML5, maquetado gracias a Bootstrap y CSS, pero toda la mecánica y la lógica se la debemos al uso de Javascript.
Al utilizar la tecnología de bootstrap se ha dado formato mediante sus reglas y lenguaje, lo que resulta de gran ayuda para que el resultado sea mucho más escalable y responsive.
Gracias al uso de JS, nos encontramos ante una aplicación web que nos permite interactuar con ella. Ya no estamos ante una simple web que sólo nos permite navegar y ver la información que nos muestre. Estamos ante una aplicación que nos permite desatar eventos e incluso jugar en ella, sirviéndose de una lógica.

Hemos querido ser bastante ambiciosos en este, nuestro primer proyecto utilizando la tecnología JS, y hemos metido una buena cantidad de mecánicas.
Lo más destacable, a mi parecer, es que no sólo se pueden poner y quitar fichas, sino que se ha implementado una cpu completamente funcional. Esta cpu tiene la capacidad de buscar sus jugadas ganadoras, así como evitar las del rival, todo ello con una dosis de aleatoriedad para que cada partida sea distinta y la cpu tenga la posibilidad de fallar en sus jugadas.

![10](https://user-images.githubusercontent.com/121863208/219962719-f43aedde-7f3a-47ed-b90d-e2e6ed139515.jpeg)
![11](https://user-images.githubusercontent.com/121863208/219962721-ec2d30f6-600f-4a2c-8124-78a66c9f3f70.jpeg)

Como se aprecia en las imágenes, se han realizado bocetos de cada página antes de desarrollarla. Así como una lista de tareas pendientes para incluir o modificar y poderlo hacer de forma ordenada y que ninguna de ellas caiga en el olvido.

Hay tareas que sobre el papel aparentaban ser sencillas, pero que finalmente han resultado ser arduas y costosas, como por ejemplo la selección de fichas del jugador. Para un primer proyecto de JS, el hecho de dar varias opciones, que una vez seleccionada la ficha elegida destacase sobre el resto, al tiempo que las bloqueaba, para después en el tablero recoger la información o valores relativa a las fichas y asignar el token a cada jugador, que además será del color asignado a cada personaje, ha resultado más complicado de lo que en un primer momento se planteó.

![8](https://user-images.githubusercontent.com/121863208/219963077-073b8f03-68e4-4b8f-a668-64a585d0f2d2.JPG)

Cabe por último, destacar que en este proyecto hemos aplicado una buena cantidad de elementos de los aprendidos de JS, ya que además de una buena cantidad de if, también se han utilizado bucles y funciones. Muchas de estas funciones consistian en mapear el tablero para localizar las fichas o las casillas vacias, otras mapeaban arrays, ya sea para recoger información sobre variables o sobre el mismo tablero.

***

### Ambientación

La idea de Tic Tac Toe vs Devil surgió un poco por azar. El resultado final ha sido un juego con una fuerte influencia de juegos clásicos de los '90 como Diablo, pero no fue la idea inicial.
Todo surge a raiz de buscar fuentes para representar unas "X" y unas "O" distintas a lo habitual, cuando en dicha busqueda me topé con la fuente "Mephisto" que es una suerte de símbolos oscuros y ocultistas. Eso me originó una primera idea de hacer una partida de tres en raya contra el diablo. En mi mente, se trataba de un diablo moderno, elegante y pícaro, que quiere jugarse tu alma a una partida contra su celebre inteligencia. Fue ya metido en la tarea de buscar las imágenes con las que decorar el juego, encontré una buena cantidad de material relacionado con la saga Diablo u otros juegos de rol de ambientación oscura, como Dark Souls y otros muchos.

![15](https://user-images.githubusercontent.com/121863208/219964241-84594113-fa16-450c-ad6b-d13166157445.JPG)

Todo ello me llevó a la nostalgia y al recuerdo de aquella poderosa sensación de las tardes en la aldea del primer Diablo antes de descender a las mazmorras. Eso y la fuerza de las imágenes de demonios, caballeros, paladines, escenarios de decadentes aldeas o ciudades medievales...

![14](https://user-images.githubusercontent.com/121863208/219964384-9c980201-4e52-437b-9263-e1f05a396489.JPG)
![16](https://user-images.githubusercontent.com/121863208/219964387-b817dfb3-69da-42cb-8431-fc08faff5a91.JPG)

Por ello, la primera idea de un diablo moderno quedó desplazada por otra de un juego más oscuro que evocase a los clásicos de la fantasía épica que tan buenos momentos me dio en mi juventud.


***

### Diseño

Aquí haremos referencia, no sólo a como entran en juego y se combinan los elementos de la ambientación descrita anteriormente, sino también a cómo se han empleado para dar un estilo atractivo y llamativo para el usuario.

Por supuesto, el juego ha sido desarrollado con la filosofía del mobile first, pero se han tenido en cuenta una gran cantidad de tamaños para comprobar que todos los diseños se ajustaban en cada uno de ellos, como se puede apreciar en las imágenes de la sección "Qué es", que muestran la página introductoria con sendas vistas de la pantalla en versión mobile y desktop.

También hay que hacer referencia a la página de selección de personajes, que se pensó en un primer momento para representase en la versión mobile una escalera que asciende del infierno hasta el cielo, en la que el demonio estaba en la parte inferior (infierno) y el paladin en la superior (cielo). En la versión desktop el background era de una puerta tenebrosa al infierno que separaba a ambos personales.

![1](https://user-images.githubusercontent.com/121863208/219965087-03933f69-6b2a-41f5-b129-c8ee5f5933bd.JPG)
![4](https://user-images.githubusercontent.com/121863208/219965089-0301d894-d8e8-4e68-afea-9164e3739b91.JPG)

Pero finalmente, decidimos descartar la primera idea, ya que visualmente, a nuestro parecer, ganaba más fuerza la segunda imagen y resultaba menos cargante a la vista del usuario.

El juego tiene más aspectos de diseño muy llamativos como varios elementos dinámicos seleccionados con cuidado para que no sobrecarguen al jugador. Pero finalmente, el objetivo del proyecto no era el manejo de los lenguajes de marcado ni el diseño del juego, sino de la aplicación de JS.
Por eso, otros aspectos visuales se han introducido mediante eventos de JS. Cuando la cpu encarna a alguno de los personajes, estos lanzan pullas o comentarios en determinados momentos de la partida.

![2](https://user-images.githubusercontent.com/121863208/219965364-4934d235-8b11-448c-a0ba-543d4e1ff33a.JPG)
![3](https://user-images.githubusercontent.com/121863208/219965366-ea87d518-78e6-42bf-bb9c-cd16191fa704.JPG)

Como se puede apreciar, estos comentarios tienen distinto aspecto en su versión mobile y en la desktop.


***

### Licencia

La licencia utilizada es una Creative Commons Legal Code.
Para la realización de este trabajo académico se han utilizado imagenes pertenecientes a "Diablo", propiedad de Blizzar Entertaiment, y otras sagas fantásticas.


***

### Problemas conocidos

En esta ocasión, los problemas conocidos han sido aspectos del juego por el plazo de tiempo no ha dado tiempo a mejorarlos, pero que se plantean como una posibilidad de futuras mejoras.
Uno de estos aspectos es que no se ha conseguido inhabilitar una casilla de la que se acaba de mover una ficha, para evitar que se pueda hacer un turno en falso (quitar y volver a poner la ficha en la misma casilla), lo que, de todos modos, en este juego carece de sentido.
También me hubiera gustado aplicar un setTimeOut a los movimientos de la cpu, para que estos no se produjeran de forma tan instantánea.
Y, por último, en las partidas contra la cpu, la cpu roba de forma aleatoria cualquiera de sus fichas, lo que supone desaprovechar un 66% de sus jugadas ganadoras. Me habría gustado introducir una función que evite este suceso o que, para que la cpu no sea tan implacable, reduzca dicho porcentaje.

***

### Futuras mejoras

En caso de poder continuar en un futuro con el proyecto, se abordarán soluciones a los aspectos descritos en la sección anterior, "Problemas conocidos".
También me gustaría ser capaz de añadir un modo player vs player online, para que se puedan hacer partidas desde distintos periféricos.
Otra posibilidad que se planteó en su momento es la de poder seleccionar distintos héroes o escenarios. Lo que seguiría en la línea de lo ya aplicado con las fichas.
Y por último, en lo que podría ser la idea más ambiciosa, sería la de introducir un modo historia complejo, con distintos personajes, escenarios y dificultades de cpu.


### Créditos

Este proyecto ha sido realizado integramente por mí, Fernando Martínez Pardo, estudiante de la edición de Enero de 2023 de GeeksHubs Academy.
