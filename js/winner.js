let winner = sessionStorage.getItem("winner");
let usuario = JSON.parse(sessionStorage.getItem("usuario"));
let ggText = document.getElementById("turns");
let turnosP1 = sessionStorage.getItem("turnosP1");
let turnosP2 = sessionStorage.getItem("turnosP2");
let returnBtn = document.getElementById("returnBtn");

if (winner == "X"){
    document.body.style.backgroundImage = "url('../img/demonic-war_orig.jpg')";
    let player1 = document.getElementById("winner");
    player1.innerHTML = `¡Bien hecho, ${usuario.player1}!`;
    ggText.innerHTML = `Lograste vencer al ingenuo caballero en ${turnosP1.contTurnosP1} turnos. Gracias a ello pudiste
    dar la voz de alarma y pedir refuerzos. Con la llegada de nuevas hordas, la ciudad 
    sucumbió al terror de las fuerzas abisales. Ya nada podrá detener vuestro avance.`
} else {
    document.body.style.backgroundImage = "url('../img/337862.jpg')";
    let player2 = document.getElementById("winner");
    player2.innerHTML = `¡Bien hecho, ${usuario.player2}!`;
    ggText.innerHTML = `Gracias a tu astucia, sólo necesitaste ${turnosP2.contTurnosP2} turnos para poder librar
    al mundo de la vil criatura. Pero aún no podéis descansar, todavía queda mucho por hacer para erradicar la horda que 
    infesta la ciudad.`
};

returnBtn.addEventListener("click", ()=>{

    localStorage.clear();

    window.open("../pages/selectplayer.html","_self");

});