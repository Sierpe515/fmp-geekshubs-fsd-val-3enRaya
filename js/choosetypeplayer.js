let typeP1;
let typeP2;

const chooseTypePl = (typeChosen) =>{

    if(!typeP1){
        
        typeP1 = typesBtn[typeChosen];
        document.getElementById(typeChosen).onclick = null;
        // fbtnsP1.classList.add("selectedTokenP1");
        // Para añadir clase al elemento y cambiarle el bgcolor?

        console.log(typeP1)
        sessionStorage.setItem("typePlayerChosenP1", typeChosen)
        //Aqui deshabilitaremos los token del player1

        let btnsP1 = Array.from(document.getElementsByClassName("typeBtnP1"));

        btnsP1.map(
            btn => btn.onclick = null
        )
        
    } else if (!typeP2){

        typeP2 = typesBtn[typeChosen];
        document.getElementById(typeChosen).onclick = null;

        console.log(typeP2)
        sessionStorage.setItem("typePlayerChosenP2", typeChosen)

        let btnsP2 = Array.from(document.getElementsByClassName("typeBtnP2"));

            btnsP2.map(
                btn => btn.onclick = null
            )
    }
}
