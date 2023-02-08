//CAPTURO LOS INPUT
let playerInputs = {
    player1 : '',
    player2 : ''
}

let button = document.getElementById("button");

let inputsCapturados = Array.from(document.getElementsByTagName("input"));
// const GuardarDatos = () => {
//     //Ejemplo de guardado de datos en SessionStorage
//     sessionStorage.setItem("datosUsuarios", JSON.stringify(playerInputs));
// }
// const LeerDatos = () => {
//     //Ejemplo de lectura de datos en SessionStorage
//     let datosDeSesion = JSON.parse(sessionStorage.getItem("datosUsuarios"));
//     console.log(datosDeSesion);
// }
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

    console.log(playerInputs);
    
    sessionStorage.setItem("usuario", JSON.stringify(playerInputs));
})