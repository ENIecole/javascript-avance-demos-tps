import {Vendable} from "../Interfaces/Vendable";
import {Affichable} from "../Interfaces/Affichable";
import {Acheteur} from "../Acheteur";

export abstract class Oeuvre implements Vendable, Affichable {
    private _annee: number;
    private _titre: string;
    private _acheteur: Acheteur;
    private _meilleureEnchere: number;

    constructor(annee: number, titre: string, acheteur: Acheteur, meilleureEnchere: number) {
        this._annee = annee;
        this._titre = titre;
        this._acheteur = acheteur;
        this._meilleureEnchere = meilleureEnchere;
    }

    get annee(): number {
        return this._annee;
    }

    set annee(value: number) {
        this._annee = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get acheteur(): Acheteur {
        return this._acheteur;
    }

    set acheteur(value: Acheteur) {
        this._acheteur = value;
    }

    get meilleureEnchere(): number {
        return this._meilleureEnchere;
    }

    set meilleureEnchere(value: number) {
        this._meilleureEnchere = value;
    }

    public afficher(): string {
        return "Meilleure enchere : " + this.meilleureEnchere;
    }

    public encherir(nouvelleEnchere: number, acheteur: Acheteur): void {
        if (acheteur !== this.acheteur && nouvelleEnchere > this.meilleureEnchere) {
            this.acheteur = acheteur;
            this.meilleureEnchere = nouvelleEnchere;
        }
    }

}