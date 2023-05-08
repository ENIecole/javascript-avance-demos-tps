// Déclarations de variables en TypeScript
let unBooleen : boolean = true;
let age : number = 25;
let profession : string ="Informaticien";
// La syntaxe Javascript est possible
let uneVariable = 10;
// Préférez la syntaxe suivante :
let uneAutreVariable : any = 10;
uneAutreVariable="dix";

enum Etablissement{
    Maternelle,
    Primaire,
    College,
    Lycee,
    Superieur
};
let eni: Etablissement = Etablissement.Superieur;