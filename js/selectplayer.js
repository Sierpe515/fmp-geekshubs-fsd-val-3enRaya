
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
        let textAlertNotice = document.getElementById("textal");
        textAlertNotice.innerHTML = "Tanto demonios como paladines deben mostrar su nombre";
        textAlertNotice.classList.add("textalert1");
        setTimeout(()=>{
            textAlertNotice.classList.remove("textalert1");
        },5000);
        return;
    } else if (playerInputs.player1 === playerInputs.player2){
        let textAlertNotice = document.getElementById("textal");
        textAlertNotice.innerHTML = "Está escrito en las tablas sagradas y demoniacas que un paladín y un demonio, nunca compartirán nombre";
        textAlertNotice.classList.add("textalert1");
        setTimeout(()=>{
            textAlertNotice.classList.remove("textalert1");
        },5000);
        return;
    } 

    if ((sessionStorage.getItem("typePlayerChosenP1") === null) || (sessionStorage.getItem("typePlayerChosenP2") === null)){
        let textAlertNotice = document.getElementById("textal");
        textAlertNotice.innerHTML = "Debes elegir bando. Selecciona a quién quieres apoyar en esta contienda";
        textAlertNotice.classList.add("textalert1");
        setTimeout(()=>{
            textAlertNotice.classList.remove("textalert1");
        },5000);
        console.log("Debes elegir un tipo de jugador")
        return;
    }

    if ((sessionStorage.getItem("typePlayerChosenP1") === "p1Cpu") && (sessionStorage.getItem("typePlayerChosenP2") === "p2Cpu")){
        let textAlertNotice = document.getElementById("textal");
        textAlertNotice.innerHTML = "Nadie lo va a hacer todo por ti. No pueden haber dos CPU";
        textAlertNotice.classList.add("textalert1");
        setTimeout(()=>{
            textAlertNotice.classList.remove("textalert1");
        },5000);

        console.log("No pueden haber dos Cpus")
        return;
    }

    if ((sessionStorage.getItem("tokenChosenP1") === null) || (sessionStorage.getItem("tokenChosenP2") === null)){
        let textAlertNotice = document.getElementById("textal");
        textAlertNotice.innerHTML = "Elige un símbolo sagrado o demoníaco que te representen en la contienda";
        textAlertNotice.classList.add("textalert1");
        setTimeout(()=>{
            textAlertNotice.classList.remove("textalert1");
        },5000);
        console.log("Debes elegir una ficha para cada jugador")
        return;
    }

    console.log(playerInputs);
    
    sessionStorage.setItem("usuario", JSON.stringify(playerInputs));

    window.open("../pages/boardgame.html","_self")

})

button2.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.open("../pages/selectplayer.html","_self");
})