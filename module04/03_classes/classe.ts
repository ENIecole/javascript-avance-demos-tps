export class Sport {
    public nom: string;
    private prive: string;

    constructor(nom: string, public description: string) {
        this.nom = nom;
        this.prive = "valeur cachée";
    }

    public afficher(): void {
        console.log(`${this.nom} - ${this.description}`);
    }
}

let squash: Sport = new Sport("Squash", "Un sport de raquette")
squash.afficher();