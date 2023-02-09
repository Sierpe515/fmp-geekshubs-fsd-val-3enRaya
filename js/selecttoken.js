class Token {
    constructor(nombre){
        this.nombre = nombre;
    }
}

let token1 = new Token("token1P1");
let token2 = new Token("token2P1");
let token3 = new Token("token3P1");
let token4 = new Token("token1P2");
let token5 = new Token("token2P2");
let token6 = new Token("token3P2");

// DICCIONARIO

let tokens = {
    "token1P1" : token1,
    "token2P1" : token2,
    "token3P1" : token3,
    "token1P2" : token4,
    "token2P2" : token5,
    "token3P2" : token6,
}