// Big int
const avantBigInt = 123456789123456789123456789;
const unTresGrandNombre = 123456789123456789123456789n;
console.log(avantBigInt);
console.log(unTresGrandNombre);
// =======

// Séparateur de milliers
const milliard = 1_000_000_000;
console.log(milliard);
// ======================

// Elvis operator
let christine = {
    nom: 'Christine',
    adresse: {
        numero: 42,
        rue: "Rue des acacia"
    }
}
let chantal = {
    nom: 'Chantal',
}
if (christine) {
    if (christine.adresse) {
        if (christine.adresse.rue) {
            console.log(christine.adresse.rue);
        }
    }
}
// console.log(chantal.adresse.rue);
console.log(chantal?.adresse?.rue);
// ================================

// ??
let ordinateur = {
    tps_de_traitement: 0
}
const duree = ordinateur?.tps_de_traitement ?? 50; // la durée est de 50 si tps_de_traitement est null
console.log(duree);
// ==============

// Destructuration
let bob = {
    nom: 'Bob',
    adresse: {
        numero: 42,
        rue: "Rue de Bob"
    }
}

const nomBob = bob.nom;
const numeroBob = bob.adresse.numero;
const rueBob = bob.adresse.rue;

console.log(nomBob + " " + numeroBob + " " + rueBob);

const {nom, adresse: {numero, rue}} = bob;
console.log(nom + " " + numero + " " + rue);
// =========================================

// Spread
let tabDePersonnes = [chantal, christine, bob];
let etAvecYann = [...tabDePersonnes, {nom: 'Yann'}];
console.table(tabDePersonnes);
console.table(etAvecYann);
// Encore mieux
let tab1 = [0, 1, 2, 3, 4];
let tab2 = [5, 6, 7, 8, 9];
tab1.push(...tab2);
console.table(tab1);
// =================