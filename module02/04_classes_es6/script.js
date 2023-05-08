class Livre {
    #titre;
    #sous_titre;
    #annee;
    #auteur;

    constructor(titre, sous_titre, annee, auteur) {
        this.#titre = titre;
        this.#sous_titre = sous_titre;
        this.#annee = annee;
        this.#auteur = auteur;
    }

    getDescription() {
        return `${this.#titre} a été écrit par ${this.#auteur} en ${this.#annee}`;
    }
}

const livre5 = new Livre("Explorer Kaamelott", "Les dessous de la table ronde", 2021, "Clément Pelissier");
console.dir(livre5);
console.log(livre5.getDescription());