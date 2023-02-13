
let inputsCapturados = Array.from(document.getElementsByClassName("namePlayer"));

let button = document.getElementById("button");

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

    console.log(playerInputs);
    
    sessionStorage.setItem("usuario", JSON.stringify(playerInputs));

    window.open("../pages/boardgame.html","_self")

})