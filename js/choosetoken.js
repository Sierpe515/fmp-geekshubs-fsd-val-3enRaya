let tokenP1;
let tokenP2;

const chooseToken = (tokenChosen) => {

    if(!tokenP1){

            console.log("Entro en P1")
        
            tokenP1 = tokens[tokenChosen];
            document.getElementById(tokenChosen).onclick = null;
            // fichasp1.classList.add("selectedTokenP1");
            // Para añadir clase al elemento y cambiarle el bgcolor?
            
            console.log(tokenP1)
            sessionStorage.setItem("tokenChosenP1", tokenChosen)
            //Aqui deshabilitaremos los token del player1

            let fichasp1 = Array.from(document.getElementsByClassName("p1SelectTokens"));

            fichasp1.map(
                ficha => ficha.onclick = null
            )
            
    } else if (!tokenP2){

        console.log("Entro en P2")

        tokenP2 = tokens[tokenChosen];
        document.getElementById(tokenChosen).onclick = null;
        // document.getElementById(tokenChosen).classList.add("selectedTokenP1");

        console.log(tokenP2)
        sessionStorage.setItem("tokenChosenP2", tokenChosen)

        let fichasp2 = Array.from(document.getElementsByClassName("p2SelectTokens"));

            fichasp2.map(
                ficha => ficha.onclick = null
            )
    }
}