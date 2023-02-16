let tablero = Array.from(document.getElementsByClassName("boardcell"));

let turno = true;
let contadorTurnosP1 = 0;
let contadorTurnosP2 = 0;

let fichaP1 = 3;
let fichaP2 = 3;

let fichacpu = false;

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

const intentarGanar = () => {
    console.log("Te voy a ganar")
    combinacionGanadora.map(conseguirCombinacion => {
        let [pos1, pos2, pos3] = conseguirCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos2] === "O" && miTablero[pos3] === "" && miTablero[pos1]){
            console.log("Aquí te puedo ganar");
            console.log([pos3])
            // reprodAudio ();
            tablero[pos3].innerHTML = "O";
            miTablero[pos3] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos3] === "O" && miTablero[pos2] === "" && miTablero[pos1]){
            console.log("Aquí te puedo ganar", miTablero[pos2]);
            console.log([pos2])
            tablero[pos2].innerHTML = "O";
            miTablero[pos2] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos2] === "O" && miTablero[pos3] === "O" && miTablero[pos1] === "" && miTablero[pos2]){
            console.log("Aquí te puedo ganar", miTablero[pos1]);
            console.log([pos1])
            tablero[pos1].innerHTML = "O";
            miTablero[pos1] = "O"
            fichacpu = true
        } else {
            console.log("Por aquí no pasa nada");
            console.log(fichacpu)
        }
    })
}

const evitarGanador = () => {
    console.log("Voy a evitar que ganes")
    combinacionGanadora.map(EvitarCombinacion => {
        let [pos1, pos2, pos3] = EvitarCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos2] === "X" && miTablero[pos3] === "" && miTablero[pos1]){
            console.log("Aquí me puedes ganar");
            console.log([pos3])
            // reprodAudio ();
            tablero[pos3].innerHTML = "O";
            miTablero[pos3] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos3] === "X" && miTablero[pos2] === "" && miTablero[pos1]){
            console.log("Aquí me puedes ganar", miTablero[pos2]);
            console.log([pos2])
            tablero[pos2].innerHTML = "O";
            miTablero[pos2] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos2] === "X" && miTablero[pos3] === "X" && miTablero[pos1] === "" && miTablero[pos2]){
            console.log("Aquí me puedes ganar", miTablero[pos1]);
            console.log([pos1])
            tablero[pos1].innerHTML = "O";
            miTablero[pos1] = "O"
            fichacpu = true
        } else {
            console.log("Por aquí no pasa nada");
            console.log(fichacpu)
        }
    })
}

