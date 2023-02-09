let tokenP1;
let tokenP2;

const chooseToken = (tokenChosen) => {

    if(!tokenP1){
        
            tokenP1 = tokens[tokenChosen];
            document.getElementById(tokenChosen).onclick = null;

            console.log(tokenP1)
            
    } else {

        tokenP2 = tokens[tokenChosen];
        document.getElementById(tokenChosen).onclick = null;

        console.log(tokenP2)

        let characters = Array.from(document.getElementsByClassName("tokenP1"));

        characters.map(
            (token) => {
                if(token.onclick !== null){
                    token.onclick = null;
                };
            }
        )

    }
}