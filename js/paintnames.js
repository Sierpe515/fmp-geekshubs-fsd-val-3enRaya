let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let playersNombre = JSON.parse(sessionStorage.getItem("usuario"))

player1.innerHTML = `${playersNombre.player1}`
player2.innerHTML = `${playersNombre.player2}`;