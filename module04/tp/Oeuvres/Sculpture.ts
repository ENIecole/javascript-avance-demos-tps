import {Oeuvre} from "./Oeuvre";
import {Acheteur} from "../Acheteur";

export class Sculpture extends Oeuvre {
    private _matiere: string;

    constructor(annee: number, titre: string, matiere: string, meilleureEnchere: number = 0, acheteur?: Acheteur) {
        super(annee, titre, acheteur, meilleureEnchere);
        this._matiere = matiere;
    }

    get matiere(): string {
        return this._matiere;
    }

    set matiere(value: string) {
        this._matiere = value;
    }
}