const jugadaCpu = () => {
    
    if (fichacpu == false){
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        console.log (aleatorio)
        while (aleatorio.innerHTML !== ""){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        aleatorio.innerHTML = "O";
        miTablero[aleatorio.id] = "O";
        fichacpu = true
    }

}

const robarCpu = () => {
    if (contadorTurnosP1 > 3){
        console.log ("Debería de quitar una ficha")
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== "O"){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        console.log("Voy a robar esta ficha");
        aleatorio.innerHTML = "";
        miTablero[aleatorio.id] = "";
        console.log(aleatorio);
        fichaP2++;
    }
}

const robarCpu2 = () => {
    if (contadorTurnosP1 > 2){
        console.log ("Debería de quitar una ficha")
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== "O"){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        console.log("Voy a robar esta ficha");
        aleatorio.innerHTML = "";
        miTablero[aleatorio.id] = "";
        console.log(aleatorio);
        fichaP2++;
    }
}

let typeP1pl = sessionStorage.getItem('typePlayerChosenP1')
let typeP2pl = sessionStorage.getItem('typePlayerChosenP2')

console.log(typeP1pl === "p1Player");
console.log(typeP2pl === "p2layer");

const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')

if (typeP1pl === "p1Player" && typeP2pl === "p2Player"){

    tablero.map(
        (celda) => {
            celda.addEventListener('click', ()=> {

                if (juegoTerminado) return;

                if((celda.innerHTML === "") && (fichaP1 || fichaP2 > 0)){

                    marcadorTurno();

                    const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')

                    const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')
                    
                    celda.innerHTML = (turno) ? printTokenP1(tokenselectP1) : printTokenP2(tokenselectP2);

                    (turno) ? fichaP1-- : fichaP2--;

                    (turno) ? fichasPlayer1.innerHTML = `Fichas: ${fichaP1}` : fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`;

                    miTablero[celda.id] = (turno) ? "X" : "O";

                    comprueboGanador();

                    fichaBorrada = false

                    contadorTurnos();

                    turno = !turno;

                } else if ((celda.innerHTML !=="") && (fichaP1 || fichaP2 === 0) && (fichaBorrada === false)){

                    if (celda.innerHTML === printTokenP1(tokenselectP1) && turno == true && contadorTurnosP1 >= 3){

                        celda.innerHTML = "";

                        fichaBorrada = true;

                        fichaP1++;

                        fichasPlayer1.innerHTML = `Fichas: ${fichaP1}`
                            
                    } else if (celda.innerHTML === printTokenP2(tokenselectP2) && turno == false && contadorTurnosP1 >= 3){

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

}

if (typeP1pl === "p1Player" && typeP2pl === "p2Cpu"){
    
    tablero.map(
        (celda) => {
            celda.addEventListener('click', ()=> {
    
                if (juegoTerminado) return;
    
                if((celda.innerHTML === "") && (fichaP1 > 0)){

                    // const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
                    // const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')
                    // console.log(tokenselectP2)

                    
                    celda.innerHTML = getTokenP1(tokenselectP1);
                    
                    fichaP1--;
                    fichasPlayer1.innerHTML = `Fichas: ${fichaP1}`

                    contadorTurnosP1++
                    console.log(contadorTurnosP1)
    
                    miTablero[celda.id] = "X";
    
                    fichacpu = false;
    
                    robarCpu();
    
                    intentarGanar ();
                    
                    evitarGanador ();
                    
                    jugadaCpu();
    
                    fichaP2--;
                    fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`
    
                    fichaBorrada = false
    
                    comprueboGanador();
    
                    // turno = !turno;
                } else if ((celda.innerHTML !=="") && (fichaP1 === 0)){
                        celda.innerHTML = "";
                        fichaBorrada = true;
                        fichaP1++;
    
                    miTablero[celda.id] = "";
                }
            })
        }
    )

}

if (typeP1pl === "p1Cpu" && typeP2pl === "p2Player"){

    tablero.map(
        (celda) => {   
    
            if (juegoTerminado) return;
    
            // while((celda.innerHTML === "") && (fichaP1 > 0) && fichacpu === false){
                console.log('hola');
                // robarCpu();
    
                // intentarGanar ();
                
                // evitarGanador ();

                const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
                console.log(tokenselectP1)
                const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')
                console.log(tokenselectP2)
                
                jugadaCpu();
                console.log('adios');
    
            // }
    
            celda.addEventListener('click', ()=> {
                console.log('1');
                if((celda.innerHTML === "") && (fichaP1 > 0)){
                console.log('2');

                    // const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
                    // const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')
                    // console.log(tokenselectP2)
                    
                    celda.innerHTML = "X";
                    
                    fichaP1-- ;
    
                    miTablero[celda.id] = "X";
    
                    fichaBorrada = false
    
                    contadorTurnosP1++
                    console.log(contadorTurnosP1)
    
                    comprueboGanador();
    
                    fichacpu = false;
    
                    // while((celda.innerHTML === "") && (fichaP1 > 0) && fichacpu === false){
                console.log('hola');
                robarCpu2();
    
                intentarGanar ();
                
                evitarGanador ();
                
                jugadaCpu();
                console.log('adios');

                comprueboGanador();
    
            // }
    
                } else if ((celda.innerHTML !=="") && (fichaP1 === 0)){
                console.log('3');
    
                        celda.innerHTML = "";
                        fichaBorrada = true;
                        fichaP1++;
    
                    miTablero[celda.id] = "";
                }
            })
    
        }
    )

}

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

const printTokenP1 = (chosenToken) => {
    switch (chosenToken){

        case "token1P1":
            console.log("ficha1")
            return "a";

        case "token2P1":
            console.log("ficha2")
            return "c";

        case "token3P1":
            console.log("ficha3")
            return "K";
    };
}

const printTokenP2 = (chosenToken) => {
    switch (chosenToken){
    
        case "token1P2":
            console.log("ficha4")
            return "e";
    
        case "token2P2":
            console.log("ficha5")
            return "k";
    
        case "token3P2":
            console.log("ficha6")
            return "f";
    };

    // const result = {
    //     token1P1: "e",
    //     token2P1: "k" 
    // }

    // return result.chosenToken
}

function getTokenP1 (type){
    return {
        'token1P1': "a",
        'token2P1': "c",
        'token3P1': "K"
    }[type];
}

function getTokenP2 (type){
    return {
        'token1P2': "e",
        'token2P2': "k",
        'token3P2': "f"
    }[type];
}