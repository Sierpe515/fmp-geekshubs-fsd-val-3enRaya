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

// FUNCIONES

// SELECTED TOKENS

const printTokenP1 = (chosenToken) => {
    switch (chosenToken){

        case "token1P1":
            return "a";

        case "token2P1":
            return "c";

        case "token3P1":
            return "K";
    };
}

const printTokenP2 = (chosenToken) => {
    switch (chosenToken){
    
        case "token1P2":
            return "e";
    
        case "token2P2":
            return "k";
    
        case "token3P2":
            return "f";
    };
}

// FUNCIONES DE TURNOS

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
        contadTurnosP1.innerHTML = `Turnos: ${contadorTurnosP1}`
        sessionStorage.setItem("turnosP1", (contadorTurnosP1));
    } else {
        contadorTurnosP2++
        contadTurnosP2.innerHTML = `Turnos: ${contadorTurnosP2}`
        sessionStorage.setItem("turnosP2", (contadorTurnosP2));
    }

}

// FUNCIONES PARA EL GANADOR

const winnerP1 = () => {
    sessionStorage.setItem("winner", "X");
    document.getElementById("boardt").classList.add("boardflicker")
    setTimeout(()=>{
        window.open("../pages/winnerpage.html","_self")
    },4000); 
}

const winnerP2 = () => {
    sessionStorage.setItem("winner", "O");
    document.getElementById("boardt").classList.add("boardflicker2")
    setTimeout(()=>{
        window.open("../pages/winnerpage.html","_self")
    },4000);
}

const comprueboGanador = () => {
    console.log(miTablero);

    if (miTablero[0] === miTablero[1] && miTablero [0] === miTablero [2] && miTablero[0] !== ""){
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }
        
    } else if (miTablero[3] === miTablero[4] && miTablero [3] === miTablero [5] && miTablero[3]){
        juegoTerminado = true;

        if (miTablero[3] === "X"){
            winnerP1();
        } else if (miTablero[3] === "O"){
            winnerP2();
        }

    } else if (miTablero[6] === miTablero[7] && miTablero [6] === miTablero [8] && miTablero[6]){
        juegoTerminado = true;

        if (miTablero[6] === "X"){
            winnerP1();
        } else if (miTablero[6] === "O"){
            winnerP2();
        }

    } else if (miTablero[0] === miTablero[3] && miTablero [0] === miTablero [6] && miTablero[0]){
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }

    } else if (miTablero[1] === miTablero[4] && miTablero [1] === miTablero [7] && miTablero[1]){
        juegoTerminado = true;

        if (miTablero[1] === "X"){
            winnerP1();
        } else if (miTablero[1] === "O"){
            winnerP2();
        }

    } else if (miTablero[2] === miTablero[5] && miTablero [2] === miTablero [8] && miTablero[2]){
        juegoTerminado = true;

        if (miTablero[2] === "X"){
            winnerP1();
        } else if (miTablero[2] === "O"){
            winnerP2();
        }

    } else if (miTablero[0] === miTablero[4] && miTablero [0] === miTablero [8] && miTablero[0]){
        juegoTerminado = true;

        if (miTablero[0] === "X"){
            winnerP1();
        } else if (miTablero[0] === "O"){
            winnerP2();
        }

    } else if (miTablero[2] === miTablero[4] && miTablero [2] === miTablero [6] && miTablero[2]){
        juegoTerminado = true;

        if (miTablero[2] === "X"){
            winnerP1();
        } else if (miTablero[2] === "O"){
            winnerP2();
        }

    };

}

// FUNCIONES PARTIDA CPU

const intentarGanar = () => {

    combinacionGanadora.map(conseguirCombinacion => {
        let [pos1, pos2, pos3] = conseguirCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos2] === "O" && miTablero[pos3] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "Acercad vuestro esbelto gollete para un afeitado muy apurado";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos3].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos3].classList.add("colorP2");
            miTablero[pos3] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos3] === "O" && miTablero[pos2] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "Acercad vuestro esbelto gollete para un afeitado muy apurado";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos2].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos2].classList.add("colorP2");
            miTablero[pos2] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos2] === "O" && miTablero[pos3] === "O" && miTablero[pos1] === "" && miTablero[pos2]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "Acercad vuestro esbelto gollete para un afeitado muy apurado";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos1].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos1].classList.add("colorP2");
            miTablero[pos1] = "O"
            fichacpu = true
        } else {}
    })
}

