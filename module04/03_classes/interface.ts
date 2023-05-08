import {Sport} from "./classe";

export interface Jouable {
    score?: string;

    jouer(joueur1: string, joueur2: string): string;
}

class SportJouable extends Sport implements Jouable {
    jouer(joueur1: string, joueur2: string): string {
        let vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        return vainqueur;
    }
}

let badminton: Jouable = new SportJouable("Badminton", "Un sport fatigant");
console.log("Le vainqueur est : " + badminton.jouer("Batman", "Superman"));

export interface jouer {
    (joueur1: string, joueur2: string): string
}

let jouerAuBadminton: jouer = function (joueur1: string, joueur2: string): string {
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1;
}
console.log("Le vainqueur est " + jouerAuBadminton("Thierry", "Anthony"));