class TypePlayer1 {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class TypePlayer2 {
    constructor(nombre){
        this.nombre = nombre;
    }
}

let p1Player = new TypePlayer1("p1Player");
let p1Cpu = new TypePlayer1("p1Cpu");
let p2Player = new TypePlayer2("p2Player");
let p2Cpu = new TypePlayer2("p2Cpu");

// DICCIONARIO

let typesBtn = {
    "p1Player" : p1Player,
    "p1Cpu" : p1Cpu,
    "p2Player" : p2Player,
    "p2Cpu" : p2Cpu,
}