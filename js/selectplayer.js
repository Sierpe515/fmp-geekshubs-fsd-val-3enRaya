
let inputsCapturados = Array.from(document.getElementsByClassName("namePlayer"));

let button = document.getElementById("button");

let typePlayer1 = sessionStorage.getItem("typePlayerChosenP1");
let typePlayer2 = sessionStorage.getItem("typePlayerChosenP2");

let playerInputs = {
        player1 : '',
        player2 : ''
    }

inputsCapturados.map(
    (inputSeleccionado) => {
        inputSeleccionado.addEventListener("input", ()=> {
                    
            for(let inputText in playerInputs){
                if(inputSeleccionado.name === inputText){
                playerInputs[inputText] = inputSeleccionado.value;
                }
            }
        })
    }
)

button.addEventListener("click", ()=>{

    if( (playerInputs.player1 === "") || (playerInputs.player2 === "")){
        return;
    } else if (playerInputs.player1 === playerInputs.player2){
        return;
    } 

    if ((sessionStorage.getItem("typePlayerChosenP1") === "p1Cpu") && (sessionStorage.getItem("typePlayerChosenP2") === "p2Cpu")){
        console.log("No pueden haber dos Cpus")
        return;
    }

    if ((sessionStorage.getItem("typePlayerChosenP1") === null) || (sessionStorage.getItem("typePlayerChosenP2") === null)){
        console.log("Debes elegir un tipo de jugador")
        return;
    }

    if ((sessionStorage.getItem("tokenChosenP1") === null) || (sessionStorage.getItem("tokenChosenP2") === null)){
        console.log("Debes elegir una ficha para cada jugador")
        return;
    }

    console.log(playerInputs);
    
    sessionStorage.setItem("usuario", JSON.stringify(playerInputs));

    window.open("../pages/boardgame.html","_self")

})