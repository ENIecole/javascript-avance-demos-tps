import {Acheteur} from "../Acheteur";

export interface Vendable {

    meilleureEnchere?:number;
    acheteur?: Acheteur;

    encherir(
        nouvelleEnchere:number,
        acheteur: Acheteur
    ):void;
}