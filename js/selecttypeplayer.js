class TypePlayer {
    constructor(nombre){
        this.nombre = nombre;
    }
}

let p1Player = new TypePlayer("p1Player");
let p1Cpu = new TypePlayer("p1Cpu");
let p2Player = new TypePlayer("p2Player");
let p2Cpu = new TypePlayer("p2Cpu");

// DICCIONARIO

let typesBtn = {
    "p1Player" : p1Player,
    "p1Cpu" : p1Cpu,
    "p2Player" : p2Player,
    "p2Cpu" : p2Cpu,
}