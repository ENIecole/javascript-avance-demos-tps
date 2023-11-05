import {Acheteur} from "./Acheteur";
import {Auteur} from "./Auteur";
import {Sculpture} from "./Oeuvres/Sculpture";

let moi = new Acheteur("Caliendo", "Julien");
let auteur = new Auteur("Rodin", "Auguste");

let penseur = new Sculpture(
    1904,
    "Le penseur",
    "Bronze"
);

console.log(penseur.afficher());
penseur.encherir(1000, moi);
console.log(penseur.afficher());
