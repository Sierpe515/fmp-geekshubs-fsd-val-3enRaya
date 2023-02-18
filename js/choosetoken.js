let tokenP1;
let tokenP2;

const chooseToken1 = (tokenChosen) => {

    if(!tokenP1){

            console.log("Entro en P1")
        
            tokenP1 = tokensP1[tokenChosen];
            let tokenP1Selected = document.getElementById(tokenChosen);
            tokenP1Selected.onclick = null;
            tokenP1Selected.classList.add("tP1Selected");
            
            console.log(tokenP1)
            sessionStorage.setItem("tokenChosenP1", tokenChosen)

            let fichasp1 = Array.from(document.getElementsByClassName("p1SelectTokens"));

            fichasp1.map(
                ficha => ficha.onclick = null
            )
    }
}

const chooseToken2 = (tokenChosen) => {
            
    if (!tokenP2){

        console.log("Entro en P2")

        tokenP2 = tokensP2[tokenChosen];
        let tokenP2Selected = document.getElementById(tokenChosen);
            tokenP2Selected.onclick = null;
            tokenP2Selected.classList.add("tP2Selected");

        console.log(tokenP2)
        sessionStorage.setItem("tokenChosenP2", tokenChosen)

        let fichasp2 = Array.from(document.getElementsByClassName("p2SelectTokens"));

            fichasp2.map(
                ficha => ficha.onclick = null
            )
    }
}