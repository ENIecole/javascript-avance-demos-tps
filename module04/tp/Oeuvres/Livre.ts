import {Oeuvre} from "./Oeuvre";
import {Acheteur} from "../Acheteur";

export class Livre extends Oeuvre {

    constructor(annee: number, titre: string, acheteur: Acheteur, meilleureEnchere: number) {
        super(annee, titre, acheteur, meilleureEnchere);
    }
}