const intentarGanar2 = () => {
    console.log("Te voy a ganar")
    combinacionGanadora.map(conseguirCombinacion => {
        let [pos1, pos2, pos3] = conseguirCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos2] === "O" && miTablero[pos3] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "Hoy tu espada no morderá a diablo alguno";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos3].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos3].classList.remove("colorP2");
            tablero[pos3].classList.add("colorP1");
            miTablero[pos3] = "X";
            fichacpu = true;

        } else if (fichacpu == false && miTablero[pos1] === "O" && miTablero[pos3] === "O" && miTablero[pos2] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "Hoy tu espada no morderá a diablo alguno";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos2].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos2].classList.remove("colorP2");
            tablero[pos2].classList.add("colorP1");
            miTablero[pos2] = "X"
            fichacpu = true;
        } else if (fichacpu == false && miTablero[pos2] === "O" && miTablero[pos3] === "O" && miTablero[pos1] === "" && miTablero[pos2]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "Hoy tu espada no morderá a diablo alguno";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos1].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos1].classList.remove("colorP2");
            tablero[pos1].classList.add("colorP1");
            miTablero[pos1] = "X"
            fichacpu = true;
        } else {}
    })
}

const evitarGanador = () => {
    console.log("Voy a evitar que ganes")
    combinacionGanadora.map(EvitarCombinacion => {
        let [pos1, pos2, pos3] = EvitarCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos2] === "X" && miTablero[pos3] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "No parecéis tener prisa por volver a vuestra ardiente ratonera";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos3].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos3].classList.add("colorP2");
            miTablero[pos3] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos3] === "X" && miTablero[pos2] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "No parecéis tener prisa por volver a vuestra ardiente ratonera";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos2].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos2].classList.add("colorP2");
            miTablero[pos2] = "O"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos2] === "X" && miTablero[pos3] === "X" && miTablero[pos1] === "" && miTablero[pos2]){
            let devilDialeg = document.getElementById("dialoguepala");
            devilDialeg.innerHTML = "No parecéis tener prisa por volver a vuestra ardiente ratonera";
            devilDialeg.classList.add("dialoguepala2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguepala2");
            },5000);
            tablero[pos1].innerHTML = printTokenP2(tokenselectP2);
            tablero[pos1].classList.add("colorP2");
            miTablero[pos1] = "O"
            fichacpu = true
        } else {}
    })
}

const evitarGanador2 = () => {

    combinacionGanadora.map(EvitarCombinacion => {
        let [pos1, pos2, pos3] = EvitarCombinacion;
        
        if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos2] === "X" && miTablero[pos3] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "He visto aceros más sedientos de sangre y mentes más ágiles";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos3].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos3].classList.remove("colorP2");
            tablero[pos3].classList.add("colorP1");
            miTablero[pos3] = "X"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos1] === "X" && miTablero[pos3] === "X" && miTablero[pos2] === "" && miTablero[pos1]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "He visto aceros más sedientos de sangre y mentes más ágiles";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos2].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos2].classList.remove("colorP2");
            tablero[pos2].classList.add("colorP1");
            miTablero[pos2] = "X"
            fichacpu = true
        } else if (fichacpu == false && miTablero[pos2] === "X" && miTablero[pos3] === "X" && miTablero[pos1] === "" && miTablero[pos2]){
            let devilDialeg = document.getElementById("dialoguedevil");
            devilDialeg.innerHTML = "He visto aceros más sedientos de sangre y mentes más ágiles";
            devilDialeg.classList.add("dialoguedevil2");
            setTimeout(()=>{
                devilDialeg.classList.remove("dialoguedevil2");
            },5000);
            tablero[pos1].innerHTML = printTokenP1(tokenselectP1);
            tablero[pos1].classList.remove("colorP2");
            tablero[pos1].classList.add("colorP1");
            miTablero[pos1] = "X"
            fichacpu = true
        } else {}
    })
}

const jugadaCpu = () => {
    
    if (fichacpu == false){
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== ""){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        aleatorio.innerHTML = printTokenP2(tokenselectP2);
        aleatorio.classList.add("colorP2");
        miTablero[aleatorio.id] = "O";
        fichacpu = true
    }
}

const jugadaCpu2 = () => {
    
    if (fichacpu == false){
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== ""){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        aleatorio.innerHTML = printTokenP1(tokenselectP1);
        aleatorio.classList.remove("colorP2");
        aleatorio.classList.add("colorP1");
        miTablero[aleatorio.id] = "X";
        fichacpu = true
    }
}

const robarCpu = () => {
    if (contadorTurnosP1 > 3){
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== printTokenP2(tokenselectP2)){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        aleatorio.innerHTML = "";
        miTablero[aleatorio.id] = "";
        console.log(aleatorio);
        fichaP2++;
    }
}

