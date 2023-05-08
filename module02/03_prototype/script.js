function Livre(titre, sous_titre, annee, auteur) {
    this.titre = titre;
    this.sous_titre = sous_titre;
    this.annee = annee;
    this.auteur = auteur;
}

Livre.prototype.getDescription = function () {
    return `${this.titre} à été écrit par ${this.auteur} en ${this.annee}`;
}

const livre3 = new Livre("Les visions de Dune", "Dans les creux et sillons d'Arrakis", 2020, "Vivien LeJeune");
console.table(livre3);
console.log(livre3.getDescription());

const LivrePrototype = {
    getDescription: function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

const livre4 = Object.create(LivrePrototype);
livre4.titre = "Uncharted";
livre4.sous_titre = "Journal d'un explorateur";
livre4.annee = 2018;
livre4.auteur = "Bruno Provezza";

const livre4bis = Object.create(LivrePrototype, {
    titre: {value: "Uncharted"},
    sous_titre: {value: "Journal d'un explorateur"},
    annee: {value: 2018},
    auteur: {value: "Bruno Provezza"}
});

console.table(livre4);
console.table(livre4bis);
console.log(livre4.getDescription());