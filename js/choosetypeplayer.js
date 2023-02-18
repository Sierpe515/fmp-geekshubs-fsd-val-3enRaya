let typeP1;
let typeP2;

const chooseTypePl1 = (typeChosen) =>{

    if(!typeP1){
        
        typeP1 = typesBtn[typeChosen];

        let typeP1Selected = document.getElementById(typeChosen);
            typeP1Selected.onclick = null;
            typeP1Selected.classList.add("tyP1Selected");

        console.log(typeP1)
        sessionStorage.setItem("typePlayerChosenP1", typeChosen)

        let btnsP1 = Array.from(document.getElementsByClassName("typeBtnP1"));

        btnsP1.map(
            btn => btn.onclick = null
        )
    }
}

const chooseTypePl2 = (typeChosen) =>{

    if (!typeP2){

        typeP2 = typesBtn[typeChosen];
        let typeP2Selected = document.getElementById(typeChosen);
            typeP2Selected.onclick = null;
            typeP2Selected.classList.add("tyP2Selected");

        console.log(typeP2)
        sessionStorage.setItem("typePlayerChosenP2", typeChosen)

        let btnsP2 = Array.from(document.getElementsByClassName("typeBtnP2"));

            btnsP2.map(
                btn => btn.onclick = null
            )
    }
}