const robarCpu2 = () => {
    if (contadorTurnosP2 > 2){
        let aleatorio = tablero[Math.floor(Math.random() * tablero.length)];
        while (aleatorio.innerHTML !== printTokenP1(tokenselectP1)){
            aleatorio = tablero[Math.floor(Math.random() * tablero.length)]
        }
        aleatorio.innerHTML = "";
        miTablero[aleatorio.id] = "";
        console.log(aleatorio);
        fichaP2++;
    }
}

// VARIABLES DE TIPO DE JUGADOR Y DE TOKEN

let typeP1pl = sessionStorage.getItem('typePlayerChosenP1')
let typeP2pl = sessionStorage.getItem('typePlayerChosenP2')

console.log(typeP1pl === "p1Player");
console.log(typeP2pl === "p2layer");

const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')

// TIPOS DE JUEGO

// PLAYER VS PLAYER

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
                    
                    if (turno == true){
                        celda.classList.remove("colorP2");
                        celda.classList.add("colorP1");
                    } else {
                        celda.classList.add("colorP2");
                    }

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

// PLAYER VS CPU

if (typeP1pl === "p1Player" && typeP2pl === "p2Cpu"){
    
    tablero.map(
        (celda) => {
            celda.addEventListener('click', ()=> {
    
                if (juegoTerminado) return;
    
                if((celda.innerHTML === "") && (fichaP1 > 0)){
                    
                    celda.innerHTML = printTokenP1(tokenselectP1);
                    celda.classList.remove("colorP2")
                    celda.classList.add("colorP1");
                    
                    fichaP1--;
                    fichasPlayer1.innerHTML = `Fichas: ${fichaP1}`

                    contadorTurnosP1++
                    contadTurnosP1.innerHTML = `Turnos: ${contadorTurnosP1}`
                    sessionStorage.setItem("turnosP1", (contadorTurnosP1));
    
                    miTablero[celda.id] = "X";

                    comprueboGanador();
    
                    fichacpu = false;
    
                    robarCpu();
    
                    intentarGanar ();
                    
                    evitarGanador ();
                    
                    jugadaCpu();
    
                    fichaP2--;
                    fichasPlayer2.innerHTML = `Fichas: ${fichaP2}`
    
                    fichaBorrada = false

                    contadorTurnosP2++
                    contadTurnosP2.innerHTML = `Turnos: ${contadorTurnosP2}`
                    sessionStorage.setItem("turnosP2", (contadorTurnosP2));
    
                    comprueboGanador();

    
                    // turno = !turno;
                } else if ((celda.innerHTML === printTokenP1(tokenselectP1)) && (fichaP1 === 0)){
                        celda.innerHTML = "";
                        fichaBorrada = true;
                        fichaP1++;
    
                    miTablero[celda.id] = "";
                }
            })
        }
    )

}

// CPU VS PLAYER

if (typeP1pl === "p1Cpu" && typeP2pl === "p2Player"){

    tablero.map(
        (celda) => {   
    
            if (juegoTerminado) return;

                const tokenselectP1 = sessionStorage.getItem('tokenChosenP1')
                console.log(tokenselectP1)
                const tokenselectP2 = sessionStorage.getItem('tokenChosenP2')
                console.log(tokenselectP2)
                
                jugadaCpu2();
    
            celda.addEventListener('click', ()=> {

                if((celda.innerHTML === "") && (fichaP1 > 0)){
                    
                    celda.innerHTML = printTokenP2(tokenselectP2);
                    celda.classList.add("colorP2");
                    
                    fichaP1-- ;
    
                    miTablero[celda.id] = "O";
    
                    fichaBorrada = false
    
                    contadorTurnosP2++;
                    contadTurnosP2.innerHTML = `Turnos: ${contadorTurnosP2}`;
                    sessionStorage.setItem("turnosP2", (contadorTurnosP2));
    
                    comprueboGanador();
    
                    fichacpu = false;

                    robarCpu2();
        
                    intentarGanar2 ();
                    
                    evitarGanador2 ();
                    
                    jugadaCpu2();

                    contadorTurnosP1++
                    contadTurnosP1.innerHTML = `Turnos: ${contadorTurnosP1}`
                    sessionStorage.setItem("turnosP1", (contadorTurnosP1));

                    comprueboGanador();
    
                } else if ((celda.innerHTML === printTokenP2(tokenselectP2)) && (fichaP1 === 0)){
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

// BUTTONS

resetbtn.addEventListener("click", ()=>{
    window.open("../pages/boardgame.html","_self")
})

backbtn.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.open("../pages/selectplayer.html","_self")
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


// FUNCION DE SELECCIÓN DE FICHAS MÁS ELEGANTE

// function getToken(type){
//     return {
//         'token1P1': "e",
//         'token2P1': "k",
//         'token3P1': "f",
//         'token1P2': "a",
//         'token2P2': "c",
//         'token3P2': "K"
//     }[type] || "a"; 
// }