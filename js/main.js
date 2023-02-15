let tablero = Array.from(document.getElementsByClassName("boardcell"));

let turno = true;
let contadorTurnosP1 = 0;
let contadorTurnosP2 = 0;

let fichaP1 = 3;
let fichaP2 = 3;

let fichaBorrada = false;

let miTablero = ["","","","","","","","",""];

let juegoTerminado = false;

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const marcadorTurno = () => {

    if (turno == true) {
        turnoPlayer1.innerHTML = "";
        turnoPlayer2.innerHTML = "Your turn";
    } else if (turno == false) {
        turnoPlayer1.innerHTML = "Your turn";
        turnoPlayer2.innerHTML = ""
    };

}

const contadorTurnos = () => {

    if (turno){
        contadorTurnosP1++
        console.log(contadorTurnosP1)
        contadTurnosP1.innerHTML = `Turnos: ${contadorTurnosP1}`
        sessionStorage.setItem("turnosP1", (contadorTurnosP1));
    } else {
        contadorTurnosP2++
        console.log(contadorTurnosP2)
        contadTurnosP2.innerHTML = `Turnos: ${contadorTurnosP2}`
        sessionStorage.setItem("turnosP2", (contadorTurnosP2));
    }

}

const winnerP1 = () => {
    console.log("Ha ganado X");
    sessionStorage.setItem("winner", "X");
    document.getElementById("boardt").classList.add("boardflicker")
    setTimeout(()=>{
        window.open("../pages/winnerpage.html","_self")
    },4000); 
}

const winnerP2 = () => {
    console.log("Ha ganado O");
    sessionStorage.setItem("winner", "O");
    document.getElementById("boardt").classList.add("boardflicker2")
    setTimeout(()=>{
        window.open("../pages/winnerpage.html","_self")
    },4000);
}

const comprueboGanador = () => {
    console.log(miTablero);

    if (miTablero[0] === miTablero[1] && miTablero [0] === miTablero [2] && miTablero[0] !== ""){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }
        
    } else if (miTablero[3] === miTablero[4] && miTablero [3] === miTablero [5] && miTablero[3]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[3] === "X"){
            winnerP1();
        } else if (miTablero[3] === "O"){
            winnerP2();
        }

    } else if (miTablero[6] === miTablero[7] && miTablero [6] === miTablero [8] && miTablero[6]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[6] === "X"){
            winnerP1();
        } else if (miTablero[6] === "O"){
            winnerP2();
        }

    } else if (miTablero[0] === miTablero[3] && miTablero [0] === miTablero [6] && miTablero[0]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }

    } else if (miTablero[1] === miTablero[4] && miTablero [1] === miTablero [7] && miTablero[1]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[1] === "X"){
            winnerP1();
        } else if (miTablero[1] === "O"){
            winnerP2();
        }

    } else if (miTablero[2] === miTablero[5] && miTablero [2] === miTablero [8] && miTablero[2]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[2] === "X"){
            winnerP1();
        } else if (miTablero[2] === "O"){
            winnerP2();
        }

    } else if (miTablero[0] === miTablero[4] && miTablero [0] === miTablero [8] && miTablero[0]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }

    } else if (miTablero[2] === miTablero[4] && miTablero [2] === miTablero [6] && miTablero[2]){
        console.log("Has ganado!");
        juegoTerminado = true;

        if (miTablero[2] === "X"){
            winnerP1();
        } else if (miTablero[2] === "O"){
            winnerP2();
        }

    };

}

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

            if (juegoTerminado) return;

            if((celda.innerHTML === "") && (fichaP1 || fichaP2 > 0)){

                marcadorTurno();

                celda.innerHTML = (turno) ? printTokenP1() : "O";

                (turno) ? fichaP1-- : fichaP2--;

                (turno) ? fichasPlayer1.innerHTML = `Fichas: ${fichaP1}` : fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`;

                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

                fichaBorrada = false

                contadorTurnos();

                turno = !turno;

            } else if ((celda.innerHTML !=="") && (fichaP1 || fichaP2 === 0) && (fichaBorrada === false)){

                if (celda.innerHTML === "X" && turno == true && contadorTurnosP1 >= 3){

                    celda.innerHTML = "";

                    fichaBorrada = true;

                    fichaP1++;

                    fichasPlayer1.innerHTML = `Fichas: ${fichaP1}`
                        
                } else if (celda.innerHTML === "O" && turno == false && contadorTurnosP1 >= 3){

                    celda.innerHTML = "";

                    fichaBorrada = true;

                    fichaP2++;

                    fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`

                    }

                miTablero[celda.id] = "";
            }
        })
    }
)

// RESET BUTTON

resetbtn.addEventListener("click", ()=>{
    window.open("../pages/boardgame.html","_self")
})

// INFO IN PLAYERS SQUARES

let fichasPlayer1 = document.getElementById("fichasp1");
fichasPlayer1.innerHTML = `Fichas: ${fichaP1}`;

let fichasPlayer2 = document.getElementById("fichasp2");
fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`;

let turnoPlayer1 = document.getElementById("marcadorTurnoP1");

let turnoPlayer2 = document.getElementById("marcadorTurnoP2");

let contadTurnosP1 = document.getElementById("turnosP1");
contadTurnosP1.innerHTML = `Turnos: ${contadorTurnosP1}`

let contadTurnosP2 = document.getElementById("turnosP2");
contadTurnosP2.innerHTML = `Turnos: ${contadorTurnosP2}`

// SELECTED TOKENS

const printTokenP1 = () => {
    switch (tokenP1){

        case "token1P1":
            "e"
        break;

        case "token2P1":
            "k"
        break;

        case "token3P1":
            "f"
        break;
    }
}